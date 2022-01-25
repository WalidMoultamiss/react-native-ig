import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Divider from "react-native-elements/src/Divider";

export const BottomTabsIcons = [
  {
    name: "home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/144/ffffff/home.png",
  },
  {
    name: "search",
    active:
      "https://img.icons8.com/fluency-systems-filled/144/ffffff/search.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/144/ffffff/search.png",
  },
  {
    name: "add",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/add.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/144/ffffff/add.png",
  },
  {
    name: "explore",
    active:
        "https://img.icons8.com/external-bearicons-glyph-bearicons/144/ffffff/external-Explore-social-media-bearicons-glyph-bearicons.png",
    inactive:
    "https://img.icons8.com/external-bearicons-glyph-bearicons/144/ffffff/external-Explore-social-media-bearicons-glyph-bearicons.png",
  },
  {
    name: "profile",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/user.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/144/ffffff/user.png",
  },
];

const BottomTabs = ({ icons , navigation }) => {
    
    const [activeTab, setActiveTab] = useState("home");
    const Icon = ({ icon }) => {
    return (
      <TouchableOpacity onPress={()=>{
          setActiveTab(icon.name);
          icon.name === 'add' ? navigation.navigate('Add') :
          icon.name === 'explore' ? navigation.navigate('Map') :
          null
          }}>
        <Image
          source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons?.map((icon, idx) => (
          <Icon key={idx} icon={icon} navigation={navigation} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
  wrapper:{
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 999,
    backgroundColor: "black",
  }
});

export default BottomTabs;
