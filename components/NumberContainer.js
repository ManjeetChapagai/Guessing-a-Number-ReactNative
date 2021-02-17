import React from "react";
import Colors from "../constants/Color";
import { View, Text, StyleSheet } from "react-native";

export const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});
