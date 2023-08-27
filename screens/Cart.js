import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import CartProductPreview from "../components/CartProductPreview";
import ButtonStructure from "../components/ButtonStructure";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      title: "Adidas Shoe",
      image: require("../assets/product01.png"),
      quantity: 1,
      price: 20,
    },
    {
      id: 2,
      title: "Smart Watch",
      image: require("../assets/product02.png"),
      quantity: 2,
      price: 40,
    },
    {
      id: 3,
      title: "Nike Shoe",
      image: require("../assets/product03.jpeg"),
      quantity: 3,
      price: 30,
    },
    {
      id: 4,
      title: "Nike Shoe",
      image: require("../assets/product03.jpeg"),
      quantity: 3,
      price: 30,
    },
    {
      id: 5,
      title: "Nike Shoe",
      image: require("../assets/product03.jpeg"),
      quantity: 3,
      price: 30,
    },
    {
      id: 6,
      title: "Nike Shoe",
      image: require("../assets/product03.jpeg"),
      quantity: 3,
      price: 30,
    },
  ]);
  const [total, setTotal] = useState(0);
  const calculateTotal = (products) => {
    let result = 0;
    for (let i = 0; i < products.length; i++) {
      result += products[i].quantity * products[i].price;
    }
    setTotal(result);
  };
  useEffect(() => {
    calculateTotal(products);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView>
        <View style={styles.itemsContainer}>
          {products.map((product) => (
            <CartProductPreview
              key={product.id}
              image={product.image}
              title={product.title}
              quantity={product.quantity}
              price={product.price}
            />
          ))}
          <View style={styles.line}></View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${total}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonStructure title="Checkout" />
        </View>
      </ScrollView>
      <Navbar activePage="cart" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemsContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  line: {
    borderWidth: 1,
    borderColor: "#C6C4C4",
    marginVertical: 20,
    width: 321,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
  totalText: {
    fontWeight: "700",
    fontSize: 16,
  },
  totalPrice: {
    fontWeight: "700",
    fontSize: 16,
    color: "#CE1818",
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 50,
    
  },
});
export default Cart;
