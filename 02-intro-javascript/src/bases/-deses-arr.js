

// const personajes = ["Gokue","Vegetta","Trunks"]


// // console.log(personajes[0]);


// const [,,p3] = personajes


// console.log(p3);


const retornaArreglo = () => {
        return ["Abc",123];
}

const [letras,numeros] = retornaArreglo();

console.log(letras,numeros);



//Tarea
// 1 primer arreglo se llamara nombre
// 2 segundo se llamara setNombre
const State = (valor) =>{

        return [valor, () => { console.log("Hola Mundo")}];
}


const [nombre,setNombre] = State("Mateo");

console.log(nombre);
setNombre();