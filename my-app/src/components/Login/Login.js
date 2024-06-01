import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import smallImage from "./GoogleLogo.png";
import './Login.css'

const Login = () => {
  return (
    
            <div className="login">
      <div className="card">
        <div className="left">
          <h1 className='nunito-sans-unique'>Book Nexus</h1>
          <p className='nunito-sans-unique'>The ultimate e-library dedicated exclusively to the captivating world of fantasy literature</p>
          <span className='nunito-sans-unique'>Don't you have an account?</span>
          <Link to="/Signup">
            <button className='btn-sgn'>Sign up</button>
          </Link>
        </div>

        <div className="right">
          <h1>Welcome </h1>
          <br></br>
          <form >
            <input className="email" type="email" name="email" placeholder="Username"  />
            <input className="email" type="password" name="password" placeholder="Password"  />
            <div className="btn">
              <button type="submit" className="btn-primary">Sign In</button>
            </div>
            <div className="btn">
              <button  className="btn-google">
                <img src={smallImage} alt="Small Icon" style={{ height: '24px', width: 'auto', marginRight: '8px' , borderRadius: '5px' }} /> Sign In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Login