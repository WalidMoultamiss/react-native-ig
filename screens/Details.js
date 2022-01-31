import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Linking,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import Chat from "../components/bclick/Chat";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-elements";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Details = () => {
  dialCall = (tel) => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = `tel:${tel}`;
    } else {
      phoneNumber = `telprompt:${tel}`;
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <KeyboardAwareScrollView
        style={{
          flex: 1,
          backgroundColor: "#000",
          height: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "stretch",
            height: "100%",
          }}
        >
          <ScrollView vertical style={{ width: "100%" }}>
            <View
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/photos/deliveryMan.png")}
                style={{ width: 180, height: 180 }}
              />
            </View>
            <Text style={styles.textName}>Ismail Announ</Text>
            <View style={styles.rating}>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Image
                    key={index}
                    source={require("../assets/icons/star.png")}
                    style={styles.starRating}
                  />
                ))}
            </View>
            <View style={styles.containerCall}>
              <Text style={{ ...styles.text, fontSize: 28 }}>
                07 07 95 43 67
              </Text>
              <TouchableOpacity
                onPress={() => dialCall("0707954367")}
                style={{
                  padding: 7,
                  backgroundColor: "#FF8C00",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/call.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
            </View>
            <Divider
              style={{
                backgroundColor: "#FF8C00",
                width: "100%",
                marginTop: 30,
                marginBottom: 10,
              }}
            />
            <Chat />
          </ScrollView>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#000",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
          <TextInput style={styles.textInput} placeholder="Type your message" />
          <TouchableOpacity
            style={{
              padding: 7,
              width: 50,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FF8C00",
            }}
          >
            <Image
              source={require("../assets/icons/whiteMic.png")}
              style={{ width: 15, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  where: {
    backgroundColor: "#060",
  },
  textName: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
  rating: {
    marginTop: 20,
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  starRating: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  containerCall: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 40,
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    height: 50,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#fff",
  },
});
