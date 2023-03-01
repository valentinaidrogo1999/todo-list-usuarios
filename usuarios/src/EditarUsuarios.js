import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function EditarUsuarios(){

    const params = useParams()

    //hooks de react

    const[nombre, setNombre]=useState('')
    const[apellido, setApellido]=useState('')
    const[email, setEmail]=useState('')
    
    useEffect(() => {
        axios.post('/api/usuario/obtenerdatausuarios',{idusuario: params.idusuario}).then(res => {
            console.log(res.data[0])
            const datausuario = res.data[0]

            setNombre(datausuario.nombre)
            setApellido(datausuario.apellido)
            setEmail(datausuario.email)
        })
    }, [])

    //funcion que actualiza los datos del usuario

    function editarUsuario () {
  //nuevo objeto para actualizar el usuario
  const actualizarusuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        //tomara el id que nos dara nuevo por el params
        idusuario: params.idusuario
    }
    //hacer peticion usando axios
    axios.post('/api/usuario/actualizausuarios', actualizarusuario)
    //funcion callback , instruccion
    .then(res =>{
        console.log(res.data)
        alert(res.data)
    })
    .then(err => {console.log(err)})

    }

    return(
        <div className='container'>
           <div className='agregar'>
              <h2>editar usuario</h2>
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
                    {/*boton que sera para guardar los datos actualizados del usuario */} 
                    <button onClick={editarUsuario} className='btn btn-success'> editar Usuario</button>
               
             </div> 
          </div>
        </div>
    )
}
export default EditarUsuarios;