import { StyleSheet, Text, View , Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const NewPost = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.back}>back</Text>
        <Text style={styles.title}>Add New Post</Text>
        <Text style={styles.next}>next</Text>
      </View>
      <Divider width={1} orientation="vertical" />
        <View style={styles.content}>
            <Image
                source={{ uri: "https://picsum.photos/200/300" }}
                style={{ width: "100%", height: 300 }} />
            <Text style={styles.back}>
                Add picture
            </Text>
        </View>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 26,
  },
  back: {
    color: "white",
    fontSize: 20,
  },
  next: {
    color: "#0000af",
    fontSize: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
    content: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
});
