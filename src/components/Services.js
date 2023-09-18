import React from 'react'
import { services } from './common/Data'
import styled from 'styled-components'; 
import { Heading } from './common/Heading';


const ServI = styled.div`
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
  transition: 0.5s;
  padding: 4px;

  &:hover {
    background: #0077b5;
  }

  * {
    transition: 0.5s;
    text-align: left;
  }

  &:hover * {
    color: #F5F5F5 !important;
  }
`;

export const Services = () => {
  return (
    <div id="services" className="container-xxl py-5">
    <div className="container">
        <Heading title="Services" text="Our Services"/>
        <div className="row g-4">
          {services.map((val) => (
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <ServI className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="">{val.icon}</i>
                        <h5 className='mt-4'>{val.title}</h5>
                        <p>{val.text}</p>
                    </div>
                </ServI>
            </div>
           ))}
        </div>
    </div>
</div>
  )
}
