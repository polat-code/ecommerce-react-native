import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputStructure from '../components/InputStructure'
import ButtonStructure from '../components/ButtonStructure'

const LogIn = () => {
  return (
    <View style= {styles.container}>
         <View style={styles.titleContainer}>
            <Text style={styles.bigTitle}>Welcome Back ! </Text>
            <Text style={styles.smallTitle} >Login with Username & password </Text>
         </View>
        <View style={styles.formContainer}>
            <View style={styles.usernameContainer}>
                <InputStructure placeholder="Enter your name" label="Username" />
            </View>
            <View style={styles.passwordContainer}>
                <InputStructure placeholder="Enter your password" label="Password" />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonStructure title="Sign In"/>
            </View>
        </View>
        <View style={styles.newAccountContainer}>
            <Text style={styles.newAccountText}>Create a new account? {' '}
            <TouchableOpacity style={styles.signUpContainer}>
                <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
            </Text>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        marginLeft:'10%',
        marginRight:'10%'
    },
    titleContainer: {
        marginTop:152
    },
    bigTitle: {
        fontSize:30
    },
    smallTitle: {
        fontSize:16
    },

    formContainer: {
        marginTop:67,
        shadowColor:'#CECECE',
        shadowOffset:{width:-2, height:4},
        shadowOpacity:0.2,
        shadowRadius:3,
        borderRadius:20,
        borderWidth:1,
        paddingHorizontal:20,
        alignItems:'center'

    },
    usernameContainer: {
        marginTop:30
    },
    passwordContainer: {
        marginTop:20
    },
    buttonContainer: {
        marginTop:30,
        marginBottom:30
        
    },
    newAccountContainer: {
        marginTop: 67,
        justifyContent:'center',
        alignItems:'center'
    },
    newAccountText: {
        fontSize:16,
    },
    signUp: {
        fontSize:16,
        color:'#120EDB',
    },
    signUpContainer:{
       
    }


})

export default LogIn
