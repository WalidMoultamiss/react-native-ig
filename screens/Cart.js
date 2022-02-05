import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

const Cart = ({ navigation }) => {
  const MyDeliviries = [
    {
      name: "Hassan markiz",
      phone: "06 66 65 06 96",
      image: "https://i.pravatar.cc/300?img=4",
      rating: 4,
    },
    {
      name: "Ismail Announ",
      phone: "07 07 95 43 67",
      image: "https://i.pravatar.cc/300?img=5",
      rating: 4,
    },
    {
      name: "Hassan markiz",
      phone: "06 66 65 06 96",
      image: "https://i.pravatar.cc/300?img=4",
      rating: 4,
    },
  ];

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
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          Mes livraisons
        </Text>
        {MyDeliviries.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: "#000",
                borderColor: "#fff",
                borderWidth: 1,
                boxShadow: "0px 0px 10px #fff",
              }}
              
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
                source={{
                  uri: item.image,
                }}
              />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  marginTop: 10,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  marginTop: 10,
                }}
              >
                {item.phone}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
