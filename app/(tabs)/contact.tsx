import { ScrollView, StyleSheet, TouchableOpacity, View, Linking } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ContactScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleEmail = () => {
    Linking.openURL('mailto:support@tv6.com');
  };

  const handlePhone = () => {
    Linking.openURL('tel:+233000000000');
  };

  const handleWebsite = () => {
    Linking.openURL('https://tv6.streamhubafrica.com');
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={[styles.iconContainer, { backgroundColor: isDark ? '#1a1a2e' : '#f0f4ff' }]}>
            <IconSymbol 
              name="phone.fill" 
              size={50} 
              color={Colors[colorScheme ?? 'light'].tint} 
            />
          </View>
          <ThemedText style={styles.title}>Get In Touch</ThemedText>
          <ThemedText style={styles.subtitle}>
            We&apos;d love to hear from you
          </ThemedText>
        </View>

        {/* Contact Methods */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Contact Information</ThemedText>

          <TouchableOpacity 
            style={[styles.contactCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}
            onPress={handleEmail}
            activeOpacity={0.7}
          >
            <View style={[styles.contactIcon, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
              <IconSymbol name="paperplane.fill" size={24} color="#fff" />
            </View>
            <View style={styles.contactContent}>
              <ThemedText style={styles.contactLabel}>Email</ThemedText>
              <ThemedText style={styles.contactValue}>support@tv6.com</ThemedText>
            </View>
            <IconSymbol 
              name="chevron.right" 
              size={20} 
              color={Colors[colorScheme ?? 'light'].tint} 
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.contactCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}
            onPress={handlePhone}
            activeOpacity={0.7}
          >
            <View style={[styles.contactIcon, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
              <IconSymbol name="phone.fill" size={24} color="#fff" />
            </View>
            <View style={styles.contactContent}>
              <ThemedText style={styles.contactLabel}>Phone</ThemedText>
              <ThemedText style={styles.contactValue}>+233 000 000 000</ThemedText>
            </View>
            <IconSymbol 
              name="chevron.right" 
              size={20} 
              color={Colors[colorScheme ?? 'light'].tint} 
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.contactCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}
            onPress={handleWebsite}
            activeOpacity={0.7}
          >
            <View style={[styles.contactIcon, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
              <IconSymbol name="house.fill" size={24} color="#fff" />
            </View>
            <View style={styles.contactContent}>
              <ThemedText style={styles.contactLabel}>Website</ThemedText>
              <ThemedText style={styles.contactValue}>tv6.streamhubafrica.com</ThemedText>
            </View>
            <IconSymbol 
              name="chevron.right" 
              size={20} 
              color={Colors[colorScheme ?? 'light'].tint} 
            />
          </TouchableOpacity>
        </View>

        {/* Office Hours */}
        <View style={[styles.section, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
          <ThemedText style={styles.sectionTitle}>Support Hours</ThemedText>
          <View style={styles.hoursContainer}>
            <View style={styles.hoursRow}>
              <ThemedText style={styles.hoursDay}>Monday - Friday</ThemedText>
              <ThemedText style={styles.hoursTime}>9:00 AM - 6:00 PM</ThemedText>
            </View>
            <View style={styles.hoursRow}>
              <ThemedText style={styles.hoursDay}>Saturday</ThemedText>
              <ThemedText style={styles.hoursTime}>10:00 AM - 4:00 PM</ThemedText>
            </View>
            <View style={styles.hoursRow}>
              <ThemedText style={styles.hoursDay}>Sunday</ThemedText>
              <ThemedText style={styles.hoursTime}>Closed</ThemedText>
            </View>
          </View>
        </View>

        {/* FAQ Section */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Quick Help</ThemedText>
          
          <View style={[styles.faqCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
            <ThemedText style={styles.faqQuestion}>How do I watch live TV?</ThemedText>
            <ThemedText style={styles.faqAnswer}>
              Simply tap the &quot;Watch Live TV&quot; button on the home screen to start streaming.
            </ThemedText>
          </View>

          <View style={[styles.faqCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
            <ThemedText style={styles.faqQuestion}>Is the stream free?</ThemedText>
            <ThemedText style={styles.faqAnswer}>
              Yes! TV6 offers free live streaming to all users.
            </ThemedText>
          </View>

          <View style={[styles.faqCard, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}>
            <ThemedText style={styles.faqQuestion}>What quality is the stream?</ThemedText>
            <ThemedText style={styles.faqAnswer}>
              We stream in HD quality for the best viewing experience.
            </ThemedText>
          </View>
        </View>

        {/* Social Media */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Follow Us</ThemedText>
          <View style={styles.socialContainer}>
            <TouchableOpacity 
              style={[styles.socialButton, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}
              activeOpacity={0.7}
            >
              <ThemedText style={styles.socialText}>Facebook</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.socialButton, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}
              activeOpacity={0.7}
            >
              <ThemedText style={styles.socialText}>Twitter</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.socialButton, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9ff' }]}
              activeOpacity={0.7}
            >
              <ThemedText style={styles.socialText}>Instagram</ThemedText>
            </TouchableOpacity>
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
    marginBottom: 16,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  contactIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactContent: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  hoursContainer: {
    gap: 12,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hoursDay: {
    fontSize: 15,
    fontWeight: '500',
  },
  hoursTime: {
    fontSize: 15,
    opacity: 0.7,
  },
  faqCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    opacity: 0.7,
    lineHeight: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  socialText: {
    fontSize: 14,
    fontWeight: '600',
  },
});