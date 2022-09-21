import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountScreen,
  SettingsScreen,
  ChangeNameScreen,
  ChangeWebsiteScreen,
  ChangeInstagram,
  ChangeDescriptionScreen,
} from "../../screens/Account";
import { screen } from "../../utils";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "" }}
      />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name={screen.account.settings}
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name={screen.account.changeName}
          component={ChangeNameScreen}
          options={{ title: "Name" }}
        />
        <Stack.Screen
          name={screen.account.changeDescription}
          component={ChangeDescriptionScreen}
          options={{ title: "Short description" }}
        />
        <Stack.Screen
          name={screen.account.changeWebsite}
          component={ChangeWebsiteScreen}
          options={{ title: "Web Site " }}
        />
        <Stack.Screen
          name={screen.account.changeInstagram}
          component={ChangeInstagram}
          options={{ title: "Instagram" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
