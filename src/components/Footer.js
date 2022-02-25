import React from 'react';
import rcic from "../img/rcic.png"
import facebook from "../img/facebook1.png"
import instagram from "../img/instagram1.png"
import linkedin from "../img/linkedin1.png"
import twitter from "../img/twitter2.png"

export default function Footer() {
  return (
        <footer>
            <div className='about-flex footer-first-div'>
                <div>
                    <img src={rcic}/>
                </div>
                <div>
                    We are licensed and you are protected. Our CEO Daniel 
                    Enwerem is a licensed member of the Immigration Consultants 
                    of Canada Regulatory Council, membership number R706074. We 
                    offer Canadian Immigration services and advice on applications 
                    submitted to Citizenship and Immigration Canada. Call or send us a 
                    message to discuss your case.
                </div>
            </div>
            <div className='footer-second-div'>
                <div className='about-flex footer-phone-flex'>
                    <div>
                        <h3 className='footer-contact-h3'>Contact Us</h3>
                        <a href='tel:4162780986' className='mail-link'> (416) 278-0986</a><br/>
                        <a href='mailto: support@davitoinc.com' className='mail-link'> Support@davitoinc.com</a><br/>
                        <a href="" className='mail-link'><img src={facebook} className="socials-logo" alt="facebook-logo"/></a>
                        <a href="" className='mail-link'><img src={instagram} className="socials-logo" alt="instagram-logo"/></a>
                        <a href="" className='mail-link'><img src={twitter} className="socials-logo" alt="twitter-logo"/></a>
                        <a href="https://www.linkedin.com/company/davito-immigration-services/" target="_blank" className='mail-link'><img src={linkedin} className="socials-logo" alt="linkedin-logo"/></a>
                    </div>
                    <div>
                        <h3 className='footer-contact-h3'>Meet Us At</h3>
                        <p>1001 Chinguacousy Rd,<br/>
                        Brampton,<br/>
                         ON, Canada<br/>
                        L6Y 5Z6. </p>
                    </div>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3429156799248!2d-79.77724918507849!3d43.66183755989105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b13e0d5d187bf%3A0x6d42cdb9d7a24419!2sChinguacousy%20Rd%2C%20Brampton%2C%20ON%20L6Y!5e0!3m2!1sen!2sca!4v1645597153751!5m2!1sen!2sca" loading="lazy"></iframe>
                    </div>
                </div>
                <hr/>
                <div className='about-flex footer-copy-div'>
                    <div>
                        <p>© Davito services 2019</p>
                    </div>
                    <div>
                        <ul className='footer-list'>
                            <li>
                            <a href="" className='mail-link'>Privacy</a>
                            </li>
                            <li>
                            <a href="" className='mail-link'>Terms and conditions</a>
                            </li>
                        </ul>
                    </div>
        
                </div>
            </div>
        </footer>
    );
}
