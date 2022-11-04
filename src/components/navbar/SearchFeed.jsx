import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../ProductList'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

const SearchFeed = () => {

      const {searchTerm} = useParams()
      const productsSlice = useSelector(state => state.products)
      const {products} = productsSlice
      const filterProducts = products.filter((product) => product.productName.toLowerCase().includes(searchTerm))
    console.log(searchTerm)
  
   
     console.log(productsSlice)
     console.log(products)
     console.log(filterProducts)
    // if(products.loading) return 'Loading...'
    return (
        <div  style={{display:'flex', flexWrap:'wrap', gap:'20px', width:'100%' , justifyContent:'center',  }}>
          
          { filterProducts.length === 0 ?  <div>    <h3 className='bg-warning rounded-3 px-3' >  No Products Found  with : {searchTerm} </h3> </div> : filterProducts.map(product => (
             
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

            ))  } 
             
             <div className='mt-5'>
                <h3 className='text-center'>Check out Latest Products</h3>
                <ProductList/>
             </div>
    </div>
    )
}

export default SearchFeed