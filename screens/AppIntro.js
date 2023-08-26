import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AppIntro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.introTitle}>Welcome To Shoppers</Text>
      <Image style={styles.photo} source={require("../assets/appintro.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFF10",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40%",
  },
  introTitle: {
    color: "#000",
    fontSize: 40,
    width: 194,
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "600",
  },
  photo: {
    marginTop: "12%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:25
  },
});

export default AppIntro;
