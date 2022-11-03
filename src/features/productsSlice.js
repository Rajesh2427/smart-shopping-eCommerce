import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
   loading:true,
   products:[],
   error:''
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', ()=> {
    return axios
            .get('https://63578faac26aac906f2cbf30.mockapi.io/products')
            .then(response => response.data)
    
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    
    extraReducers: (builder)=>{
      builder.addCase(fetchProducts.pending, (state)=>{
        state.loading = true
      })
      builder.addCase(fetchProducts.fulfilled,(state, action)=>{
        state.loading = false
        state.products = action.payload
      })
      builder.addCase(fetchProducts.rejected, (state,action)=>{
        state.loading = false
        state.products = []
        state.error = action.error.message
      })
    }
})


export default productsSlice.reducer