import React , {useState , useEffect } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as YUP from 'yup'
import { useNavigate } from 'react-router-dom'
let loginFrmSchema  = YUP.object({
    email: YUP.string().required("Insert username"),
    password: YUP.string().required("Insert password")
})
const Login = () => {
let navigate = useNavigate();
    let[spinner,setSpinner]=useState(false);
    let [errMsg , setErrMsg]=useState("");

let loginFrm = useFormik({
    validationSchema : loginFrmSchema,
    initialValues:{
        email:"",
        password:""
    },
    onSubmit:async(formdata)=>{
        setSpinner(true);
        try{
 let response= await axios.post("https://api.escuelajs.co/api/v1/auth/login",formdata);
 localStorage.setItem("access-token", response.data.access_token);
        setSpinner(false);
navigate("/profile");
    }
    catch{
        setSpinner(false);
        setErrMsg("incorrect email or password")
    }

    }
})
  return (
    <div className="container my-3">
        <div className="row">
            <form onSubmit={loginFrm.handleSubmit} >
            <div className="col-md-8 offset-md-2">
                <div className="my-2">
                    <label >Email</label>
                    <input name='email' type="text" onChange={loginFrm.handleChange} className={'form-control '+(loginFrm.errors.email && loginFrm.touched.email ? 'is-invalid':'')} />
                </div>
                <div className="my-2">
                    <label >Password</label>
                    <input name='password' onChange={loginFrm.handleChange} type="password" className={'form-control '+(loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid':'')} />
                </div>
                <button className='btn btn-success'>Login {spinner? <span className='spinner-btn spinner-border'> </span> : ""}</button>
                <h4 className='text-danger text-center'>{errMsg}</h4>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login