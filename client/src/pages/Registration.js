import React from 'react'
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
function Registration() {
    const initialValues = {
        username: '',
        password: '',
      };
      let navigate=useNavigate();
      const onSubmit = (values) => {
        axios.post('http://localhost:3001/auth', values)
        .then(()=>{
          console.log(values);
        });
        // Perform submission logic here
      };
    
  return (
    <div className='createPostPage'>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className='formContainer'>
          <label>Username</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" />

          <label>Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Registration
