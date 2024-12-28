import {Stack} from "expo-router"

const CartLayout = () => {

    return (
        <Stack>
            <Stack.Screen
                name = "index"
                options = {{headerShown : false, title: 'cart'}}
            />
        </Stack>
    )
}

export default CartLayout;