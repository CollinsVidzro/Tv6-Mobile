import { ThemedView } from "@/components/themed-view";
import { StatusBar } from "expo-status-bar";
import VideoPlayer from "@/components/VideoPlayer";
import { StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import { commonStyles } from "@/styles/commonStyles";
import { useLocalSearchParams } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { useNavigation } from "@react-navigation/native";

export default function VideoPlayerScreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();

  // Parse the item from params
  const item = params.item
    ? JSON.parse(params.item as string)
    : {
        stream_url:
          "https://tv6.streamhubafrica.com/memfs/8de922ea-1c70-4f89-8c6a-510a245da2c8.m3u8",
        thumbnail_url: "../assets/images/tv6-logo.png",
      };

  // Lock orientation to portrait when component mounts
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

    return () => {
      // Reset orientation when component unmounts
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header */}
      <View style={[styles.header, { backgroundColor: "#0d3061" }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} size={24} color="#fff" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>TV6 Ghana</ThemedText>
        <View style={{ width: 40 }} />
      </View>

      <StatusBar 
        style="light" 
        backgroundColor="#0d3061"
      />

      <View style={{ flex: 1 }}>
        <ThemedView style={commonStyles.containerBlack}>
          <VideoPlayer item={item} />
        </ThemedView>
      </View>
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
});
