// const arreglo = new Array(100);
// arreglo.push(1)


const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);

//Operador expred, crear copias o extraer información;
let arreglo2 = [...arreglo,5];

//EL MAP CREA UN ARREGLO NUEVO MODIFICADO.
// ES DECIR QUE UTILIZA EL ARREGLO VIEJO PARA CREAR UN NUEVO DEL MISMO MODIFICADO
const arreglo3 = arreglo2.map(function(numero){
        return numero * 2;
});


// console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);