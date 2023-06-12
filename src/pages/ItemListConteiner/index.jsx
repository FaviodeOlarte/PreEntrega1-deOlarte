import { useEffect, useState } from "react";
import { useParams,NavLink, useNavigate } from "react-router-dom";
import { getCategorias, getItems } from "../../services";
import { ItemList } from "../../components";
import { categorias } from "../../temp/data";

const ItemListContainer = (greeting) => {
  // --------------
  const { catId } = useParams();
  const navigate = useNavigate()

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getItems(catId).then((data) => {
      setItems(data);
    });
  }, [catId]);
  
  useEffect(()=> {
    getCategorias().then((data)=>{
      setCategories(data)
    })
  },[])
  // ------
  return (
    <>
      <>
      
      <nav>
        <ul>
          {categorias.map((categorias)=>(

          <li>
            <NavLink to={`/category/${categorias.id}`}>{categorias.name}</NavLink>
          </li>
          ))}
        </ul>
      </nav>
        <div className="articulos col-12 col-md-9 col-xl-10 mt-sm-4 mt-3 mb-3">
          <div
            id="contenedorProductos"
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"
          >
            <ItemList items={items.map((item)=>(
              {
                ...item,
                linkCard:() => navigate(`/item-detalle/${item.id}`)

            }))} />
          </div>
        </div>
      </>
    </>
    // <div class="articulos col-12 col-md-9 col-xl-10 mt-sm-4 mt-3 mb-3">
    //   <div
    //     id="contenedorProductos"
    //     className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"
    //   >
    //     <a className="text-decoration-none text-dark h-100 w-100">
    //       <div className="card h-100" id="card">
    //         <img src={greeting.imgCard} className="card-img-top" />
    //         <div className="card-body h-100 d-flex flex-column">
    //           <h1 className="card-title fs-4">{greeting.nombre}</h1>
    //           <p className="card-text">{greeting.descripcion}</p>
    //           <div className="d-flex  flex-fill justify-content-between align-items-end">
    //             <button className="agregarAlCarritoCard">
    //               Agregar al carrito
    //             </button>
    //             <b>$ {greeting.precio}</b>
    //           </div>
    //         </div>
    //       </div>
    //     </a>
    //   </div>
    // </div>
  );
};

// -------------
export { ItemListContainer };
