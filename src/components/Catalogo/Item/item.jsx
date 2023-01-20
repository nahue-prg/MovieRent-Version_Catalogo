import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { Link } from 'react-router-dom'

const Item = ({id, title, overview, estreno, poster_path}) => {
  return (
    <Card key={id} style={{width:'400px'}}>
      <CardImg top src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} style={{width: 'max-content'}}/>
      <CardBody>
        <CardTitle>{title}</CardTitle>
         <CardSubtitle>{`Estreno: ${estreno}`}</CardSubtitle> 
        <CardText>{overview}</CardText>
        <Link to={`/Peliculas/${id}`}><Button color="primary">Ver detalle</Button></Link>
      </CardBody>
    </Card>
  )
}

export default Item