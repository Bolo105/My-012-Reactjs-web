import React from 'react'
import styled from 'styled-components'
import book from './images/book.jpg'

const Book = styled.div`
    background: linear-gradient(rgba(15, 23, 43, .7), rgba(15, 23, 43, .7)), url(${book});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;


const StyledInput = styled.input`
  border-radius: 0; 
`;


const StyledLabel = styled.label`
  color: #ddd; 
`;

export const Booking = () => {
  return (
    <div id="booking" className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
        <Book className="booking p-5">
            <div className="row g-5 align-items-center">
                <div className="col-md-6 text-white text-start">
                    <h6 className="text-white text-uppercase">Booking</h6>
                    <h1 className="text-white mb-4">Online Booking</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <a className="btn btn-outline-light py-3 px-5 mt-2" href="/" style={{borderRadius: '0'}}>Read More</a>
                </div>
                <div className="col-md-6">
                    <h1 className="text-white mb-4">Book A Tour</h1>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <StyledInput type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                                    <StyledLabel for="name">Your Name</StyledLabel>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <StyledInput type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                                    <StyledLabel for="email">Your Email</StyledLabel>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating date" id="date3" data-target-input="nearest">
                                    <StyledInput type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                    <StyledLabel for="datetime">Date & Time</StyledLabel>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <select className="form-select bg-transparent" >
                                        <option value="1">Destination 1</option>
                                        <option value="2">Destination 2</option>
                                        <option value="3">Destination 3</option>
                                    </select>
                                    <StyledLabel for="" className='bg-transparent'>Destination</StyledLabel>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{borderRadius: '0'}}></textarea>{/* style="height: 100px"*/}
                                    <StyledLabel for="message">Special Request</StyledLabel>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-light w-100 py-3" type="submit" style={{borderRadius: '0'}}>Book Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Book>
    </div>
</div>
  )
}
