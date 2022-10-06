import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import Button from './Button'

function ErrorOverlay({message, onConfirm}) {
  return <View style={styles.container}>
    <Text style={[styles.text, styles.title]}>An Error Occured</Text>
    <Text style={styles.text}>{message}</Text>
    <Button onPress={onConfirm}>Okay</Button>
  </View>
}

export default ErrorOverlay

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:18,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text:{
        color:'white',
        textAlign:'center',
        padding:10,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
    },
})