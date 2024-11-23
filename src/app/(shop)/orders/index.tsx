import {View, Text, Button, TouchableOpacity} from "react-native"
import { useCartStore, cartState, itemType } from "../../../store/cart-store"

const Orders = () => {

    const items = useCartStore (state => state.items)
    const addItem = useCartStore ((state) => state.addItem)

    const increment = (item:itemType) => {
        addItem(item)
        console.log("item name is: " + item.productName)
        console.log("item price is: " + item.price)
        console.log("item count is:"+ item.itemCount)
        console.log("items cart now is:"+ JSON.stringify(items))
    }

    return (
        // <View>
        //     <Text>Orders</Text>
        // </View>

        <View>
            <Text>Cart</Text>
            <View>
                {items.map((item) => {return (
                    
                                        <View>
                                            <Text>{item.productName}</Text>
                                            <Text>{item.price}</Text>
                                            <Text>{item.itemCount}</Text>
                                            <TouchableOpacity>

                                            <Button title="+" onPress= {() => increment(item)}/>
                                            </TouchableOpacity>
                                            
                                        </View>
                                    )}
                        )
                }
            </View>

        </View>


    )
}
export default Orders