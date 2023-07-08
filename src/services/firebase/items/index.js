import { getFirestore, getDocs, collection } from "firebase/firestore";

const getItemsFB = async () => {
  const db = getFirestore();
  const itemsRef = collection(db, "items");
  const snapshot = await getDocs(itemsRef);

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export { getItemsFB };
