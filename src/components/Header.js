 import {logo} from "../util/constant.js"
 import { useState } from "react";
 const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div className="nav-conatiner">
        <div className="image-container">
          <img className="logo" src={logo}></img>
          
        </div>
        <div className="link-container">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
            <li className='login-logout' onClick={() => {setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn ? "Logout" : "Login"}</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header