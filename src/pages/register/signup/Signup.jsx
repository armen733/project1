import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./signup.css";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaTreeCity } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import PaymentForm from "../visacard/VisaCard";


//submit chi anum havanabar select country - ica

const Signup = () => {
  const [selected, setSelected] = useState("");
  const validate = yup.object().shape({
    name : yup.string().required("field is required"),
    surname : yup.string().required("field is required"),
    email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email format"),
    phone : yup.number().required("Giving a number is Required "),
    city : yup.string().required("City is required")
  })

  return (
    <div className="signupdiv">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          country: "",
          city : "",
          phone: "",
        }}
        validationSchema={validate}
        onSubmit={(values)=> console.log(values)}
      >
         {
          ()=>(<Form>
             <div className="formek">
             <div> <h1 className="h1">Register Fast and Easy</h1></div>
            <Field name="name" placeholder="name" className="nameinput"/><FaUser className="nameicon"/>
            <ErrorMessage name="name" component={"h6"}/>
            <Field name="surname" placeholder="surname"/><FaUser className="surnameicon"/>
            <ErrorMessage name="surname" component={"h6"}/>
            <Field className="mail" name="email" placeholder="email"/><MdOutlineMail className="emailicon" />
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              searchable
            />
            <Field name="city" placeholder="city"/> <FaTreeCity className="cityicon"/>
            <ErrorMessage name="city" component={"h6"}/>
            <Field name="phone" placeholder="phone" /><FaPhone className="phoneicon"/>
            <ErrorMessage name="phone" component={"h6"}/>
            <button type="submit" className="signupbtn">Sign Up</button>
            <p>Do you have an account?</p>
            <NavLink to="/signin"><h1>Sign In Now!</h1></NavLink>
               </div>
          </Form>)
        }
      </Formik>
      <div className="visadiv">
        <h1 className="visainfo">Enter Your Card</h1>
        <PaymentForm/></div>
    </div>
  );
};

export default Signup;
