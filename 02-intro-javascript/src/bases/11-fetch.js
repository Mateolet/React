const apiKey = "BnjJ121NGhr3f2gMm3NOXFoMCclHwZmX";


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


peticion.then(resp => resp.json())//Desestructuracion de obj ({data}) para no pponer data.data ya agarras el obj
.then(({data}) => {
    const {url} = data.images.original

        const img = document.createElement("img");
        img.src = url;
        document.body.append(img)
})
.catch(err => console.warn)