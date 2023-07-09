// import { useNavigate } from "react-router-dom";
import { Item } from "../Item";

const ItemList = ({ items }) => {
  return items.map((item) => <Item key={item.id} {...item} />);
};

// const ItemList = ({items}) => {
//   return(
//     <div>
//       {items.map((item)=>{
//         return <Item key={item.id} {...item}/>
//       })}
//     </div>
//   )
// }

export { ItemList };
