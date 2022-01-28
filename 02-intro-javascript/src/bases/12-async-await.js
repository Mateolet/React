



// El async va siempre antes del argumento
// AWAIT VA CUANDO SE VA A EJECUTAR O RESPONDER UNA PROMESA
// EL AWAIT LE DICE QUE ESPERE A QUE LA PROMESA TERMINE PARA DESPUES SEGUIR EJECUTANDO LAS SIGUIENTES LINEA DE CODIGO
//DEVUELVE UNA RESPONSE PETICION
//MANEJAR ERRORES EN ASYNC Y AWAIT HAY QUE UTILIZAR TRY CATCH
const getImagen = async () => {

    try {
        const apiKey = "BnjJ121NGhr3f2gMm3NOXFoMCclHwZmX";

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const {data} = await resp.json();
    
        const {url} =  data.images.original;
    
        const img = document.createElement("img");
    
        img.src = url
    
        document.body.append(img);
    
    } catch (err) {
        
        console.log(err);
    }
}


getImagen();

// peticion.then(resp => resp.json())//Desestructuracion de obj ({data}) para no pponer data.data ya agarras el obj
// .then(({data}) => {
//     const {url} = data.images.original

//         const img = document.createElement("img");
//         img.src = url;
//         document.body.append(img)
// })
// .catch(err => console.warn)