import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import './search.css'


const SearchBar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
         e.preventDefault()
         if(search)
          navigate(`search/${search}`)
         
    }
  
    
  return (
    
         <form role="search" onSubmit={handleSubmit}>
            <div className='d-flex mb-2'>
          <input className='form-control ' id='searchinput' type="text" placeholder="Search your products..." aria-label="Search" onChange={(e) => setSearch(e.target.value)}/> 
          <button className=' btn btn-outline-dark fa fa-search'></button>
          </div>
        </form>
   
  )
}

export default SearchBar