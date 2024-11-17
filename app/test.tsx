import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc';
import {useFonts,Poppins_700Bold,Poppins_800ExtraBold_Italic,Poppins_300Light_Italic} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen';
import { Link } from 'expo-router';
const Test = () => {

  SplashScreen.preventAutoHideAsync();


  const [loaded, error] = useFonts({
    Poppins_700Bold,
    Poppins_800ExtraBold_Italic,
    Poppins_300Light_Italic
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <View style={tw`flex-1 justify-center items-center bg-blue-500`}>
      <Text style={{fontFamily:"Poppins_300Light_Italic",fontSize:25,color:"red"}}>Test</Text>
      <Link href={"/"} style={styles.link}>Home</Link>
    </View>
  )
}

export default Test;

const styles = StyleSheet.create({
  link: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: 6,
    backgroundColor: "green",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
},
})