import { useEffect, useState } from "react";
import { db } from "../../../db/firebasea-config";
import { collection, getDocs } from "firebase/firestore";

function GetCollectionFB(nombreColeccion) {

  const [data, setData] = useState([]);
  const itemsCollection = collection(db, nombreColeccion);

  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollection);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    setData(docs);
  };

  useEffect(() => {
    getItems();
  }, []);

  return { data };
}

export default GetCollectionFB;