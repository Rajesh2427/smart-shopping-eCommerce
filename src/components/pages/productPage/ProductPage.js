import React, {useState,useEffect} from 'react'
import './productpage.css'
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
    <div>
 
       <Box className='d-flex  flex-xs-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  justify-content-center   text-dark  pt-5 w-100 mb-5  product-page-box ' alignItems={{xs:'center', sm:'center', md:'flex-start', lg:'flex-start'}} flexDirection={{xs:'column'}} gap={{xs:2, sm:2, md:7, lg:10}} style={{minHeight:'auto'}} >
            <Box className='d-flex  flex-lg-row flex-md-row flex-sm-column flex-xs-column text-dark gap-3  ' flexDirection={{xs:'column'}} >
               <Box  flexDirection={{xs:'row', sm:'column', md:'column'}} width={{xs:'100%', sm:'auto',}} className='d-flex  gap-2 slide-images  '>
                 {productImages.map((src, index) => <Box key={index}  className='mini-image w-auto shadow ' onClick={() => setImgSrc(src)} >  
                 <img src={src} alt='product' className='rounded-3' width='100px' height='100px'/>
                 </Box> )}
               
               

               </Box>
               <div className='main-image  shadow rounded-3 '>
               <img className='rounded' src={imgSrc} alt='product' width='100%' height='100%'/>
               </div>
            </Box>
             <div className='product-details d-flex flex-column justify-content-between shadow p-2 rounded-3 ' style={{minWidth:'auto', minHeight:'auto'}}> 
                    <div className='product-title'> 
                      <h2 className='text-start'>{productName}</h2>
                      <h6 className=''>{productVersion}</h6>
                      {stock>0 ? <h5 className='text-end text-dark'>Instock : <span className='text-primary'>{stock}</span>  left </h5> : <h3 className='text-end text-danger'>Out of Stock</h3> }
                      <h3 className='text-center'>{`${productPrice}/- Rs`}</h3>
                      <Box width={'auto'} display='flex' justifyContent={'start'} ><Rating readOnly value={rating} precision='0.5'/> <h6><span style={{background:'#388E3C', color:'white', borderRadius:'5px', paddingLeft:'5px', paddingRight:'5px'}} >{rating}</span>  </h6> </Box>
                      
                <div className='d-flex justify-content-center'>
                   <button className='fa fa-shopping-bag btn btn-outline-danger btn-lg px-3 m-2 rounded-5 font-weight-bold ' style={{fontSize:'1.3rem'}} onClick={() => buyNow()}> Buy Now</button> 
                      
               { !gotocart ?   <button className=' fa fa-bold fa-cart-plus btn btn-outline-warning btn-lg px-3 m-2 rounded-5   ' style={{fontSize:'1.3rem'}}
                onClick={() => {
               dispatch(addProductToCart(product)) 
                setGotocart(true)
                }}> Add to cart</button> : null} 
                { gotocart ?    <button className=' fa fa-bold fa-cart-plus btn btn-outline-success btn-lg px-3 m-2 rounded-5 ' style={{fontSize:'1.3rem'}} onClick={() => navigate('/cart')}> Go to Cart </button> : null} 
                    
                  </div> 
                  <Box textAlign={'center'} >
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