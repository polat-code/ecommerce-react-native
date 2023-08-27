import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import InputStructure from "../components/InputStructure";
import ButtonStructure from "../components/ButtonStructure";

const SignUp = () => {
  return (
    <SafeAreaView
      style={Platform.OS === "android" ? styles.android : styles.ios}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.bigTitle}>Welcome!</Text>
        <Text style={styles.smallTitle}>Create New Account</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <InputStructure label="Name" placeholder="Enter your name..." />
        </View>
        <View style={styles.inputContainer}>
          <InputStructure label="Email" placeholder="Enter your email..." />
        </View>

        <View style={styles.inputContainer}>
          <InputStructure
            label="Password"
            placeholder="Enter your password..."
          />
        </View>
        <View style={styles.buttonContainer}>
        <ButtonStructure title="SIGN UP"/>
        </View>
        <Text style= {styles.alreadyAccountText}>Already have an account? <Text style={styles.signInNavigation} onPress={() => console.log('Sign Up Button')}>Sign In</Text></Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 100,
  },
  android: {
    marginTop: 50,
  },
  ios: {},
  bigTitle: {
    fontSize: 40,
    fontWeight: "700",
  },
  smallTitle: {
    color: "#606060",
    fontSize: 16,
  },
  formContainer: {
    alignItems: "center",
    borderWidth:1,
    marginHorizontal:40,
    borderRadius:20,
    borderColor:'rgba(0, 0, 0, 0.25)',
    paddingVertical:40

  },
  inputContainer: {
    marginBottom:20
  },
  buttonContainer: {
    marginTop:20
  },
  alreadyAccountText: {
    fontWeight:'300',
    marginTop:40
  },
  signInNavigation: {
    color:'#120EDB',
    fontWeight:'400'
  }

});

export default SignUp;

