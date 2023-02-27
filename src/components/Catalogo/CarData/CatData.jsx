import React from 'react'
import Lista from '../Lista/Lista'
import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import {ordenarPorFecha, getRandomItems, getItemsWhereMemberArray} from '../../../code/funcionesComunes';
import Loader from '../../Loader/Loader';

const CatData = () => {
    const { id } = useParams();
    const categoria =  useLocation().pathname.split("/")[1];
    const [Movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // variable de estado para indicar si la página está cargando

    const getRandomMovies = async  () => {
        let peliculas = await getRandomItems("Movies", "release_date", "desc", 20);
        setMovies([]);
        setMovies(ordenarPorFecha(peliculas, 1))
        setIsLoading(false);
    }

    const getGenereMovies = async () => {
        let peliculas = await getItemsWhereMemberArray(parseInt(id), parseInt(20));
        setMovies([]);
        setMovies(ordenarPorFecha(peliculas, 1))
        setIsLoading(false);
    }

    useEffect(() => {
    categoria === 'categoria' ? getGenereMovies() : getRandomMovies();
    }, [])
    
    /*Llamo a la funcion cada vez que cambia el componente */
    useEffect(() => {
        categoria === 'categoria' ? getGenereMovies() : getRandomMovies();
        console.log("pase por ID " + categoria);
    }, [id]);

  return (
    <div className='container d-flex flex-wrap justify-content-center' style={{marginBottom: 60}} >
          {isLoading ? <Loader padding={100} /> : <Lista movies={Movies} />}
    </div>
  )
}

export default CatData