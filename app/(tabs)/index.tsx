import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { HugeiconsIcon } from "@hugeicons/react-native";
import {
  Tv01Icon,
  InformationCircleIcon as InfoCircleIcon,
} from "@hugeicons/core-free-icons";
import { router } from "expo-router";

export default function HomeScreen() {
  const handleWatchLive = () => {
    router.push("/player");
  };

  const handleAbout = () => {
    router.push("/about");
  };

  return (
    <ThemedView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            {/* Replace icon with TV6 logo */}
            <Image 
              source={require("@/assets/images/tv6-logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>
        <ThemedText style={styles.title}>TV6 Ghana</ThemedText>
        <ThemedText style={styles.subtitle}>
          Discover the unseen
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
            <HugeiconsIcon 
              icon={Tv01Icon} 
              size={24} 
              color="#0a7ea4" 
            />
            <ThemedText style={styles.watchButtonText}>
              Watch Live TV
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.aboutButton}
            onPress={handleAbout}
            activeOpacity={0.8}
          >
            <HugeiconsIcon 
              icon={InfoCircleIcon} 
              size={24} 
              color="#fff" 
            />
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
        
        {/* Footer Text */}
        <View style={styles.footerContainer}>
          <ThemedText style={styles.footerText}>
            © 2026 TV6 Ghana. All rights reserved.
          </ThemedText>
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
    flex: 0.4,
  },
  logoContainer: {
    marginBottom: 24,
  },
  logoCircle: {
    width: 130,
    height: 130,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4ff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#1a1a1a",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginBottom: 24,
    paddingHorizontal: 32,
    fontStyle: "italic",
  },
  blueSection: {
    flex: 0.6,
    backgroundColor: "#246fb5",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 40,
    justifyContent: "space-between",
    paddingBottom: 30,
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
    paddingVertical: 18,
    borderRadius: 16,
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  watchButtonText: {
    color: "#246fb5",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 12,
  },
  aboutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 16,
    width: "100%",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  aboutButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 12,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    marginHorizontal: 32,
    paddingVertical: 24,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  statLabel: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "500",
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  footerContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "center",
  },
});