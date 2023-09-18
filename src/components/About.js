import React from 'react'
import about1 from './images/about1.jpg'
import { FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';

const ImgBox = styled.div`
   min-height: 400px;
`;
const Imag = styled.img`
   object-fit: cover;
   width: 100%;
   height: 445px;
`;
const Btn = styled.a`
   background: #0077b5;
   color: #f5f5f5;
   &:hover {
    background: #0077b5;
    color: #f5f5f5;
   }
`;
const Head6 = styled.h6`
   color: #0077b5;
   text-transform: uppercase;
`;
const Spa = styled.span`
   color: #0077b5;
`;

export const About = () => {
  return (
    <div id="about" className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <ImgBox className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="position-relative h-60">
                        <Imag className="img-fluid  w-100" src={about1} alt=""/>
                    </div>
                </ImgBox>
                <div className="col-lg-6 wow fadeInUp text-start" data-wow-delay="0.3s">
                    <Head6 className="section-title bg-white text-start  pe-3">About Us</Head6>
                    <h1 className="mb-4">Welcome to <Spa className="">Travelers</Spa></h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"><FaArrowRight color='#0077b5'/></i>First Class Flights</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"><FaArrowRight color='#0077b5'/></i>Handpicked Hotels</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"><FaArrowRight color='#0077b5'/></i>5 Star Accommodations</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"><FaArrowRight color='#0077b5'/></i>Latest Model Vehicles</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"><FaArrowRight color='#0077b5'/></i>150 Premium City Tours</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"><FaArrowRight color='#0077b5'/></i>24/7 Service</p>
                        </div>
                    </div>
                    <Btn className="btn py-3 px-5 mt-2" href="/" style={{borderRadius: '0'}}>Read More</Btn>
                </div>
            </div>
        </div>
    </div>
  )
}
