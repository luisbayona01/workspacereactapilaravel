import React, { useState, Component } from 'react'
import axios from 'axios';
import Loading from './loading.component.js'
const Login = () => {
const [isLoading, setIsLoading] = useState(false)
	const loginuser = (event) => {
    setIsLoading(true)
   let formElement = document.getElementById("login");
  let  bodyFormData = new FormData(formElement);
 
  let isValid = document.querySelector('#login').reportValidity();

  
   if (isValid==false) {
  document.querySelector('#login').reportValidity();
    formElement.classList.add('was-validated')
   }else{
 
axios({
  method: "post",
  url: "http://127.0.0.1:8000/api/auth/login",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
    //handle success
    console.log(response['data']['ok']);
    if(response['data']['ok']==false){
    console.log(response['data']['user'])	
      alert(response['data']['user'])   
     return false;
      }

if(response['data']['ok']==true){
     let userlogeado= response['data']['user']['id'];
     //console.log(userlogeado);
  let token= response['data']['token']
     localStorage.setItem('userlogeado',userlogeado );
     localStorage.setItem('token',token );
     localStorage.setItem('isLogin', true)
     window.location.href="/products"
        }
        setIsLoading(false)
    //alert(response['data']['menssage']);
  }).catch(function (response) {
    //handle error
    console.log(response);
    setIsLoading(false)
  });
  }
  }
  if(isLoading){
      <Loading />
  }else{

    return (

      <form  id="login">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password" name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="button"onClick={loginuser} className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
}}

export default Login;