import {View, Text, Button, TouchableOpacity, StyleSheet} from "react-native"
import { useCartStore, cartState, itemType } from "../../store/cart-store"
import ListHeader from "../../components/list-header"
import { Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

const Cart = () => {

    const items = useCartStore (state => state.items)
    const addItem = useCartStore ((state) => state.addItem)
    const removeItem = useCartStore((state) => state.removeItem)
    const getTotalPrice = useCartStore((state) => state.getTotalPrice)

    const increment = (item:itemType) => {
        addItem(item)
    }

    const decrement = (item:itemType) => {
        removeItem(item)
    }

    return (
        // <View>
        //     <Text>Orders</Text>
        // </View>

        <SafeAreaView style={{flex:1}}>
            <ListHeader/>
            <View style ={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Cart</Text>
            </View>
            <View>      
                {items.map((item) => {return ( 
                        <View style ={{alignItems: 'center'}}>
                            <Text>{item.productName}</Text>
                            <Text>price:{item.price}</Text>
                            
                            <View style={styles.container}>
                                <TouchableOpacity style = {styles.addButton} onPress= {() => increment(item)} >
                                    <Text style = {styles.buttonText}> + </Text>
                                </TouchableOpacity>
                                
                                <View style={styles.countContainer}>
                                    <Text style = {styles.countText}>{item.itemCount}</Text>
                                </View>
                                <TouchableOpacity style = {styles.addButton} onPress= {() => decrement(item)}>
                                    <Text style = {styles.buttonText}> - </Text>
                                </TouchableOpacity>             
                            </View>    
                        </View>
                    )}
                )
                }
            </View>

            <View style ={{alignItems: 'center'}}>
                <View style={styles.countContainer}>
                    <Text style = {styles.countText}>
                        Total price: {getTotalPrice()}
                    </Text>
                </View>

                <TouchableOpacity style = {styles.buttonCheckout} >
                    <Link href="/checkout">
                        <Text style = {styles.buttonTextCheckout}> Proceed to Checkout </Text>
                    </Link>
                </TouchableOpacity>
            </View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1
      },
        addButton: {
            backgroundColor: '#fff', // White background
            paddingVertical: 5, // Reduced vertical padding for smaller height
            paddingHorizontal: 10, // Reduced horizontal padding for smaller width
            borderRadius: 0, // Square corners
            borderWidth: 2, // Bold border
            borderColor: '#000', // Black border
            alignItems: 'center', // Center content horizontally
            justifyContent: 'center', // Center content vertically
          },
          removeButton: {
            backgroundColor: '#fff', // White background
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 0, // Square corners
            borderWidth: 2, // Bold border
            borderColor: '#000', // Black border
            alignItems: 'center',
            justifyContent: 'center',
          },
          buttonText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000', // White text for both buttons
            textTransform: 'uppercase', // Uppercase text
          },
          countContainer: {
            paddingVertical: 8, // Vertical padding to match button height
            paddingHorizontal: 15, // Horizontal padding to match button width
            justifyContent: 'center', // Center content vertically
            alignItems: 'center', // Center content horizontally
          },
          countText: {
            fontSize: 16, // Adjust font size for count text
            fontWeight: 'bold',
            color: '#000', // Black color for count text
          },
          container: {
            flexDirection: 'row', // Align buttons horizontally
            // justifyContent: 'space-between', // Space out the buttons
            // padding: 10, // Add padding around the buttons
            // backgroundColor: '#f8f8f8', // Light background for the container
          },
          buttonCheckout: {
            backgroundColor: '#6200EE', // Purple color
            paddingVertical: 12, // Vertical padding for height
            paddingHorizontal: 20, // Horizontal padding for width
            borderRadius: 8, // Rounded corners
            alignItems: 'center', // Center the text horizontally
            justifyContent: 'center', // Center the text vertically
            shadowColor: '#000', // Shadow color for depth (iOS only)
            shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
            shadowOpacity: 0.2, // Shadow opacity for iOS
            shadowRadius: 4, // Shadow radius for iOS
            elevation: 5, // Shadow effect for Android
          },
          buttonTextCheckout: {
            color: '#FFFFFF', // White text
            fontSize: 16, // Font size
            fontWeight: 'bold', // Bold text
            textTransform: 'uppercase', // Text in uppercase
          },
})

export default Cart