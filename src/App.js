import "./App.css";
import { NavBar } from "./components";
import { ItemListContainer } from "./pages";
import { ItemDetailContainer } from "./pages";
import logo from "././components/Multimedia/logo/Logo 1.png";
// import imgProducto from "../src/components/Multimedia/Producto/Campera rosada2ff.jpg";
// import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// ------------------
function App() {
  return (
    <div className="">
      <NavBar logo={logo} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/item-detalle/:id" element={<ItemDetailContainer />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <NavBar urlLogo={logo} /> */}
      {/* 
      <ItemListContainer
        imgCard={imgProducto}
        nombre="Campera rosa"
        descripcion="Campera de algodon rosada con capucha."
        precio="2499"
      /> */}
    </div>
  );
}

export default App;
