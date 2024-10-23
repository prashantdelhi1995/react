 import {logo} from "../util/constant.js"
 const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };
  export default Header