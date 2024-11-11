import {StyleSheet, Image,View, Text} from "react-native"
import Products from "../../../assets/products";
import {Product} from "../../../assets/types/product";
import { useLocalSearchParams } from "expo-router";

const products = () => {

    const {id} = useLocalSearchParams()

    const product:Product|undefined = Products.find(({slug}) => slug == id)

    if (product != undefined){
        return (
            <View style = {styles.item}>
    
    
                <View style = {styles.itemImageContainer}>
                    <Image style = {styles.itemImage} source = {product.imgShow} />
                </View>
    
                <View style = {styles.itemTextContainer}>
                    <Text style = {styles.itemTitle}>{product.name}</Text>
                    <Text style = {styles.itemPrice}>${product.price}</Text>
                </View>
               
    
            </View>
        )
    }
    else {
        <View style = {styles.item}>
                <View style = {styles.itemTextContainer}>
                    <Text style = {styles.itemTitle}> Product not found </Text>
                </View>       
        </View>
    }
}
export default products;

const styles = StyleSheet.create({

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
    }
})