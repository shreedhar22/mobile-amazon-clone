import {Stack} from "expo-router"

const AuthLayout = () => {

    return (
        <Stack>
            <Stack.Screen
                name = "index"
                options = {{headerShown : false, title: 'auth'}}
            />
        </Stack>
    )
}

export default AuthLayout;