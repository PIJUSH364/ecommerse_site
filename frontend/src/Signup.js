import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Signup = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [name, setName] = useState(" ");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlesubmit= async (e)=>{
    e.preventDefault();
    try {
      const config={
        headers:{
          "Content-type":"application/json"
        },
      };
      setLoading(true);

      const {data}=await axios.post("/api/users/login",{
        email,password,
      },config);
      
      console.log(data);
      // store user data on local storage
      localStorage.setItem("userInfo",JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
   console.log(name,email,password);
  }
  return (
    <>
      <h1>Register here</h1>
      {loading ? (<>Loading...</>):null}
      {error ?(<h3>{error}</h3>):null }
      {message ? message:null}
      <form onSubmit={handlesubmit}>
      <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='enter your password' name="name" 
          onChange={(e)=>setName(e.target.value)}
          value={name}/>
        </div>
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
        <h4>all ready register? <Link to="/login">login here!</Link> </h4>
      </div>
    </>
  )
}
