import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PostHeader = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
            style={styles.avatar}
        >
          <Image style={styles.image} source={{ uri: post?.user?.image }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>{post?.user.name}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={{ color: "white", fontSize: 22, paddingBottom: 4 }}>
          •••
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  avatar: {
      
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "purple",
    borderStyle: "solid",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    marginLeft: 20,
    fontWeight: "bold",
  },
});

export default PostHeader;
