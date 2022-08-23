import React, { Component } from 'react'
import axios from 'axios';
export default class SignUp extends Component {
  

registeruser = event => {
   let formElement = document.getElementById("register");
  let  bodyFormData = new FormData(formElement);
 
  let isValid = document.querySelector('#register').reportValidity();

  
   if (isValid==false) {
  document.querySelector('#register').reportValidity();
    formElement.classList.add('was-validated')
   }else{

axios({
  method: "post",
  url: "http://127.0.0.1:8000/api/auth/register",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
    //handle success
    alert(response['data']['menssage']);
  }).catch(function (response) {
    //handle error
    console.log(response);
  });
  }
  }

  render() {

    return (
      <form id="register">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label> names and surnames</label>
         <input type="text"name="name" className="form-control" placeholder="names and surnames" required />
        </div>
       
        <div className="mb-3">
          <label> Identificacion</label>
         <input type="text" name="identificacion" className="form-control" placeholder="Identificacion" required />
        </div>

        <div className="mb-3">
          <label> address</label>
         <input type="text"name="direccion" className="form-control" placeholder="address" required />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"name="email"
            className="form-control"
            placeholder="Enter email"
         required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password" required
          />
        </div>
        <div className="d-grid">
          <button type="button" onClick={this.registeruser}className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
          </p>
      </form>
    )
  }
}