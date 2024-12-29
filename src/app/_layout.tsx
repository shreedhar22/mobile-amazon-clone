import {View, Text, StyleSheet} from "react-native"
import {Stack} from "expo-router"
import ListHeader from "../components/list-header"
import {AuthProvider} from "../providers/authProvider"

const RootLayout = () =>  {

    return (
        <AuthProvider>
            <Stack >
                <Stack.Screen  
                    name = '(shop)'
                    options = {{headerShown:false, title: "shop" }}
                />
                <Stack.Screen  
                    name = 'auth'
                    options = {{headerShown:false, title: "auth"}}
                />
                <Stack.Screen
                    name = 'categories'
                    options = {{headerShown:false, title: "categories"}}
                />
                <Stack.Screen
                    name = 'products'
                    options = {{headerShown:true, title: "products"}}
                />
                <Stack.Screen
                    name = 'checkout'
                    options = {{headerShown:true, title: "checkout"}}
                />
                <Stack.Screen
                    name = 'cart'
                    options = {{headerShown:false, title: "cart"}}
                />

            </Stack>
        </AuthProvider>
    )
}

export default RootLayout;