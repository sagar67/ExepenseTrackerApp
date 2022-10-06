import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

function LoadingOverlay() {
  return <View style={styles.container}>
    <ActivityIndicator size='small' color='white' />
  </View>
}

export default LoadingOverlay

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:18,
        backgroundColor: GlobalStyles.colors.primary700
    }
})