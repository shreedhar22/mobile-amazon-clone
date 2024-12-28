import {Tabs} from  "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet } from "react-native"

function TabBarIcons() {
    
}
const TabLayout = () => {

    return (
        <SafeAreaView style = {styles.safeArea}> 
    
            <Tabs 
                screenOptions={{
                    tabBarActiveTintColor: '#1BC464',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: { fontSize: 16 },
                    tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 10,
                    },
                headerShown: false,}}
            >
            <Tabs.Screen 
                name = "index"
                options = {{ headerShown: false, title: "Shop"}}
            />
            <Tabs.Screen 
                name = "orders"
                options = {{ headerShown: false, title: "Orders"}}
            />
            </Tabs>
        </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    }
})
export default TabLayout