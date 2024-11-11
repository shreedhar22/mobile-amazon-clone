import {View, Text} from "react-native"
import {Stack} from "expo-router"

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
                options = {{headerShown:false, title: "products"}}
            />
        </Stack>
    )
}

export default RootLayout;