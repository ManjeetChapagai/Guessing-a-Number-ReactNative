import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text> The Game is Over!!!</Text>
      <Text> Number of rounds: {props.roundsNumber}</Text>
      <Text> Number was:{props.userNumber} </Text>
      <Button title="New game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});
