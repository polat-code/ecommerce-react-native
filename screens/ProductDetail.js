import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const ProductDetail = ({ image, title, price, details }) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        Platform.OS === "ios" ? styles.iosPlatform : styles.androidPlatform,
      ]}
    ><TouchableOpacity>
        <AntDesign
        name="arrowleft"
        size={36}
        color="black"
        style={styles.backButton}
      />
    </TouchableOpacity>
      
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.moreDetails}>More Details</Text>
      <Text style={styles.detailDescription}>Gear up with the latest collections from
adidas Originals, Running, Football, Training. 
With over 20,000+ products, you will never
run out of choice. Grab your favorites now.
Secure Payments. 100% Original Products.
Gear up with adidas.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  androidPlatform: {
    marginTop: 70,
  },
  iosPlatform: {
    marginTop: 0,
  },
  backButton: {
    marginTop: 10,
  },
  image: {
    width: 390,
    height: 390,
    marginTop: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingTop: 20,
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingTop: 10,
    color: "#CE1818",
  },
  buttonContainer: {
    alignItems:'center',
    marginTop:30,
   
  },
  button: {
    backgroundColor: "#F9EF05",
    borderRadius: 40,
    width: 269,
    height: 59,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontWeight:'bold',
    fontSize:16,
    color:'#4D1717'
  },
  moreDetails: {
    paddingLeft:30,
    fontSize:16,
    fontWeight:'700',
    marginTop:30
  },
  detailDescription: {
    paddingLeft:40,
    marginTop:3,
    color:'#7D7A7A'
  }
});

export default ProductDetail;
