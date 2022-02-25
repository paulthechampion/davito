import React from 'react'
import Flag from "../img/theflag.png"
import Hands from "../img/hands.png"
import Bike from "../img/bike.png"
import Peeps from "../img/peeps.png"

import Form from "./form"

export default function Contact() {
  return (
    <div className='begin-margin'>
        <section className="slide-section">
            <div className="slide-container">
                <div className="image-container">
                    <img src={Flag} alt="" className="slideImg fade"/>
                </div>
                <div className="image-container">
                    <img src={Hands} alt=""className="slideImg fade" />
                </div>
                <div className="image-container">
                    <img src={Bike} alt=""className="slideImg fade" />
                </div>
                <div className="image-container">
                    <img src={Peeps} alt=""className="slideImg fade" />
                </div> 
                {/* <div className="image-container">
                    <img src="/images/keeper.jpeg" alt=""className="slideImg fade" />
                </div>  */}
            </div>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeF4rEQvz8MkdZ9SKspoBr9F24EblUFpbPt2FaFV8XbV2_jFA/viewform" target="_blank" className="book-consultation-div">Book Consultation</a>
            
        </section>
        <div className='working-with-div contact-working'>
            <span>Contact Us</span>
        </div>

        <div className='form-big-div'>
            <p>Applying for a study visa can be overwhelming, at Davito serives we aim to make the 
                process easier for our clients. 
            </p>
            <Form/>
        </div>
        <h3 className='visit-h3'>Visit us at</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3429156799248!2d-79.77724918507849!3d43.66183755989105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b13e0d5d187bf%3A0x6d42cdb9d7a24419!2sChinguacousy%20Rd%2C%20Brampton%2C%20ON%20L6Y!5e0!3m2!1sen!2sca!4v1645597153751!5m2!1sen!2sca" width="99%" height="450" loading="lazy"></iframe>
    </div>
  )
}
