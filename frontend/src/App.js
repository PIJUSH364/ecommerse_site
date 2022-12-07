import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Navbar } from "./Navbar";
import { Signup } from "./Signup";

function App() {
  const [data, setUserData] = useState([]);

  // const fetchFromServer= async()=>{
  //   const {data}=await axios.get("/api/all");
  //   setUserData(data);
  // }
  // useEffect(() => {
  //   fetchFromServer();
  // }, [])
  
  return (
   <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home data={data}/>}></Route>
      <Route exact path='login' element={<Login/>}></Route>
      <Route exact path='signup' element={<Signup/>}></Route>
    </Routes>
    
   </>
  );
}

export default App;
