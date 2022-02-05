import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BubbleChat from "./BubbleChat";
import { ScrollView } from "react-native-gesture-handler";

const Chat = ({navigation}) => {
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
      image: "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_387,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/8907/pommes_de_terre_flickr_3736536244_9898e3d490_b.jpg",
    },
    {
      chat: "Oui, je vais te le faire",
      sender: "deliver",
    },
    {
      chat: "Merci",
      sender: "user",
    },
    {
      chat: "Au revoir",
      sender: "deliver",
    },

  ];

  return (
    <ScrollView
      style={{
        width: "100%",
        paddingHorizontal: 10,
        backgroundColor: "#000",
        maxHeight: "60%",
      }}
    >
      {chats.map((_, i) =><BubbleChat chat={_} navigation={navigation} key={i} />)}
    </ScrollView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
