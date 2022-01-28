import { getHeroeById } from "./bases/08-imp-exp";

 

//  const promesa = new Promise((resolve,rejected)=>{

//     setTimeout(()=>{
//         //Tarea

//         const heroe = getHeroeById(2);
//         resolve(heroe); //Resolve le transifere al then el valor de los parentesis, Hay que enviarle el dato por el resolve
//         rejected("No se pudo encontrar el Heroe")
//     },2000)

//  });// asincrono. 


// promesa.then((heroe)=>{
//     console.log("Heroe",heroe);//SE MUESTRE ESTE MENSAJE UNA VEZ QUE SE LLAME AL RESOLVE DENTRO DE LA PROMESA, QUIERE DECIR QUE SALIO EXITOSO
// })
// .catch(err=>{
//     console.warn(err)
// })


const getHeroeByIdAsync = (id) => {

        //DEVUELVE UNA PROMESA. ESTO HACE QUE PUEDAS AGARRAR CON EL .THEN
        return new Promise((resolve,rejected)=>{

        setTimeout(()=>{
            //Tarea

            const heroe = getHeroeById(id);
            if(!heroe){

                rejected("No se pudo encontrar el Heroe")
            }

            resolve(heroe); //Resolve le transifere al then el valor de los parentesis, Hay que enviarle el dato por el resolve
            
        },2000)

        });// asincrono. 

}


// getHeroeByIdAsync(10)
//     .then( (heroe) => console.log(heroe,"HEROE"))
//     .catch(err => console.warn(err));

    getHeroeByIdAsync(2)
    .then( console.log)
    .catch(err => console.warn(err));