import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const ItemDetail = () => {
  const { id } = useParams();
  const  [movie, setMovie] = useState({});

  const getMovieDetail = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=af1f89a05a4477a5e6990c32d50ccc1d&language=es-ES&region=ES`)
    .then((res) => setMovie(res.data));
  }

  useEffect(() => {
    console.log(movie);
  }, [movie])
  
  useEffect(() => {
    getMovieDetail();
  }, [])

  return (
    <Card key={id} style={{width:'600px'}}>
      <CardImg top src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} style={{width: 'max-content'}}/>
      <CardBody>
        <CardTitle>{movie.title}</CardTitle>
         <CardSubtitle>{movie.overview}</CardSubtitle> 
        <CardText>{`Estreno: ${movie.release_date}`}</CardText>
        <CardText>{`Duracion : ${movie.runtime} minutos`}</CardText>
        <Button color="primary">Rent!</Button>
      </CardBody>
    </Card>
  );
};

export default ItemDetail;
