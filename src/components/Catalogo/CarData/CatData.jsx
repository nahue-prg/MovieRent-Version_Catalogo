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
        console.log("Soy una random movie");
        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=af1f89a05a4477a5e6990c32d50ccc1d&page=1")
        .then((res) =>  {
            setMovies(res.data.results); 
        });
    }

    const getGenereMovies = () =>{
        setMovies([]);
        console.log("Soy un genero movie" + id);
        axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=af1f89a05a4477a5e6990c32d50ccc1d&page=1`)
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
    <div>
        <Lista movies={Movies}></Lista>
    </div>
  )
}


export default CatData