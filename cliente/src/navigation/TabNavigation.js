import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { screen } from "../utils";
import {
  HomeStack,
  FriendsStack,
  UploadStack,
  NotificationsStack,
  AccountStack,
} from "./stacks";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#ffffff",
        tabBarStyle: { backgroundColor: "#a7adba", borderTopWidth: 0 }, // color verde claro
        tabBarIcon: (props) => tabIcon({ route, ...props }),
      })}
    >
      <Tab.Screen
        name={screen.home.tab}
        component={HomeStack}
        options={{ headerShown: false, title: "Start" }}
      />
      <Tab.Screen
        name={screen.friends.tab}
        component={FriendsStack}
        options={{ headerShown: false, title: "Friends" }}
      />
      <Tab.Screen
        name={screen.upload.tab}
        component={UploadStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name={screen.notifications.tab}
        component={NotificationsStack}
        options={{ headerShown: false, title: "Notifications" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ headerShown: false, title: "Profile" }}
      />
    </Tab.Navigator>
  );
}

function tabIcon(props) {
  const { route, size, color, focused } = props;

  let iconName = "plus";

  if (route.name === screen.home.tab) {
    iconName = focused ? "home" : "home-outline";
  }
  if (route.name === screen.friends.tab) {
    iconName = focused ? "account-multiple" : "account-multiple-outline";
  }
  if (route.name === screen.notifications.tab) {
    iconName = focused ? "message-processing" : "message-processing-outline";
  }
  if (route.name === screen.account.tab) {
    iconName = focused ? "account" : "account-outline";
  }

  if (route.name === screen.upload.tab) {
    return (
      <Icon
        type="material-community"
        name="camera-plus"
        size={size}
        color={color}
        containerStyle={{
          backgroundColor: "#343d46", // color blanco
          paddingHorizontal: 15,
          paddingVertical: 9,
          borderRadius: 5,
        }}
        iconStyle={{
          color: "#ffffff", // color verde oscuro
          fontSize: 28,
        }}
      />
    );
  }

  return (
    <Icon type="material-community" name={iconName} size={size} color={color} />
  );
}
