import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ModalContainer from "./components/Modal/ModalContainer.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CatData from "./components/Catalogo/CarData/CatData";
import { Route, Routes } from "react-router-dom";
import DescripcionPagina from "./components/DescripcionPagina/DescripcionPagina";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { db } from "./db/firebasea-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import PostStore from "./components/PostStore/PostStore";
import Slider from "./components/NetflixSlider";

/*Cuando queremos acceder a un documento usamos getdoc, a varios getdocs */
const movies = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    imageBg: "/images/slide1b.webp",
    title: "1983",
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    imageBg: "/images/slide2b.webp",
    title: "Russian doll",
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    imageBg: "/images/slide3b.webp",
    title: "The rain",
  },
  {
    id: 4,
    image: "/images/slide4.jpg",
    imageBg: "/images/slide4b.webp",
    title: "Sex education",
  },
  {
    id: 5,
    image: "/images/slide5.jpg",
    imageBg: "/images/slide5b.webp",
    title: "Elite",
  },
  {
    id: 6,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror",
  },
];
function App() {
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "Movies");

  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    setItems(docs);
  };

  useEffect(() => {
   /* getItems();*/
   console.log("Aca se podrian obtener los items");
  }, []);

  useEffect(() => {
   /* console.log(items);*/
  }, [items]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                marginTop: "60px",
              }}
              className="container"
            >
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
              <DescripcionPagina />
            </div>
          }
        />
        <Route path="/Peliculas" element={<CatData />} />
        <Route path="/Peliculas/:id" element={<ItemDetail />} />
        <Route path="/Categoria/:id" element={<CatData />} />
        <Route path="/PostMovies" element={<PostStore />} />
      </Routes>
      <div className="app">
        <Slider>
          {movies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
