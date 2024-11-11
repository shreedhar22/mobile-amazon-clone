import { Product } from "./types/product";

const Products:Product[] = [

    {
        id: 1,
        name: "macbook pro 15",
        type: "laptops",
        category: "electronics",
        price: 1500,
        imgShow: require('../assets/images/mac-book-1.jpg'),
        slug : "macbook-15-pro-2024"
    }, 
    {
        id: 2,
        name: "macbook pro 16",
        type: "laptops",
        category: "electronics",
        price: 1800,
        imgShow: require('../assets/images/mac-book-2.jpg'),
        slug : "macbook-16-pro-2024"
    },
    {
        id: 3,
        name: "iphone pro 16",
        type: "mobile phones",
        category: "electronics",
        price: 800,
        imgShow: require('../assets/images/i-phone-1.jpg'),
        slug : "iphone16-pro-2024"
    },
    {
        id: 4,
        name: "iphone pro 14",
        type: "mobile phones",
        category: "electronics",
        price: 600,
        imgShow: require('../assets/images/i-phone-2.jpg'),
        slug : "iphone14-pro-2024"
    },
    {
        id: 5,
        name: "nintendo switch",
        type: "video game",
        category: "electronics",
        price: 600,
        imgShow: require('../assets/images/nintendo-switch-1.jpg'),
        slug : "nintendo-2024"
    },
    {
        id: 6,
        name: "nintendo switch 2",
        type: "video game",
        category: "electronics",
        price: 700,
        imgShow: require('../assets/images/nintendo-switch-2.jpg'),
        slug : "nintendo-2-2024"
    },
    {
        id: 7,
        name: "ps-5 3",
        type: "video game",
        category: "electronics",
        price: 500,
        imgShow: require('../assets/images/ps-5-3.jpg'),
        slug : "ps5-3-2024"
    },
    {
        id: 8,
        name: "ps-5 2",
        type: "video game",
        category: "electronics",
        price: 400,
        imgShow: require('../assets/images/ps-5-2.jpg'),
        slug : "ps5-2-2024"
    }
]

export default Products;