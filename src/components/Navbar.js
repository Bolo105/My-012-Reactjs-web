import React, { useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { SiYourtraveldottv } from 'react-icons/si';
import styled from 'styled-components';

const Head = styled.h5`
   font-family: 'Kaushan Script', cursive;
   color: #0077b5;
   font-size: 35px;
`;
const Ic = styled.i`
  font-size: 30px !important;
  padding-top: 25px;
  color: #0077b5;
`;

export const Navbar = () => {
  
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 45) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Limpia el event listener cuando el componente se desmonta
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const navbarClasses = `navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 ${
        isSticky ? 'sticky-top shadow-sm' : ''
      }`;
      return (
  <div className="container-fluid position-relative p-0">
        <nav className={navbarClasses}>
            <Head className="fw-bold mb-4"><Ic className="me-3"><SiYourtraveldottv /></Ic>Travelers</Head>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                 <div className="navbar-nav ms-auto py-0">
                     <Link to='/' className="nav-item"  style={{textDecoration: 'none'}}>
                        <a href="#/" className="nav-item nav-link active" style={{color: '#0077b5'}}>Home</a>
                     </Link>
                     <Link to='/about' className="nav-item"  style={{textDecoration: 'none'}}>
                        <a href="#/" className="nav-item nav-link">About</a>
                     </Link>
                     <Link to='/services' className="nav-item"  style={{textDecoration: 'none'}}>
                        <a href="#/" className="nav-item nav-link">Services</a>
                     </Link>
                     <Link to='/packages' className="nav-item"  style={{textDecoration: 'none'}}>
                        <a href="#/" className="nav-item nav-link">Packages</a>
                     </Link>
                     <div className="nav-item dropdown">
                           <a href="#/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                           <div className="dropdown-menu m-0">
                              <Link to='/destination' className="nav-item"  style={{textDecoration: 'none'}}>
                                 <a href="#/" className="dropdown-item">Destination</a>
                              </Link>
                              <Link to='/booking' className="nav-item"  style={{textDecoration: 'none'}}>
                                 <a href="#/" className="dropdown-item">Booking</a>
                              </Link>
                              <Link to='/guides' className="nav-item"  style={{textDecoration: 'none'}}>
                                 <a href="#/" className="dropdown-item">Travel Guides</a>
                              </Link>
                           </div>
                     </div>
                     <Link to='/contact' className="nav-item"  style={{textDecoration: 'none'}}>
                        <a href="#/" className="nav-item nav-link">Contact</a>
                     </Link>
                 </div>
                 <a href="/" className="btn rounded-pill py-2 px-4" style={{background: '#0077b5', color: '#fff'}}>Register</a>
            </div>
        </nav>
    </div>
  )
}
