import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const CartProductPreview = ({image,title,quantity,price}) => {
  return (
    <View style= {styles.container}>
        <Image source={image} style={styles.image}/>
        <View style={styles.descriptionContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.quantity}>Qty: {quantity}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        width:321,
        height:117,
        borderWidth:1.5,
        borderColor:'rgba(0, 0, 0, 0.25)',
        flexDirection:'row',
        marginBottom:20

    },
    image: {
        width:136,
        height:117,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
    },
    descriptionContainer: {
        marginLeft:20,
        marginVertical:20
    },
    title: {
        fontSize:16,
        fontWeight:'600'
    },
    quantity: {
        color:'#827D7D',
        fontSize:14,
        fontWeight:'600',
        marginTop:10,

    },
    price: {
    
        fontSize:16,
        fontWeight:'600',
        marginTop:10,
    }

})

export default CartProductPreview
