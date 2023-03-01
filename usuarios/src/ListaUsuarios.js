import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UsuarioIndividual from './UsuarioIndividual';
import "./styles/listaUsuarios.css"

function ListaUsuarios(){
    const[datausuarios, setdatausuario]= useState([])

    useEffect(() => {
        // esta funcion ejecuta una promesa "then" si es correcta
        axios.get('api/usuario/obtenerusuarios').then(res => {
            console.log(res.data)
            setdatausuario(res.data) 
            //si la funcion no se ejecuta correctamente  promesa "catch"
        }).catch(err => {
            console.log(err)
        })
       
    }, [])

    //Mapear lista de usuarios en objeto usuario
    const listausuarios = datausuarios.map(usuario =>{
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    })
    return(
        <div> 
            <h2 className='lista'>lista de Usuarios</h2>
             {listausuarios}  
        </div>
    )
}
export default ListaUsuarios;