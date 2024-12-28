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
    removeItem: (item:itemType) => void,
    getTotalPrice: () => number
}

const initialCart:itemType[] = []

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
    },
    removeItem(item:itemType) {
        const currentItem = get().items.find(i=>i.productName === item.productName);
        const index = get().items.findIndex(i=>i.productName === item.productName);
        if (currentItem){
            if (currentItem.itemCount === 1) {
                set((state:cartState) => (
                    {items: [...state.items.slice(0, index), ...state.items.slice(index + 1)]}
                ))
            }
            else {
                console.log("I'm in the current item loop")
                set ((state:cartState) => (
                        {items: (state.items.map ((i:itemType)=> i.productName == item.productName ?  
                            {...i, itemCount:i.itemCount - 1}:i ))}
                    )
                )
            }
        }
    },

    getTotalPrice () {
        var price:number=0
        const items = get().items
        items.map(item => {price = price+(item.price*item.itemCount)})
        return price
    },
}))