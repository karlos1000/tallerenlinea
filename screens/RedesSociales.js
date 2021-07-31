import React from 'react';
import { View, Button, Text, StyleSheet } from "react-native";

const RedesSociales = ( {navigation} ) => {
  return (
    <View style={styles.center}>
      <Text>Espacio para el contenido de redes sociales</Text>
      {/* <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default RedesSociales;
