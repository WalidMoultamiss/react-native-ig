import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const PostContent = ({ post }) => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text style={{ color: "white", marginTop: 5 }}>{post.likes} Likes</Text>
      <View style={{ marginTop: 5, flexDirection: "row" }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {post.user.name}&nbsp;
        </Text>
        <Text style={{ color: "white" }}>{post.caption}</Text>
      </View>

      <View style={{ marginTop: 5 }}>
        <TouchableOpacity>
          <Text style={{ color: "grey" }}>
            View all {post?.comments?.length} Comments
          </Text>
        </TouchableOpacity>
      </View>
      {post.comments.map((comment, index) => {
        return (
          <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {comment?.user?.name} &nbsp;
            </Text>
            <Text style={{ color: "white" }}>{comment?.text}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default PostContent;
