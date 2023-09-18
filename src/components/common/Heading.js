import React from 'react'
import styled from 'styled-components'

const SecT = styled.h6`
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    color: #0077b5;
    font-weight: bold;
    &::before {
      position: absolute;
      content: "";
      width: calc(100% + 80px);
      height: 2px;
      top: 4px;
      left: -40px;
      background: #0077b5;
      z-index: -1;
    }
    &::after {
      position: absolute;
      content: "";
      width: calc(100% + 120px);
      height: 2px;
      bottom: 5px;
      left: -60px;
      background: #0077b5;
      z-index: -1;
    }
`;
const Head = styled.h1`
   font-weight: bold;
`;

export const Heading = ({title, text}) => {
  return (
    <div>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <SecT className="section-title bg-white text-center px-3">{title}</SecT>
            <Head className="mb-5">{text}</Head>
        </div>
    </div>
  )
}
