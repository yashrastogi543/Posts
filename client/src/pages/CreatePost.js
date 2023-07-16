import React from 'react';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
function CreatePost() {
  const initialValues = {
    title: '',
    username: '',
    postText: '',
  };
  let navigate=useNavigate();
  const onSubmit = (values) => {
    axios.post('http://localhost:3001/posts', values)
    .then(response=>{
      // console.log(response.data);
      navigate('/');
    })
    
    // Perform submission logic here
  };

  return (
    <div className='createPostPage'>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className='formContainer'>
          <label>Title</label>
          <Field type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" />

          <label>Post:</label>
          <Field type="text" id="postText" name="postText" />
          <ErrorMessage name="postText" component="div" />

          <label>Username:</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" />

          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
