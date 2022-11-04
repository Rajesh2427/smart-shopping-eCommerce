import React from 'react'
import { NavLink } from 'react-router-dom'
import './categories.css'
import Laptop from '../../assets/category/Laptop.png'
import Camera from '../../assets/category/Camera.png'
import TV from '../../assets/category/TV.png'
import Accessories from '../../assets/category/Accessories.png'
import Headphones from '../../assets/category/Headphones.png'
import Speakers from '../../assets/category/Speakers.png'
import Storage from '../../assets/category/Storage.png'


const Categories = () => {
  return (
    <div className='w-100' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h6 className='text-start align-self-start'>Categories</h6>
      <div className=' d-flex container-fluid box'>
     <Category title={'Laptops'} image={Laptop}/>
     <Category title={'Camera'} image={Camera}/>
     <Category title={'TV'} image={TV}/>
     <Category title={'Headphones'} image={Headphones}/>
     <Category title={'Speakers'} image={Speakers}/>
     <Category title={'Accessories'} image={Accessories}/>
     <Category title={'Storage'} image={Storage}/>
      </div>
    </div>
  )
}

export default Categories

function Category ({title, image}){
 return (
 
  <NavLink to={`/categories/${title}`} className='text-decoration-none container-fluid' style={{height:'70px'}}  >
  <div className='box-category   d-flex align-items-center '>
    <div className='title d-flex  text-start align-items-center '><h6 >{title}</h6> </div>
    <div className='image'>
          <img src={image} alt='title' />
    </div>
  </div>
  </NavLink>
 
 )
}