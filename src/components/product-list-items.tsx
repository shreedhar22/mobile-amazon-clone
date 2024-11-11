import {StyleSheet, View, Text, Pressable, Image} from "react-native"
import {Link} from "expo-router"
import { Product } from "../../assets/types/product"


const ProductListItems = ({product}:{product:Product}) => {
    
    return (
        <Link asChild href = {{pathname:`products/${product.slug}`, params: {id: product.slug}}}>
            <Pressable style = {styles.item}>
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
})