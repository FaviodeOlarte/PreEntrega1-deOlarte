import { useNavigate } from "react-router-dom";
import { Item } from "../Item";

const ItemList = ({ items }) => {
  return items.map(({ id, nombre, descripcion, precio, imgCard,linkCard }) => (
    <Item
      id={id}
      nombre={nombre}
      descripcion={descripcion}
      precio={precio}
      imgCard={imgCard}
      linkCard={linkCard}
    />
  ));
};
export { ItemList };
