import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link} from "expo-router"

const ListHeader = () => {

    return (
        <View style = {styles.headerContainer}>
            <TouchableOpacity style={styles.iconContainer}>
                <FontAwesome size={28} color="#fff" name="bars" />
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
  
    )
}

export default ListHeader;

const styles = StyleSheet.create ({
    headerContainer: {
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
    }

})