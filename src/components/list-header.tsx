import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link} from "expo-router"
import {useContext} from "react"
import { useAuthContext } from "../providers/authProvider";

const ListHeader = () => {

    const { user } = useAuthContext()
    const isLoggedIn = user?.isLoggedIn
    console.log("user is logged in: " + isLoggedIn)

    return (
        <View>
            {isLoggedIn ? (
                <View style = {styles.headerContainerLoggedIn}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <FontAwesome size={28} color="#fff" name="bars" />
                        {/* <Link href="/(auth)">
                            <FontAwesome size={28} color="#fff" name="bars" />
                        </Link> */}
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Link href="/shop">
                            <Text style = {styles.title}> Home </Text>     
                        </Link>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.iconContainer}>
                        <Link href="/cart">
                            <FontAwesome size={28} color="#fff" name="shopping-cart"  />
                        </Link>
                    </TouchableOpacity>
                </View>
            ): (
                <View style = {styles.headerContainerLoggedOut}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <FontAwesome size={28} color="#fff" name="bars" />
                        {/* <Link href="/(auth)">
                            <FontAwesome size={28} color="#fff" name="bars" />
                        </Link> */}
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Link href="/shop">
                            <Text style = {styles.title}> Home </Text>     
                        </Link>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.iconContainer}>
                        <Link href="/cart">
                            <FontAwesome size={28} color="#fff" name="shopping-cart"  />
                        </Link>
                    </TouchableOpacity>
                </View>
            )}
        </View>
        
  
    )
}

export default ListHeader;

const styles = StyleSheet.create ({
    headerContainerLoggedOut: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#6200EE',
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 60,
      },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    iconContainer: {
        padding: 5,
    },
    headerRight: {
        alignItems: 'flex-end',
    },
    headerLeft: {
        alignItems: "flex-start",
    },
    headerCenter: {
        alignItems: "center",
    },
    headerContainerLoggedIn : {  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1FD655',
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 60,
    },

})