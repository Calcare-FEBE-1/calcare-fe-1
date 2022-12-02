import React from 'react'
import '../style/css/navbarIndex.css'
import CalcareLogo from '../assets/img/CalcareLogo.png'
import { Link } from 'react-router-dom'

const NavbarIndex = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
        <div className="container-fluid">
            <Link className="navbar-brand " to="/">
                <img src={CalcareLogo} alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="toggle">
                    <li className="nav-item">
                        <Link className="btn btn-primary" to={props.url} >{props.name}</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default NavbarIndex
