//importaciones
const express = require ('express')
const router  = express.Router()
const mongoose = require('mongoose')
const eschema = mongoose.Schema


const eschemausuario = eschema ({
    nombre: String,
    apellido: String,
    email: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router


//peticion de tipo htt post porque se estan recogiendo los datos del formulario con req
router.post('/agregarusuarios', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        idusuario: req.body.idusuario

    })
    console.log(nuevousuario)
    // metodo "save" es el que nos permite guardar en la base de datos
    nuevousuario.save(function(err){
        if(!err){
            res.send("usuario agregado correctamente")
        }else{
            res.send(err)
        }
    })
})

//peticion tipo post para actualizar datos de usuario
router.post('/actualizausuarios', (req, res) => {
   ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario},{

       nombre: req.body.nombre,
       apellido: req.body.apellido,
       email: req.body.email,

   }, (err) => {
    if(!err){
        res.send('usuario actualizado correctamente')
    }else{
        res.send(err)
    }
 
  })
})

//peticion para eliminar usuario
router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('usuario borrado correctamente')
        }else{
            res.send(err)
        }
    })
 
 })
//obtener todos los usuarios
router.get('/obtenerusuarios', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
        
    })
})

//obtener data de usuario
router.post('/obtenerdatausuarios', (req, res) =>{
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
        
    })
})
