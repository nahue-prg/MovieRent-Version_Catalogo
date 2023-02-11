import { useEffect } from "react";
import { db } from "../../db/firebasea-config";
import { updateDoc, doc } from "firebase/firestore";

function UpdateItem(coleccion, ID, {miembros}) {

  const ref = doc(db,coleccion,ID);

  const updateItem = async () => {
   var x =  await updateDoc(ref,  {
        miembros
      });
      console.log("Update realizado " + x);
  };

  useEffect(() => {
    updateItem();
  }, []);

  return {  };
}

export default UpdateItem;