import { useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import UserLoginForm from "../components/login/UserLoginForm";
// import { logDOM } from "@testing-library/react";


const Header = () => {
const [menuOpen ,setMenuOpen]  = useState(false)

  return (
    <div>
        {/* styling for navbar?? */}
      <Navbar dark color='primary' background-color='#fbb03a' sticky='top' expand='md'>
        <NavbarBrand className="ms-5" href='/'>
          <img src={'eq logo.png'} alt="equipped -logo" className="float-start"/>
           <h1 className="mt-1">Get Equipped</h1>
    
        </NavbarBrand>
        <NavbarToggler  onClick={()=>setMenuOpen(!menuOpen)}/>
        <Collapse  isOpen={menuOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink className='nav-link' to='/' >
                    <i className='fa fa-home fa-lg' /> Home
                    </NavLink>
              </NavItem>
              <NavItem>
              {/* Links to about and sites shoudl change to purchase links? */}
                <NavLink className='nav-link' to='/purchase-listings' >
                <i className='fa fa-list fa-lg' />????
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/about' >
                <i className='fa fa-info fa-lg' />  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/' >
                <i className='fa fa-address-card  fa-lg' />How It Works
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
              <UserLoginForm />
      </Navbar>
    </div>
  );
};

export default Header;
