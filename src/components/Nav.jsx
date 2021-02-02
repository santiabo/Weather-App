import React from 'react';
import Logo from '../img/sun.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark navbar-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="55" height="55" className="d-inline-block align-top" alt="" />
          Weather App
        </span>
      </Link>
      <Link  to='/about' style={{ textDecoration: 'none', color:'black' }}>
        <span style={{textDecoration: "none"}}>About</span>
      </Link> 
      <SearchBar
        onSearch={onSearch}
      />
      
    </nav>
  );
};

export default Nav;
