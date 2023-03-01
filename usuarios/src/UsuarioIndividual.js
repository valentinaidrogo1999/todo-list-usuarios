import React from 'react'
import "./styles/usuarioindividual.css";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'


function UsuarioIndividual({usuario}){

    const navegar = useNavigate()

    //funcion para eliminar usuario
function borrarusuario(idusuario){
    axios.post('/api/usuario/borrarusuario',{idusuario: idusuario}).then(res => {
        console.log(res.data)
        console.log(res.data[0])
       alert(res.data)
       navegar(0)
    }).catch(err =>{
        console.log(err)
    })
}

    return(

            <div className='container'>
                <h2 className='usuario'>usuario individual </h2>
             <div className='row'>

                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.idusuario}</li>
                        <li className='list-group-item'>{usuario.nombre}</li>
                        <li className='list-group-item'>{usuario.apellido}</li>
                        <li className='list-group-item'>{usuario.email}</li>
                    </ul>
               
                    <Link to={`/editarusuarios/${usuario.idusuario}`}><li className='btn btn-success'>editar</li> </Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=>{borrarusuario(usuario.idusuario)}}>eliminar</button>
                    <hr className='mt-4'></hr>
                 </div>
             </div>

            </div>
    )
}
export default UsuarioIndividual;