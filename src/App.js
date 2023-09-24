import './App.css';
import { TextField } from '@mui/material';
import { useState } from 'react';

function App() {
  const handleMouseEnter = e => {
    e.target.style.background = "grey"
  }
  const handleMouseLeave = e => {
    e.target.style.background = "maroon"
  }
  const [Name,setName] = useState(0)
  const [Email,setEmail] = useState(0)
  const [Password,setPassword] = useState(0)
  const [ConfirmPassword,setConfirmPassword] = useState(0)
  const [isNameValid,setIsNameValid] = useState(true)
  const [isEmailValid,setIsEmailValid] = useState(true)
  const [isPasswordValid,setIsPasswordValid] = useState(true)
  const [isConfirmPasswordValid,setIsConfirmPasswordValid] = useState(true)



  const handleregister = (e)=>{
    e.preventDefault()
    if(!Name || !Email|| !Password || !ConfirmPassword){
      alert("Please fill the form completely !!!!")
    }else{}
  }

  const add = (user) => {
    alert(` 
    ----Details----
    Name:${Name} 
    Email:${Email}
    Password:${Password}
    `)
  }

  const Nameinput = (e)=>{
    const {value,name} =e.target
    if(!!value.match(/[a-z]+$/)){
     if(name==="Name"){
      setName(value)
      setIsNameValid(true)
     }  
    }else{
      if(name==="Name"){
        setName(value)
        setIsNameValid(false)
      }
    }
  }

  
  const Emailinput = (e)=>{
    const {value,name} =e.target
    if(!!value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
    if(name==="Email"){
      setEmail(value)
      setIsEmailValid(true)
     }
    }else{
     if(name==="Email"){
        setEmail(value)
        setIsEmailValid(false)
      }
    }
  }

  const Passwordinput = (e)=>{
    const {value,name} =e.target
    if(!!value.match(/[a-z0-9]+$/)){
    if(name==="Password"){
      setPassword(value)
      setIsPasswordValid(true)
     }
    }else{
     if(name==="Password"){
        setPassword(value)
        setIsPasswordValid(false)
      }
    }
  }

  const ConfirmPasswordinput = (e)=>{
    const {value,name} =e.target
    if(value !== Passwordinput){
    if(name==="ConfirmPassword"){
      setConfirmPassword(value)
      setIsConfirmPasswordValid(true)
     }
    }else{
     if(name==="ConfirmPassword"){
        setConfirmPassword(value)
        setIsConfirmPasswordValid(false)
      }
    }
  }


  

  return (
     
      <div style={{height:'100vh'}} className='background d-flex justify-content-center align-items-center '>
      <div style={{width:'500px'}} className=' bg-light rounded p-4'>
      <div className='heading'>
        <h1 style={{fontFamily:'initial'}} className='reg text-center fw-1 fs-1'>Register</h1>
        <hr />
      </div>
      <form  className='text-center ' onSubmit={(e)=>handleregister(e)}>
        <div >
        <TextField style={{width:'400px',marginBottom:'20px'}} id="standard-basic" label="Name" variant="standard" value={Name || ""} name='Name' onChange={(e)=>Nameinput(e)} />
        </div>
        {
          !isNameValid &&
          <div className='mb-3 text-danger'>
            *Invalid Name Format
          </div>
        }
        <div>
        <TextField style={{width:'400px',marginBottom:'20px'}}  id="standard-basic" label="Email" variant="standard" value={Email || ""} name='Email' onChange={(e)=>Emailinput(e)} />
        </div>
        {
          !isEmailValid &&
          <div className='mb-3 text-danger'>
            *Invalid Email Address
          </div>
        }
        <div>
        <TextField style={{width:'400px',marginBottom:'20px'}}  id="standard-basic" label="Password" variant="standard" value={Password || ""} name='Password' onChange={(e)=>Passwordinput(e)} />
        </div>
        {
          !isPasswordValid &&
          <div className='mb-3 text-danger'>
            *Invalid Input , Password should not contain any Special characters
          </div>
        }
        <div>
        <TextField style={{width:'400px',marginBottom:'40px'}}  id="standard-basic" label="Confirm Password" variant="standard" value={ConfirmPassword || ""} name='ConfirmPassword' onChange={(e)=>ConfirmPasswordinput(e)} />
        </div>
        {
          !isConfirmPasswordValid &&
          <div className='mb-3 text-danger'>
            *Invalid Input , Passwords does not match !!! 
          </div>
        }
        <button disabled= { isNameValid && isEmailValid && isPasswordValid?false:true }  style={{marginBottom:'20px'}}  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className='btn bg-light p-2' onClick={() => add()} >Sign Up</button>
        <div style={{marginBottom:'10px'}} className='d-flex justify-content-center'>
          <h6 style={{fontFamily:"initial",fontSize:'18px',marginRight:'5px'}}>Have an Account ? </h6> 
          <a href='f' style={{textDecoration:'none',fontFamily:"initial"}}>   Login Here</a>
        </div>
      </form>
      </div>
      </div>
     
  )
}

export default App;
