import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductPreview from "../components/ProductPreview";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Products = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      title: "Adidas Shoe",
      image: require("../assets/product01.png"),
      price: "$20",
    },
    {
      id: 2,
      title: "Smart Watch",
      image: require("../assets/product02.png"),
      price: "$40",
    },
    {
      id: 3,
      title: "Nike Shoe",
      image: require("../assets/product03.jpeg"),
      price: "$15",
    },
    {
      id: 4,
      title: "Adidas Shoe",
      image: require("../assets/product01.png"),
      price: "$20",
    },
    {
      id: 5,
      title: "Smart Watch",
      image: require("../assets/product02.png"),
      price: "$40",
    },
    {
      id: 6,
      title: "Nike Shoe",
      image: require("../assets/product03.jpeg"),
      price: "$15",
    },
    {
      id: 7,
      title: "Nike Shoe",
      image: require("../assets/product03.jpeg"),
      price: "$15",
    },
    {
      id: 8,
      title: "Nike Shoe",
      image: require("../assets/product03.jpeg"),
      price: "$15",
    },
    {
      id: 9,
      title: "Nike Shoe",
      image: require("../assets/product03.jpeg"),
      price: "$15",
    },
    {
      id: 10,
      title: "Nike Shoe",
      image: require("../assets/product03.jpeg"),
      price: "$15",
    },
  ]);

  const numColumns = 2;
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.productsContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={products}
          numColumns={numColumns}
          style={styles.productsContainer}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.productContainer}>
                  <ProductPreview
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
      <Navbar  activePage='home' title='Adidas Shoe'/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  productsContainer: {
    flex: 1,
  },
});
export default Products;
