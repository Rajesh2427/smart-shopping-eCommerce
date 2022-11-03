import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux'
import logo from './logo.jpg'



const Header = () => {
  const products = useSelector((state) => state.cart)
  const name = localStorage.getItem('accName')
  const email = localStorage.getItem('accEmail')
  


  if(!products) return 'Loading...'
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-3" aria-label="Third navbar example">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>
        <img src={logo} alt='smart shopping' width='200px' />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav ms-auto me-auto mb-2 mb-sm-0">
          <li className="nav-item me-3">
            <NavLink className="nav-link  " style={{fontWeight:'bold'}} aria-current="page"  to="/">
             <span className='fa  fa-home me-2'></span>Home
              </NavLink>
          </li>
         
          <li className="nav-item" >
         
            <NavLink className="nav-link me-3 " to="cart" style={{fontWeight:'bold'}}>
            <span className='fa fa-cart-plus  me-2'></span>  Cart {products.length > 0 ? <span className='bg-danger px-1 rounded-5 text-light' style={{}}>{products.length} </span> : null }
              </NavLink>
          </li>
          </ul>
              <div className="navbar-nav ms-auto me-auto mb-2 mb-sm-0" > <SearchBar/> </div>
            
                {name&&email ? 
<div className="btn-group">
  <button type="button" className="btn btn-outline-dark border-0">{`Hello, ${name}`}</button>
  <button type="button" className="btn btn-outline-dark border-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><p className="dropdown-item btn btn-outline-dark border-0" >{email}</p></li>

    <li><hr className="dropdown-divider"/></li>
    <li><span type='button' className="dropdown-item btn btn-outline-dark border-0 " onClick={()=> {localStorage.clear() 
    window.location.reload();} } >Log out</span></li>
  </ul>
</div> :  <div className='buttons' style={{display:'flex', flexWrap:'nowrap'}}>

<Link to='/login' className='btn btn-outline-dark me-3'> <i className='fa fa-sign-in'/> Sign-In </Link>
<Link to='/signup' className='btn btn-outline-dark me-3 '> <i className='fa fa-user-plus'/> Sign-Up </Link>
</div>

    }
              
          

          {/* <ul className='navbar-nav mr-auto'>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle fa fa-user-secret" href="#" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" >Sign Out</a></li>
            </ul>
          </li>
         </ul> */}

      
      </div>
    </div>
  </nav>
  )
}

export default Header