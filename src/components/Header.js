import React, { useState } from 'react';
import Logo from "../img/davitoLogo.png"
import mail from "../img/mail.png"
import clock from "../img/clock1.png"
import phone from "../img/telephone.png"
import useDocumentScrollThrottled from './scrollFunction'

export default function Header() {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
  
    const MINIMUM_SCROLL = 50;
    const TIMEOUT_DELAY = 50;
  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  
      setShouldShowShadow(currentScrollTop > 2);
  
      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    });
  
    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';
    
    return (
        <div className={`header ${shadowStyle} ${hiddenStyle}`}>
            <div className="header-first-div">
                <div className='logoDiv'>
                    <a href='/'><img src={Logo} alt='davito-logo' className='logo'/></a>
                </div>
                <div className='header-contact-div'>
                    <div className='header-number-div'>
                        <img src={phone} alt="phone"className='header-contact-phone'/><a href='tel:4162780986' className='mail-link'> (416) 278-0986</a><br/>
                        <img src={mail} alt="mail" className='header-contact-mail'/><a href='mailto: support@davitoinc.com' className='mail-link'> Support@davitoinc.com</a>
                    </div>
                    <div className='time-main-div'>
                        <div className='clock-div'>
                          <img src={clock} alt="clocl"/> 
                        </div>
                        <div>
                            9:00 am-6:00pm <br/>
                            Monday-Friday
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='header-second-div'>
                <div className='header-link-div'>
                    <a className='header-link' href='/'>Home</a>
                </div>
                <div className='dropdown'>
                    <button className='dropbtn'>
                        <a href='/service'>Service</a>
                    </button>
                    <div className='dropdown-content'>
                        <a className='dropdown-content-link' href='/service/student-visa'>Student Visa</a>
                        <a className='dropdown-content-link' href='/service/work-visa'>Work Visa</a>
                        <a className='dropdown-content-link' href='/service/visitor-visa'>Visitor Visa</a>
                        <a className='dropdown-content-link' href='/service/PR'>Permanent Residence</a>
                        <a className='dropdown-content-link' href='/service/citizenship'>Citizen Application</a>
                    </div>
                </div>
                <div className='header-link-div'>
                    <a className='header-link' href='/contact'>Contact Us</a>
                </div>
            </div>
        </div>
    )
}
