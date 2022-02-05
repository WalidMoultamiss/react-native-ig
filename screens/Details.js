import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Linking,
  Platform,
  TouchableOpacityBase,
} from "react-native";
import Constants from "expo-constants";
import Chat from "../components/bclick/Chat";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-elements";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Details = ({ navigation, route }) => {


  const GotoCloseDelivery = () => {
    navigation.navigate("CloseDelivery");
  };


  useEffect(() => {
    setTimeout(() => {
      GotoCloseDelivery();
    }, 1000);
  }, []);

  const dialCall = (tel) => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = `tel:${tel}`;
    } else {
      phoneNumber = `telprompt:${tel}`;
    }

    Linking.openURL(phoneNumber);
  };

  const deliver = route.params.marker.deliver;

  return (
    <SafeAreaView style={{ backgroundColor: "#000", flex: 1 }}>
      <KeyboardAwareScrollView
        style={{
          backgroundColor: "#000",
          maxHeight: "100%",
        }}
      >
        <View style={{ width: "100%" ,height:"100%" }}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ImageViewer", {
                  image: deliver.image,
                });
              }}
            >
              <Image
                source={{ uri: deliver.image }}
                style={{ width: 180, height: 180, borderRadius: 100 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.textName}>{deliver?.name}</Text>
          <View style={styles.rating}>
            {Array(deliver.rating)
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
              {deliver?.phone}
            </Text>
            <TouchableOpacity
              onPress={() => dialCall(deliver?.phone)}
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
          <Chat navigation={navigation} />
        </View>
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: 100,
            backgroundColor: "#000",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TextInput
            style={styles.textInput}
            placeholderTextColor={"#fff"}
            placeholder="Commandez maintenant..."
          />
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
