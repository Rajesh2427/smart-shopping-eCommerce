import React from 'react'
import { useState, useEffect } from 'react'
import './signup.css'
import FetchApi from '../fetchApi/FetchApi'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  
  const [details, setDetails] = useState({
    name: '',
    email:'',
    password:'',
    confirmPassword:''
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
  let headers = {'content-type':'application/json'}
  if(details.name && details.email && details.password && details.confirmPassword){

    if(details.password === details.confirmPassword){
      let body = {...details}
    delete body.confirmPassword
    alert('Signup Successful')
    console.log(details)
    FetchApi('https://63578faac26aac906f2cbf30.mockapi.io/users', 'POST', headers, body).then(response => {
      console.log('new User', response) 
      alert('Signup successful')
      localStorage.setItem('accName',details.name)
      localStorage.setItem('accEmail',details.email)
      window.location.reload();
    })
    }else{
      alert('Check your password')
    }

  }else{
    alert('Please enter the details all the feilds')
  }

  

  }
  return (
    
    <div className=' mt-5 '>
        <h1 className='text-center'>Create a New Account</h1>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <InputElement   type='text' label='Name' placeholder='Enter your name' id='name' value={details.name} handleChange={handleChange}/>
        <InputElement type='email' label='Email' placeholder='Enter your e-mail' id='email' value={details.email} handleChange={handleChange} /> 
        <InputElement type='password' label='Password' placeholder='Enter your Password' id='password' vlaue={details.password} handleChange={handleChange}/>
        <InputElement type='password' label='Confirm Password' placeholder='Enter your Password' id='confirmPassword' vlaue={details.confirmPassword} handleChange={handleChange} />
       
        <button className='btn btn-outline-dark form-control sign-btn mt-3 rounded-5  ' type='submit' > SignUp</button>
        </form>
    </div>
   
  )
}

export default Signup

function InputElement ({label, placeholder, id, type, value, handleChange}) {
    return (
      <div className='input-div'>
      <label className='label' htmlFor={id} >{label}</label>
      <input id={id} type={type} className=' input-feild rounded-5 shadow-lg ps-3 pb-1 mt-3 ' placeholder={placeholder} name={id} value={value} onChange={handleChange} />
  </div>
    )
}