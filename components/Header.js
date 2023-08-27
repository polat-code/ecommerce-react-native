import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={
        Platform.OS == "ios"
          ? styles.iostitleContainer
          : styles.androidtitleContainer
      }
    >
      <Text style={styles.title}>Shoppers</Text>
      <View style={styles.line}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  iostitleContainer: {},
  androidtitleContainer: {
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  line: {
    marginBottom: 62,
    borderWidth: 1,
    borderColor: "#E3E3E3",
  },
});
export default Header;
