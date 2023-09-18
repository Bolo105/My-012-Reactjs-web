import React from 'react'
import des1 from './images/des1.jpg'
import des2 from './images/des2.jpg'
import des3 from './images/des3.jpg'
import des4 from './images/des4.jpg'
import styled from 'styled-components'
import { Heading } from './common/Heading'

const DestinationWrapper = styled.div`
  .destination img {
    transition: 0.5s;
  }

  .destination a:hover img {
    transform: scale(1.1);
  }
`;
const Imag = styled.img`
   object-fit: cover !important;
   width: 100%;
   height: 100%;
`;
const Dest = styled.div`
   color: #0077b5;
`;

export const Destination = () => {
  return (
    <DestinationWrapper>
    <div id="destination" className="container-xxl py-5 destination">
        <div className="container">
            <Heading title="Destination" text="Popular Destination"/>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <a className="position-relative d-block overflow-hidden" href="/">
                                <img className="img-fluid" src={des1} alt="" />
                                <div className="bg-white text-warning fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">30% OFF</div>
                                <Dest className="bg-white fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Thailand</Dest>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a className="position-relative d-block overflow-hidden" href="/">
                                <img className="img-fluid" src={des2} alt="" />
                                <div className="bg-white text-warning fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">25% OFF</div>
                                <Dest className="bg-white fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Malaysia</Dest>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a className="position-relative d-block overflow-hidden" href="/">
                                <img className="img-fluid" src={des3} alt="" />
                                <div className="bg-white text-warning fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">35% OFF</div>
                                <Dest className="bg-white fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Australia</Dest>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" >
                    <a className="position-relative d-block h-100 overflow-hidden" href="/">
                        <Imag className="img-fluid" src={des4} alt="" />
                        <div className="bg-white text-warning fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">20% OFF</div>
                        <Dest className="bg-white fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Indonesia</Dest>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </DestinationWrapper>
  )
}
