import React from 'react';
import Studygroup from "../../img/flaggirl.png"

export default function Citizen() {
  return (
            <div className="begin-margin">
                <h3 className='student-visa-h3 top-margin fade-in'>
                    Thinking Of Becoming A Canadian Citizen?  We Can Help
                </h3>
                

                <div className='about-flex our-service-div'>
                    <div className='student-p-div slide-in from-left'>
                        <h4>
                            Become a Canadian citizen
                        </h4>
                        <p className='student-p'>
                            Becoming a citizen can be overwhelming, we are here to help you with the process. 
                            We provide our clients with the necessary help needed to apply and prepare for their 
                            citizenship test. The first step of obtaining a Canadian citizen is by becoming a PR. 
                            85% of eligible permanent residents become citizens
                        </p>
                    </div>
                    <div className='slide-in from-right'>
                        <img src={Studygroup} alt="Study group"  className='study-group smilingbabe'/>
                    </div>
                </div>

                <div className='working-with-div'>
                    <span>requriments needed to become a canadian citizen</span>
                </div>
                <div className='second-group'>
                    <p className='fade-in'>
                        Before applying for citizenship you must meet the IRCC requirement
                    </p>




                    <ul className='second-group-ul '>
                        <li className='slide-in from-left'>
                            must be a permanent resident
                        </li>
                        <li>
                            must have lived in canada for 3 years within a five years period
                        </li>
                        <li className='slide-in from-right'>        
                            have filed taxes
                        </li>

                        <li className='slide-in from-left'>
                            pass the citizen test
                        </li>

                        <li className='slide-in from-right'>
                            speak english or french 
                        </li>
                    </ul>
                    <br/>

                    <button className='contact-btn fade-in'>
                        Contact Us
                    </button>
                </div>
            </div>
        );
}
