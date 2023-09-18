import React from 'react'
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa'
import { packages } from './common/Data'
import styled from 'styled-components'
import { Heading } from './common/Heading';

const PackWrapp = styled.div`
    .package-item img {
        width: 100%;
        height: 330px;
        transition: .5s;
    }
    .package-item:hover img {
    transform: scale(1.1);
  }
`;


export const Packages = () => {
  return (
    <PackWrapp>
    <div id="packages" class="container-xxl py-5">
        <div class="container">
            <Heading title="Packages" text="Awesome Packages"/>
            <div class="row g-4 justify-content-center">
               {packages.map((val) => (
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="package-item" style={{boxShadow: '0 0 45px rgba(0, 0, 0, .08)'}}>
                        <div class="overflow-hidden">
                            <img class="img-fluid" src={val.cover} alt="" />
                        </div>
                        <div class="d-flex border-bottom">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt me-2"><FaMapMarkerAlt color='#0077b5'/></i>{val.dest}</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt me-2"><FaCalendarAlt color='#0077b5'/></i>3 days</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-user me-2"><FaUser color='#0077b5'/></i>2 Person</small>
                        </div>
                        <div class="text-center p-4">
                            <h3 class="mb-0">{val.price}</h3>
                            <div class="mb-3">
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                            </div>
                            <p>{val.text}</p>
                            <div class="d-flex justify-content-center mb-2">
                                <a href="#/" class="btn btn-sm  px-3 border-end" style={{borderRadius: '30px 0 0 30px', color: '#f5f5f5', background: '#0077b5'}}>Read More</a>
                                <a href="#/" class="btn btn-sm  px-3" style={{borderRadius: '0 30px 30px 0', color: '#f5f5f5', background: '#0077b5'}}>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    </PackWrapp>
  )
}
