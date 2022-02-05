import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import React from "react";

const BubbleChat = ({ chat, navigation }) => {
  const sender = chat.sender === "deliver" ? "flex-start" : "flex-end";
  const senderDirection = chat.sender === "deliver" ? "row" : "row-reverse";
  const bubbleColor = chat.sender === "deliver" ? "#FF8C00" : "#fff";
  const textColor = chat.sender === "deliver" ? "#fff" : "#FF8C00";
  const borderLeft = chat.sender === "deliver" ? 1 : 10;
  const borderRight = chat.sender === "deliver" ? 10 : 1;

  return (
    <View style={{ width: "100%", alignItems: sender }}>
      <TouchableOpacity
        style={{
          flexDirection: senderDirection,
          alignItems: !sender,
        }}
      >
        <View
          style={{
            padding: 2,
            backgroundColor: bubbleColor,
            width: 8,
            height: 8,
            borderRadius: 10,
            marginRight: 3,
          }}
        />
        <View
          style={{
            width: "50%",
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: bubbleColor,
            borderRadius: 10,
            borderBottomStartRadius: borderLeft,
            borderBottomEndRadius: borderRight,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: textColor,
            }}
          >
            {chat.chat}
          </Text>
          {chat.image != undefined && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ImageViewer", {
                  image: chat.image,
                });
              }}
            >
              <Image source={{ uri: chat.image }} style={styles.image} />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BubbleChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: { width: "100%", height: 200, borderRadius: 5 },
});
