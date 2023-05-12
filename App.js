import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";

const isAndroid = Platform.OS === "android";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchbar}
          />
        </View>
        <View style={styles.listContainer}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    padding: 8,
    justifyContent: "center",
  },
  searchbar: {
    borderRadius: 5,
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
