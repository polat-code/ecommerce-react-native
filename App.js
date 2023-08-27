import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppIntro from "./screens/AppIntro";
import LogIn from "./screens/LogIn";
import Products from "./screens/Products";
import ProductDetail from "./screens/ProductDetail";
import Cart from "./screens/Cart";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";

export default function App() {
  return (
    <>
      {/* <ProductDetail image={require('./assets/productBigSize.png')} title='Adidas Shoe' price={10}/>*/}
      {/* <Products /> */}
      {/* <Cart /> */} 
      {/* <SignUp /> */} 
      <Profile  name={"Özgürhan"}/>
    </>
  );
}
