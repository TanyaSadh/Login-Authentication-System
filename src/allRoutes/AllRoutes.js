import React from 'react'
import {Routes,Route , Navigate,Outlet} from 'react-router-dom'
import  Home from '../components/feature/Home'
import Student from '../components/feature/Student'
import AllStudent from '../components/feature/AllStudent'
import Login from '../components/feature/Login'
import Profile from '../components/feature/Profile'
import Logout from '../components/feature/Logout' 
const AllRoutes = () => {
  return (
<>
    <Routes>
       <Route path='' element={<Home/> }/>
       <Route path='student' element={<Student/> }/>
       <Route path='student/add' element={<AllStudent/> }/>
       <Route path='student/edit/:id' element={<AllStudent/> }/>
        <Route path='login' element={<Login/> }/> 
        <Route path='logout' element={<Logout/> }/> 
        <Route path='' element={<ProtectedRoute/> }> 
            <Route path='profile' element={<Profile/> }/> 
         </Route>
       
    </Routes>

    </>
  )
}

  let ProtectedRoute=()=>{
 if (!localStorage.getItem("access-token")){
  return(
    <Navigate to="/login"></Navigate>
  )
 }
 return(
  <Outlet/>
 )
  
}


export default AllRoutes