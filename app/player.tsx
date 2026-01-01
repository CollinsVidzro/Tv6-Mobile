import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useEvent } from "expo";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useVideoPlayer, VideoView } from "expo-video";
import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";

const STREAM_URL =
  "https://tv6.streamhubafrica.com/memfs/8de922ea-1c70-4f89-8c6a-510a245da2c8.m3u8";

export default function VideoPlayerScreen() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [viewersCount] = useState(1234); // TODO: Connect to real API

  const player = useVideoPlayer(STREAM_URL, (player) => {
    player.loop = false;
    player.play();
  });

  // Use useEvent hook to get playing status properly
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  // Use useEvent hook to get player status
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { status, error } = useEvent(player, "statusChange", {
    status: player.status,
    error: undefined,
  });

  useEffect(() => {
    // Update loading state based on player status
    if (status === "readyToPlay" || status === "loading") {
      setIsLoading(false);
    } else if (status === "error") {
      setHasError(true);
      setIsLoading(false);
    }
  }, [status]);

  useEffect(() => {
    // Hide controls after 3 seconds if video is playing
    const timer = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [showControls, isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  const handleVideoTap = () => {
    setShowControls(true);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    player.replace(STREAM_URL);
    player.play();
  };

  const handleClose = () => {
    player.pause();
    router.back();
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar hidden />

      {/* Custom Header */}
      <View style={[styles.header, { backgroundColor: "#246fb5" }]}>
        <TouchableOpacity
          onPress={handleClose}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} size={24} color="#fff" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>TV6 Ghana</ThemedText>
        <View style={{ width: 40 }} /> {/* Spacer for alignment */}
      </View>

      {/* Video Player */}
      <View style={styles.videoContainer}>
        {!hasError ? (
          <>
            <VideoView
              style={styles.video}
              player={player}
              allowsFullscreen={true}
              allowsPictureInPicture={true}
              nativeControls={false}
              contentFit="contain"
              showsTimecodes={true}
              playsInline={Platform.OS !== "web"}
            />

            {/* Tap to show controls */}
            <TouchableOpacity
              style={styles.tapOverlay}
              activeOpacity={1}
              onPress={handleVideoTap}
            />

            {/* Loading Indicator */}
            {isLoading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator
                  size="large"
                  color={Colors[colorScheme ?? "light"].tint}
                />
                <ThemedText style={styles.loadingText}>
                  Loading stream...
                </ThemedText>
              </View>
            )}

            {/* Controls Overlay */}
            {showControls && !isLoading && (
              <View style={styles.controlsOverlay}>
                {/* Top Bar */}
                <View style={styles.topBar}>
                  {/* Live Indicator */}
                  <View style={styles.liveIndicator}>
                    <View style={styles.liveDot} />
                    <ThemedText style={styles.liveText}>LIVE</ThemedText>
                  </View>

                  {/* Viewer Count */}
                  <View style={styles.viewerBadge}>
                    <IconSymbol name="person.2.fill" size={14} color="#fff" />
                    <ThemedText style={styles.viewerText}>
                      {viewersCount.toLocaleString()} watching
                    </ThemedText>
                  </View>
                </View>

                {/* Center Play/Pause Button */}
                <TouchableOpacity
                  style={styles.centerControl}
                  onPress={handlePlayPause}
                >
                  <View style={styles.playPauseButton}>
                    <IconSymbol
                      name={isPlaying ? "pause.fill" : "play.fill"}
                      size={40}
                      color="#fff"
                    />
                  </View>
                </TouchableOpacity>

                {/* Bottom Bar */}
                <View style={styles.bottomBar}>
                  <ThemedText style={styles.streamTitle}>
                    TV6 Ghana Live
                  </ThemedText>
                  <ThemedText style={styles.streamDesc}>
                    Experience the best of Ghanaian entertainment 24/7
                  </ThemedText>
                </View>
              </View>
            )}
          </>
        ) : (
          // Error State
          <View style={styles.errorContainer}>
            <IconSymbol
              name="exclamationmark.circle.fill"
              size={64}
              color={Colors[colorScheme ?? "light"].tint}
            />
            <ThemedText style={styles.errorTitle}>Connection Error</ThemedText>
            <ThemedText style={styles.errorText}>
              Unable to load the live stream. Please check your connection and
              try again.
            </ThemedText>
            <TouchableOpacity
              style={[
                styles.retryButton,
                { backgroundColor: Colors[colorScheme ?? "light"].tint },
              ]}
              onPress={handleRetry}
            >
              <ThemedText style={styles.retryButtonText}>Retry</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backButtonError}
              onPress={handleClose}
            >
              <ThemedText
                style={[
                  styles.backButtonText,
                  { color: Colors[colorScheme ?? "light"].tint },
                ]}
              >
                Go Back
              </ThemedText>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 50 : 40,
    paddingBottom: 16,
    zIndex: 100,
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  tapOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#fff",
  },
  controlsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "space-between",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 60 : 20,
    paddingBottom: 16,
  },
  liveIndicator: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff4444",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#fff",
    marginRight: 6,
  },
  liveText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  viewerBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  viewerText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  centerControl: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playPauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },
  bottomBar: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  streamTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  streamDesc: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 12,
    color: "#fff",
  },
  errorText: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.7,
    marginBottom: 32,
    lineHeight: 24,
    color: "#fff",
  },
  retryButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    marginBottom: 16,
  },
  retryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  backButtonError: {
    paddingVertical: 12,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
