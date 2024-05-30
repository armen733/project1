import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import "./signin.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import * as yup from "yup"

const Signin = ({users}) => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()


  const handleShowChange = ()=>{
    setShow(!show)
    // console.log(show);
  }
  const validate = yup.object().shape({
    username : yup.string().required("field is required"),
    password : yup.string().required("field is required")
  })
  const authorizateUser = (logedUser)=>{
    // console.log(logedUser);
    let inuser = users.find((el)=> el.username === logedUser.username && el.password === logedUser.password)
    if (inuser) {
      // console.log(inuser);
     return  navigate("/profile", {state : inuser})
    } else console.log("eror");
  }
  return (
    <div className='formikdiv'>
      <Formik
      initialValues={{
        username : "",
        password : ""
      }}
      validationSchema={validate}
      onSubmit={(values)=> authorizateUser(values)}
      >
       { ()=> (<div className='formikdiv1'>
        <Form>
          <div className='forms'>
           <Field name="username" placeholder="username"/><FaUser className='log' /> 
           <ErrorMessage name='username' component="h6"/>
            <Field type={show ? "text" : "password"}  name="password" placeholder="password"/><FaLock onClick={handleShowChange} className='pasw'/>
            <ErrorMessage name='password' component={`h6`}/>
            <button type='submit' className='sbm'  >Sign in</button>
            <p>Dont have an account?</p>
            <NavLink to="/signup"><h1>Register Now!</h1></NavLink>
          </div>
        
        </Form>
        </div>)
     }  </Formik>
    </div>
  )
}

export default Signin
