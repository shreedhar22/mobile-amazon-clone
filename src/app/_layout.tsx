import {View, Text, StyleSheet} from "react-native"
import {Stack} from "expo-router"
import Auth from "./auth"
import ListHeader from "../components/list-header"

const RootLayout = () =>  {

    return (
            <Stack >
                <Stack.Screen  
                    name = '(shop)'
                    options = {{headerShown:false, title: "shop" }}
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
            </Stack>
    )
}

export default RootLayout;