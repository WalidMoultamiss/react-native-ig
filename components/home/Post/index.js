import { View, Text , Image , TouchableOpacity} from "react-native";
import React from "react";
import Divider from "react-native-elements/src/Divider";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostContent from "./PostContent";

const Post = ({post}) => {
  return (

    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <Text style={{ color: "white" }}></Text>
      <PostHeader post={post} />
      <TouchableOpacity>
      <Image
        onPress={() => {
          alert("double click");
        }}
        source={{ uri: post?.image }} style={{ width: "100%", height: 450 }} />
        </TouchableOpacity>
      <PostFooter  post={post}/>
      <PostContent post={post}/>
    </View>
  );
};



export default Post;
