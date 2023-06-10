// import logo from './logo.svg';

import "./App.css";
import logo from "./components/Multimedia/logo/Logo 1.png";
import imgProducto from "../src/components/Multimedia/Producto/Campera rosada2ff.jpg";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Router } from "react-router-dom";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <NavBar urlLogo={logo} />

      <ItemListContainer
        imgCard={imgProducto}
        nombre="Campera rosa"
        descripcion="Campera de algodon rosada con capucha."
        precio="2499"
      />
    </div>
  );
}

export default App;
