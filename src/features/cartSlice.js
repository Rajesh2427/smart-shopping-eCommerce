import { createSlice} from "@reduxjs/toolkit";



// const initialState = {
//    cartProducts:[]
// }



const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        addProductToCart: (state,action)=>{
            const product = action.payload
            const check = state.find((eachProduct) => eachProduct.id === product.id)
            if(check){
                return state.map((eachProduct) => eachProduct.id === product.id ? {...eachProduct, qty:eachProduct.qty+1} : eachProduct)
            } else {
                const product = action.payload
                return [
                    ...state,
                    {
                        ...product,
                        qty:1
                    }
                ]
            }
            
        },
        removeProductFromCart:(state,action)=>{
            const product = action.payload
            const exist = state.find((eachProduct) => eachProduct.id === product.id)
             if(exist.qty === 1){
                     return state.filter((eachProduct) => eachProduct.id !== product.id)
             }else{
                return state.map(eachProduct => eachProduct.id === product.id ? {...eachProduct, qty: eachProduct.qty -1 } : eachProduct )
             }

           
        },
        deleteProduct:(state,action)=>{
            const product = action.payload
            
                     return state.filter((eachProduct) => eachProduct.id !== product.id)
              
           
        },
        orderPlaced:(state) => {
            return []
        }
    }
})


export default cartSlice.reducer
export const {addProductToCart} = cartSlice.actions
export const {removeProductFromCart} = cartSlice.actions
export const {orderPlaced} = cartSlice.actions
export const {deleteProduct} = cartSlice.actions