import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [dataemail, setData] = useState("")
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlesubmit=  (e)=>{
    e.preventDefault();
    // console.log(email,password);
    const config={
      headers:{
        'Content-Type':'application/json'
      },
    };
    setLoading(true);
    // const payload={email:email,password:password};
    setData(password);
    
    
    // console.log(payload);
    //  axios.post("http://localhost:5000/api/users/login",{payload})
    //   .then((res)=>console.log(res))
    //   .catch((err)=>console.log(err))
    // try {
    //   const config={
    //     headers:{
    //       'Content-Type':'application/json'
    //     },
    //   };
    //   setLoading(true);

    //   await axios.post("http://localhost:5000/api/users/login",{email:email,password:password},config)
    //     .then((res)=>console.log(res))
    //     .catch((err)=>console.log(err))


    //   // const response = await fetch('http://localhost:5000/api/users/login',{
    //   //               method:'POST',
    //   //               headers:{
    //   //                   'Content-Type':'application/json'
    //   //               },
    //   //               body:JSON.stringify({email:email,password:password})
    //   //             });
    //   // console.log(response);
    //   console.log("Email and pass :: ",email,password);

    //   // store user data on local storage
    //   // localStorage.setItem("userInfo",JSON.stringify(data));
    //   setLoading(false);
    // } catch (error) {
    //   setError(error.response.data.message);
    // }
  //  console.log(email,password);
  }

  console.log(dataemail);
  
  return (
    <>
      <h1>Login</h1>
      {loading ? (<>Loading...</>):null}
      {error ?(<h3>{error}</h3>):null }
   {dataemail ? dataemail :null}
      <form onSubmit={(e)=>handlesubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter your email' name='email' value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" placeholder='enter your password' name="password" 
          onChange={(e)=>setPassword(e.target.value)}
          value={password}/>
        </div>
        <button  type="submit">Submit</button>
      </form>
      <div>
        <h4>New Customer? <Link to="/signup">Register here!</Link> </h4>
      </div>
    </>
  )
}
