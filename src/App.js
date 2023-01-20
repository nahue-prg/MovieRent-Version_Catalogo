import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Modal/ItemListContainer.jsx';
import Item from './components/Catalogo/Item/item';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CatData from './components/Catalogo/CarData/CatData';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function App() {
   const  [categorias, setCategorias] = useState([])  
   
  
   const getCategorias = () =>{
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=af1f89a05a4477a5e6990c32d50ccc1d&language=en-US')
    .then((res) => setCategorias(res.data.genres))
   }

   useEffect(() => {
     getCategorias();
   }, [])
   
   useEffect(() => {
      console.log(categorias);
   }, [categorias])
   

  return (
    <div>    
    <NavBar  categorias={categorias}/>
    <Routes>
      <Route path='/category/'></Route>
    </Routes>
    <CatData/>
    <ItemListContainer/>
     </div>
  );
}

export default App;
