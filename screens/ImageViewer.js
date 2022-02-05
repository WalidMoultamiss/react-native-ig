import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const ImageViewer = ({ route, navigation }) => {

  


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          justifyContent: "center",
          height: "10%",
          paddingHorizontal: 10,
        }}
      >
        <Icon
          name="close"
          type="material-community"
          color="#fff"
          size={40}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: "70%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "100%", height: "60%", borderRadius: 990 }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
            source={{ uri: route.params.image }}
          />
        </View>
      </View>
    </View>
  );
};

export default ImageViewer;

const styles = StyleSheet.create({});
