import { getUser,getUsuarioActivo } from "../../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
  
    test('Debe de retornar un obj', () => {
      
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()

        expect(user).toEqual(userTest) //Para comparar objeto que tenga las mismas propiedas es el toEqual...... DOS OBJ EN JS DAN FALSO {} = {} FALSE
    
    });


      
    test('Debe de retornar un objxzc', () => {
      
        const nombre = "Mateo"
        // const userActivoTest = {
        //     uid: 'ABC567',
        //     username: nombre
        // }
        const userAct = getUsuarioActivo(nombre)

        // expect(userAct).toBe("Mateo")
        expect(userAct).toEqual({
            uid: 'ABC567',
             username: nombre
        }) //Para comparar objeto que tenga las mismas propiedas es el toEqual...... DOS OBJ EN JS DAN FALSO {} = {} FALSE
    
    });
    
});
