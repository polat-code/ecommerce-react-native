import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const InputStructure = ({label, value, placeholder, setValue}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input} 
            value={value}
            placeholder={placeholder}
            onChangeText={(val) => setValue(val)}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    label: {
        flexShrink: 0,
        color: '#000',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        paddingLeft:15,
        marginBottom:20
    },
    input: {
        borderWidth:2,
        borderColor:'#CECECE',
        borderStyle:'solid',
        borderRadius:30,
        padding:10,
        width:280,
        height:50,
        paddingLeft:15
    },
})

export default InputStructure
