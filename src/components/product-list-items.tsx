import {StyleSheet, View, Text, Pressable, Image, TouchableOpacity, Button} from "react-native"
import {Link} from "expo-router"
import { Product } from "../../assets/types/product"
import { useCartStore, cartState, itemType } from "../store/cart-store"

const ProductListItems = ({product}:{product:Product}) => {
  
    const item:itemType = {productName:product.name, price:product.price, itemCount:1}

    const items = useCartStore (state => state.items)
    const addItem = useCartStore ((state) => state.addItem)

    const addToCart = (item:itemType) => {
      addItem(item)
      console.log("item name is: " + item.productName)
      console.log("item price is: " + item.price)
      console.log("item count is:"+ item.itemCount)
      console.log("items cart now is:"+ JSON.stringify(items))
    }

    return (
      <View style = {styles.item}>
        <Link asChild href = {{pathname:`products/${product.slug}`, params: {id: product.slug}}}>
            <Pressable >
              <View >
                <View style = {styles.itemImageContainer}>
                    <Image style = {styles.itemImage} source={ product.imgShow}  />
                </View>
                
                <View style = {styles.itemTextContainer}>
                    <Text style = {styles.itemTitle} >{product.name}</Text>
                    <Text style = {styles.itemPrice} >${product.price.toFixed(2)}</Text> 
                </View>
              
              </View>
            </Pressable>
        </Link>

        <Pressable style = {styles.addToCartButton} onPress = {()=> addToCart(item)}>
          <Text style = {styles.addToCartButtonText}>Add to Cart</Text> 
        </Pressable>
      </View>
    )

}

export default ProductListItems;

const styles = StyleSheet.create ( {

    item: {
        width: '48%',
        backgroundColor: 'white',
        marginVertical: 8,
        borderRadius: 10,
        overflow: 'hidden',
      },
      itemImageContainer: {
        borderRadius: 10,
        width: '100%',
        height: 150,
      },
      itemImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      itemTextContainer: {
        padding: 8,
        alignItems: 'flex-start',
        gap: 4,
      },
      itemTitle: {
        fontSize: 16,
        color: '#888',
      },
      itemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      addToCartButton: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#0d7f3f',
        padding: 12,
        borderRadius: 12,
      },
      addToCartButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})