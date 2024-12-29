import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {Link} from "expo-router"
import {useContext} from "react"
import { useAuthContext } from "../providers/authProvider";
import { supabase } from "../lib/supabase";

const ListHeader = () => {

    const { user, setUser } = useAuthContext()
    const isLoggedIn = user?.isLoggedIn
    console.log("user is logged in: " + isLoggedIn)
    const firstLetter = user?.email?.charAt(0).toUpperCase()

    async function signOut () {
        const isLoggedIn = user?.isLoggedIn
        const sessionToken = user?.sessionToken
        if (sessionToken && isLoggedIn) {
          const {error} = await supabase.auth.signOut()
          if (error) {
            alert(error)
            console.log("Something went wrong logging you out :" + error)
          }
          console.log(user?.email + "you are now logged out")
          setUser({email:undefined, sessionToken:undefined, isLoggedIn:false})
          
        }else {
          alert("You aren't logged in")
        }
      }

    const onSignOut = () => {
        signOut ()
    }

    return (
        <View>
            {isLoggedIn ? (
                <View style = {styles.headerContainerLoggedIn}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Link href="/(auth)">
                            <View style={styles.letterContainer}>
                                <FontAwesome size={33} color="#fff" name="circle" />
                                <Text style={styles.letter}>{firstLetter}</Text>
                            </View>
                        </Link>
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

                    <TouchableOpacity>
                        <Link href="/(auth)" onPress={(onSignOut)} >
                            <FontAwesome size={28} color="#fff" name="sign-out"  />     
                        </Link>
                    </TouchableOpacity>
                </View>
            ): (
                <View style = {styles.headerContainerLoggedOut}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Link href="/(auth)">
                            <FontAwesome size={28} color="#fff" name="bars" />
                        </Link>
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
    letterContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      },
    letter: {
        position: 'absolute',
        color: 'black',
        fontSize: 20,
        fontWeight: 'light',
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