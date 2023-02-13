import { db } from "../db/firebasea-config";
import { collection, getDocs, limit , query, orderBy, where } from "firebase/firestore";

//------Funciones comunes
export const ordenarPorFecha = (array, orden) => {
    let retorno;
    switch(orden){
        case 1:     
        retorno =   array.sort((a, b) => {
                let dateA = new Date(a.release_date);
                let dateB = new Date(b.release_date);
                return dateB - dateA;
            });
            return retorno;
        case 2:
        retorno=   array.sort((a, b) => {
                let dateA = new Date(a.release_date);
                let dateB = new Date(b.release_date);
                return dateA - dateB;
            });
        return retorno; 
        default :  return array
    }
}

export const filtrarPorGenero = (array,IDgenero) => {
  let filtrado =   array.filter(object => object.genre_ids.includes(IDgenero));
  return filtrado;
}


//------Acceso a la base
export const getRandomItems = async (nombreColeccion, orderMiembro, orderCriterio, limite) => {
    const itemsCollection = collection(db, nombreColeccion.toString());
    const q = query (    
                    itemsCollection, 
                    orderMiembro!== null && orderCriterio !== null ? orderBy(orderMiembro.toString(), orderCriterio.toString()): null, 
                    limit(limite)
                    );
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    return docs; 
};

export const getWhereItems = async (nombreColeccion, miembro, operador, valor, limite) => {
    const itemsCollection = collection(db, nombreColeccion.toString());
    const q = query (    
                    itemsCollection, 
                    where(miembro.toString(), operador.toString(), valor),
                    limit(limite)
                    );
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    return docs; 
};

export const getItemsWhereMemberArray = async (IDgenero, limite) =>{
    const itemsCollection = collection(db, "Movies");
    const q = query (    
                    itemsCollection,
                    where("genre_ids","array-contains", IDgenero),
                    limit(limite)
                    );
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    return docs;
}
  
