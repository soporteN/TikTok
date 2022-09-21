import React from "react";
import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { Text, Icon, Avatar } from "react-native-elements";
import { screen } from "../../../utils";
import { styled } from "./AuthScreen.styles";

export function AuthScreen(props) {
  const { navigation } = props;
  const styles = styled();

  const goToRegisterEmail = () => {
    navigation.navigate(screen.auth.registerEmail);
  };

  const goToLoginEmail = () => {
    navigation.navigate(screen.auth.loginEmail);
  };

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.optionsContent}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Image
          style={styles.imagen}
          source={require("../../../../assets/images/logo.png")}
          resizeMode="contain"
        />
        <Text style={styles.title}>Sign up</Text>
        <Text></Text>
        <Text style={styles.info}>
          Create a profile, follow other accounts, upload your own videos and
          more.
        </Text>

        <TouchableOpacity
          onPress={goToRegisterEmail}
          style={styles.itemRegister}
        >
          <Icon type="material-community" name="at" />
          <Text>Use email</Text>
          <View />
        </TouchableOpacity>
      </View>

      <View style={styles.loginContent}>
        <Text>
          ¿Do you already have an account?{"  "}
          <Text style={styles.login} onPress={goToLoginEmail}>
            Log in{" "}
          </Text>
          {/* <Icon style={styles.Inpu} type="material-community" name="login" /> */}
        </Text>
      </View>
    </SafeAreaView>
  );
}
