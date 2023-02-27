import { useEffect, useState } from "react";
import {getItemsWhereMemberArray} from '../../../code/funcionesComunes'

function GetCollectionFB(IDgenero, limite) {

  const [data, setData] = useState([]);

  const getItems = async () => {
    let data = await getItemsWhereMemberArray(parseInt(IDgenero), parseInt(limite));
    console.log("desdeGetCollection FB");
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return { data };
}

export default GetCollectionFB;