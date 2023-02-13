import { useEffect, useState } from "react";
import { db } from "../../../db/firebasea-config";
import { collection, getDocs, limit , query, orderBy } from "firebase/firestore";

function GetCollectionFB(nombreColeccion) {

  const [data, setData] = useState([]);
  const itemsCollection = collection(db, nombreColeccion.toString());
  
  const q = query(itemsCollection, orderBy("id", "desc"), limit(10));

  const getItems = async () => {
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    setData(docs);
  };

  useEffect(() => {
    getItems();
  }, []);

  return { data };
}

export default GetCollectionFB;