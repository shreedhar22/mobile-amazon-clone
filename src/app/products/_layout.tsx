import {Stack} from "expo-router"

const ProductsLayout = () => {

    return (
        <Stack>
            <Stack.Screen
                name = "[slug]"
                options = {{headerShown : false, title: 'orders'}}
            />
        </Stack>
    )
}

export default ProductsLayout;