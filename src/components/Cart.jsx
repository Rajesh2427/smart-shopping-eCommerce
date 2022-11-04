import React, { useEffect, useState } from 'react'
import { removeProductFromCart , addProductToCart, orderPlaced, deleteProduct } from '../features/cartSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'



const Cart = () => {
  
  useEffect(()=>{
    if(totalAmount > 0){
      setPlaceOrderProducts(true)
     }else{
      setPlaceOrderProducts(false)
     }

     if(accname && accemail){
      setPlaceOrderLogin(true)
     }else{
      setPlaceOrderLogin(false)
     }
  })
 
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)

  const accname = localStorage.getItem('accName')
  const accemail = localStorage.getItem('accEmail')

  const [placeOrderLogin, setPlaceOrderLogin] = useState(false)
  const [placeOrderProducts, setPlaceOrderProducts] = useState(false)

    

  let totalAmount = 0
   
   const itemTotal = (p,q) => {
    let rp = p.replace(',', '')
    
    let iT = rp*q
     totalAmount +=iT
    return iT
   }
    
    
    if(!products) return 'Loading...'
   
  return (
    <div className='flex-xs-column flex-sm-column flex-md-row cartmain' style={{width:'100%', height:'100%', display:'flex', flexDirection:'column',  justifyContent:'space-between'}} >
    
    <div className='cartitems' style={{display:'flex', flexWrap:'wrap', gap:'20px', width:'60%', alignSelf:'center' }}>
{products.length === 0 ? <div className='d-flex justify-content-center align-items-center flex-column  ' style={{width:'100%', height:'auto', }}> <h1> Your cart is empty</h1> <br/> <Link to='/' className='text-decoration-none'> Click here to Shop </Link> </div> : null } 
{ products.map((product )=> (

<div key={product.id} className="card shadow-lg d-flex flex-column align-items-center rounded-5" style={{minWidth: 'auto', height:"500", background:'white'}} >
<Link to={`/product/${product.id}`}>
<img className="card-img-top " alt={product.productName} style={{width: '250px', height:"250px", borderRadius:'15px', margin:'2px' }} src={product.productImages[0]} />
</Link>
<div className='d-flex flex-column ' style={{width:'100%'}}>
   <div className="card-body align-self-start" >
    <h5 className="card-title " >{product.productName}</h5>
    <p > {product.productVersion}</p>
    <div>
    <span className='px-2' >Quantity</span>
     <button className=' btn-outline-dark rounded-1' onClick={() => dispatch(removeProductFromCart(product))}>-</button>
     <span className='px-2' >{product.qty}</span> 
     <button className=' btn-outline-dark rounded-1'onClick={() => dispatch(addProductToCart(product))}>+</button>

   </div>
    </div>
    <div className='d-flex ' style={{justifyContent:'space-between'}}>
    <h5 className='text-center ms-2'> {`${product.productPrice}/- Rs`}</h5>
    
  
    <button className='fa fa-shopping-bag btn btn-outline-danger  mx-4 mb-2  rounded-5  ' onClick={() => dispatch(deleteProduct(product))}> Delete Item</button>
    
    
    </div>
</div>
</div>

))}
  

</div>


      <div style={{display:'flex', flexDirection:'column', flexWrap:'NoWrap',}} className='checkout shadow-lg text-center px-5 rounded-5 '>
       <h5 className='text-center mt-5 '  style={{fontWeight:'bold'}}>Check Out</h5>
         {products.map((product) => (
         <div className='mt-3 p-2 px-5 rounded-5' style={{background:'#F3F3F3'}}>
           <h6 className='text-start'>{product.productName}</h6>
           <div className='d-flex flex-nowrap   '>
           <p className='me-2 d-inline'>{`${product.productPrice} X ${product.qty}  =`}</p>
           <p className='font-weight-bold d-inline'>{itemTotal(product.productPrice, product.qty)}</p>
           </div>
           
         </div>
         ))}
          <div className='mt-5 h5'>Total : <span style={{fontWeight:'bold'}}> {totalAmount}</span> RS</div> 
        {!placeOrderProducts ? <div> <h6 className='text-danger'> Add Items to place the order</h6></div> : null}
        { !placeOrderLogin ? <div> <h6 className='text-danger'> Login to your account before placing the order</h6></div> : null  }   
          {placeOrderLogin && placeOrderProducts ? <div onClick={() => dispatch(orderPlaced())} className='btn btn-outline-success rounded-5 m-5' data-bs-toggle="modal" data-bs-target="#exampleModal">Place Order</div> : null}

          
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Launch demo modal
</button> */}


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
 <div className="modal-content">
   <div className="modal-header">
     <h1 className="modal-title fs-5" id="exampleModalLabel">Order Placed</h1>
     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div className="modal-body">
     Your order no : #{Math.floor(Math.random()*1000)}
   </div>
   <div className="modal-footer">
     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    
   </div>
 </div>
</div>
</div>
      </div>
        
</div>
  )
}




export default Cart