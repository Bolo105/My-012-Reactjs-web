import React from 'react'
import { Heading } from './common/Heading'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,  } from 'react-icons/fa'

export const Contact = () => {
  return (
    <div id="contact" className="container-xxl py-5">
        <div className="container">
            <Heading title="Contact Us" text="Contact For Any Query"/>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h5 style={{fontWeight: 'bold'}}>Get In Touch</h5>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
                    <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '50px', height:'50px', backgroundColor: '#0077b5'}}>
                            <i className="fa fa-map-marker-alt text-white"><FaMapMarkerAlt /></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="" style={{fontWeight: 'bold', color: '#0077b5'}}>Office</h5>
                            <p className="mb-0">123 Street, New York, USA</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '50px', height:'50px', backgroundColor: '#0077b5'}}>
                            <i className="fa fa-phone-alt text-white"><FaPhoneAlt /></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="" style={{fontWeight: 'bold', color: '#0077b5'}}>Mobile</h5>
                            <p className="mb-0">+012 345 67890</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '50px', height:'50px', backgroundColor: '#0077b5'}}>
                            <i className="fa fa-envelope-open text-white"><FaEnvelope /></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="" style={{fontWeight: 'bold', color: '#0077b5'}}>Email</h5>
                            <p className="mb-0">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <iframe
                   title="Google Maps"
                   className="position-relative rounded w-100 h-100"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                   style={{ minHeight: '300px', border: 0 }}
                   allowFullScreen=""
                   aria-hidden="false"
                   tabIndex="0"
                   ></iframe>
                </div>
                <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" style={{borderRadius: '0'}}/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" style={{borderRadius: '0'}}/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" style={{borderRadius: '0'}}/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '100px', borderRadius: '0'}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit" style={{borderRadius: '0', backgroundColor: '#0077b5'}}>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
