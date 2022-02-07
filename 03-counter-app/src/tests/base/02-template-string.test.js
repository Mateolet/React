import "@testing-library/jest-dom"
import { getSaludo } from "../../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
    
    test('Prueba en el metodo getSaludo', () => {

        const nombre = "Mateo"
      const saludo = getSaludo( nombre);
      console.log(saludo);


      expect(saludo).toBe("Hola " + nombre)

    });


    test('Getsaludo debe de retonar hola carlos si no hay argumento en el nombre', () => {

      const saludo = getSaludo();
      
      
      expect(saludo).toBe("Hola Fernando")
      console.log(saludo);

    });

    
//Getsaludo debe de retonar hola carlos si no hay argumento en el nombre
});
