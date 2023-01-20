import React from 'react'
import Lista from '../Lista/Lista'
import axios from 'axios';
import { useState, useEffect } from 'react';

const CatData = () => {

    const [Movies, setMovies] = useState([]);
    const [content, setContent] = useState([]);


    const getRandomMovies = () => {

        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=af1f89a05a4477a5e6990c32d50ccc1d&page=1")
        .then((res) =>  {
            setMovies(res.data.results); 
        });
    }

    const getContent = () => {
      console.log("Llegue a getcontent")
    }

    /*Llamo a la funcion cuando se cargo el componente por primera vez */
    useEffect(() => {
        getRandomMovies();
    }, []);

    useEffect(() => {
        getContent();
        console.log(Movies);
    }, [Movies]);
    
  return (
  
    <div>
        <Lista movies={Movies}></Lista>
    </div>
  )
}


export default CatData