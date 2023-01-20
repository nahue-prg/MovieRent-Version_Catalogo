import React, { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { TbMovie } from 'react-icons/tb';
import axios from 'axios';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom'

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const  [categorias, setCategorias] = useState([])  
   
  /*Obtengo las categorias que va a contener el NavBar */
  const getCategorias = () =>{
   axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=af1f89a05a4477a5e6990c32d50ccc1d&language=en-US')
   .then((res) => setCategorias(res.data.genres))
  }

  useEffect(() => {
    getCategorias();
  }, [])

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar 
      color="dark"
      dark
      expand="lg"
      sticky='true'
      >
      <Link to="/"><NavbarBrand href="#" className='align-middle'  style={{
        marginRight: 0,
        display:'flex'
      }}><TbMovie
      style={{
        color:'red',
        marginRight: 3
      }}/></NavbarBrand></Link>
      <Link to="/" style={{textDecoration:'none'}}><NavbarText style={{
      color:'white',
      marginRight: 5
      }}>Movie<span style={{color:'red', fontWeight:'bolder'}}></span>|<span style={{fontWeight:'bolder'}}>Rent</span></NavbarText></Link>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categorias
              </DropdownToggle>
              <DropdownMenu 
              right  
              color="dark"
              dark>
                {categorias.map((categoria) => <Link to={`/categoria/${categoria.id}`} style={{textDecoration:'none', color:'#ccc'}} key={categoria.id}><DropdownItem>{categoria.name}</DropdownItem></Link> )}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#">Politicas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Mi cuenta
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavItem>
          <CartWidget number={3}/>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default NavBar;



