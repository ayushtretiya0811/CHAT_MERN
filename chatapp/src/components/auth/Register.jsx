import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {StyledButton} from '../style'
import {StyledTextField} from '../style'
import { toast } from 'react-hot-toast';
import axios from "axios";
// import Loader from './Loader';
import Loading from '../Loading'
function Register() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // console.log(name,email, password );
    const navigate = useNavigate();
    const SubmitRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
          const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/register  ` , {name , email, password});
          if(res  && res.data.success) {
            toast.success('Register Successfull')
            navigate("/login")
          }
          else {
            toast.error(res.data.message )
          }
        } catch (error) {
          console.log(error)
          toast.error('somthing went wrong here')
        }
        finally {
            setIsLoading(false);
          }
      }



  return (
   <>
   <div>

    {isLoading && <Loading />}
   </div>
   <div className="main-auth">
    <div className="register">
        <h1>Register</h1>
            <form onSubmit={SubmitRegister}>
        <div className="regi-form">

        <StyledTextField  className='reg-from-input'  id="standard-basic1" label="Name" variant="standard"
             onChange={(e) => setname(e.target.value)}  value={name}
        />
        <StyledTextField  className='reg-from-input' id="standard-basic2" label="Email" variant="standard" 
           onChange={(e) => setemail(e.target.value)}
          
           value={email}
        />
        <StyledTextField
          id="standard-password-input3"
          label="Password"
          onChange={(e) => setpassword(e.target.value)}
       
          value={password}
          type="password" className='reg-from-input' 
          autoComplete="current-password"
          variant="standard"
          />  
        
        {/* <button> */}
        <StyledButton type='submit' className='reg-from-input auth-button' variant="contained" color="success" 
       
       >

        Register
       </StyledButton>
   
        {/* </button> */}
        
        
           </div>
       </form>
        <p>Already have an account?</p>
        <Link  >Login</Link>
    </div>
   </div>



   </>
  )
}

export default Register