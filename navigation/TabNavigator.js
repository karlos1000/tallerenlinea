import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactoStackNavigator, CompartirStackNavigator, RedesSocialesStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={MainStackNavigator} />
      <Tab.Screen name="Contacto" component={ContactoStackNavigator} />
      <Tab.Screen name="Compartir" component={CompartirStackNavigator} />
      <Tab.Screen name="RedesSociales" component={RedesSocialesStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;