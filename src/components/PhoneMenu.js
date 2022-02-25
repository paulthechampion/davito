import React, { useState } from 'react'
import AA from "../img/davitoLogo.png"
import bdul from "../img/davitoLogo.png"
import medal from "../img/davitoLogo.png"
import useDocumentScrollThrottled from './scrollFunction'
import Accordion from "./service/Accordion"

export default function PhoneMenu() {
    const [showMenu, setShowMenu]= useState(false)
    let navClasses = "phoneMenu"
    let menu
    if(showMenu){
        navClasses = "phoneMenu open"
        
    }
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
        <span>
            <span className="MenuBottonSpan"  >
            <span alt="menu" className={`MenuBotton ${shadowStyle} ${hiddenStyle}`} onClick={()=>setShowMenu(!showMenu)}>Menu</span>
            {menu}
            </span>
            
            <nav className={navClasses} id="phoneMenuId">
                <div className="subPM">
                    <div className="phoneLdiv firstNav">
                    <a href="/#home" className="logo-link"> 
                    
                        <img src={AA} alt="Abdul A" className="plogo"/>
                    </a>
                     </div>
                    <div className="phoneLdiv"> <a href="/" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>Home</a></div>
                    <div className="phoneLdiv">
                    <Accordion>
                        <div className="accor accor-phone">
                        <a href="/service" className="phoneL service-phone"  onClick={()=>setShowMenu(!showMenu)}>Service </a><div className="head testing"><span className='arrow arrow-phone'><i className="fas fa-angle-down"></i></span></div>
                            <div className="body">
                                <div><a href="/service/student-visa" className='phone-service-sub'>Student Visa</a></div>
                                <div><a href="/service/work-visa" className='phone-service-sub'>Work Visa</a></div>
                                <div><a href="/service/visitor-visa" className='phone-service-sub'>Visitor Visa</a></div>
                                <div><a href="/service/PR" className='phone-service-sub'>Permanent Residence</a></div>
                                <div><a href="/service/citizenship" className='phone-service-sub'>Citizen Application</a></div>
                            </div>
                        </div>
                    </Accordion>
                         
                    </div>
                    <div className="phoneLdiv"> <a href="/contact" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>Contact</a></div>
                    <div className="phoneLdiv"> <a href="/service/#faq" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>FAQ</a></div>
                </div>
            </nav>
        
        </span>
        
    )
}
