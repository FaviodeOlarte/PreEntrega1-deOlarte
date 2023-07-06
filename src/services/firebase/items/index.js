import { getFirestore, getDoc, doc, collection } from "firebase/firestore";

const getItems = async () => {
  const db = getFirestore();
  const itemsRef = collection(db, "items");
  const snapshot = await getDoc(itemsRef);

  return snapshot.docs.map((doc) => doc.data());
};

export { getItems };
