import React from "react";
import { View, Pressable } from "react-native";
import { Text, Icon, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./UpdateData.styles";

export function UpdateData(props) {
  const { name, username, description, email, website, instagram } = props;
  const navigation = useNavigation();

  const goToChangeName = () => {
    navigation.navigate(screen.account.changeName, { name });
  };

  const goToChageDescription = () => {
    navigation.navigate(screen.account.changeDescription, { description });
  };

  const goToChangeWebSite = () => {
    navigation.navigate(screen.account.changeWebsite, { website });
  };

  const goToChangeInstagram = () => {
    navigation.navigate(screen.account.changeInstagram, { instagram });
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>About you</Text>
      <BlockItem title="Name(*)" value={name} onPress={goToChangeName} />
      <BlockItem
        title="Short description(*)"
        value={description}
        onPress={goToChageDescription}
      />
      <BlockItem title="Username" value={username} />
      <BlockItem title="Email" value={email} />

      <Text style={styles.title}>Social sites</Text>
      <BlockItem
        title="Web site(*)"
        value={website}
        onPress={goToChangeWebSite}
      />
      <BlockItem
        title="Instagram(*)"
        value={instagram}
        onPress={goToChangeInstagram}
      />
      <Divider
        style={{
          backgroundColor: "#ffffff",
          height: 1,
          width: "100%",
          marginTop: 20,
        }}
      />
    </View>
  );
}

function BlockItem(props) {
  const { title, value, onPress } = props;

  return (
    <Pressable style={styles.block} onPress={onPress}>
      <Text>{title}</Text>
      <View style={styles.blockContent}>
        <Text style={styles.blockValue} numberOfLines={1}>
          {value}
        </Text>
        {onPress && (
          <Icon
            type="material-community"
            name="chevron-right"
            iconStyle={styles.icon}
          />
        )}
      </View>
    </Pressable>
  );
}
