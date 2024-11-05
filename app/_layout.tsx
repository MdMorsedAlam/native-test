import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
    
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            headerTintColor:"blue",
          }}
        />
         <Drawer.Screen
          name="register" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Register',
            title: 'Register',
            headerTintColor:"red",
          }}
        />
        <Drawer.Screen
          name="login" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Login',
            title: 'Login',
            headerTintColor:"red",
          }}
        />
          <Drawer.Screen
          name="flat-list" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Flat-List',
            title: 'Flat-List',
            headerTintColor:"green",
            headerShown:false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
