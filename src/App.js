import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ModalContainer from "./components/Modal/ModalContainer.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CatData from "./components/Catalogo/CarData/CatData";
import { Route, Routes } from "react-router-dom";
import DescripcionPagina from "./components/DescripcionPagina/DescripcionPagina";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import PostStore from "./components/PostStore/PostStore";
import Slider from "./components/NetflixSlider";
import { createContext, useEffect, useState } from "react";
import DetalleCompra from "./components/DetalleCompra/DetalleCompra";
import FormularioPago from "./components/FormularioPago/FormularioPago";
import Pedidos from "./components/Pedidos/Pedidos";

// const movies = [
//   {
//     id: 1,
//     image: "/images/slide1.jpg",
//     imageBg: "/images/slide1b.webp",
//     title: "1983",
//   },
//   {
//     id: 2,
//     image: "/images/slide2.jpg",
//     imageBg: "/images/slide2b.webp",
//     title: "Russian doll",
//   },
//   {
//     id: 3,
//     image: "/images/slide3.jpg",
//     imageBg: "/images/slide3b.webp",
//     title: "The rain",
//   },
//   {
//     id: 4,
//     image: "/images/slide4.jpg",
//     imageBg: "/images/slide4b.webp",
//     title: "Sex education",
//   },
//   {
//     id: 5,
//     image: "/images/slide5.jpg",
//     imageBg: "/images/slide5b.webp",
//     title: "Elite",
//   },
//   {
//     id: 6,
//     image: "/images/slide6.jpg",
//     imageBg: "/images/slide6b.webp",
//     title: "Black mirror",
//   },
// ];

export const Carrito = createContext(null);


function App() {

  const [productosCart, setProductosCart] = useState([])


  // useEffect(() => {
  //   setProductosCart([]);
  // }, [])

  return (
    <div className="raiz">
      
      <Carrito.Provider value={{productosCart, setProductosCart}}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  marginTop: "60px",
                  textAlign:"center"
                }}
                className="container"
              >
                <DescripcionPagina/>
                <div style={{marginTop:60}}></div>
                <ModalContainer
                  botonActivador={"Ver catalogo de peliculas"}
                  titulo={"Movie | Rent"}
                  descripcion={
                    "Quieres ver las ultimas novedades en peliculas? Haz click para ver el catalogo!"
                 
                  }
                  botonAccion={"Ver catalogo"}
                  botonURL={"/Peliculas"}
                  botonCerrar={"Cancelar"}  
                />   
              </div>
            }
          />
            <Route path="/Peliculas" element={<CatData />} />
            <Route path="/Peliculas/:id" element={<ItemDetail />} />
            <Route path="/Categoria/:id" element={<CatData />} />
            <Route path="/PostMovies" element={<PostStore />} /> 
            <Route path="/Carrito" element={<DetalleCompra/>}/>
            <Route path="/Pagar" element={<FormularioPago/>}/>
            <Route path="/Pedidos" element={<Pedidos/>}/>
            {/* <Route path="/Pedido" element={<FormularioPago/>}/> */}
        </Routes>
      </Carrito.Provider>
      {/* <div className="app">
        <Slider>
          {movies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div> */}
    </div>
  );
}

export default App;
