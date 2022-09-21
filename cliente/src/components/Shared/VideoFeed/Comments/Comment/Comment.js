import React from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Text, Avatar } from "react-native-elements";
import { DateTime } from "luxon";
import { Comment as CommentController } from "../../../../../api";
import { useAuth } from "../../../../../hooks";
import { LOGO } from "../../../../../../assets/images";
import { styles } from "./Comment.styles";

const commentController = new CommentController();

export function Comment(props) {
  const { comment, onReloadComments } = props;
  const user = comment.user_data;
  const { accessToken, auth } = useAuth();

  const confirmDeleteComment = () => {
    if (user.id === auth.user_id) {
      Alert.alert(
        "Delete comment",
        "¿Are you sure you want to delete the comment?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Yes, Remove",
            onPress: deleteComment,
          },
        ]
      );
    } else {
      Alert.alert("You can only delete your own comments", "", [
        {
          text: "Close",
          style: "cancel",
        },
      ]);
    }
  };

  const deleteComment = async () => {
    try {
      await commentController.delete(accessToken, comment.id);
      onReloadComments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity style={styles.content} onLongPress={confirmDeleteComment}>
      <Avatar
        rounded
        source={user.avatar ? { uri: user.avatar } : LOGO}
        size={35}
      />

      <View style={styles.infoContent}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.comment}>{comment.text}</Text>
        {/* <Text style={styles.date}>{comment.created_at}</Text> */}
        <Text style={styles.date}>
          {DateTime.fromISO(comment.created_at)
            .setLocale("es")
            .toFormat("dd-MM-yy")}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
