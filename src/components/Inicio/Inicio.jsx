import React, { useEffect, useState } from "react";
import DescripcionPagina from "../DescripcionPagina/DescripcionPagina";
import ModalContainer from "../Modal/ModalContainer";
import GetCollectionFB from "../customHooks/GetCollectionFB/GetCollectionFB";
import Slider from "../NetflixSlider";
import Loader from "../Loader/Loader";
const movies = [
  {
    id: 1,
    image: "https://image.tmdb.org/t/p/w500//borxnSky4iAtOBWohFCWEUT2uZF.jpg",
    imageBg: "/images/slide1b.webp",
    title: "1983",
  },
  {
    id: 2,
    image: "https://image.tmdb.org/t/p/w500//rXm6H0bUIZwYqtgPSAGlV2UYmcE.jpg",
    imageBg: "/images/slide2b.webp",
    title: "Russian doll",
  },
  {
    id: 3,
    image: "https://image.tmdb.org/t/p/w500//borxnSky4iAtOBWohFCWEUT2uZF.jpg",
    imageBg: "/images/slide3b.webp",
    title: "The rain",
  },
  {
    id: 4,
    image: "https://image.tmdb.org/t/p/w500//borxnSky4iAtOBWohFCWEUT2uZF.jpg",
    imageBg: "/images/slide4b.webp",
    title: "Sex education",
  },
  {
    id: 5,
    image: "https://image.tmdb.org/t/p/w500//9GK9LTdgd0qTbhFkS630bk1qaE0.jpg",
    imageBg: "/images/slide5b.webp",
    title: "Elite",
  },
  {
    id: 6,
    image: "https://image.tmdb.org/t/p/w500//borxnSky4iAtOBWohFCWEUT2uZF.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror",
  },
  {
    id: 7,
    image: "https://image.tmdb.org/t/p/w500//borxnSky4iAtOBWohFCWEUT2uZF.jpg",
    imageBg: "/images/slide1b.webp",
    title: "1983",
  },
  {
    id: 8,
    image: "https://image.tmdb.org/t/p/w500//gx8ntnkuvPMDCt2qtr9YMDXjLAx.jpg",
    imageBg: "/images/slide2b.webp",
    title: "Russian doll",
  },
  {
    id: 9,
    image: "https://image.tmdb.org/t/p/w500//borxnSky4iAtOBWohFCWEUT2uZF.jpg",
    imageBg: "/images/slide3b.webp",
    title: "The rain",
  },
  {
    id: 10,
    image: "https://image.tmdb.org/t/p/w500//gx8ntnkuvPMDCt2qtr9YMDXjLAx.jpg",
    imageBg: "/images/slide4b.webp",
    title: "Sex education",
  },
  {
    id: 11,
    image: "https://image.tmdb.org/t/p/w500//oJJWjiMKExSi241NpKUqVIxWfH6.jpg",
    imageBg: "/images/slide5b.webp",
    title: "Elite",
  },
  {
    id: 12,
    image: "https://image.tmdb.org/t/p/w500//borxnSky4iAtOBWohFCWEUT2uZF.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror",
  },
];

const Inicio = () => {
  const  AccionMovies  =  GetCollectionFB(28, 5);
  const [AccionGenre, setAccionGenre] =  useState([]);

 useEffect(() => {
  setAccionGenre(AccionMovies.data);
 }, [AccionMovies])


  return (
    <div
      style={{
        marginTop: "60px",
        textAlign: "center",
      }}
      className="container"
    >
      <DescripcionPagina />
      <div style={{ marginTop: 60 }}></div>
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
      <div className="app" style={{ maxWidth: 1500, margin: "auto" }}>
       { AccionGenre.length > 0 ? <Slider>
          {AccionGenre.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider> : <Loader/>}
      </div>
    </div>
  );
};

export default Inicio;
