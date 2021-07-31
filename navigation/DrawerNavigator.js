import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import { ContactoStackNavigator } from "./StackNavigator";
import About from "../screens/About";

const Drawer = createDrawerNavigator();

const irInicio = () => {
  console.log("Ir a inicio");
}


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={TabNavigator}  />
      {/* <Drawer.Screen name="Inicio" component={TabNavigator} /> */}
      <Drawer.Screen name="Contacto" component={ContactoStackNavigator} />
      {/* <Drawer.Screen name="About" component={About} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;