import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './displaycategory.css'


const DisplayCategories = () => {
    const params = useParams()
    const allproducts = useSelector(state => state.products)
   
    if(allproducts.loading) return 'Loading...'
    
    const category = params.category
    const products = allproducts.products.filter(product => product.category === category)


  return (
    <div  className='d-flex flex-wrap gap-3 justify-content-center'>
       {products.map(product => (
                 
                 <div key={product.id} className=" item-box shadow d-flex flex-column justify-content-end" style={{borderRadius:'15px'}} >
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
  )
}

export default DisplayCategories