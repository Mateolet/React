const persona = {
    nombre: "tony",
    apellido: "stark",
    edad : 45,
    direccion:{
        ciudad: "New York",
        zip: 223237239,
        lat: 14.3223,
        lng: 34.9968
    }
};




// const persona2 = persona; // ERROR.
                        
// persona2.nombre = "Peter" // falso positivo no lo cambia, agarra la referencia.


// Para crear un clon de un obj lo mejor es hacer un nuevo OBJ


const persona2 = {...persona};

//DE ESTA FORMA SE CLONA EN EM6. CON LOS ... Y EL OBJETO QUE SE QUIERE CLONAR

console.log(persona);
// console.log(persona2);
