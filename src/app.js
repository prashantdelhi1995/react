import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/*nav
 * -img
 * -links
 * body
 * -search
 * -cart
 * footer
 */



let App = () => {
  return <div className="main"><Header />
  <Body/>
  
  </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
