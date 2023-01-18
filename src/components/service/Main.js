import React from 'react';
import Flag from "../../img/theflag.png"
import Hands from "../../img/hands.png"
import Bike from "../../img/bike.png"
import Peeps from "../../img/peeps.png"
import Ourservice from "../../img/our-service.png"
import Accordion from "./Accordion"

export default function Main() {
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
            <h3 className='service-h3 fade-in'>Our Services</h3>
            <div className='about-flex our-service-div'>
              <div className='slide-in from-left'>
              Our organization provides immigrants with the opportunity to obtain a visa, permanent 
              resident or citizenship. We collaborate with several schools, including Mississauga secondary 
              school, Conestoga College, Algoma University and Erindale Academy. As part of this process, we 
              ensure that we provide the highest level of care for our clients and deliver as quickly as possible.
              </div>
              <div className='slide-in from-right'>
                <img src={Ourservice} alt="our-service" className='our-service-pic'/>
              </div>
            </div>

            <div className='about-flex linear-flex fade-in'>
                <div>
                    <a href='/service/student-visa' className='remove-link-line'>
                        <div className='blue-linear'>
                            <p>Student Visa</p>
                        </div>
                    </a>    
                </div>
                <div>
                    <a href='/service/work-visa' className='remove-link-line'>
                        <div className='blue-linear linear-two'>
                            <p>Work Visa</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href='/service/visitor-visa' className='remove-link-line'>
                        <div className='blue-linear'>
                            <p>Vistors Visa</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href='/service/PR' className='remove-link-line'>
                        <div className='blue-linear linear-two'>
                            <p> PR</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href='/service/citizenship' className='remove-link-line'>
                        <div className='blue-linear citizenn'>
                            <p>Citizenship Application</p>
                        </div>
                    </a>
                </div>
            </div>
            <h3 className='faq-h3' id="faq">FAQ</h3>
            <div className="wrapper">
            <Accordion>
            <div className="accor">
                <div className="head">How Do I Get Started?<span className='arrow'><i className="fas fa-angle-down"></i></span></div>
                <div className="body">
                    You can get started by <span className='red'>contacting us.</span> We can begin by having consultation sections 
                    that can help us understand your case 
                </div>
            </div>
            <div className="accor">
                <div className="head">Is The Company Based In Canada?<span className='arrow'><i className="fas fa-angle-down"></i></span></div>
                <div className="body">
                    Davito Services is a Canadian based company.
                </div>
            </div>

            <div className="accor">
                <div className="head">
                    Do I Pay Consultation fee?<span className='arrow'><i className="fas fa-angle-down"></i></span>
                </div>
                <div className="body">
                    Yes, a sum of $200 CAD is paid before the consultation begins.
                </div>
            </div>
            <div className="accor">
                <div className="head">How long does the application process take?<span className='arrow'><i className="fas fa-angle-down"></i></span></div>
                <div className="body">
                    The processing time differs on your application. The overall processing time takes 1 - 27 weeks.
                </div>
            </div>
            <div className="accor">
                <div className="head">What Can Prevent Me From Coming To Canada? <span className='arrow'><i className="fas fa-angle-down"></i></span></div>
                <div className="body">
                    <p>People get rejected for various reasons such as:</p>
                    <ul className='accor-ul'>
                        <li>Criminal record </li>
                        <li>Low funds</li>
                        <li>Unacceptable certificate</li>
                        <li>Passport invalidity</li>
                    </ul>


                </div>
            </div>
        </Accordion>
            </div>
        </div>
        );
}

document.addEventListener("DOMContentLoaded", function() { 
    
  Show();
});


var SlideIndex=0;

    function Show(){
        var i;
        var SlideCont=document.getElementsByClassName("image-container");
        // var dotss=document.getElementsByClassName("dot");
        
        for(i=0; i<SlideCont.length;i++){
            SlideCont[i].style.display="none";
        }

        SlideIndex++
        if(SlideIndex > SlideCont.length){SlideIndex=1;}

        // for(i=0; i<dotss.length;i++){
        //     dotss[i].className=dotss[i].className.replace(" active", "");
        // }

        SlideCont[SlideIndex-1].style.display= "block";
        // dotss[SlideIndex-1].className+=" active";
        setTimeout(Show ,4000);
    }

  
