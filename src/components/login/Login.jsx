import React from 'react'
import { useState, useEffect } from 'react'
import './login.css'
import FetchApi from '../fetchApi/FetchApi'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
  const [details, setDetails] = useState({
    email:'',
    password:''
  })
  
  const navigate = useNavigate()
  const name = localStorage.getItem('accName')
  const email = localStorage.getItem('accEmail')

  useEffect(()=>{
    if(name && email) {
      navigate('/')
    }
  })

 const handleChange =({target:{name,value}}) =>{

   let updatedDetails = {...details} 
   updatedDetails[name] = value
   setDetails(updatedDetails)
 }

  const handleSubmit =(e)=>{
  e.preventDefault()
  console.log(details)
  FetchApi('https://63578faac26aac906f2cbf30.mockapi.io/users', 'GET').then(response => {
    console.log( 'user details', response) 
       let allUsers = response;
       let  filterUser = allUsers.filter(user => user.email === details.email && user.password === details.password)
       console.log(filterUser[0])
       if(filterUser.length === 1){
        alert('Login successful')
        localStorage.setItem('accName',filterUser[0].name);
        localStorage.setItem('accEmail',filterUser[0].email);
        window.location.reload();
       
        
       }else {
        alert('Please check your login details')
       }
       
  })
   


  }
  return (<>
              
           <div className='  mt-5'>
        <h1 className='text-center'>Login to your Account</h1>
         <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <InputElement type='email' label='Email' placeholder='Enter your e-mail' id='email' value={details.email} handleChange={handleChange} /> 
        <InputElement type='password' label='Password' placeholder='Enter your Password' id='password' vlaue={details.password} handleChange={handleChange}/>
         
        <button className='btn btn-outline-dark form-control sign-btn mt-3 rounded-5  ' type='submit' > Login</button>
        </form>
        
    </div>
    
                     
  </>
   
  )
}

export default Login

function InputElement ({label, placeholder, id, type, value, handleChange}) {
    return (
      <div className='input-div'>
      <label className='label' htmlFor={id} >{label}</label>
      <input id={id} type={type} className=' input-feild rounded-5 shadow-lg ps-3 pb-1 mt-3 ' placeholder={placeholder} name={id} value={value} onChange={handleChange} />
  </div>
    )
}