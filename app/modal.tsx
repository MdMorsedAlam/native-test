import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ReactNativeModal from 'react-native-modal';

const ModalPage = () => {

  const [visiable,setVisiable]=useState(false);
  const onPressButton=()=>{
    console.log("first")
  }
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
       <Button
          title="Open Modal"
          color="#f194ff"
          onPress={()=>setVisiable(true)}
        />
        <ReactNativeModal isVisible={visiable} onBackdropPress={()=>setVisiable(false)} animationIn="fadeInDownBig" animationInTiming={4000} style={{justifyContent:"flex-end",marginBottom:0,}}>
          <View style={{backgroundColor:"red",height:200,justifyContent:"center",alignItems:"center"}}>
       <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>Welcome</Text>
          </View>
        </ReactNativeModal>
    </View>
  )
}

export default ModalPage;

const styles = StyleSheet.create({})