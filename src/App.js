import "./App.css";
import { NavBar } from "./components";
import { ItemListContainer } from "./pages";
import { ItemDetailContainer } from "./pages";
import { Carrito } from "./pages";
import logo from "././components/Multimedia/logo/Logo 1.png";
// import imgProducto from "../src/components/Multimedia/Producto/Campera rosada2ff.jpg";
// import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ---------FireBase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ItemsCarritoProvider } from "./context/itemsCarrito";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUftRhRUqWxtNUb19pscXnAOPxVpsIj0I",
  authDomain: "kangoo-98ea1.firebaseapp.com",
  projectId: "kangoo-98ea1",
  storageBucket: "kangoo-98ea1.appspot.com",
  messagingSenderId: "834715843594",
  appId: "1:834715843594:web:11f9ab26a7b28d2a9073f3",
  measurementId: "G-GFN4706S3C",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// ------------------
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ItemsCarritoProvider>
          <NavBar logo={logo} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item-detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </ItemsCarritoProvider>
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
