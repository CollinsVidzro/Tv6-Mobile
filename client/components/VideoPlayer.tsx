
import { Colors } from "@/utils/Constants";
import { FC, useState, useEffect } from "react";
import {
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import ScalePress from "./ui/ScalePress";
import { interactionStyles } from "@/styles/interactionStyles";
import { VideoView, useVideoPlayer } from "expo-video";

interface StreamItem {
  thumbnail_url?: string;
  stream_url?: string;
}

interface VideoPlayerProps {
  item: StreamItem;
}

const STREAM_URL =
  "https://tv6.streamhubafrica.com/memfs/8de922ea-1c70-4f89-8c6a-510a245da2c8.m3u8";

const VideoPlayer: FC<VideoPlayerProps> = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [hasError, setHasError] = useState(false);

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

  const handlePlayPress = async () => {
    if (hasError) {
      // Retry loading - use replaceAsync instead of replace
      try {
        setIsBuffering(true);
        setHasError(false);
        await player.replaceAsync(item?.stream_url || STREAM_URL);
        player.play();
      } catch (error) {
        console.error("Failed to load video:", error);
        setHasError(true);
        setIsBuffering(false);
      }
    } else {
      player.play();
      setIsLoaded(true);
    }
  };

  return (
    <View style={interactionStyles.videoContainer}>
      {/* Video Player */}
      <VideoView
        style={interactionStyles.video}
        player={player}
        nativeControls={true}
        contentFit="contain"
        allowsPictureInPicture={false}
      />

      {/* Thumbnail overlay when not loaded */}
      {!isLoaded && item?.thumbnail_url && (
        <Image
          source={{ uri: item.thumbnail_url }}
          style={interactionStyles.imageOverlay}
          resizeMode="cover"
        />
      )}

      {/* Loading/Buffering Indicator */}
      {isBuffering && (
        <View style={interactionStyles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.theme || "#ffffff"} />
        </View>
      )}

      {/* Play button overlay for thumbnail */}
      {!isLoaded && !isBuffering && !hasError && (
        <ScalePress
          style={interactionStyles.playIcon}
          onPress={handlePlayPress}
        >
          <Ionicons
            name="play-circle"
            size={RFValue(40)}
            color={Colors.theme || "#ffffff"}
          />
        </ScalePress>
      )}

      {/* Error State */}
      {hasError && (
        <View style={interactionStyles.errorContainer}>
          <Ionicons name="alert-circle" size={RFValue(40)} color="#ff4444" />
          <ScalePress
            style={interactionStyles.retryButton}
            onPress={handlePlayPress}
          >
            <Ionicons name="refresh" size={RFValue(20)} color="#ffffff" />
          </ScalePress>
        </View>
      )}
    </View>
  );
};

export default VideoPlayer;
