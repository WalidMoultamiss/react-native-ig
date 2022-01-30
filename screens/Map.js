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

  let markers = [
    {
      latitude: 32.2997193 + Math.random() / 1000,
      longitude: -9.2452911 + Math.random() / 1000,
      title: "Marker 1",
      description: "This is marker 1",
    },
    {
      latitude: 32.2997193 + Math.random() / 1000,
      longitude: -9.2452911 + Math.random() / 1000,
      title: "Marker 2",
      description: "This is marker 2",
    },
    {
      latitude: 32.2997193 + Math.random() / 1000,
      longitude: -9.2452911 + Math.random() / 1000,
      title: "Marker 3",
      description: "This is marker 3",
    },
  ];

  const handlePressMarker = (marker) => {
    navigation.navigate("Details", {
      marker,
    });
  };

  const addRandomMarker = () => {
    markers.push({
      latitude: 32.2997193 + Math.random() / 1000,
      longitude: -9.2452911 + Math.random() / 1000,
      title: "Marker " + markers.length,
      description: "This is marker " + markers.length,
    });
  };

  //

  const [zoom, setZoom] = useState(14);
  const [region, setRegion] = useState({
    latitude:32.2997193,
    longitude: -9.2452911,
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
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>locate Me</Text>
        </TouchableOpacity>
      </View>
      <MapView region={region} style={styles.map}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            title={marker.title}
            description={marker.description}
            onPress={() => handlePressMarker(marker)}
          ><Image
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
