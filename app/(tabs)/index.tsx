//import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { router } from 'expo-router';
export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleWatchLive = () => {
    //navigate to the player.tsx in apps 
    router.push('/player');
  };

  return (
    <ThemedView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.logoContainer}>
          <View style={[styles.logoCircle, { backgroundColor: isDark ? '#1a1a2e' : '#f0f4ff' }]}>
            <IconSymbol 
              name="paperplane.fill" 
              size={60} 
              color={Colors[colorScheme ?? 'light'].tint} 
            />
          </View>
        </View>

        <ThemedText style={styles.title}>TV6 Live Stream</ThemedText>
        <ThemedText style={styles.subtitle}>
          Watch your favorite shows live, anytime, anywhere
        </ThemedText>

        {/* Live Indicator */}
        <View style={styles.liveIndicator}>
          <View style={styles.liveDot} />
          <ThemedText style={styles.liveText}>LIVE NOW</ThemedText>
        </View>

        {/* Watch Button */}
        <TouchableOpacity 
          style={[styles.watchButton, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}
          onPress={handleWatchLive}
          activeOpacity={0.8}
        >
          <IconSymbol name="paperplane.fill" size={24} color="#fff" />
          <ThemedText style={styles.watchButtonText}>Watch Live TV</ThemedText>
        </TouchableOpacity>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <ThemedText style={styles.statNumber}>1,234</ThemedText>
            <ThemedText style={styles.statLabel}>Watching Now</ThemedText>
          </View>
          <View style={[styles.statDivider, { backgroundColor: isDark ? '#333' : '#e0e0e0' }]} />
          <View style={styles.statBox}>
            <ThemedText style={styles.statNumber}>24/7</ThemedText>
            <ThemedText style={styles.statLabel}>Always Live</ThemedText>
          </View>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <ThemedText style={styles.sectionTitle}>Features</ThemedText>
        
        <View style={styles.featureGrid}>
          <View style={[styles.featureCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
            <IconSymbol name="paperplane.fill" size={32} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText style={styles.featureTitle}>HD Quality</ThemedText>
            <ThemedText style={styles.featureDesc}>Crystal clear streaming</ThemedText>
          </View>

          <View style={[styles.featureCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
            <IconSymbol name="house.fill" size={32} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText style={styles.featureTitle}>24/7 Access</ThemedText>
            <ThemedText style={styles.featureDesc}>Watch anytime</ThemedText>
          </View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroSection: {
    padding: 24,
    alignItems: 'center',
    paddingTop: 60,
  },
  logoContainer: {
    marginBottom: 24,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 24,
    paddingHorizontal: 32,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff4444',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 24,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginRight: 8,
  },
  liveText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  watchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 32,
  },
  watchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.6,
  },
  statDivider: {
    width: 1,
    height: 40,
  },
  featuresSection: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  featureGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  featureCard: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 12,
    opacity: 0.6,
    textAlign: 'center',
  },
});