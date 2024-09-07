import React , {useState , useEffect} from 'react' 
import axios from 'axios'

const Profile = () => {
    let [user ,setUser]=useState({});

    
    
    useEffect(()=>{
        let token = localStorage.getItem("access-token");
        axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then(response=>{
            // console.log(response.data);
            setUser(response.data);
        })
    },[])
    
    
  return (
   <>
   <div className="container">
    <div className="row">
        <div className="col-md-8 offset-md-2">
            <table className='table table-dark'>
                <tbody>
                <tr>
                    <td>Email</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Role</td>
                    <td>{user.role}</td>
                </tr>
                <tr>
                    <td>Image</td>
                    <td><img src="{user.avatar}" style={{height:"100px" , width:'100px'}} /></td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
   </div>
   </>
  )
}

export default Profile