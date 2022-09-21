import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { Text, Image, Avatar } from "react-native-elements";
import { DateTime } from "luxon";
import { useNavigation } from "@react-navigation/native";
import { LOGO } from "../../../../assets/images";
import { screen } from "../../../utils";
import { styles } from "./CommentNotification.styles";

export function CommentNotification(props) {
  const { notification, readNotification } = props;
  const [isRead, setIsRead] = useState(notification.read);
  const navigation = useNavigation();
  const userFollower = notification.user_follower_data;
  const video = notification.video_data;

  const onReadNotification = () => readNotification(notification.id, setIsRead);

  const goToVideo = () => {
    navigation.navigate(screen.app.video, { idVideo: video.id });
  };

  return (
    <Pressable
      style={[styles.content, isRead && styles.inactive]}
      onLongPress={!isRead ? onReadNotification : null}
      onPress={goToVideo}
    >
      <View style={styles.leftContent}>
        <Avatar
          source={userFollower.avatar ? { url: userFollower.avatar } : LOGO}
          rounded
          size={40}
          style={styles.avatar}
        />
        <View style={styles.contentInfo}>
          <Text style={styles.user}>{userFollower.username}</Text>
          <Text style={styles.text} numberOfLines={3}>
            has commented: {notification.comment}
          </Text>
          <Text style={styles.time}>
            {DateTime.fromISO(notification.created_at)
              .setLocale("en")
              .minus({ days: 1 })
              .toRelative()}
          </Text>
          {/* <Text style={styles.nota}>
            Note: To mark as read press and hold the comment textt
          </Text> */}
        </View>
      </View>
      <Image source={{ uri: video.image }} style={styles.imgVideo} />
    </Pressable>
  );
}
