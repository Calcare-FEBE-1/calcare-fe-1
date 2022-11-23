import React from 'react'
import '../style/css/navbar.css'
import CalcareLogo from '../assets/img/CalcareLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector("nav").style.backgroundColor = "white";
        } else {
            document.querySelector("nav").style.backgroundColor = "transparent";
        }
    }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/Home">
                <img src={CalcareLogo} alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="toggle">
                    <li className="nav-item">
                        <Link className="nav-link" >Makanan</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" >Tracking Kalori</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" >Tracking Diet</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" >Dampak Karbon</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-primary" to="/LogIn">Keluar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" ><i className="bi bi-bell"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" ><i className="bi bi-person-circle"></i></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
