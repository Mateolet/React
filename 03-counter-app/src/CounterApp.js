import React,{useState} from "react";
import PropTypes from "prop-types"

const CounterApp = ({value = 10}) =>{

    const [counter,setCounter] = useState(value)//Retorna un arreglo con 2 valores

    console.log(counter,setCounter);

    //handleAdd //EVENTO BOTON CLICK
    const handleAdd = (e) => {
        //  setCounter(counter+1)
        setCounter((c)=> c +1 ) // Recibe la funcion que devuelve eso
        // return () => { console.log("hola mundo");} CUANDO TIENE PARENTESIS LA FUNCION
     }

     const handleSubtract = () =>{

        setCounter(counter -1)

     }

     const handleReset = () =>{

         
        setCounter(value)

     }

    return (
    
     <>
        <h1> Counter App </h1>
        <h2>{counter}</h2>
        {/* NO HACE FALTA EJECTURAR LA FUNCION () YA LA EJECUTA SI SE MANDA RETURN HAY Q PONER LA FUNCION EN EL RETURN CON PARENTISES EN EL ONCLICK */}
        {/* <button onClick= { handleAdd() }  >+1</button> */}
        <button onClick= { handleAdd }  >+1</button>
        <button onClick={handleReset} >Reset</button>
        <button onClick={handleSubtract}>-1</button>
     </>
    )

}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


export default CounterApp;


// PARA CREAR EL FUNCIONAL COMPONENT   ### rafcp ###