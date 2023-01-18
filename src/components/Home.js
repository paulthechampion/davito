import React from 'react';
import Flag from "../img/theflag.png"
import Hands from "../img/hands.png"
import Bike from "../img/bike.png"
import Peeps from "../img/peeps.png"
import Man from "../img/blackman.png"
import MissionHand from "../img/mission-hand.png"
import vision from "../img/vision.png"
import values from "../img/values 1.png"



export default function Home() {
  return (
            <div id='home' className=''>
                <section className="slide-section begin-margin">
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

                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeF4rEQvz8MkdZ9SKspoBr9F24EblUFpbPt2FaFV8XbV2_jFA/viewform" className="book-consultation-div" target="_blank">Book Consultation</a>
                    
                </section>

                <section className='about-section'>
                    <h3 className='fade-in'>About Us</h3>
                    <div className='about-flex'>
                        <div className='slide-in from-left fade-in'>
                            <p className='kora-paragraphs'>
                            Davito services was founded in 2019 by a Nigerian-born Canadian, Okechineke Daniel 
                            Enwerem. Davito services is an immigration consulting agency based in Canada. We aim 
                            to assist immigrates with the opportunity of getting a Canadian visa for either permanent 
                            or temporary reasons. We understand the complexity of acquiring a Canadian Visa. We are here 
                            to make the process easier, faster and to help maximize your chances of obtaining a Visa. 
                            </p>
                        </div>
                        <div className='about-flex-div-two slide-in from-right fade-in'>
                            <img src={Man} alt="Okechineke Enwerem" className='display-pic'/>
                        </div>
                    </div>
                    <h3 className='fade-in'>Why Davito services?</h3>
                    <p className='kora-paragraphs slide-in from-left fade-in'>At  Davito services, we put our clients' needs above everything else. Our goal is to ensure that their 
                        needs are met during and after the immigration process. Since our founding, Davito Services has been 
                        bringing immigrants into the country who are creating better lives for themselves. Our core values are 
                        trust, honesty, transparency and loyalty. Unlike most immigration companies, the majority of my team 
                        comprises of immigrants, we understand and can relate to the difficulties of moving to a foreign country. 
                    </p>
                    <h3 className='fade-in'>About Our CEO</h3>
                    <p className='kora-paragraphs slide-in from-left fade-in'>As an immigrant himself, Okechineke Daniel Enwerem is determined to help immigrants obtain Canadian residency 
                        for temporary or permanent reasons. He understands the immigration process and is willing to do the work. 
                        In his quest to become a bridge between your country and Canada, Okechineke Daniel Enwerem has made a name 
                        for himself and his company.
                    </p>
                </section>

                <section className='mission-section fade-in'>
                    <div className='mission-flex '>
                        <div className='mission-div'>
                            <img src={MissionHand} alt="hands"/>
                        </div>

                        <div className='mission-div'>
                            <h3>Mission statements</h3>
                            <p id="typewriter">
                            </p>

                        </div>
                    </div>
                </section>

                <section className='vision-values'>
                    <h3 className='fade-in'>Our Vision</h3>
                    <div className="vision-pic-div">
                        <img src={vision} alt="davito vision"/>
                    </div>

                    <h3 className='fade-in'>Our Values </h3>
                    <div className='about-flex vission-glass-list-flex-div'>
                        <div className='slide-in from-left'>
                            <img src={values} alt="magnifying glass"/>
                        </div>
                        <div className='vision-values-list-div'>
                            <ul>
                                <li className='slide-in from-right'>
                                    <span className='list-capital'>D: </span>
                                    <span className='list-small'>Diligence</span>
                                </li>
                                <li className='slide-in from-right'>
                                    <span className='list-capital'>A: </span>
                                    <span className='list-small'>Accountability</span>
                                </li>
                                <li className='slide-in from-right'>
                                    <span className='list-capital'>V: </span>
                                    <span className='list-small'>Vigilance</span>
                                </li>
                                <li className='slide-in from-right'>
                                    <span className='list-capital letter-I'>I: </span>
                                    <span className='list-small'>Inetgrity</span>
                                </li>
                                <li className='slide-in from-right'>
                                    <span className='list-capital'>T: </span>
                                    <span className='list-small'>Trustworthy</span>
                                </li>
                                <li className='slide-in from-right'>
                                    <span className='list-capital'>O: </span>
                                    <span className='list-small'>Openness</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className='about-flex home-middle-line'>
                        <div>

                        </div>
                        <div>

                        </div>
                </div>

            </div>
  );
}
document.addEventListener("DOMContentLoaded", function() { 
    
    Show();
    typeWriter()
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

    var q = 0;
    var txt = 'To build a trustworthy company that provides immigrants with the opportunity of acquiring a Canadian visa. We aim to achieve this by building a connection with our clients and providing them with high-quality service.';
    var speed = 150;

function typeWriter() {
  if (q < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(q);
    q++;
    setTimeout(typeWriter, speed);
  }
}
