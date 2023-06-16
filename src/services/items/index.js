import { productos } from "../../temp/data";

const getItems = async (catId) => {
  return new Promise((resolve, reject) => {
    resolve(
      catId === "0" || !catId
        ? productos
        : productos.filter((prod) => prod.catSexo === catId)
    );
  });
};

const getItem = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(productos.find((item) => item.id === id));
  });
};

export { getItems, getItem };
