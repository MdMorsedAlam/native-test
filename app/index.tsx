import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/button';
import { Link, useRouter } from 'expo-router';

const Home = () => {
const router=useRouter();

  const onRoute=()=>{
router.navigate("/login")
  }
  return (
    <View  style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }}>
      {/* <Button text={"Continue"} onPress={onRoute}/> */}
      <Link href={"/login"} style={styles.link}>Continue</Link>
    </View>
  )
}

export default Home;

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