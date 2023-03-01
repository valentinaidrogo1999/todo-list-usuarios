import axios from 'axios'
import React, {useState} from 'react'
import uniquid from 'uniqid'
import "./styles/agregar.css"

function AgregarUsuarios(){

    //hooks de react
    const[nombre, setNombre]=useState('')
    const[apellido, setApellido]=useState('')
    const[email, setEmail]=useState('')
    
    function AgregarUsuarios(){
        let usuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            //uniquid para que se genere automaticamente el id del usuario
            idusuario: uniquid()
        }
        console.log(usuario)
        //primer parametro es la ruta
        axios.post('/api/usuario/agregarusuarios', usuario)
        //funcion callback , instruccion
        .then(res =>{
            alert(res.data)
        })
        .then(err => {console.log(err)})


    }
    return(
        <div className='container'>
           <div className='agregar'>
              <h2> Crear Nuevo Usuario</h2>
          </div>

          <div className='row2'>
              <div className='col-sm-6 offset-3'>
                  <div className='mb-3'>
                     <label htmlfor="nombre" className='form-label'> Nombre</label>
                     <input type="text" className='form-control' value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
                   </div>

                   <div className='mb-3'>
                      <label htmlfor="apellido" className='form-label'>Apellido</label>
                      <input type="text" className='form-control' value={apellido} onChange={(e)=>{setApellido(e.target.value)}}></input>
                   </div>

                   <div className='mb-3'>
                      <label htmlfor="Email" className='form-label'>Email</label>
                      <input type="text" className='form-control'value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </div>
                    <button onClick={AgregarUsuarios} className='btn btn-success'> Guardar Usuario</button>
             </div> 
          </div>
        </div>
    )
}
export default AgregarUsuarios;