import { categorias } from "../../temp/data";

const getCategorias = async () => {
  return new Promise((resolve, reject) => {
    resolve(categorias);
  });
};

const getCategoria = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(categorias.find((cat) => cat.id === id));
  });
};

export { getCategorias, getCategoria };
