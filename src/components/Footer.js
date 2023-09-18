import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import pack1 from './images/pack1.jpg'
import pack2 from './images/pack2.jpg'
import pack3 from './images/pack3.jpg'

const BtnS = styled.a`
    margin-right: 5px;
    text-decoration: none;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F5F5F5;
    font-weight: normal;
    border: 1px solid #FFFFFF;
    border-radius: 35px;
    transition: .3s;
    &:hover {
        color: #0077b5;
    }
`;
const BtnL = styled.a`
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
    padding: 0;
    text-align: left;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: normal;
    text-transform: capitalize;
    transition: .3s;
    &:hover {
        letter-spacing: 1px;
        box-shadow: none;
        color: #f5f5f5;
    }
`;
const Icon = styled.i`
    margin-left: -5px;
    font-weight: bold !important;
    margin-right: 9px;
`;
const Copy = styled.div`
    padding: 25px 0;
    font-size: 15px;
    border-top: 1px solid rgba(256, 256, 256, .1);
`;
const A = styled.a`
    color: #F5F5F5;
    text-decoration: none;
`;
const FootM = styled.div`
    .footer-menu a{
    text-decoration: none;
    color: #F5F5F5;
    margin-right: 15px;
    padding-right: 15px;
    border-right: 1px solid rgba(255, 255, 255, .1);
    &:last-child {
        margin-right: 0;
        padding-right: 0;
        border-right: none;
    }
}
`;
const Img = styled.img`
    width: 100%;
    height: 65px;
`;

export const Footer = () => {
  return (
	<div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6 text-start">
                    <h4 className="text-white mb-3">Company</h4>
                    <BtnL className="btn btn-link" href="/"><Icon><FiChevronRight /></Icon>About Us</BtnL>
                    <BtnL className="btn btn-link" href="/"><Icon><FiChevronRight /></Icon>Contact Us</BtnL>
                    <BtnL className="btn btn-link" href="/"><Icon><FiChevronRight /></Icon>Privacy Policy</BtnL>
                    <BtnL className="btn btn-link" href="/"><Icon><FiChevronRight /></Icon>Terms & Condition</BtnL>
                    <BtnL className="btn btn-link" href="/"><Icon><FiChevronRight /></Icon>FAQs & Help</BtnL>
                </div>
                <div className="col-lg-3 col-md-6 text-start">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"><FaMapMarkerAlt /></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"><FaPhoneAlt /></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"><FaEnvelope /></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <BtnS className="btn btn-outline-light btn-social" href="/"><i><FaFacebookF /></i></BtnS>
                        <BtnS className="btn btn-outline-light btn-social" href="/"><i><FaTwitter /></i></BtnS>
                        <BtnS className="btn btn-outline-light btn-social" href="/"><i><FaYoutube /></i></BtnS>
                        <BtnS className="btn btn-outline-light btn-social" href="/"><i><FaLinkedinIn /></i></BtnS>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-start">
                    <h4 className="text-white mb-3">Gallery</h4>
                    <div className="row g-2 pt-2">
                        <div className="col-4">
                            <Img className="img-fluid bg-light p-1" src={pack1} alt="" />
                        </div>
                        <div className="col-4">
                            <Img className="img-fluid bg-light p-1" src={pack2} alt="" />
                        </div>
                        <div className="col-4">
                            <Img className="img-fluid bg-light p-1" src={pack3} alt="" />
                        </div>
                        <div className="col-4">
                            <Img className="img-fluid bg-light p-1" src={pack2} alt="" />
                        </div>
                        <div className="col-4">
                            <Img className="img-fluid bg-light p-1" src={pack3} alt="" />
                        </div>
                        <div className="col-4">
                            <Img className="img-fluid bg-light p-1" src={pack1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-start">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" >{/* style="max-width: 400px;"*/}
                        <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" style={{borderRadius: '0'}}/>
                        <button type="button" className="btn py-2 position-absolute top-0 end-0 mt-2 me-2" style={{borderRadius: '0', background: '#0077b5', color: '#f5f5f5'}}>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <Copy className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <A className="" href="#/">MyCompanyName</A>, All Right Reserved.
                        Designed By <A className="" href="">allmostDone</A>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                      <FootM>
                        <div className="footer-menu">
                            <a href="/">Home</a>
                            <a href="/">Cookies</a>
                            <a href="/">Help</a>
                            <a href="/">FQAs</a>
                        </div>
                      </FootM>
                    </div>
                </div>
            </Copy>
        </div>
    </div>
  )
}

