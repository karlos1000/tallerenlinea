import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabFooter from "./navigation/TabFooter";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function InicioScreen( {navigation} ){
  return(
    <>
    <View>
      <Text>Contenido Inicio</Text>
      <Button
        title="Ir a Acerca de"
        onPress={() => navigation.navigate("AcercaDe")}
      />
    </View>
    <TabFooter/>
    </>
  )
}
function AcercaDeScreen( {navigation} ){
  return(
    <>
    <View>
      <Text>Contenido de Acerca de</Text>
      <Button
        title="Regresar a Inicio"
        onPress={() => navigation.goBack()}
      />
    </View>
    <TabFooter/>
    </>
  )
}
function MiCuentaScreen( {navigation} ){
  return(
    <>
    <View>
      <Text>Contenido de Mi Cuenta</Text>
      <Button
        title="Regresar a Gama de modelos"
        onPress={() => navigation.goBack()}
      />
    </View>
    <TabFooter/>
    </>
  )
}



function GamaModelosScreen({navigation}){
  return(
    <>
    <View>
      <Text>Contenido Gama de Modelos</Text>
      <Button
        title="Ir a Gama de modelos"
        onPress={() => navigation.navigate("MiCuenta")}
      />
    </View>
    <TabFooter/>
    </>
  )
}
function AutosNuevosScreen(){
  return(
    <>
    <View><Text>Contenido Autos Nuevos</Text></View>
    <TabFooter/>
    </>
  )
}
function AutosSeminuevosScreen(){
  return(
    <>
    <View><Text>Contenido Autos seminuevos</Text></View>
    <TabFooter/>
    </>
  )
}
function ReparacionVivoScreen(){
  return(
    <>
    <View><Text>Contenido Reparación en Vivo</Text></View>
    <TabFooter/>
    </>
  )
}
function CitaServicioScreen(){
  return(
    <>
    <View><Text>Contenido Cita de Servicio</Text></View>
    <TabFooter/>
    </>
  )
}
function TelAseguradorasScreen(){
  return(
    <>
    <View><Text>Contenido Teléfonos Aseguradoras</Text></View>
    <TabFooter/>
    </>
  )
}
function AjustesScreen(){
  return(
    <>
    <View><Text>Contenido de Ajustes</Text></View>
    <TabFooter/>
    </>
  )
}

//-----
function ContactoDeScreen(){
  return(
    <>
    <View><Text>Contenido de contacto</Text></View>
    <TabFooter/>
    </>
  )
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function Inicio(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="AcercaDe" component={AcercaDeScreen} />

      {/* Declara las vistas Tab footer */}
      <Stack.Screen name="Contacto" component={ContactoDeScreen} />
    </Stack.Navigator>
  )
}

function GamaModelos(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="GamaModelos" component={GamaModelosScreen} />
      <Stack.Screen name="MiCuenta" component={MiCuentaScreen} />
      <Stack.Screen name="AcercaDe" component={AcercaDeScreen} />

      {/* Declara las vistas Tab footer */}
      <Stack.Screen name="Contacto" component={ContactoDeScreen} />
    </Stack.Navigator>
  )
}
function AutosNuevos(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="AutosNuevos" component={AutosNuevosScreen} />
    </Stack.Navigator>
  )
}
function AutosSeminuevos(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="AutosSeminuevos" component={AutosSeminuevosScreen} />
    </Stack.Navigator>
  )
}
function ReparacionVivo(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="ReparacionVivo" component={ReparacionVivoScreen} />
    </Stack.Navigator>
  )
}
function CitaServicio(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="CitaServicio" component={CitaServicioScreen} />
    </Stack.Navigator>
  )
}
function TelAseguradoras(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="TelAseguradoras" component={TelAseguradorasScreen} />
    </Stack.Navigator>
  )
}
function Ajustes(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Ajustes" component={AjustesScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={Inicio}></Drawer.Screen>
        <Drawer.Screen name="GamaModelos" component={GamaModelos}></Drawer.Screen>
        <Drawer.Screen name="AutosNuevos" component={AutosNuevos}></Drawer.Screen>
        <Drawer.Screen name="AutosSeminuevos" component={AutosSeminuevos}></Drawer.Screen>
        <Drawer.Screen name="ReparacionVivo" component={ReparacionVivo}></Drawer.Screen>
        <Drawer.Screen name="CitaServicio" component={CitaServicio}></Drawer.Screen>
        <Drawer.Screen name="TelAseguradoras" component={TelAseguradoras}></Drawer.Screen>
        <Drawer.Screen name="Ajustes" component={Ajustes}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;