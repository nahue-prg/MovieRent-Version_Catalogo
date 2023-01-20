import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { TbMovie } from 'react-icons/tb';
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

function Example(categorias) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
console.log("Estoy en navbar" );
console.log(Array.isArray(categorias));
console.log(categorias)
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
                <DropdownItem>Accion</DropdownItem>
                <DropdownItem>Ciencia Ficcion</DropdownItem>
                <DropdownItem>Infantiles</DropdownItem>
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

export default Example;



