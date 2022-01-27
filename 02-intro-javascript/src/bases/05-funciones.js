

const saludar = function saludar(nombre){
        return `Hola, ${nombre}`
}

// Funcion flecha sin return
const saludar2 =  (nombre) => `Hola, ${nombre}` 

// saludar = 20;
console.log(saludar2("Vegeta"));


// const getUser =  () => {

//         return{
//                 uid: "ABC123",
//                 username: "El_papi123"
//         }

// }

const getUser =  () =>  ({
                uid: "ABC123",
                username: "El_papi123"
        })
        //PARA DEVOLVER UN OBJETO SIN RETURN



const user = getUser();

console.log(user);


//Transformar FUncion flecha
//retornar obj implicito ({})
//Probar

function getUsuarioActivo(nombre){

        return{
                uid:"ABC123",
                username:nombre
        }

}

const usuarioActivo = getUsuarioActivo("Fernando");

console.log(usuarioActivo);
//Tarea
//({}) Despues de la flecha devuelte objeto Implicito
const usuarioAct = (nombre) => ({
                uid:"ABC123",
                username:nombre
        })
console.log(usuarioAct("Mateo"));

