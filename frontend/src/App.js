
import AgregarUsuarios from './AgregarUsuarios';
import EditarUsuarios from './EditarUsuarios';
import ListaUsuarios from './ListaUsuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">crud de Usuarios</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="/">Inicio</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="agregarusuarios">Agregar Usuarios</a>
               </li>
              </ul>
           </div>
         </div>
       </nav>

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<ListaUsuarios/>} exact></Route>
      <Route path='/agregarusuarios' element={<AgregarUsuarios/>} exact></Route>
      <Route path='/editarusuarios/:idusuario' element={<EditarUsuarios/>} exact></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
