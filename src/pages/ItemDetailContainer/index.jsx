import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../services";
import { ItemDetail } from "../../components";



const ItemDetailContainer = () => {
 const { id } = useParams();

const [item,setItem] = useState()

useEffect(()=>{
  getItem(id).then((data)=>{
    setItem(data)
  })
},[])

 if (!item) return <div> Cargando...</div> 

  return (
    <div>
      <ItemDetail 
      id={item.id} 
      nombre={item.nombre} 
      descripcion={item.descripcion}  
      precio={item.precio}
      imgCard={item.imgCard}
      />
    </div>
  );
};

export { ItemDetailContainer };
