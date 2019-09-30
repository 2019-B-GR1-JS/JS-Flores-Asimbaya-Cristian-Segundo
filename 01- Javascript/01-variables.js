// JSON (JavaSript Object Notacion) ->

// var nombre = "Adrian"; ya nunca en la vida hay que usar el var, ahora si el lt

let nombre = "Cristian";

//nombre = "Juanito Perez"; // los puntos y comas se pueden dejar de poner los puntos y comas pero ya no es necesario

// Hay que inentar usar cosas que no sean Mutables. nombre es una variable mutable.

nombre = 1;

// con la palabra reservada cosnt no nos permite ccambiar el valor de la variable

const cedula = 1725133589;

const mensaje = `

Siempre usar "Const"

Si ya toca usar "let"

Nunca vamos a usar "var"

`;

let nombres = "";
typeof nombres;
console.log(typeof nombres, 'nombre');
let numeros = 1;
typeof numeros;
numeros = 1.1;
typeof numeros;
let casado = false;
typeof casado;
let hijos = null;
typeof hijos;
let mascotas = [];
typeof mascotas;
let hermana = {};
typeof hermana;
//Condicion!
//TRYTY
//FALSY


if ([]) {

    console.log("Truty");

} else {

    console.log("Falsy");
}


//  JSON

const cristian =
{
    "nombre": 'Cristian',
    'apellido': "Flores Asimbaya",
    edad: 10,
    casado: false,
    hijos: null,
    hermana: {nombre: "carolina"},
    mascotas: [
        {
            nombre: "betsyAraña",
        }
    ],

};

console.log(cristian.nombre); // Cristian
console.log(cristian.hermana); // {nombre: "Carolina}, los objetos de clases pueden ser impresos en consola
console.log(cristian.mascotas[0]);
cristian.sueldo = 1.2;
cristian["deudas"] = 10000;
console.log(cristian);
delete cristian.hijos;
console.log(cristian);