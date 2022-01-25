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

  const [zoom, setZoom] = useState(14);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const marker = Marker;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.text}>Back</Text>
        // GIFLENS-https://media3.giphy.com/media/d30qasBONVnGfsmQ/200.gif
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>locate Me</Text>
        </TouchableOpacity>
      </View>
      <MapView region={region} style={styles.map}>
        <Marker
          coordinate={{
            latitude: location?.coords?.latitude,
            longitude: location?.coords?.longitude,
          }}
          title="My Location"
          description="My Location"
        >
          <Image
            source={require("../assets/bclick.png")}
            style={{ width: 80, height: 80 }}
          />
        </Marker>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  text: {
    color: "#fff",
    fontSize: 18,
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
