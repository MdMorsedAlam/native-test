import Button from "@/components/button";
import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
const router=useRouter();


  const onRoute=()=>{
router.navigate("/login")
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <Link href={"/login"} style={styles.link}>Contunue</Link>
     {/* <Button text={"Continueee"} onPress={onRoute}/> */}
    </View>
  );
}


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
  }
})