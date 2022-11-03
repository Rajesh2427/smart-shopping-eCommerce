import React from 'react'
import Banner from './Banner/Banner'
import SearchBar from './navbar/SearchBar'

import ProductList from './ProductList'


const Home = () => {
  return (
    <div className='d-flex'style={{display:'flex', flexDirection:'column', justifyContent:'center'}} >
      <Banner/>
        <ProductList/>
       
    </div>
  )
}

export default Home