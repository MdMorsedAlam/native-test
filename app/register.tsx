import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';
import Button from '@/components/button';

const Register = () => {
const [formData,setFormData]=useState<{name:string,email:string,pass:string,rePass:string}>({
    name:"",
    email:"",
    pass:"",
    rePass:""
});

    const onRegister = () => {
        console.log(formData)
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
                <TextInput onChangeText={e=>setFormData({...formData,name:e})} placeholder='Enter Your Full Name' style={styles.input} />
                <TextInput onChangeText={e=>setFormData({...formData,email:e})} placeholder='Enter Your Email' style={styles.input} />
                <TextInput onChangeText={e=>setFormData({...formData,pass:e})} placeholder='Enter Your Password' style={styles.input} />
                <TextInput onChangeText={e=>setFormData({...formData,rePass:e})} placeholder='Enter Your Re Password' style={styles.input} />
            </View>
            <Button text='Register' onPress={onRegister} />

            <Link href={"/login"} style={styles.link}>Go To Login</Link>
        </View>
    )
}

export default Register;

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