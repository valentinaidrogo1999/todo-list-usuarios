//configurando nuestro servidor backend con node.js

//ruta de express
const express = require('express')
const app = express()
const port = 5000

//importar conexion MongoDB y se accede al archivo conexion
const archivoDB = require('./conexion')

//importacion de archivos y rutas del modelo usuario
const rutasusuario = require('./usuario')
//importar body parser es una extencion para poder obtener la informacion de los campos input
const bodyParser = require('body-parser')
//configuracion que lleva el bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))
app.use('/api/usuario', rutasusuario)

// slas para indicar que salga lo principal
// el Get Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada
//req ricuaire es para coger los datos de los usuarios
//res respon es la respuesta que le vamos a dar al usuario
app.get('/', (req, res) =>{
    res.end('Node Online...')

})

//configurar server basico
//nodemon sirve para que el backend se me actualice automaticamente cada vez que detecte un cambio.
//app.listen (port) escuchar el puerto 5000 de express.

app.listen(port,() =>{
    console.log("el servidor NODE  esta corriendo correctamente en mi puerto "+  port)
})