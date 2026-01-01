import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

const STREAM_URL = 'https://tv6.streamhubafrica.com/memfs/8de922ea-1c70-4f89-8c6a-510a245da2c8.m3u8';

export default function VideoPlayerScreen() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [viewerCount] = useState(1234); // TODO: Connect to real API

  const player = useVideoPlayer(STREAM_URL, player => {
    player.loop = false;
    player.play();
  });

  const isPlaying = player.playing;

  useEffect(() => {
    // Hide controls after 3 seconds
    const timer = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showControls, isPlaying]);

  useEffect(() => {
    // Listen to player status
    const subscription = player.addListener('statusChange', (status) => {
      if (status.status === 'readyToPlay' || status.status === 'playing') {
        setIsLoading(false);
      }
    });

    const errorSubscription = player.addListener('playbackError', () => {
      setHasError(true);
      setIsLoading(false);
    });

    // Start loading timeout
    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 10000);

    return () => {
      subscription.remove();
      errorSubscription.remove();
      clearTimeout(loadingTimeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

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
      
      {/* Video Player */}
      <View style={styles.videoContainer}>
        {!hasError ? (
          <>
            <VideoView
              style={styles.video}
              player={player}
              allowsFullscreen={false}
              allowsPictureInPicture={false}
              nativeControls={false}
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
                <ActivityIndicator size="large" color={Colors[colorScheme ?? 'light'].tint} />
                <ThemedText style={styles.loadingText}>Loading stream...</ThemedText>
              </View>
            )}

            {/* Controls Overlay */}
            {showControls && !isLoading && (
              <View style={styles.controlsOverlay}>
                {/* Top Bar */}
                <View style={styles.topBar}>
                  <TouchableOpacity 
                    style={styles.closeButton}
                    onPress={handleClose}
                  >
                    <IconSymbol name="chevron.right" size={28} color="#fff" />
                  </TouchableOpacity>
                  
                  <View style={styles.liveIndicator}>
                    <View style={styles.liveDot} />
                    <ThemedText style={styles.liveText}>LIVE</ThemedText>
                  </View>

                  <View style={styles.viewerBadge}>
                    <IconSymbol name="house.fill" size={16} color="#fff" />
                    <ThemedText style={styles.viewerText}>{viewerCount}</ThemedText>
                  </View>
                </View>

                {/* Center Play/Pause Button */}
                <TouchableOpacity 
                  style={styles.centerControl}
                  onPress={handlePlayPause}
                >
                  <View style={styles.playPauseButton}>
                    <IconSymbol 
                      name={isPlaying ? "house.fill" : "paperplane.fill"} 
                      size={40} 
                      color="#fff" 
                    />
                  </View>
                </TouchableOpacity>

                {/* Bottom Info */}
                <View style={styles.bottomBar}>
                  <ThemedText style={styles.streamTitle}>TV6 Live Stream</ThemedText>
                  <ThemedText style={styles.streamDesc}>Broadcasting Now</ThemedText>
                </View>
              </View>
            )}
          </>
        ) : (
          // Error State
          <View style={styles.errorContainer}>
            <IconSymbol 
              name="info.circle.fill" 
              size={64} 
              color={Colors[colorScheme ?? 'light'].tint} 
            />
            <ThemedText style={styles.errorTitle}>Connection Error</ThemedText>
            <ThemedText style={styles.errorText}>
              Unable to load the live stream. Please check your connection and try again.
            </ThemedText>
            <TouchableOpacity 
              style={[styles.retryButton, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}
              onPress={handleRetry}
            >
              <ThemedText style={styles.retryButtonText}>Retry</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleClose}
            >
              <ThemedText style={[styles.backButtonText, { color: Colors[colorScheme ?? 'light'].tint }]}>
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
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  tapOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#fff',
  },
  controlsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },
  closeButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 22,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fff',
    marginRight: 6,
  },
  liveText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  viewerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  viewerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  centerControl: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playPauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  bottomBar: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  streamTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  streamDesc: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 32,
    lineHeight: 24,
  },
  retryButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    marginBottom: 16,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  backButton: {
    paddingVertical: 12,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});