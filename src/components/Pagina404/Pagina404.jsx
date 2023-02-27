import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const Pagina404 = () => {
  return (
    <Container style={{textAlign:'center', marginTop:50}}>
    <Row>
      <Col><h1 style={{fontWeight:'bolder'}}>La pagina solicitada no existe </h1></Col>
    </Row>
    <Row style={{ marginTop:50}}>
      <Col><Link to="/"><Button color='primary'>Ir al menu principal</Button></Link></Col>
    </Row>
    <Row style={{ marginTop:50}}>
      <Col>o te sugerimos</Col>
    </Row>
    <Row style={{ marginTop:50}}>
      <Col><Link to="/Peliculas"><Button color='primary'>Ver Peliculas</Button></Link></Col>
    </Row>
  </Container>
  )
}

export default Pagina404