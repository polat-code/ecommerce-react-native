import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import ButtonStructure from '../components/ButtonStructure'
import Navbar from '../components/Navbar'

const Profile = ({name}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <Text style={styles.name}>Hello {name}</Text>
        <ButtonStructure title="SIGN OUT"/>
        <View style={styles.navbarContainer}>
            <Navbar activePage="profile"/>
        </View>
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    name: {
        fontSize:32,
        fontWeight:'600',
        textAlign:'center',
        marginTop:150,
        marginBottom:  125
    },

    navbarContainer: {
        position:'absolute',
        left:0,
        bottom:0,
        width:'100%',
        marginBottom:20
    },
})

export default Profile
