import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const Button = ({text,onPress}:{text:string,onPress:any}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:"orange",paddingHorizontal:20,paddingVertical:10,borderRadius:5,width:Dimensions.get('window').width * 0.9,}}>
    <Text style={{fontSize:22,fontWeight:"bold",color:"white",textAlign:"center"}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({})