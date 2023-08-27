import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";

const ProductPreview = ({ title, image, price }) => {
  return (
    <View style={styles.previewContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#A0A0A0",
    width: 140,
    height: 190,
  },
  imageContainer: {
    justifyContent:'center',
    alignItems:'center',
    
  },

  image: {
    width: 111,
    height: 112,
    alignItems: "center",
    borderRadius:10,
    marginTop:10

  },
  textContainer: {
    paddingLeft: 15,
  },

  title: {
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    textAlign: "left",
  },
  price: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#CE1818",
    marginTop: 5,
  },
});

export default ProductPreview;
