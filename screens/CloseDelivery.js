import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

const CloseDelivery = ({ navigation }) => {
  
  useEffect(() => {
    const interval = setInterval(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  //onLoad Page useEffect
  const [lottie, setLottie] = useState(
    <LottieView
      autoPlay
      loop
      source={require("../assets/livraison.json")}
      style={{
        width: 400,
        height: 400,
      }}
    />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        {lottie}
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "#FF8C00",
            borderRadius: 10,
            marginTop: 20,
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Ok
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CloseDelivery;

const styles = StyleSheet.create({});
