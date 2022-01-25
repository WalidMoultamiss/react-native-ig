import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { BlurView } from "expo-blur";
import * as Haptics from "expo-haptics";

import {
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

const Add = () => {
  const [hasPermission, setHasPermission] = useState({
    hasPermission: null,
    type: Camera.Constants.Type.back,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission((status = "granted"));
    })();
  }, []);

  const camera = useRef(null);
  //take a picture
  const takePicture = async () => {
    alert(photo);
    let photo = await camera.takePictureAsync();
    console.log(photo);
  };

  const [cameraType, setCameraType] = useState();

  const [handleCameraType, setHandleCameraType] = useState({
    cameraType:
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
  });

  if (hasPermission === null) {
    return <View />;
  } else if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          ref={camera}
          style={{ flex: 1 }}
          type={hasPermission.cameraType}
        >
          <BlurView
            intensity={100}
            tint="default"
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 25,
              paddingBottom: 30,
              position: "absolute",
              bottom: 0,
              width: "100%",
              left: 0,
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <FontAwesome
                name="image"
                style={{ color: "#fff", fontSize: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Haptics.selectionAsync()}
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <FontAwesome
                name="camera"
                style={{ color: "#fff", fontSize: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setHandleCameraType({ cameraType: "front" })}
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <MaterialCommunityIcons
                name="camera-switch"
                style={{ color: "#fff", fontSize: 30 }}
              />
            </TouchableOpacity>
          </BlurView>
        </Camera>
      </View>
    );
  }
};

export default Add;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "black",
    flex: 1,
  },
  cameraBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    zIndex: 999,
    borderRadius: 25,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
