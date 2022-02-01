import React from 'react';
//Importar react por que se esta usando JSX

// Funcional COmponents

const PrimeraApp = () =>{

    const saludo = true
    // {BOLLEANOS NO IMPRIME}
    return (
        <>
             <h1> {saludo} </h1>
             <p>Mi primera Aplicacion</p>
        </>
       

    )

    //Parentesis significa que todo lo que sigue es un objeto
        //Div permite retornar un elemtno
        //<Fragment> Poner elemento sin crear un div</Fragment>
        // <> FRAGMENT RESUMIDO </> 
}


export default PrimeraApp