import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

const date = new Date;
const currentTime = date.getHours();

let greeting;
const customStyle = {
  color: ""
}

if(currentTime < 12){
  greeting = "Good Morning";
  customStyle.color = "red";
}
else if(currentTime < 18){
  greeting = "Good Afternoon";
  customStyle.color = "blue";
}
else{
  greeting = "Good Night";
  customStyle.color = "green";
}

const root = createRoot(document.getElementById("root"));
root.render(
 <div >
 <h1 className="heading" style={customStyle}>{greeting}</h1>
 </div>
);