import React, {useState, useEffect , useRef} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import API_URL from '../../util/API_URL'
import { useNavigate } from 'react-router-dom'

const Student = () => {
  let navigate=useNavigate();
  let closeBtn=useRef();
  let [allStu,setAlltu]= useState([]);
  let [stu,setStu]= useState({});

  useEffect(()=>{
    getData();
  },[])

  let getData = async ()=>{
    let result = await axios.get(`${API_URL}`);
    setAlltu(result.data);
  }
  

  let askDelete =(obj)=>{
    setStu(obj); 
  }
let confDelete=async ()=>{
  let result=await axios.delete(`${API_URL}/${stu.id}`);
  setAlltu(()=>{
    return allStu.filter(item=> item.id!= stu.id);
  })
  closeBtn.current.click();
}

let askEdit =(obj)=>{
  navigate("/student/edit/"+obj.id)
}
  return (
    <>
   <div className="row">
    <div className="col-md-6 offset-md-3 mt-3">
        <NavLink className="btn btn-info" to="/student/add ">Add New Student</NavLink>
        <table className='table table-dark my-3'>
          <thead>
           <tr>
              <td>S.no</td>
              <td>Name</td>
              <td>Fee</td>
              <td>Gender</td>
              <td>Address</td>
             <td>Edit</td>
             <td>Delete</td>
            </tr>
          </thead>
          <tbody>
{
  allStu.map((item,index)=>{
    return(
    <tr key={item.id}>
      <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.fee}</td>
      <td>{item.gender}</td>
      <td>{item.address}</td>
      <td><button onClick={()=>askEdit(item)} className='btn btn-sm btn-info'>Edit</button></td>
              <td><button onClick={()=>askDelete(item)} data-bs-toggle='modal' data-bs-target='#delModal' className='btn btn-sm btn-danger'>Delete</button></td>
      </tr>
    )
  })
}
          </tbody>
        </table>
    </div>
   </div>

   <div className="modal fade" id="delModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Delete Student</h4>
        </div>
        <div className="modal-body">
          <p>Are you sure to delete <b>{stu.name}</b></p>
        </div>
        <div className="modal-footer">
          <button onClick={confDelete} className='btn btn-danger'>Delete</button>
          <button ref={closeBtn} data-bs-dismiss="modal" className='btn btn-info '>Close</button>
        </div>
      </div>
    </div>
   </div>
   </>

  )
}

export default Student