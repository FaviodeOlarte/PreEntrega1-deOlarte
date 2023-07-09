import { useContext } from "react";
import { ItemsCarritoContext } from "../../context/itemsCarrito";

const Carrito = () => {
  const { listCarrito } = useContext(ItemsCarritoContext);
  let subTotal = listCarrito.map((item) => item.unit * item.precio);
  const total = subTotal.reduce(
    (acumulador, elemento) => acumulador + elemento,
    0
  );
  console.log(total);
  return (
    <div className="d-flex justify-content-center mt-3 mb-5">
      <div>
        <h1>Formulario de Compra</h1>
        <form>
          <div className="p-1">
            <label htmlFor="fullName">Nombre Completo:</label>
            <input
              type="text"
              id="fullName"
              // value={fullName}
              // onChange={handleFullNameChange}
            />
          </div>
          <div className="p-1">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="text"
              id="phone"
              // value={phone}
              // onChange={handlePhoneChange}
            />
          </div>
          <h2>Lista de Carrito:</h2>
          <ul className="p-1">
            {listCarrito.map((item) => (
              <div>
                <li key={item.id} className="list-unstyled">
                  <b>{item.nombre}</b>
                </li>
                <li className="ms-4">{item.descripcion}</li>
                <li className="ms-4">Cantidad: {item.unit}</li>
                <li className="ms-4">Precio: {item.precio}</li>
                <li className="ms-4">
                  Total Unit: ${Number(Number(item.precio) * Number(item.unit))}
                </li>
                <hr />
              </div>
            ))}
            <hr />
            <li className="d-flex justify-content-end fs-4">
              <b>Total: : ${total}</b>
            </li>
            <hr />
            <hr />
          </ul>
          <button type="button">Confirmar Compra</button>
        </form>
      </div>
    </div>
  );
};

export { Carrito };
