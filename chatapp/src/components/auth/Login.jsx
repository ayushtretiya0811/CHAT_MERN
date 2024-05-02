import {     Button, TextField, styled } from '@mui/material'
import React, { useState } from 'react'
import {StyledTextField} from '../style'
import Fingerprint from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import axios from "axios";
import Loading from '../Loading';

function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const SubmitLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
          const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/login  ` , {email , password});
          if(res  && res.data.success) {
      
            localStorage.setItem('userInfo', JSON.stringify(res.data.user));
            localStorage.setItem('token', res.data.token);
            toast.success('Login Successfull')
            navigate("/chat")
          }
          else {
            toast.error(res.data.message )
          }
        } catch (error) {
          console.log(error)
          toast.error('somthing went wrong here')
        }finally {
            setIsLoading(false);
          }
      }
          

  return (
    <>
      <div>
      {isLoading && <Loading />}
      {/* Your login/register form here */}
    </div>
    <div className="main-auth">
    <div className="register">
        <h1>Login</h1>
       <form onSubmit={SubmitLogin}>
        <div className="regi-form">

        <StyledTextField  className='reg-from-input' id="standard-basic1" label="Email" variant="standard"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <StyledTextField
          id="standard-password-input2"
          label="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value.trim())}
          type="password" className="regi-from-input"
          autoComplete="current-password"
          variant="standard"
          />    
       {/* <button> */}

      <IconButton aria-label="fingerprint" type='submit' color="success">
  <Fingerprint 
 />

</IconButton>
 {/* </button> */}
       
        
        
           </div>
 </form>
        <p>Don't have an account?</p>
        <Link to="/" className="auth-link" >Register</Link>
    </div>
   </div>

 

    </>
  )
}

export default Login