import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Signup.css'

const Signup = () => {
  return (
    <div>
         <div className="signup">
      <div className="card">
      <div className="left">
          <h1 className='nunito-sans-unique'>Book Nexus</h1>
          <p className='nunito-sans-unique'>The ultimate e-library dedicated exclusively to the captivating world of fantasy literature</p>
          <span className='nunito-sans-unique'>Already have an account?</span>
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
        <h1>Sign Up</h1>
            <form>
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  
                />
             
                <input
                  className="email"
                  type="password"
                  name="Password"
                  placeholder="Password"
                  
                />
                <input
                  className="email"
                  type="password"
                  name="Password"
                  placeholder="Confirm Password"
                  
                />
                
                <button
                 
                  className="btn-primary mar">
                  Sign up
                </button>
            </form>
            </div>

      </div>
    </div>


    </div>
  )
}

export default Signup