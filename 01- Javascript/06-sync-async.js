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

const leerArchivo = (pathArchivo) => {
    return new Promise(
        (resolve, reject) => {
            // res -> resolve rej -> reject

                fs.readFile(
                pathArchivo,
                'utf8',
                (error, archivoLeido) => {
                    if (error){
                        reject(error);
                    } else {
                        resolve(archivoLeido);
                    }
                }
                );

        }
    )
}

