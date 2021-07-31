import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Inicio = ( {navigation} ) => {
  return (
    <View style={styles.center}>
      <Text>Espacio para el contenido de inicio</Text>
      <Button
        title="Ir a About"
        onPress={() => navigation.navigate("About")}
      />

      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Inicio;