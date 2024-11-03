import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import Button from '@/components/button';

const Login = () => {
  const onLogin=()=>{
    console.log("first")
  }
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View style={{gap:16,marginBottom:20}}>
        
                <TextInput placeholder='Enter Your Email' style={styles.input} />
                <TextInput placeholder='Enter Your Password' style={styles.input} />
             
            </View>
    <Button text='Login' onPress={onLogin}/>

      <Link href={"/register"} style={styles.link}>Go To Register</Link>
  </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  link:{
      fontSize:22,
      fontWeight:"bold",
      color:"white",
      marginTop:6,
      backgroundColor:"green",
      paddingHorizontal:20,
      paddingVertical:12,
      borderRadius:5,
  },
  input: {
    backgroundColor: "#ddd",
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth:1,
    fontSize:18,
}

})