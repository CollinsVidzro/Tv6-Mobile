import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
  Platform,
} from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { HugeiconsIcon } from "@hugeicons/react-native";
import {
  Mail01Icon,
  Call02Icon,
  Globe02Icon,
  ArrowLeft02Icon,
  Facebook01Icon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { useNavigation } from "expo-router";

export default function ContactScreen() {
  const navigation = useNavigation();

  const handleEmail = () => {
    Linking.openURL("mailto:support@tv6ghana.com");
  };

  const handlePhone = () => {
    Linking.openURL("tel:+233244810339");
  };

  const handleWebsite = () => {
    Linking.openURL("https://tv6ghana.com");
  };

  const handleSocialMedia = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: "https://facebook.com/tv6ghana",
      twitter: "https://twitter.com/tv6ghana",
      instagram: "https://instagram.com/tv6ghana",
      youtube: "https://youtube.com/tv6ghana",
    };

    if (urls[platform]) {
      Linking.openURL(urls[platform]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header */}
      <View style={[styles.header, { backgroundColor: "#246fb5" }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} size={24} color="#fff" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Contact Us</ThemedText>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <ThemedView style={styles.container}>
          {/* Header Icon */}
          <View style={styles.headerSection}>
            <View style={styles.iconContainer}>
              <HugeiconsIcon icon={Call02Icon} size={60} color="#0a7ea4" />
            </View>
            <ThemedText style={styles.title}>Get In Touch</ThemedText>
            <ThemedText style={styles.subtitle}>
              We&apos;d love to hear from you. Reach out through any of these
              channels.
            </ThemedText>
          </View>

          {/* Contact Methods */}
          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>
              Contact Information
            </ThemedText>

            <View style={styles.sectionSpacer} />

            <TouchableOpacity
              style={styles.contactCard}
              onPress={handleEmail}
              activeOpacity={0.7}
            >
              <View style={styles.contactIcon}>
                <HugeiconsIcon icon={Mail01Icon} size={24} color="#fff" />
              </View>
              <View style={styles.contactContent}>
                <ThemedText style={styles.contactLabel}>Email</ThemedText>
                <ThemedText style={styles.contactValue}>
                  info@tv6ghana.com
                </ThemedText>
              </View>
              <View style={styles.arrowContainer}>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={20}
                  color="#0a7ea4"
                  style={styles.arrowIcon}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.cardSpacer} />

            <TouchableOpacity
              style={styles.contactCard}
              onPress={handlePhone}
              activeOpacity={0.7}
            >
              <View style={styles.contactIcon}>
                <HugeiconsIcon icon={Call02Icon} size={24} color="#fff" />
              </View>
              <View style={styles.contactContent}>
                <ThemedText style={styles.contactLabel}>Phone</ThemedText>
                <ThemedText style={styles.contactValue}>
                  +233 244 810 339
                </ThemedText>
              </View>
              <View style={styles.arrowContainer}>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={20}
                  color="#0a7ea4"
                  style={styles.arrowIcon}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.cardSpacer} />

            <TouchableOpacity
              style={styles.contactCard}
              onPress={handleWebsite}
              activeOpacity={0.7}
            >
              <View style={styles.contactIcon}>
                <HugeiconsIcon icon={Globe02Icon} size={24} color="#fff" />
              </View>
              <View style={styles.contactContent}>
                <ThemedText style={styles.contactLabel}>Website</ThemedText>
                <ThemedText style={styles.contactValue}>
                  tv6ghana.com
                </ThemedText>
              </View>
              <View style={styles.arrowContainer}>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={20}
                  color="#0a7ea4"
                  style={styles.arrowIcon}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Social Media */}
          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Follow Us</ThemedText>

            <View style={styles.sectionSpacer} />

            <View style={styles.socialContainer}>
              <TouchableOpacity
                style={styles.socialButton}
                activeOpacity={0.7}
                onPress={() => handleSocialMedia("facebook")}
              >
                <View style={styles.socialIconContainer}>
                  <HugeiconsIcon
                    icon={Facebook01Icon}
                    size={28}
                    color="#1877F2"
                  />
                </View>
                <ThemedText style={styles.socialText}>Facebook</ThemedText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                activeOpacity={0.7}
                onPress={() => handleSocialMedia("twitter")}
              >
                <View style={styles.socialIconContainer}>
                  <HugeiconsIcon icon={TwitterIcon} size={28} color="#1DA1F2" />
                </View>
                <ThemedText style={styles.socialText}>Twitter</ThemedText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                activeOpacity={0.7}
                onPress={() => handleSocialMedia("instagram")}
              >
                <View style={styles.socialIconContainer}>
                  <HugeiconsIcon
                    icon={InstagramIcon}
                    size={28}
                    color="#E4405F"
                  />
                </View>
                <ThemedText style={styles.socialText}>Instagram</ThemedText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                activeOpacity={0.7}
                onPress={() => handleSocialMedia("youtube")}
              >
                <View style={styles.socialIconContainer}>
                  <HugeiconsIcon icon={YoutubeIcon} size={28} color="#FF0000" />
                </View>
                <ThemedText style={styles.socialText}>YouTube</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </ThemedView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 50 : 40,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1d5a9c",
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
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#f0f4ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 32,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  sectionSpacer: {
    height: 16,
  },
  contactCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#f8f9ff",
    borderWidth: 1,
    borderColor: "#e6e9ff",
  },
  cardSpacer: {
    height: 12,
  },
  contactIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    backgroundColor: "#0a7ea4",
  },
  contactContent: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  arrowContainer: {
    padding: 8,
  },
  arrowIcon: {
    transform: [{ rotate: "180deg" }],
  },
  socialContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  socialButton: {
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#f8f9ff",
    borderWidth: 1,
    borderColor: "#e6e9ff",
    marginBottom: 12,
  },
  socialIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  socialText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});