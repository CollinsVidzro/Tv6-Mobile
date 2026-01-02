import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { HugeiconsIcon } from "@hugeicons/react-native";
import {
  InformationCircleIcon,
  // PlayCircleIcon,
  MusicNote02Icon,
  Film01Icon,
  Mic01Icon,
  UserMultiple02Icon,
  FavouriteCircleIcon,
  // Clock01Icon,
  Globe02Icon,
  Award01Icon,
  Home01Icon,
  StarIcon,
  VideoIcon,
  LaughingIcon,
  ChatIcon,
  ArrowLeft02Icon,
} from "@hugeicons/core-free-icons";
import { useNavigation } from "expo-router";

export default function AboutScreen() {
  const navigation = useNavigation();

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
        <ThemedText style={styles.headerTitle}>About TV6 Ghana</ThemedText>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.container}>
          {/* Header Icon */}
          <View style={styles.headerSection}>
            <View style={styles.iconContainer}>
              <HugeiconsIcon
                icon={InformationCircleIcon}
                size={50}
                color="#246fb5"
              />
            </View>
            <ThemedText style={styles.subtitle}>
              Capturing the soul of Ghanaian entertainment
            </ThemedText>
          </View>

          {/* Hero Description */}
          <View style={styles.heroSection}>
            <View style={styles.quoteIcon}>
              <HugeiconsIcon
                icon={FavouriteCircleIcon}
                size={24}
                color="#246fb5"
              />
            </View>
            <ThemedText style={styles.heroText}>
              TV6 brings you non-stop excitement with a rich blend of Films,
              Music Videos, Dramas, Funny Skits, and Talk Shows — all crafted
              with the true Ghanaian spirit at heart. From laughter to
              inspiration, from culture to creativity, TV6 captures the soul of
              Ghanaian entertainment like no other.
            </ThemedText>
            <ThemedText style={styles.heroConclusion}>
              Tune in and feel at home — because TV6 is made for you, by you!
            </ThemedText>
          </View>

          {/* What We Offer */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <HugeiconsIcon icon={StarIcon} size={28} color="#246fb5" />
              <ThemedText style={styles.sectionTitle}>
                What We Bring You
              </ThemedText>
            </View>

            <View style={styles.offerGrid}>
              <View style={styles.offerCard}>
                <View
                  style={[styles.offerIcon, { backgroundColor: "#246fb5" }]}
                >
                  <HugeiconsIcon icon={Film01Icon} size={28} color="#fff" />
                </View>
                <ThemedText style={styles.offerTitle}>Films</ThemedText>
                <ThemedText style={styles.offerDesc}>
                  Latest Ghanaian movies
                </ThemedText>
              </View>

              <View style={styles.offerCard}>
                <View
                  style={[styles.offerIcon, { backgroundColor: "#246fb5" }]}
                >
                  <HugeiconsIcon
                    icon={MusicNote02Icon}
                    size={28}
                    color="#fff"
                  />
                </View>
                <ThemedText style={styles.offerTitle}>Music Videos</ThemedText>
                <ThemedText style={styles.offerDesc}>
                  Top Ghanaian hits
                </ThemedText>
              </View>

              <View style={styles.offerCard}>
                <View
                  style={[styles.offerIcon, { backgroundColor: "#246fb5" }]}
                >
                  <HugeiconsIcon icon={VideoIcon} size={28} color="#fff" />
                </View>
                <ThemedText style={styles.offerTitle}>Dramas</ThemedText>
                <ThemedText style={styles.offerDesc}>
                  Compelling stories
                </ThemedText>
              </View>

              <View style={styles.offerCard}>
                <View
                  style={[styles.offerIcon, { backgroundColor: "#246fb5" }]}
                >
                  <HugeiconsIcon icon={LaughingIcon} size={28} color="#fff" />
                </View>
                <ThemedText style={styles.offerTitle}>Funny Skits</ThemedText>
                <ThemedText style={styles.offerDesc}>
                  Comedy and laughter
                </ThemedText>
              </View>

              <View style={styles.offerCard}>
                <View
                  style={[styles.offerIcon, { backgroundColor: "#246fb5" }]}
                >
                  <HugeiconsIcon icon={Mic01Icon} size={28} color="#fff" />
                </View>
                <ThemedText style={styles.offerTitle}>Talk Shows</ThemedText>
                <ThemedText style={styles.offerDesc}>
                  Engaging discussions
                </ThemedText>
              </View>

              <View style={styles.offerCard}>
                <View
                  style={[styles.offerIcon, { backgroundColor: "#246fb5" }]}
                >
                  <HugeiconsIcon icon={ChatIcon} size={28} color="#fff" />
                </View>
                <ThemedText style={styles.offerTitle}>Live Events</ThemedText>
                <ThemedText style={styles.offerDesc}>
                  Real-time broadcasts
                </ThemedText>
              </View>
            </View>
          </View>

          {/* Our Values */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <HugeiconsIcon
                icon={FavouriteCircleIcon}
                size={28}
                color="#246fb5"
              />
              <ThemedText style={styles.sectionTitle}>
                Our Ghanaian Spirit
              </ThemedText>
            </View>
          </View>

          <View style={styles.valuesContainer}>
            <View style={styles.valueItem}>
              <View style={[styles.valueIcon, { backgroundColor: "#f0f4ff" }]}>
                <HugeiconsIcon icon={Home01Icon} size={24} color="#246fb5" />
              </View>
              <ThemedText style={styles.valueTitle}>Authentic</ThemedText>
              <ThemedText style={styles.valueDesc}>
                True Ghanaian content
              </ThemedText>
            </View>

            <View style={styles.valueItem}>
              <View style={[styles.valueIcon, { backgroundColor: "#f0f4ff" }]}>
                <HugeiconsIcon
                  icon={UserMultiple02Icon}
                  size={24}
                  color="#246fb5"
                />
              </View>
              <ThemedText style={styles.valueTitle}>Community</ThemedText>
              <ThemedText style={styles.valueDesc}>
                Made for you, by you
              </ThemedText>
            </View>

            <View style={styles.valueItem}>
              <View style={[styles.valueIcon, { backgroundColor: "#f0f4ff" }]}>
                <HugeiconsIcon icon={Globe02Icon} size={24} color="#246fb5" />
              </View>
              <ThemedText style={styles.valueTitle}>Cultural</ThemedText>
              <ThemedText style={styles.valueDesc}>
                Ghanaian heritage
              </ThemedText>
            </View>

            <View style={styles.valueItem}>
              <View style={[styles.valueIcon, { backgroundColor: "#f0f4ff" }]}>
                <HugeiconsIcon icon={Award01Icon} size={24} color="#246fb5" />
              </View>
              <ThemedText style={styles.valueTitle}>Quality</ThemedText>
              <ThemedText style={styles.valueDesc}>Premium content</ThemedText>
            </View>
          </View>

          {/* Final CTA */}
          <View style={styles.ctaSection}>
            <View style={styles.ctaIcon}>
              <HugeiconsIcon
                icon={FavouriteCircleIcon}
                size={40}
                color="#246fb5"
              />
            </View>
            <ThemedText style={styles.ctaText}>
              Experience the true spirit of Ghanaian entertainment
            </ThemedText>
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
    marginBottom: 32,
    marginTop: 10,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#f0f4ff",
    borderWidth: 1,
    borderColor: "#e6e9ff",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  heroSection: {
    backgroundColor: "#f8f9ff",
    padding: 24,
    borderRadius: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "#e6e9ff",
  },
  quoteIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e6e9ff",
  },
  heroText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
  },
  heroConclusion: {
    fontSize: 18,
    fontWeight: "600",
    color: "#246fb5",
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  offerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  offerCard: {
    width: "48%",
    backgroundColor: "#f8f9ff",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6e9ff",
    marginBottom: 12,
  },
  offerIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
  },
  offerDesc: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 18,
  },
  valuesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  valueItem: {
    width: "48%",
    backgroundColor: "#f8f9ff",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6e9ff",
    marginBottom: 12,
  },
  valueIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
  },
  valueDesc: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 18,
  },
  statsSection: {
    backgroundColor: "#f8f9ff",
    padding: 24,
    borderRadius: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "#e6e9ff",
  },
  statsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e6e9ff",
  },
  statNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  ctaSection: {
    backgroundColor: "#f0f4ff",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6e9ff",
  },
  ctaIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e6e9ff",
  },
  ctaText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#246fb5",
    textAlign: "center",
    lineHeight: 24,
  },
});
