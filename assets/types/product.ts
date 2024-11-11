import { ImageSourcePropType } from "react-native"

export type Product = {
    id: number,
    name:string,
    type: string,
    category: string,
    price: number,
    imgShow: ImageSourcePropType,
    slug:string
}