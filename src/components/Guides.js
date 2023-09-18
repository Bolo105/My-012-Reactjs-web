import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import { guides } from './common/Data';
import { Heading } from './common/Heading';


const IconBox = styled.div`
    margin-top: -19px;
`;

const TeamItem = styled.div`
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);

    img {
        transition: 0.5s;
        &:hover {
            transform: scale(1.1);
        }
    }

    .btn {
        background: #FFFFFF;
        color: #0077b5;
        border-radius: 20px;
        border-bottom: 1px solid #0077b5;

        &:hover {
            background: #0077b5;
            color: #FFFFFF;
        }
    }
`;

export const Guides = () => {
  return (
    <div id="guides" className="container-xxl py-5">
        <div className="container">
            <Heading title="Travel Guide" text="Meet Our Guide"/>
            <div className="row g-4">
               {guides.map((val) => (
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <TeamItem className="team-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={val.cover} alt="" />
                        </div>
                        <IconBox className="position-relative d-flex justify-content-center" >{/* style="margin-top: -19px;" */}
                            <a className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"><FaFacebookF /></i></a>
                            <a className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"><FaTwitter /></i></a>
                            <a className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"><FaInstagram /></i></a>
                        </IconBox>
                        <div className="text-center p-4">
                            <h5 className="mb-0">{val.name}</h5>
                            <small>{val.job}</small>
                        </div>
                    </TeamItem>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
