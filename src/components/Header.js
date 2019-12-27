import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={'/'} className="text-light">
            CRUD - React hooks
          </Link>
        </h1>
        <Link to={'/productos/nuevo'} className="btn btn-danger d-block d-md-inline-block new-post">
          Agregar un producto &#43;
        </Link>
      </div>
      
    </nav>
    
  );
}

export default Header;