import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components";

const ItemDetailContainer = () => {
  const { id } = useParams();

  return (
    <div>
      <ItemDetail />
    </div>
  );
};

export { ItemDetailContainer };
