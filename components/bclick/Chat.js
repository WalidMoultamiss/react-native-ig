import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BubbleChat from "./BubbleChat";

const Chat = () => {
  const chats = [
    {
      chat: "Salut!",
      sender: "deliver",
    },
    {
      chat: "Comment puis-je vous aider?",
      sender: "deliver",
    },
    {
      chat: "Peut tu me ramener 1kg de pomme de tére ?",
      sender: "user",
    },
    {
      chat: "Oui, je vais te le faire",
      sender: "deliver",
    },
    {
      chat: "Merci",
      sender: "user",
    },
  ];

  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 10,
      }}
    >
      {chats.map((_, i) =><BubbleChat chat={_} key={i} />)}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
