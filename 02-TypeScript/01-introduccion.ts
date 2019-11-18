
// Transpilador, es un tipo de compilador que transforma de un lenguaje a otro

/*  TYPESCRIPT
*   1) Tipos de datos (Tipados)
*   2) Decoradores
*   3) Clases
*
* */

const numero: number = 0;
//let nombre: string = "Adrian"
//nombre = "asss";

let fecha: Date; //Date -> Clase Tipo de dato date

fecha = new Date();

let adrian:Estudiante; // Estudiante-> interfaz
                     // Tipo de dato Estudiante

interface Estudiante{
    nombre:string;
    edad?:number;
}

adrian = {

    nombre:"1",
    edad:12,
};

// DUCK TYPING
// Infiere el tipo de dato
let nombre = "Adrian";


function holaMundo(): void {
    console.log('Hola');
}

function calculadora(numUno:number,...numeros: any[]) {

}

function universidad(nombre: string,edad?:number):string {
    return `${nombre} Edad: ${edad}`;
}

universidad("Adrian");

interface facultad {
    nombre:string
    id:number

}

interface Departamento {
    nombre:string;
    id:number;
    facultad:facultad | number;

}

const departamentoSisitemas = {
    nombre: "Sistemas",
    id: 1,
    facultad:{
        nombre: "Sistemas",
        id: 1
    }
}

const departamentoSisitemasSinRelacion:Departamento = {
    nombre: "Sistemas",
    id: 1,
    facultad:1
}


function imprimirDepartamento(departameto:Departamento) {
    const departamentoId = departameto.facultad as number +1; //modo typescript
    //const departamentoId =  <number>departameto.facultad +1;  -> Casting Tradicional.
}