import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const PostFooter = ({ post }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "row"}}>
          <TouchableOpacity>
            <Image
              style={{ width: 22, height: 20, resizeMode: "contain" }}
              source={require("../../../assets/red-heart.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 22, height: 20, marginLeft:10, resizeMode: "contain" }}
              source={require("../../../assets/comment.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 22, height: 20,marginLeft:10, resizeMode: "contain" }}
              source={require("../../../assets/send.png")}
            />
          </TouchableOpacity>
        </View>

        <Image
          style={{ width: 22, height: 20, resizeMode: "contain" }}
          source={require("../../../assets/save.png")}
        />
      </View>
    </View>
  );
};

export default PostFooter;
