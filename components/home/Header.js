import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => console.log("clicked")}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/logo_header.webp")}
        />
        <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
          Instagram
        </Text>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
            onPress={()=>navigation.navigate('Add')}
        >
          <Image style={styles.logo} source={require("../../assets/add.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../assets/heart.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("clicked")}>
          <View style={styles.badge}>
            <Text style={styles.text}>22</Text>
          </View>
          <Image
            style={styles.logo}
            source={require("../../assets/messenger.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  container: {
    position: "absolute",
    zIndex: 999,
    backgroundColor: "black",
    top: "5%",
    left: 0,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  logo: {
    width: 28,
    height: 35,
    marginLeft: 10,
    resizeMode: "contain",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    paddingHorizontal: 15,
    backgroundColor: "red",
    zIndex: 100,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default Header;
