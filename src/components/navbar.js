import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

export const BarraNav = (props) => {



  return <nav className="navbar navbar-expand-lg navbar-light bg-light" id="barra-navegacion">
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <h1 className="text-center">Golf App Track</h1>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/new_training">Current Training</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registro">Registro</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}