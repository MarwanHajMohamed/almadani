import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Home from "./Components/Home";
import Description from "./Components/Description";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "white",
  },
};

AsyncStorage.setItem("lang", "ar");

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Al Madani"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Description"
            component={Description}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
