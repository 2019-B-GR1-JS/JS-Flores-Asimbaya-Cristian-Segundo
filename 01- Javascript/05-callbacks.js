

function calculo(numUno,numDos,funcionCalculo){

    const total = numUno + numDos;

    return funcionCalculo(numUno,numDos, total);

}

const numeroUno = 3;
const numeroDos = 5;

const suma = (numUno,numDos, total)=>{
      return total;
};

console.log(suma); // SE IMPRIME LA DEFINICION
console.log(suma(1,2,3)); // SE IMPRIME LA EJECUCIÓN



const resultadoCalculo = calculo(numeroUno,numeroDos,suma);

console.log(resultadoCalculo);
/*
const resultado2 = (numUno,numDos,
                  funcionCalculo: (numUno,numDos,total) => {

                  });
*/

const arreglo = [1, 2, 3, 4, 15, 6, 7, 8, 9, 10];

console.log("Sin el foreach"+arreglo);

function forEachLocal(arreglo, funcion) {
    for(let indiceInicial = 0; indiceInicial<arreglo.length; indiceInicial++){
     //   console.log("con el for each."+arreglo[indiceInicial]);
        funcion(arreglo[indiceInicial],indiceInicial,arreglo);
    }
}



console.log(forEachLocal(arreglo,  (valorActual,indiceActual,arreglo) =>  {
    console.log("Valor Actual: "+valorActual);
}))


// EL operador Map, filter, some, every ,find index, reduce,

// El operador map

function forMapLocal(arreglo, funcion) {
    const arreglo2 = [];

    for(let indiceInicial = 0; indiceInicial<arreglo.length; indiceInicial++){
        arreglo2.push(arreglo[indiceInicial]);
        funcion(arreglo[indiceInicial],indiceInicial,arreglo);
    }

    return arreglo2;
}

console.log("Funcion Map local \n"+forMapLocal(arreglo,(valorActual,Indice,arreglo)=>{
    //return valorActual;
}));

//Funcion Filter

function foFilterLocal(arreglo, funcion) {
    const arregloNuevo = [];
    for(let indiceInicial = 0; indiceInicial<arreglo.length; indiceInicial++){

        if (funcion(arreglo[indiceInicial],indiceInicial,arreglo)) {
            arregloNuevo.push(arreglo[indiceInicial]);
        }
    }
    return arregloNuevo;
}

console.log("Funcion Filter local \n"+foFilterLocal(arreglo,(valorActual,Indice,arreglo)=>{
     return valorActual>7;
}));

// Funcion Some

function foSomeLocal(arreglo, funcion) {

    let respuesta = false;

    for(let indiceInicial = 0; indiceInicial<arreglo.length; indiceInicial++){

        if (funcion(arreglo[indiceInicial],indiceInicial,arreglo)) {
            respuesta = true;
        }
    }
    return respuesta;
}

console.log("Funcion Some local \n"+foSomeLocal(arreglo,(valorActual,Indice,arreglo)=>{
    return valorActual>7;
}));

//Funcion  Every

function foEveryLocal(arreglo, funcion) {

    let respuesta = true;

    for(let indiceInicial = 0; indiceInicial<arreglo.length; indiceInicial++){

        if (!(funcion(arreglo[indiceInicial],indiceInicial,arreglo))) {
            respuesta = false;
        }
    }
    return respuesta;
}

console.log("Funcion Every local \n"+foEveryLocal(arreglo,(valorActual,Indice,arreglo)=>{
    return valorActual>7;
}));

//