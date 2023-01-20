import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Modal/ItemListContainer.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CatData from './components/Catalogo/CarData/CatData';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { TbMovie } from 'react-icons/tb';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  
   

  return (
    <div>    
    <NavBar/>
    <Routes>
      <Route path='/' element={
                    <div style={{
                      width:'800px', 
                      margin:'auto',
                      marginTop:'60px',
                      textAlign:'center' }}>
                      <ItemListContainer/>
                      <p style={{
                                textAlign:'center',
                                marginTop:'60px',
                                fontWeight:'bolder'
                                }}>
                                  ¡Bienvenidos a  <span style={{}}><TbMovie style={{color:'red',marginRight: 3}}/>Movie<span style={{color:'red', fontWeight:'bolder'}}></span><span style={{fontWeight:'bolder'}}>|Rent</span></span>, la nueva forma de ver tus películas y series favoritas sin compromiso! 
                      </p>
                      <p style={{
                                textAlign:'justify',
                                marginTop:'10px',
                                lineHeight:'2rem'
                                }}>
                                  Con nuestra aplicación web, puedes alquilar tus títulos favoritos de manera eficiente y sin costos adicionales. 
                                  <b>No más suscripciones mensuales que pagas sin importar si ves o no los contenidos.</b>
                                  Nuestra plataforma cuenta con una amplia variedad de títulos, desde clásicos hasta estrenos recientes. 
                                  Además, nuestro catálogo se actualiza constantemente para asegurar que siempre tengas algo nuevo y emocionante para ver.
                                  Con "MovieRent", puedes alquilar una película o serie por un precio razonable y verlos durante un período de tiempo específico. 
                                  Puedes seleccionar solo lo que realmente quieres ver y no tener que preocuparte por pagar por contenido adicional que no utilizaras. Además, nuestra plataforma ofrece una excelente calidad de reproducción, para que puedas disfrutar de tu contenido favorito en alta definición.
                       </p>
                       <p style={{
                                textAlign:'center',
                                marginTop:'20px',
                                lineHeight:'2rem'
                                }}>
                                  ¡Únete a nosotros hoy y descubre la comodidad y flexibilidad de alquilar tus películas y series favoritas en línea sin compromiso con MovieRent!
                        </p>
                    </div>}
        /> 
      <Route path='/Peliculas' element={<CatData/>}/>
      <Route path='/Peliculas/:id' element={<ItemDetail/>}/> 
      <Route path='/Categoria/:id' element={<CatData/>}/>
    </Routes>
     </div>
  );
}

export default App;
