import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import styles from "./ItemStyles.css"

const Item = ({id, title, overview, estreno, poster_path}) => {
  return (
    <Card className={styles.card} key={id} sm="6" >
      <CardImg top src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} style={{width: '100%'}}/>
      <CardBody>
          <CardTitle style={{fontSize:'1.2rem', height:'1.7rem', overflow:'hidden'}}><b>{title}</b></CardTitle>
          <CardSubtitle>{`Estreno: ${estreno}`}</CardSubtitle> 
          <CardText style={{height:'110px',
                          overflowY:'hidden'}}>{overview}</CardText>    
          <div className="d-flex justify-content-center align-items-center">
            <Link to={`/Peliculas/${id}`}>
            <Button color="primary">Ver detalle</Button>
            </Link>
          </div>
      </CardBody>
    </Card>
  )
}
export default Item