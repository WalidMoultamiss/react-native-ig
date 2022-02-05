import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function App({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = "";
  }

  let markers = [
    {
      latitude: 32.2957193 + Math.random() / 1000,
      longitude: -9.2422911 + Math.random() / 1000,
      title: "Marker 1",
      description: "This is marker 1",
      deliver: {
        name: "Hassan markiz",
        phone: "06 66 65 06 96",
        image: "https://atlastrip.vercel.app/_next/image?url=https%3A%2F%2Fatlastrip-backend.herokuapp.com%2Fmedia%2F2ac42989-589d-4ef9-830d-6e22d1deeca6.ismail.jpg&w=1920&q=75",
        rating: 4,
      },
    },
    {
      latitude: 32.2957193 + Math.random() / 1000,
      longitude: -9.2422911 + Math.random() / 1000,
      title: "Marker 2",
      description: "This is marker 2",
      deliver: {
        name: "Ismail Announ",
        phone: "07 07 95 43 67",
        image: "https://atlastrip.vercel.app/_next/image?url=https%3A%2F%2Fatlastrip-backend.herokuapp.com%2Fmedia%2F2ac42989-589d-4ef9-830d-6e22d1deeca6.ismail.jpg&w=1920&q=75",
        rating: 5,
      },
    },
    {
      latitude: 32.2957193 + Math.random() / 1000,
      longitude: -9.2422911 + Math.random() / 1000,
      title: "Marker 3",
      description: "This is marker 3",
      deliver: {
        name: "Haitam El-Hajj",
        phone: "06 96 65 55 55",
        image: "https://atlastrip.vercel.app/_next/image?url=https%3A%2F%2Fatlastrip-backend.herokuapp.com%2Fmedia%2F2ac42989-589d-4ef9-830d-6e22d1deeca6.ismail.jpg&w=1920&q=75",
        rating: 3,
      },
    },
  ];

  const handlePressMarker = (marker) => {
    navigation.navigate("Details", {
      marker,
    });
  };

  const addRandomMarker = () => {
    markers.push({
      latitude: 30.2197193 + Math.random() / 10,
      longitude: -15.2452911 + Math.random() / 10,
      title: "Marker " + markers.length,
      description: "This is marker " + markers.length,
    });
  };

  //

  const [zoom, setZoom] = useState(1);
  const [region, setRegion] = useState({
    latitude: 32.2997193,
    longitude: -9.242911,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  const marker = Marker;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Icon
            name="cart"
            type="material-community"
            color="#fff"
            underlayColor="transparent"
            iconStyle={{ marginLeft: 10 }}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "red",
              padding: 3,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 10 }}>12</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ ...styles.text, color: "#FF8C00" }}>B'click</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
        >
          <Icon
            name="account-circle"
            type="material-community"
            color="#fff"
            underlayColor="transparent"
            iconStyle={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
      <MapView region={region} style={styles.map} zoom={zoom}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            title={marker.title}
            description={marker.description}
            onPress={() => handlePressMarker(marker)}
          >
            <Image
              source={require("../assets/bclick.png")}
              style={{ width: 80, height: 80 }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    position: "absolute",
    paddingTop: 80,
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1,
  },
});
