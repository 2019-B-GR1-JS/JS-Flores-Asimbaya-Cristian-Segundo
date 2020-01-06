/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:'string'
    },
    apellido:{
      type:'string'
    },
    correo:{
      type: 'string'
    },
    password:{
      type: 'string'
    }

  },

};





//http
//find
//METODO HTTP + URL + *PARAMETROS
//*Parametros
// Ruta -> Requeridos
//http_//localhost:1227/usuario/1 -> id
//http_//localhost:1227/usuario/2 -> id
// Consulta -> Query's -> Siempre son opcionales
//http_//localhost:1227/usuario?=nombre=Adrian&apellido=Flores
//http_//localhost:1227/usuario?=nombre=Adrian   -> siempre se reciben como texto !
// Cuerpo -> body ->
//http://localhost:1337/usuario
/*
*   const nuevoUsuario{
*     nombre:"Cris"
*     apellidoe:"Cris" -> string
*     ...
*     edad: 1, --> number
*     casado: true,  -> boolean
*   }
*
*
*
* */

//METODO HTTP
//CLIENTE

//GET http://localhost:1337 + modelo
// Ej .> GET http://localhost:1337/usuario
//findOne
//GET http://localhost:1337 + modelo/:id
// Ej: GET http://localhost:1337/usuario/1

//createOne
//POST http://localhost:1337/ + modelo
//Ej POST http://localhost:1337/usuario
//updateOne
//PUT http://localhost:1337/ + modelo/:id
//Ej -> PUT http://localhost:1337/usuario/1
//DeleteOne
//DELETE http://localhost:1337/ + modelo/:id
//Ej DELETE http://localhost:1337/usuario/1

//CODIGO HTTP
// SERVIDOR

//1XX -> Informacion
//2XX ->  Ok
//3XX -> Redireciones
//4XX -> Error cliente  404 -> not found
//5XX -> Error servidor 500 -> internal server error

//find 1
//crateOne
//UpdateOne
//DeleteOne

/*
* QUE CHINGADOS ES POSTMAN
* */
