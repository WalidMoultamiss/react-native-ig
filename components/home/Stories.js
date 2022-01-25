import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { users } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 , marginTop:'12%' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((story, idx) => (
          <TouchableOpacity style={{ marginHorizontal: 10 }} key={idx}>
            <View>
              <View style={styles.border}>
                <Image style={styles.story} source={{ uri: story.image }} />
                {story.isOnline ? (
                    <View style={styles.online}></View>
                ) : null
                }
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  textAlign: "center",
                  marginVertical: 5,
                }}
              >
                {story.name.length > 11
                  ? story.name.slice(0, 10).toLocaleLowerCase() + "..."
                  : story.name.toLocaleLowerCase()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    backgroundColor: "black",
    resizeMode: "cover",
    borderRadius: 990,
  },
  border:{
    borderRadius: 555,
    borderColor: "orange",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  online: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#04e204",
    padding: 7,
    borderRadius: 15,
  },
});

export default Stories;
