import { createContext, useState } from "react";

const ItemsCarritoContext = createContext();

const ItemsCarritoProvider = ({ children }) => {
  const [listCarrito, setListCarrito] = useState([]);
  const [unitObjCarrito, setUnitObjCarrito] = useState([]);

  const addListCarrito = (items) => {
    const objCarrito = listCarrito.find((item) => item.id === items.id);
    if (objCarrito) {
      objCarrito.unit++;
      setListCarrito([...listCarrito]);
    } else {
      setListCarrito([...listCarrito, items]);
    }
  };
  const countObjCarrito = () => {
    let unitObjCarritoTemp = 0;

    if (listCarrito) {
      unitObjCarritoTemp = listCarrito.unit.reduce(function (a, r) {
        return a + r;
      }, 0);
    }
    setUnitObjCarrito(unitObjCarritoTemp);
    //console.log(unitObjCarrito);
  };

  const verListaCarrito = () => {
    console.log(`Mostrar lista de carrito ${listCarrito}`);
  };

  return (
    <ItemsCarritoContext.Provider
      value={{
        listCarrito,
        unitObjCarrito,
        addListCarrito,
        verListaCarrito,
        countObjCarrito,
      }}
    >
      {" "}
      {children}
    </ItemsCarritoContext.Provider>
  );
};

export { ItemsCarritoContext, ItemsCarritoProvider };
