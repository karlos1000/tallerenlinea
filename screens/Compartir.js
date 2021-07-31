import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Compartir = () => {
  return (
    <View style={styles.center}>
      <Text>Espacio para el contenido de compartir</Text>
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

export default Compartir;