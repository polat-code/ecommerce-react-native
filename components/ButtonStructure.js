import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ButtonStructure = ({title,action}) => {
  return (
    <TouchableOpacity 
        style={styles.button}
        onPress={action}>
            <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'#F9EF05',
        borderRadius:40,
        width:270,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText: {
        color:'#CE1818',
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'bold'
        
    }
})

export default ButtonStructure
