import React from "react"
import ReactDOM from "react-dom/client"
const heading=(<h1>hii my name is prashant </h1>)
function Xyz() {return (
    <div>
        <h1> hii my name is prashant </h1>
        <h2>i am just testing how things work behind the scene</h2>
        
        </div>
)}
    
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Xyz />);
