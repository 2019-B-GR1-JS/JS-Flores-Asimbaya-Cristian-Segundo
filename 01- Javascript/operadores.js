const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log('-------------');
for (const i of arreglo){ //VALORES
    //console.log('i:', i);
}
//console.log('arreglo: ', arreglo);

//console.log('---------');
const respuestaForEach = arreglo.
forEach(function(valorActual) {
        // console.log('valorActual: ',valorActual);
        //console.log('indiceActual: ',indiceActual);
        //console.log('arreglo: ', arreglo);
    }
);

//console.log('respuesta: ', respuestaForEach);

//console.log('-------------------');

const respuestaMap = arreglo.
map(function(valorActual, indiceActual, arreglo){
    return valorActual;
});////EN TOTAL DEVUELVE UN NUEVO ARREGLO

console.log( "Respuesta map: "+respuestaMap);

const respuestaMap2 = arreglo.map(r => r + 5);

//console.log('respuestaMap', respuestaMap);
//console.log('arreglo: ',arreglo);
//console.log('respuestaMap2',respuestaMap2); //ES LO MISMO QUE LA FUNCIÓN MAP pero resumido

const respuestaFilter = arreglo.
filter(function(valorActual,indiceActual, arreglo){
    return valorActual > 7;
}); //DEVUELVE UN NUEVO ARREGLO PERO FILTRADO CON LA CONDICION

//console.log('respuestaFilter', respuestaFilter);
//console.log('--------');
//console.log('arreglo', arreglo);
console.log( "Respuesta filter: "+respuestaFilter);
//AND - OR

//SE PIDE SI HAY ALGUNO AUNQUE SEA SOLO UNO PARA ESTO SE USA OR
//OR -> SOME
const respuestaSome = arreglo.
some(function(valorActual,indiceActual, arreglo){
    return valorActual > 9 && valorActual < 12;
}); //DEVUELVE UN BOOLEANO

console.log( "Respuesta Some: "+respuestaSome);

//console.log('respuestaSome: ', respuestaSome);

//AND -> EVERY
const respuestaEvery = arreglo.
every(function(valorActual,indiceActual, arreglo){
    return valorActual > 7;
}); //EXPRESION , DEVUELVE UN BOOLEANO

//console.log('respuestaEvery:', respuestaEvery);
console.log( "Respuesta Every: "+respuestaEvery);

const respuestaMenoresADiez = arreglo.
map((x) => (x/2) + 7).filter((y) => y < 10);
//EXPRESION , DEVUELVE UN BOOLEANO

console.log('respuestaMenoraDiez:', respuestaMenoresADiez);

    const respuestaFind2 =
        arreglo.find(
            (valorActual, indice, arreglo) =>  {
                    return valorActual == 8;
            }
            );

console.log("Respuesta Find 2 :"+respuestaFind2)

    const respuestaFindIndex =
        arreglo.findIndex(
            (valorActual) => {
                return valorActual == 8;
            }
        );

    //Reduce

    const respuestaReduce = arreglo.reduce(
        (valorInicial, valorActual, indice, array) => {

            return valorInicial + valorActual;

        },0); // EL CERO ES EL VALOR INICIAL
    console.log(respuestaReduce);

console.log("Respuesta del reduce: "+respuestaReduce)
    