

// Desestructuracipn de Objetos


const persona = {
        nombre: "Tony",
        edad: 45,
        clave: "Ironman",
}
//Renombrar Variable
const {edad,nombre,clave} = persona;
//No importa el orden da siempre el mismo resultado del objeto
console.log(nombre,edad,clave);

//EXTRAER PROPIEDAD ENTRE LLAVES. PARA AGARRAR LAS PROPIEDADES DEL OBJETO
//Si existe la propiedad en el objeto retorno lo que va en el obj. Y sino lo que se establecio en la funcion
const context = ({clave,nombre,edad,rango = "capitan"}) =>{

        
        // console.log(nombre,edad,rango);

        return {
                nombreClave: clave,
                años: edad,
                latlng: {
                        lat: 145.5465,
                        lng: 4512.232
                }
        }
        
}


//Retornar el nombre por que le estamos pasando el OBJ por parametro
// latlng:{lat,lng} Esto significa que se mete dentro de latlng para agarrar el objeto y que variable agarrar de ese objeto
// latlng: {lat,lng}
const {nombreClave,años,latlng:{lat,lng}} = context( persona );

console.log(nombreClave,años);
console.log(lat,lng);
// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)




