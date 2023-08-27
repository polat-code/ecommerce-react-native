import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Navbar = ({ activePage }) => {
  const [homeColor, setHomeColor] = useState("black");
  const [profileColor, setProfileColor] = useState("black");
  const [cartColor, setCartColor] = useState("black");
  useEffect(() => {
    if (activePage === "home") {
      setHomeColor("#F9EF05");
    } else if (activePage === "cart") {
      setCartColor("#F9EF05");
    } else if (activePage === "profile") {
      setProfileColor("#F9EF05");
    }
  }, []);

  return (
    <View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Entypo name="home" size={30} color={homeColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-person" size={30} color={profileColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="shopping-cart" size={24} color={cartColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 0,
    height: 64,
  },
  horizontalLine: {
    borderColor: "#A3A3A3",
    borderWidth: 1,
  },
});

export default Navbar;
