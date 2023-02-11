import React from 'react'
import Lista from '../Lista/Lista'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";


const CatData = () => {
    const { id } = useParams();

    const categoria =  useLocation().pathname.split("/")[1];

    const [Movies, setMovies] = useState([]);

    const getRandomMovies = () => {
        setMovies([]);
        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=af1f89a05a4477a5e6990c32d50ccc1d&page=1&language=es-ES&region=ES")
        .then((res) =>  {
            setMovies(res.data.results); 
        });
    }

    const getGenereMovies = () =>{
        setMovies([]);
        axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=af1f89a05a4477a5e6990c32d50ccc1d&page=1&language=es-ES&region=ES`)
        .then((res) => setMovies(res.data.results));
    }

    /*Llamo a la funcion cada vez que cambia el componente */
    useEffect(() => {
        categoria === 'categoria' ? getGenereMovies() : getRandomMovies();
        console.log(categoria);
    }, [id]);

    useEffect(() => {
        console.log(Movies);
    }, [Movies]);

  return (
    <div className='container d-flex flex-wrap justify-content-center ' >
        <Lista movies={Movies}></Lista>
    </div>
  )
}


export default CatData