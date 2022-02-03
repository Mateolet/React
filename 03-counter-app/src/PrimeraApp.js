import React from 'react';
import PropTypes from 'prop-types';
//Importar react por que se esta usando JSX

// Funcional COmponents
// DESESTRUCTURACION DE PROPS
const PrimeraApp = ({saludo,subtitulo}) =>{


    // {BOLLEANOS NO IMPRIME}
    return (
        <>
            <h1>{saludo}</h1>
             {/* <pre> {JSON.stringify(saludo,null,3)} </pre> */}
             <p>{subtitulo}</p>
        </>
       

    )

    //Parentesis significa que todo lo que sigue es un objeto
        //Div permite retornar un elemtno
        //<Fragment> Poner elemento sin crear un div</Fragment>
        // <> FRAGMENT RESUMIDO </> 
}

//Para definir las propiedas de este componente por ej los parametros 
PrimeraApp.propTypes = {
        saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
    // subtitulo: "" STRING VACIO 
}

export default PrimeraApp