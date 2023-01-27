import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Modal/ItemListContainer.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CatData from './components/Catalogo/CarData/CatData';
import { Route, Routes } from 'react-router-dom';
import DescripcionPagina from './components/DescripcionPagina/DescripcionPagina';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { db } from './db/firebasea-config'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';

/*Cuando queremos acceder a un documento usamos getdoc, a varios getdocs */

function App() {

  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "Movies");

  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    setItems(docs);
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    console.log(items)
  }, [items])
  

  return (
    <div>    
    <NavBar/>
    <Routes>
      <Route path='/' element={
                    <div style={{ 
                      marginTop:'60px'}}
                      className='container'>
                      <ItemListContainer/>
                      <DescripcionPagina/>
                    </div>}
        /> 
      <Route path='/Peliculas' element={<CatData/>}/>
      <Route path='/Peliculas/:id' element={<ItemDetail/>}/> 
      <Route path='/Categoria/:id' element={<CatData/>}/>
    </Routes>
    <div className="App">
      {items.map((item) => {
        return <p>{item.title}</p>;
      })}
    </div>
     </div>
  );
}

export default App;
