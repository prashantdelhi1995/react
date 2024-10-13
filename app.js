import React from "react"
import ReactDOM from "react-dom"
const heading=React.createElement("div",{id:"parent"},[React.createElement("div"
    ,{id:"child1"},[React.createElement("h1",{},"hii am h1 tag"),
        React.createElement("h2",{},"hi i am h2 tag tag!!")])
        ,
        React.createElement("div"
            ,{id:"child2"},[React.createElement("h1",{},"hii am h1 tag"),
                React.createElement("h2",{},"hii am h2 tag tag")])
                ,
                React.createElement("div"
                    ,{id:"child3"},[React.createElement("h1",{},"hii am h1 tag"),
                        React.createElement("h2",{},"hii am h2 tag tag")])
])
    
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
