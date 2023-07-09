import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ItemsCarritoContext } from "../../context/itemsCarrito";

const Item = ({ id, nombre, precio, descripcion, stock, catSexo, imgCard }) => {
  const navigate = useNavigate();

  const { addListCarrito } = useContext(ItemsCarritoContext);

  return (
    <div
      className="col text-dark mb-3 "
      key={id}
      onClick={() => navigate(`/item-detalle/${id}`)}
    >
      {/* <a
         className="text-decoration-none text-dark h-100 w-100"
         onClick={}
       > */}
      {/* <NavLink to={`/item-detalle/${id}`} className="text-decoration-none"> */}
      <div className="card h-100 w-100" id="card">
        <img src={imgCard} className="card-img-top" />
        <div className="card-body h-100 d-flex flex-column">
          <h1 className="card-title fs-4">{nombre}</h1>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">{stock}</p>
          <div className="d-flex  flex-fill justify-content-between align-items-end">
            <button
              onClick={(e, unit) => {
                addListCarrito({
                  unit: 1,
                  id,
                  unit: 1,
                  nombre,
                  precio,
                  descripcion,
                  stock,
                  catSexo,
                  imgCard,
                });
                e.stopPropagation();
              }}
            >
              Agregar al carrito
            </button>
            <b>$ {precio}</b>
          </div>
        </div>
      </div>
      {/* </NavLink> */}
      {/* </a> */}
    </div>

    // <div>
    //   <h2>{nombre}</h2>
    //   <ul>
    //     <li>{descripcion}</li>
    //     <li>{stock}</li>
    //     <li>{precio}</li>
    //     <li>{catSexo}</li>
    //     <img src={imgCard} className="card-img-top" />

    //   </ul>
    // </div>
  );
};

export { Item };
