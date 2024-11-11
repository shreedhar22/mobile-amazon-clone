import {Stack} from "expo-router"

const CategoriesLayout = () => {

    return (
        <Stack>
            <Stack.Screen
                name = "[slug]"
                options = {{headerShown : false, title: 'categories'}}
            />
        </Stack>
    )
}

export default CategoriesLayout;