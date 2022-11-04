import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/productsSlice'

import ProductCard from './ProductCard'


const ProductList = () => {


   const products = useSelector(state => state.products)
   const dispatch = useDispatch()
   
  
  useEffect(() => {
  
    dispatch(fetchProducts())
  }, [])
 
 
  if(products.loading) return 'Loading...'
  return (
     
      <div  style={{display:'flex', marginTop:'20px', padding:'10px', width:'100%',  justifyContent:'center'}}>
       <ProductCard products={products}/>
       
      </div>
  )
}

export default ProductList