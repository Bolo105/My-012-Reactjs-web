import React from 'react'
import styled from 'styled-components'
import herobg from './images/herobg.jpg'

const HeroH = styled.div`
    background: linear-gradient(rgba(20, 20, 31, .7), rgba(20, 20, 31, .7)), url(${herobg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const Btn = styled.button`
    background: #0077b5;
    color: #f5f5f5;
    &:hover {
        background: #0077b5;
        color: #f5f5f5;
    }
`;

export const Hero = () => {
    
  return (
        <HeroH className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                        <div className="position-relative w-75 mx-auto animated slideInDown">
                            <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                            <Btn type="button" className="btn rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{marginTop: '7px'}}>Search</Btn>
                        </div>
                    </div>
                </div>
            </div>
        </HeroH>
   
  )
}
