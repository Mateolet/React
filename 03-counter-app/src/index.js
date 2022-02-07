// import React from "react"
// import  ReactDOM  from "react-dom"
// import PrimeraApp from "./PrimeraApp";
// import './index.css';

// const divRoot = document.querySelector("#root");


// // Que queres meter y en donde ()
// // SEGUNDO PARAMETRO SON LAS PROPS
// ReactDOM.render(<PrimeraApp saludo="Hola mundo"/>,divRoot)

//TAREA

import React from "react"
import  ReactDOM  from "react-dom"
import CounterApp from "./CounterApp";
import './index.css';

const divRoot = document.querySelector("#root");


// Que queres meter y en donde ()
// SEGUNDO PARAMETRO SON LAS PROPS
ReactDOM.render(<CounterApp value={822}/>,divRoot)
