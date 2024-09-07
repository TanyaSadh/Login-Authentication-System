import React,{useState , useEffect} from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    localStorage.removeItem("access-token");
  return (
    <Navigate to="/"></Navigate>
  )
    
   
   
}

export default Logout