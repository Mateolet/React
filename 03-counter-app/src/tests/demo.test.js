
describe('Pruebas en el archivo demo.test.js', () => {
  
    test("Deben de ser iguales los strings",() => {
    
        //Inicialización
        const mensaje = "Hola Mundo"
    
        //Estimulo
        const mensaje2 = `Hola Mundo`
    
        //Observar Comportamieto
        
        expect(mensaje).toBe(mensaje2)
        
    
    })
});


