import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function AboutScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={[styles.iconContainer, { backgroundColor: isDark ? '#1a1a2e' : '#f0f4ff' }]}>
            <IconSymbol 
              name="info.circle.fill" 
              size={50} 
              color={Colors[colorScheme ?? 'light'].tint} 
            />
          </View>
          <ThemedText style={styles.title}>About TV6</ThemedText>
          <ThemedText style={styles.subtitle}>
            Your trusted source for live entertainment
          </ThemedText>
        </View>

        {/* Mission Section */}
        <View style={[styles.section, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
          <ThemedText style={styles.sectionTitle}>Our Mission</ThemedText>
          <ThemedText style={styles.paragraph}>
            TV6 is dedicated to bringing quality live streaming content to viewers around the world. 
            We believe in the power of live television to connect, inform, and entertain audiences 
            everywhere, anytime.
          </ThemedText>
        </View>

        {/* What We Offer */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>What We Offer</ThemedText>
          
          <View style={styles.offerItem}>
            <View style={[styles.offerIcon, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
              <IconSymbol name="paperplane.fill" size={20} color="#fff" />
            </View>
            <View style={styles.offerContent}>
              <ThemedText style={styles.offerTitle}>24/7 Live Streaming</ThemedText>
              <ThemedText style={styles.offerDesc}>
                Continuous broadcasting with no interruptions
              </ThemedText>
            </View>
          </View>

          <View style={styles.offerItem}>
            <View style={[styles.offerIcon, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
              <IconSymbol name="house.fill" size={20} color="#fff" />
            </View>
            <View style={styles.offerContent}>
              <ThemedText style={styles.offerTitle}>HD Quality</ThemedText>
              <ThemedText style={styles.offerDesc}>
                Crystal clear video streaming in high definition
              </ThemedText>
            </View>
          </View>

          <View style={styles.offerItem}>
            <View style={[styles.offerIcon, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
              <IconSymbol name="phone.fill" size={20} color="#fff" />
            </View>
            <View style={styles.offerContent}>
              <ThemedText style={styles.offerTitle}>Multi-Platform</ThemedText>
              <ThemedText style={styles.offerDesc}>
                Watch on mobile, tablet, or any device
              </ThemedText>
            </View>
          </View>
        </View>

        {/* Our Story */}
        <View style={[styles.section, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
          <ThemedText style={styles.sectionTitle}>Our Story</ThemedText>
          <ThemedText style={styles.paragraph}>
            Founded with a vision to revolutionize live streaming, TV6 has grown to become 
            a trusted platform for thousands of viewers. We&apos;re committed to delivering the 
            best viewing experience with cutting-edge technology and reliable service.
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Our team works tirelessly to ensure that every broadcast meets the highest 
            standards of quality and reliability. We&apos;re more than just a streaming service 
            – we&apos;re your gateway to entertainment.
          </ThemedText>
        </View>

        {/* Stats */}
        <View style={styles.statsGrid}>
          <View style={[styles.statCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
            <ThemedText style={styles.statNumber}>10K+</ThemedText>
            <ThemedText style={styles.statLabel}>Active Users</ThemedText>
          </View>
          <View style={[styles.statCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
            <ThemedText style={styles.statNumber}>24/7</ThemedText>
            <ThemedText style={styles.statLabel}>Availability</ThemedText>
          </View>
          <View style={[styles.statCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
            <ThemedText style={styles.statNumber}>HD</ThemedText>
            <ThemedText style={styles.statLabel}>Quality</ThemedText>
          </View>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
    padding: 20,
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    opacity: 0.8,
    marginBottom: 12,
  },
  offerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  offerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  offerContent: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  offerDesc: {
    fontSize: 14,
    opacity: 0.6,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  statCard: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
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
    textAlign: 'center',
  },
});