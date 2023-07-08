import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { getCategorias, getItems } from "../../services";
import { ItemList } from "../../components";
import { CategoriasLateral } from "../../components/CategoriasLateral";
// import { getItems } from "../../services/firebase/items";
import { getItemsFB } from "../../services/firebase/items";

const ItemListContainer = () => {
  // --------------
  const { catId } = useParams();
  const productos = [];
  const navigate = useNavigate();
  // const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  // ================firebse
  const [itemsFB, setItemsFB] = useState([]);

  useEffect(() => {
    getItemsFB(catId).then((data) => {
      setItemsFB(data);
    });
  }, [catId]);

  // =============

  //   useEffect(() => {
  //     getItems(catId).then((data) => {
  //       setItems(data);
  //     });
  //   }, [catId]);

  useEffect(() => {
    getCategorias().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <>
      <div className="container-fluid m-0 w-auto p-0">
        <div className="row me-0  w-100 p-0">
          <div className="col-2 mt-0 text-center bg-dark-subtle p-3 ">
            <CategoriasLateral />
          </div>

          <div className="col-10  mt-4 mb-3 m-0 mx-auto conteiner">
            <div id="contenedorProductos" className="row row-cols-3 mx-auto  ">
              {/* <ItemList
                  items={itemsFB.map((itemsFB) => ({
                    ...itemsFB,
                    linkCard: () => navigate(`/item-detalle/${itemsFB.id}`),
                  }))}
                /> */}
              <ItemList
                items={itemsFB.filter((item) =>
                  catId === "0" || !catId ? itemsFB : item.catSexo === catId
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// -------------
export { ItemListContainer };
