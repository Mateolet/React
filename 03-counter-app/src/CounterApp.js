import react from "react";
import PropTypes from "prop-types"

const CounterApp = ({value}) =>{
    //handleAdd //EVENTO BOTON CLICK
     const handleAdd = (e) => {
         console.log(e)

        // return () => { console.log("hola mundo");} CUANDO TIENE PARENTESIS LA FUNCION
     }


    return (
    
     <>
        <h1> Counter App </h1>
        <h2>{value}</h2>
        {/* NO HACE FALTA EJECTURAR LA FUNCION () YA LA EJECUTA SI SE MANDA RETURN HAY Q PONER LA FUNCION EN EL RETURN CON PARENTISES EN EL ONCLICK */}
        {/* <button onClick= { handleAdd() }  >+1</button> */}
        <button onClick= { handleAdd }  >+1</button>
     </>
    )

}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


export default CounterApp;


// PARA CREAR EL FUNCIONAL COMPONENT   ### rafcp ###