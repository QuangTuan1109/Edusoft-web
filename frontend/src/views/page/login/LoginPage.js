import imageHome from '../../../assets/images/homepage.jpg'
import './LoginPage.scss';

import React from 'react'

class LoginPage extends React.Component {
  render() {
    return (
      <div className="background-home">
        <div className="background-img">
          <img src={imageHome} alt="IUbackground"/>
        </div>
        <div className="input-account">
          <span>USERNAME</span>
          <div>
            <input type="text" placeholder="Enter Your ID"/>
          </div>
          <span>PASSWORD</span>
          <div>
            <input type="password" placeholder='Enter Your Password'/>
          </div>
          <div className="button-form">
            <button type="submit">LOGIN</button>
            <a href="/forgot-password"><lable>Forgot your password?</lable></a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
