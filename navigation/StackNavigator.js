import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "../screens/Inicio";
import Contacto from "../screens/Contacto";
import Compartir from "../screens/Compartir";
import RedesSociales from "../screens/RedesSociales";

import About from "../screens/About";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};


// Inicialliza todas las pantallas
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

// >>>> Inicio para tab bottom
const ContactoStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contacto" component={Contacto} />
    </Stack.Navigator>
  );
};

const CompartirStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Compartir" component={Compartir} />
    </Stack.Navigator>
  );
};

const RedesSocialesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="RedesSociales" component={RedesSociales} />
    </Stack.Navigator>
  );
};
// >>>> Fin para tab bottom

export { MainStackNavigator, ContactoStackNavigator, CompartirStackNavigator, RedesSocialesStackNavigator };