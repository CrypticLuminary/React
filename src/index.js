l; //Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDom from "react-dom";

const name = prompt("Enter your name:");

const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDom.render(
  <div>
    <p>Created By {name}</p>
    <p>Copyright @{year}</p>
  </div>,
  document.getElementById("root")
);
