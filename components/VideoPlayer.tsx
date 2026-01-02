import { Colors } from "@/utils/Constants";
import { FC, useState, useEffect } from "react";
import { View, Image, ActivityIndicator, useWindowDimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import ScalePress from "./ui/ScalePress";
import { interactionStyles } from "@/styles/interactionStyles";
import { VideoView, useVideoPlayer } from "expo-video";

interface StreamItem {
  thumbnail_url?: string;
  stream_url?: string;
}

const STREAM_URL =
  "https://tv6.streamhubafrica.com/memfs/8de922ea-1c70-4f89-8c6a-510a245da2c8.m3u8";

const VideoPlayer: FC<{ item: StreamItem }> = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen] = useState(false);
  const { height, width } = useWindowDimensions();

  // Use expo-video player
  const player = useVideoPlayer(item?.stream_url || STREAM_URL, (player) => {
    player.loop = false;
    player.play();
  });

  // Handle player status changes
  useEffect(() => {
    const subscription = player.addListener("statusChange", (event) => {
      const status = event.status;

      if (status === "readyToPlay") {
        setIsLoaded(true);
        setIsBuffering(false);
        setHasError(false);
      } else if (status === "loading") {
        setIsBuffering(true);
      } else if (status === "error") {
        setIsBuffering(false);
        setHasError(true);
        setIsLoaded(false);
      } else if (status === "idle") {
        setIsBuffering(false);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [player]);


  const handlePlayPress = () => {
    if (hasError) {
      // Retry loading
      player.replace(item?.stream_url || STREAM_URL);
      player.play();
      setHasError(false);
      setIsBuffering(true);
    } else {
      player.play();
      setIsLoaded(true);
    }
  };


  // Use full screen dimensions when in fullscreen mode
  const videoContainerStyle = isFullscreen 
    ? { width: width, height: height, backgroundColor: '#0000' }
    : interactionStyles.videoContainer;
    
  const videoStyle = isFullscreen 
    ? { width: width, height: height }
    : interactionStyles.video;
    
  const imageOverlayStyle = isFullscreen 
    ? { width: width, height: height, position: 'absolute' as const, zIndex: 1 }
    : interactionStyles.imageOverlay;

  return (
    <View style={videoContainerStyle}>
      {/* Video Player */}
      <VideoView
        style={videoStyle}
        player={player}
        allowsFullscreen={true}
        nativeControls={true}
        contentFit="contain"
        allowsPictureInPicture={true}
      />

      {/* Thumbnail overlay when not loaded */}
      {!isLoaded && item?.thumbnail_url && (
        <Image
          source={{ uri: item.thumbnail_url }}
          style={imageOverlayStyle}
          resizeMode="cover"
        />
      )}

      {/* Loading/Buffering Indicator */}
      {isBuffering && (
        <View style={[
          interactionStyles.loadingContainer,
          isFullscreen && { width: width, height: height }
        ]}>
          <ActivityIndicator size="large" color={Colors.theme || '#fff'} />
        </View>
      )}

      {/* Play button overlay for thumbnail */}
      {!isLoaded && !isBuffering && !hasError && (
        <ScalePress
          style={isFullscreen ? interactionStyles.fullPlayIcon : interactionStyles.playIcon}
          onPress={handlePlayPress}
        >
          <Ionicons
            name="play-circle"
            size={isFullscreen ? RFValue(60) : RFValue(40)}
            color={Colors.theme || '#fff'}
          />
        </ScalePress>
      )}

      {/* Error State */}
      {hasError && (
        <View style={[
          interactionStyles.errorContainer,
          isFullscreen && { width: width, height: height }
        ]}>
          <Ionicons name="alert-circle" size={RFValue(40)} color="#ff4444" />
          <ScalePress
            style={interactionStyles.retryButton}
            onPress={handlePlayPress}
          >
            <Ionicons name="refresh" size={RFValue(20)} color="#fff" />
          </ScalePress>
        </View>
      )}
    </View>
  );
};

export default VideoPlayer;