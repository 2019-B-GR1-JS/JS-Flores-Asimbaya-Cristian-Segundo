// 06 - sync-async.js
/*
*   Como puede trabajar javascript si no usa hilos?
*   es lento acaso?
*
*   vamos a leer un archivo
*
*
*
* */

const fileSystem = require('fs');

console.log('Iniciando....\n');

function leerArchivo05() {

    fileSystem.readFile('./05-callbacks.js', 'utf8',
        (error, datos) => {   // callbacks  -> es una funcion async

            if (error) {
                console.error({
                    mensaje: 'Error al leer archivo',
                    error,
                })
            } else {
                console.log('Datos; ', datos);
                leerArchivo04()
            }

        });
}

function leerArchivo04() {

    fileSystem.readFile('./operadores.js', 'utf8',
        (error, datos) => {   // callbacks  -> es una funcion async

            if (error) {
                console.error({
                    mensaje: 'Error al leer archivo',
                    error,
                })
            } else {
                console.log('Imprimiedo archivo 2\n; ', datos);
            }
        });
}

const fs = require('fs');



const sumarDosNumeros = () => {
  return new Promise((resolve, reject) => {
      resolve('Yeii');
      //reject('BUU');
    })
};

const promesaSumarDosNumeros = sumarDosNumeros();

console.log('01) Iniciar');

promesaSumarDosNumeros
    .then(
        (ok) => {
            console.log('ok', ok);
        }
    )
    .catch(
        (error) => {
            console.log('error',error);
        }
    )

console.log('02) Terminar')

//console.log(leerArchivo05());


//console.log('finalizar.');

    const leerArchivo = (pathArchivo)=>{
        return new Promise(
            (resolve,reject)=>{
                //res, rej
                fs.readFile(
                    pathArchivo,
                    'utf8',
                    (error, archivo) => {
                        if(error){
                            reject(error);
                        }else {
                            resolve(archivo);
                        }

                    }
                )
            }
        )
    }

    leerArchivo('./01-variables.js')
        .then(
            (contendoCallbackjs)=>{
            //    console.log(contendoCallbackjs);
                return leerArchivo('./01-variables.js') //promesa
            }
        )
        .then(
            (contenido2js)=>{
            //    console.log(contenido2js);
            }
        )
        .catch(
            (error)=>{
             //   console.error('Error JS', error);
            }
        )


const nombreArchivo = './05-callbacks.js';

//Cuando se use codigo sincrono siempre hay que usar un try y un catch

console.log('Inicia sincrono');

try {
    const contenidoArchivo = fs.readFileSync(nombreArchivo,'utf-8');
    console.log(contenidoArchivo);
    console.log('Se leyo correctamente');
} catch (e) {
    console.error('Error', error);
}

console.log('Termina sincrono');

//Transformar una promesa a codigo sincrono
// una Funcion, Funtion Anonymous

// paso 1: poner la palabra ASYNC permite usar codigo sincrono dentro de la funcion
// paso 2: para trasformar promesa -> sincrono usar la palabra "await"
async function leerArchivoSync() {

    try {
        const contenido = await leerArchivo(nombreArchivo); // Devuelve una promesa,
        console.log(contenido);
        console.log("Leimos con async y await");
    }catch (e) {
        console.log('Error', error);
    }

}

//Toda funcion que se usa con un async, se transforma en una promesa
