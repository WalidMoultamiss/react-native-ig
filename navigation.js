import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Add from "./screens/Add";
import Map from "./screens/Map";
import Details from "./screens/Details";
import Balab from "./screens/Balab";

const screenOptions = {
  headerShown: false,
};

const Stack = createStackNavigator();

const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Map">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Balab" component={Balab} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInStack;
