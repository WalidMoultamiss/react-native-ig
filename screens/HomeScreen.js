import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/home/Header.js";
import Stories from "../components/home/Stories.js";
import Post from "../components/home/Post/index.js";
import { posts } from "../data/posts.js";
import BottomTabs, { BottomTabsIcons } from "../components/BottomTabs.js";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <Stories />
        {posts.map((post, idx) => (
          <Post key={idx} post={post} />
        ))}
      </ScrollView>
      <BottomTabs navigation={navigation} icons={BottomTabsIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 60,
    paddingBottom: 50,
  },
});

export default HomeScreen;
