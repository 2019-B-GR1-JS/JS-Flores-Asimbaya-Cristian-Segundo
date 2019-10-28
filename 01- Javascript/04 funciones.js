

/*  Estas son las funciones que existen las funciones se pueden clasificar en dos las que no devuelven nada y las que devuelven algo



*/

/*
    function imprimirMensaje() {
        console.log("Mensaje");
    }

   // imprimirMensaje();

    const respuesta = imprimirMensaje(1,2,"asd");
    console.log(respuesta);

    no llora al momento de mandar a ejecutar eso
 */

//FUNCION QUE NO RETORNA NADA

    function imprimirMensaje(mensaje) {

        if (typeof mensaje === "string" || typeof mensaje === "number"){
            console.log(`Mensaje ${mensaje}`);
            console.log("Mensaje "+ mensaje);
        }

        //RETURN NO HAY
    }

// imprimirMensaje();

/*
*  Las funciones de javascript permiten cosas que no deberian permitir., se puede hacer un cast del tipo de dato para poder controlar eso
*   ¿Que se debe hacer en la funcion apra validar que solo se mande string en los mensajes, se lo hace con un typeof
*
*
* */


function imprimirMensaje(mensaje) {

    if (typeof mensaje === "string" || typeof mensaje === "number"){
        const impresion = `Mensaje ${mensaje}`
        console.log(`Mensaje ${mensaje}`);
        console.log("Mensaje "+ mensaje);
        return impresion;
    } else {
        console.error("Error xD");
    }

    //RETURN SI HAY
}


//const respuesta = imprimirMensaje({a:1});  //esto es lo que no queremos.
const respuesta = imprimirMensaje(123);
//const respuesta = imprimirMensaje("x");
console.log(respuesta);

function sumarDosElementos(numeroUno,numeroDos) {

    return numeroDos + numeroUno;
}

console.log(sumarDosElementos(1,2));


// FUNCION QUE MANDE INFINITOS NUMEROS DE PARAMETROS Y LOS SUME TODOS


function sumarElementos(numeroUno, ...arregloParametrosInfinitos) {
    console.log("Esto es el otro: " + arregloParametrosInfinitos);

    if(arregloParametrosInfinitos){
        return arregloParametrosInfinitos.reduce((valorInicial,valorActual)=>{
            return valorInicial + valorActual;
        },numeroUno);
    }else {
        return numeroUno
    }
}

console.log(sumarElementos(1,2,3,4,5));

//const respuesta = imprimirMensaje("");


const restar = function restarF(a,b) {  //la funcion restarF no existe, se le conoce solo como restar por la variable.
    return a-b;
}

/*
*   Cuando se asigna a una variable una funcion se puede omitir el nombre de la funcion.
*
* */

// fat arrow function  -> funciones anónimas.

    const j = (a, b) => { return a-b; }


    const transformarAMayuscula = (letra) => {
        return letra.toUpperCase();
    }

    const transformarAMayuscula2 = (letra) => letra.toUpperCase();

    const transformarAMayuscula3 = letra => letra.toUpperCase();

    //Destructurar parametros, eso hacen los 3 puntitos (...)

const arregloNumerosUno = [1,2,3,4,5,6];
// Destructuro al arreglo
console.log(sumarElementos(...arregloNumerosUno));

function destructuracion(a,b, ...c) {

    console.log(a+" | "+b+" | "+c);

}

const destructurar = ["hola","madre","Santa","de","mi","vida"];

destructuracion(...destructurar);

const arregloNumerosDos = [7,8,9,10,11,12];



const arregloUnido = [...arregloNumerosUno,...arregloNumerosDos];
console.log(...arregloNumerosUno,...arregloNumerosDos);
console.log(arregloUnido);


//destructuracion

const ObjetoCristian = {
    nombre : "Cristian"
}

const objetoJuan = {
    apellido: "Flores"
}

const objetosCrisyJuan = {
    ...ObjetoCristian, ...objetoJuan,
    edad : 12
};

console.log(objetosCrisyJuan);

//como le cambiamos la eddad de 12

//se puede clinar objetos en javascriot

const oaeenString = JSON.stringify(objetosCrisyJuan);
console.log("Stringify: "+oaeenString);
const objCLonado = JSON.parse(oaeenString);
console.log("Parse"+oaeenString);
oaeenString.edad = 21;
console.log("Objeto clonado: " +objCLonado);
console.log("Objeto original: "+objetosCrisyJuan);

// CLonando objeto por destructuracion

const clonadoObj = {
    ...objetosCrisyJuan
}

console.log(clonadoObj)