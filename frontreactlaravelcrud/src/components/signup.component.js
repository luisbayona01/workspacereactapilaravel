import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form id="register">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label> names and surnames</label>
         <input type="text" className="form-control" placeholder="names and surnames" />
        </div>
       
        <div className="mb-3">
          <label> Identificacion</label>
         <input type="text" className="form-control" placeholder="Identificacion" />
        </div>
        
        <div className="mb-3">
          <label> address</label>
         <input type="text" className="form-control" placeholder="address" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="button" className="btn btn-primary">
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