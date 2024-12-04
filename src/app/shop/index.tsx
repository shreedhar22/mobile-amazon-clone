import {StyleSheet, View, Text, FlatList} from "react-native"
import Products from "../../../assets/products";
import ProductListItems from "../../components/product-list-items";
import { Product } from "../../../assets/types/product";
import ListHeader from "../../components/list-header";

const Home = () => {

    return (
        <View>
            <ListHeader/>
            <FlatList 
                data= {Products}
                renderItem = {({item})=> (<ProductListItems product= {item}/>) }
                numColumns={2}
                ListHeaderComponent={<Text>Products</Text>}
                contentContainerStyle={styles.flatListContent}
                columnWrapperStyle={styles.flatListColumn}
                style={{ paddingHorizontal: 10, paddingVertical: 5 }}
            >

                
            </FlatList>

              
        </View>
          
    )
}

export default Home;

const styles = StyleSheet.create({

    flatListContent: {
        paddingBottom: 60,
      },
    flatListColumn: {
        justifyContent: 'space-between',
    },
})