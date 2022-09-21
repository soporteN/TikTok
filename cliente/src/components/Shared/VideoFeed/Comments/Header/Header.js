import React from "react";
import { View } from "react-native";
import { Text, Icon } from "react-native-elements";
import { styles } from "./Header.styles";

export function Header(props) {
  const { onClose, commentCounter } = props;

  const getTextComment = () => {
    if (commentCounter === 1) return "Comment";
    return "Comments";
  };

  return (
    <View style={styles.content}>
      <View />
      <Text>
        {commentCounter} {getTextComment()}
      </Text>
      <Icon
        type="material-community"
        name="close-circle-outline"
        size={30}
        onPress={onClose}
      />
    </View>
  );
}
