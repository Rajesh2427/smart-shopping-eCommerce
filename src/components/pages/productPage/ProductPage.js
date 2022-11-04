import React, {useState,useEffect} from 'react'

import { useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import FetchApi from '../../fetchApi/FetchApi'

import { addProductToCart } from '../../../features/cartSlice'
import { Box, Rating } from '@mui/material'
import ProductList from '../../ProductList'


const ProductPage = () => {
    const params = useParams()
    const id = params.product
    const [gotocart, setGotocart] = useState(false)
    const [imgSrc, setImgSrc] = useState()
   const [product, setProduct] = useState(null)
    useEffect(() => {
  FetchApi(`https://63578faac26aac906f2cbf30.mockapi.io/products/${id}` , 'GET')
  .then(response => { 
    setProduct(response) 
    setImgSrc(response.productImages[0])
  } )
    },[id])
   const dispatch = useDispatch()
    const navigate =  useNavigate()
   const  buyNow = () => {
        alert('Product Added to cart. You will be redirected to checkout page')
        dispatch(addProductToCart(product))
        navigate('/cart')

   }
   

if(!product) return 'loading'
 const {productName, productVersion, stock, productDescription, productPrice, productImages, rating} = product
 
 
  return (
    <div className='container-fluid mt-3'>
 
       <Box className=' container-fluid d-flex flex-column flex-lg-row' >
            <Box className='d-flex container-fluid  flex-column flex-xl-row '  >
               <Box   className='d-flex me-3 gap-2  flex-row flex-xl-column my-3 '>
                 {productImages.map((src, index) => <Box key={index} width={'100px'} height={'100px'} className=' shadow  ' onClick={() => setImgSrc(src)} >  
                 <img src={src} alt='product' className='rounded-3 ' width={'100%'} height={'100%'} />
                 </Box> )}
               
               

               </Box>
               <div className=' container-fluid shadow rounded-3 '>
               <img className='rounded-5  ' src={imgSrc} alt='product' height={'100%'} width={'100%'}/>
               </div>
            </Box>
             <div className='container-fluid product-details d-flex flex-column justify-content-between shadow p-2 rounded-3 ' style={{minWidth:'auto', minHeight:'auto'}}> 
                    <div className='product-title'> 
                      <h2 className='text-start'>{productName}</h2>
                      <h6 className=''>{productVersion}</h6>
                      {stock>0 ? <h5 className='text-end text-dark'>Instock : <span className='text-primary'>{stock}</span>  left </h5> : <h3 className='text-end text-danger'>Out of Stock</h3> }
                      <h3 className='text-center'>{`${productPrice}/- Rs`}</h3>
                      <Box className='' width={'auto'} display='flex' justifyContent={'start'} ><Rating readOnly value={rating} precision='0.1'/> <h6><span style={{background:'#388E3C', color:'white', borderRadius:'5px', paddingLeft:'5px', paddingRight:'5px'}} >{rating}</span>  </h6> </Box>
                      
                <div className='d-flex justify-content-center'>
                   <button className=' fa fa-shopping-bag btn btn-outline-danger  px-3 m-2 rounded-5 font-weight-bold ' style={{fontSize:'1.3rem'}} onClick={() => buyNow()}> Buy Now</button> 
                      
               { !gotocart ?   <button className=' fa fa-bold fa-cart-plus btn btn-outline-warning  px-3 m-2 rounded-5   ' style={{fontSize:'1.3rem'}}
                onClick={() => {
               dispatch(addProductToCart(product)) 
                setGotocart(true)
                }}> Add to cart</button> : null} 
                { gotocart ?    <button className=' fa fa-bold fa-cart-plus btn btn-outline-success  px-3 m-2 rounded-5 ' style={{fontSize:'1.3rem'}} onClick={() => navigate('/cart')}> Go to Cart </button> : null} 
                    
                  </div> 
                  <Box className='container-fluid' textAlign={'center'} >
                      <p>{productDescription}</p>
                      </Box>
                     </div>
                    
             </div>
       </Box>

        <ProductList/>
    </div>
  )
}

export default ProductPage