import {create} from "zustand"

export type itemType = {
    productName: string,
    price: number,
    itemCount: number
}

export type cartState = {
    items:itemType[],
    item_count: number,
    addItem : (item:itemType) => void,
    //incrementItem: (item:itemType) => void,
}

const initialCart:itemType[] = []
const initialItem:itemType = {productName: "", price: 0, itemCount:0}

export const useCartStore =  create<cartState>((set,get) => ({

    items: initialCart,
    item_count : 0,
    addItem : (item:itemType) => {
        const currentItem = get().items.find(i=>i.productName === item.productName);
        if (currentItem){
            console.log("I'm in the current item loop")
            set ((state:cartState) => (
                    {items: (state.items.map ((i:itemType)=> i.productName == item.productName ?  
                        {...i, itemCount:i.itemCount +1}:i ))}
                )
            )
        }
        else{
            console.log("Fresh item in the cart")
            set((state:cartState) => (
                {items: [...state.items , item]}
                )
            )
        }
        
    }
    // incrementItem(item:itemType) {
    //     set((state)=> (

    //             {items: [...state.items, ]}
    //         )
    //     )
    // },
}))