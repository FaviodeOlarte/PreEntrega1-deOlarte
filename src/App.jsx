// import logo from './logo.svg';

import './App.css';
import logo from './components/Multimedia/logo/Logo 1.png'
import imgProducto from '../src/components/Multimedia/Producto/Campera rosada2ff.jpg'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {

  

  return (

    <div className=''>
        <NavBar 
          urlLogo={logo}
          />
        
        <ItemListContainer
        imgCard={imgProducto}
          nombre="Campera rosa"
          descripcion="Campera de algodon rosada con capucha."
          precio= "2499"
        />

    </div>

  );
}

export default App;
