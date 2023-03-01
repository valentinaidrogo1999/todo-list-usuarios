
//conexion al mongo base de datos
const mongoose = require('mongoose');

//conectar el ip de la computadora (local) y el localhost:27017 que nos da mongoDB por defecto
//nombre de la base de datos crud_usuarios
mongoose.connect('mongodb://127.0.0.1:27017/crud_usuarios')


//si la conexion fue exitosa promesa "then"
.then(() => console.log("conexion correcta a MongoDB"))
//si no se conecta correctamente a MongoDB marca error promesa "catch"
.catch((err) => console.error(err));

//exportacion de MongoDB
module.exports = mongoose
