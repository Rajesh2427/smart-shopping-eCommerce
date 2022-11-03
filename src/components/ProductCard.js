import {React, useState} from 'react'
import { addProductToCart } from '../features/cartSlice'
import FetchApi from './fetchApi/FetchApi'
import LoadingSpinner from './LoadingSpinner'
import { useDispatch} from 'react-redux'
import { removeProductFromCart } from '../features/cartSlice'
import '../styles/productcard.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const ProductCard = ({products}) => {


    const navigate = useNavigate()
     const dispatch = useDispatch()
     

  return (
    <>
    <div  style={{display:'flex', flexWrap:'wrap', gap:'20px', width:'100%' , justifyContent:'center',  }}>
          {products.loading && <LoadingSpinner/>}
          {!products.loading && products.error ? <h1 style={{color:'red'}}> Error : {products.error}</h1> : null}
         {products.products.map(product => (
           
              <div key={product.id}  className=" item-box shadow d-flex flex-column justify-content-end" style={{borderRadius:'15px'}} >
                 <Link to={`/product/${product.id}`}>
              <img className="" src={product.productImages[0] ? product.productImages[0] : "https://tinyurl.com/59ynrhkt"} alt='product' width='350px' height='100%'/>
              </Link>
              <div className='d-flex flex-row align-items-center  justify-content-evenly '>
                   <div >
                    <h6>{product.productName} </h6>
                    <p>{product.productVersion}</p>
                  </div>
                    
                     <div className='text-end h6 d-flex flex-column ' >{`${product.productPrice}/- Rs`}
                          <div className='d-flex mt-3 '>
                     <i className='fa fa-star text-warning '> </i> <span >{`${product.rating}/${product.ratingTotal}`}</span>
                           </div>
                     </div>
                       
                    
                 </div>
               
              </div>
             

            ))}

    </div>

    

    </>
  )
}

export default ProductCard