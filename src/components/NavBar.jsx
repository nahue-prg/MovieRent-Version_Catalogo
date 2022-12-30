import React, { useState } from 'react';
import CartWidget from './CartWidget';
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

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}
      color="dark"
      dark
      expand="lg"
      sticky='true'
      >
        <NavbarBrand href="#" className='align-middle'  style={{
          marginRight: 3
        }}><img
        alt="logo-pilchas-club"
        src="/pilchas-logo.png"
        style={{
          width: 40,
          marginRight: 0
        }}/></NavbarBrand>
        <NavbarText style={{
        color:'white',
        marginRight: 5
      }}>PILCHAS CLUB</NavbarText>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Productos
              </DropdownToggle>
              <DropdownMenu 
              right  
              color="dark"
              dark>
                <DropdownItem>Remeras</DropdownItem>
                <DropdownItem>Buzos</DropdownItem>
                <DropdownItem>Zapatillas</DropdownItem>
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



