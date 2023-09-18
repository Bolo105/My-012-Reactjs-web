import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, 
	FaEnvelope, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'

const Btn = styled.a`
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    transition: .5s;
	width: 32px;
    height: 32px;
	padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    border-radius: 0px;
`;
const Box = styled.div`
   height: 45px;
`;

export const NavbarTop = () => {
  return (
	<div className="container-fluid bg-dark px-5 d-none d-lg-block">
	<div className="row gx-0">
		<div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
			<Box className="d-inline-flex align-items-center" >
				<small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"><FaMapMarkerAlt /></i>763 Awesome Dr, Pennsilvanya, USA</small>
				<small className="me-3 text-light"><i className="fa fa-phone-alt me-2"><FaPhoneAlt /></i>+1 987 654 3210</small>
				<small className="text-light"><i className="fa fa-envelope-open me-2"><FaEnvelope /></i>myemail500@company.com</small>
			</Box>
		</div>
		<div className="col-lg-4 text-center text-lg-end">
			<Box className="d-inline-flex align-items-center" >
				<Btn className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i className="fab fa-twitter fw-normal"><FaFacebookF /></i></Btn>
				<Btn className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i className="fab fa-facebook-f fw-normal"><FaTwitter /></i></Btn>
				<Btn className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i className="fab fa-linkedin-in fw-normal"><FaInstagram /></i></Btn>
				<Btn className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i className="fab fa-instagram fw-normal"><FaYoutube /></i></Btn>
				<Btn className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="/"><i className="fab fa-youtube fw-normal"><FaLinkedinIn /></i></Btn>
			</Box>
		</div>
	</div>
</div>
  )
}

