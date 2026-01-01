import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { router } from "expo-router";

export default function HomeScreen() {
  const handleWatchLive = () => {
    router.push("/player");
  };

  const handleAbout = () => {
    // You can add navigation to about page here
    router.push("/about");
  };

  return (
    <ThemedView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <IconSymbol name="paperplane.fill" size={60} color="#0a7ea4" />
          </View>
        </View>
        <ThemedText style={styles.title}>TV6 Ghana</ThemedText>
        <ThemedText style={styles.subtitle}>
          Watch your favorite shows live, anytime, anywhere
        </ThemedText>
      </View>

      {/* Blue Background Section with Rounded-xl Top */}
      <View style={styles.blueSection}>
        {/* Buttons Container */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.watchButton}
            onPress={handleWatchLive}
            activeOpacity={0.8}
          >
            <IconSymbol name="play.fill" size={24} color="#0a7ea4" />
            <ThemedText style={styles.watchButtonText}>
              Watch Live TV
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.aboutButton}
            onPress={handleAbout}
            activeOpacity={0.8}
          >
            <IconSymbol name="info.circle.fill" size={24} color="#fff" />
            <ThemedText style={styles.aboutButtonText}>About</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <ThemedText style={styles.statNumber}>1,234</ThemedText>
            <ThemedText style={styles.statLabel}>Watching Now</ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <ThemedText style={styles.statNumber}>24/7</ThemedText>
            <ThemedText style={styles.statLabel}>Always Live</ThemedText>
          </View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoSection: {
    padding: 24,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#fff",
    flex: 0.4, // Takes about 40% of screen
  },
  logoContainer: {
    marginBottom: 24,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4ff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 24,
    paddingHorizontal: 32,
  },
  blueSection: {
    flex: 0.6, // Takes about 60% of screen
    backgroundColor: "#246fb5",
    borderTopLeftRadius: 40, // Rounded-xl equivalent (12px in Tailwind)
    borderTopRightRadius: 40, // Rounded-xl equivalent (12px in Tailwind)
    paddingTop: 40,
    justifyContent: "center",
  },
  buttonsContainer: {
    alignItems: "center",
    paddingHorizontal: 32,
    marginBottom: 40,
  },
  watchButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12, // Rounded-xl for buttons too
    marginBottom: 16,
    width: "100%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  watchButtonText: {
    color: "#246fb5",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 12,
  },
  aboutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12, // Rounded-xl for buttons
    width: "100%",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  aboutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 12,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginHorizontal: 32,
    paddingVertical: 20,
    borderRadius: 16,
    marginTop: 20,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },
  statLabel: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.85)",
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
});