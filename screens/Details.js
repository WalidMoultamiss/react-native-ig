import { StyleSheet, Text, View ,Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Rating } from 'react-native-ratings';

const Details = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
      }}
    >
      <View style={{...styles.container}}>
        <View>
            <Image
                source={require("../assets/photos/deliveryMan.png")}
                style={{ width: 180, height: 180 }}
            />
        </View>
      <Text style={styles.textName}>Ismail Announ</Text>
      <Rating imageSize={20} readonly startingValue={4} style={styles.rating}/>
      </View>
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
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    },
});
