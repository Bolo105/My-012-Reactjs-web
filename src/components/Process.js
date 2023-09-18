import React from 'react'
import { process } from './common/Data'
import styled from 'styled-components'
import { Heading } from './common/Heading';

const IconBox = styled.div`
   width: 100px; 
   height: 100px;
   background: #0077b5;
`;
const Box = styled.div`
   border: 1px solid #0077b5;
`;

export const Process = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <Heading title="Process" text="3 Easy Steps"/>
            <div className="row gy-5 gx-4 justify-content-center">
              {process.map((val) => (
                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                    <Box className="position-relative pt-5 pb-4 px-4">
                        <IconBox className="d-inline-flex align-items-center justify-content-center rounded-circle position-absolute top-0 start-50 translate-middle shadow" >
                            <i className="fa fa-globe fa-3x text-white">{val.icon}</i>
                        </IconBox>
                        <h5 className="mt-4">{val.title}</h5>
                        <hr className="w-25 mx-auto mb-1" style={{color: '#0077b5'}}/>
                        <hr className="w-50 mx-auto mt-0" style={{color: '#0077b5'}}/>
                        <p className="mb-0">{val.text}</p>
                    </Box>
                </div>
               ))}
            </div>
        </div>
    </div>
  )
}
