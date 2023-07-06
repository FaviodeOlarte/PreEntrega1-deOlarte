import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { getCategorias, getItems } from "../../services";
import { ItemList } from "../../components";
import { CategoriasLateral } from "../../components/CategoriasLateral";
// import { getItems } from "../../services/firebase/items";

const ItemListContainer = () => {
  // --------------
  const { catId } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getItems(catId).then((data) => {
      setItems(data);
    });
  }, [catId]);

  useEffect(() => {
    getCategorias().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <>
      <>
        <div className="container m-0">
          <div className="row">
            <div className="col-2 mt-0 text-center bg-dark-subtle p-3 ">
              <CategoriasLateral />
            </div>

            <div className="col-10  mt-4 mb-3 ">
              <div id="contenedorProductos" className="row row-cols-3  gx-auto">
                <ItemList
                  items={items.map((item) => ({
                    ...item,
                    linkCard: () => navigate(`/item-detalle/${item.id}`),
                  }))}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

// -------------
export { ItemListContainer };
