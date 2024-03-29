import React from 'react'
import Fly from "../../img/fly.png"

export default function VisitorVisa() {
  return (
    <div className='begin-margin'>
        <h3 className='student-visa-h3 top-margin fade-in'>
            Thinking Of Visiting Canada?  We Can Help
        </h3>
        

        <div className='about-flex our-service-div'>
           
            <div className='student-p-div slide-in from-left'>
                <h4 className=''>
                    Want to explore Canada?
                </h4>
                <div className=''>
                    A visitor visa, sometimes known as a temporary visa, is a legal document that allows foreigners 
                    to visit Canada for a certain period. Canada is one of the most visited countries, with many 
                    historical landmarks and stories to attract tourists and immigrants. Places to visit in Canada 
                    include Niagara Falls, the CN Tower, Old Montreal, and British Columbia. Every year 50 million 
                    people visit Canada for various reasons. Some of these reasons are:
                        <ul className="second-group-ul" >
                            <li className='slide-in from-left'>A business trip,</li>
                            <li className='slide-in from-right'>Visiting friends and family,</li>
                            <li className='slide-in from-left'>Vacation, or a social gathering.</li>
                        </ul>
                   
                </div>
            </div>
            <div className='slide-in from-right'>
                <img src={Fly} alt="Study group"  className='study-group'/>
            </div>
            <div className='joining-p fade-in'>
                <p>Processing a Canadian visa might take a long time. It's recommended that 
                    you begin the application process at least two months before you want to apply 
                    for a visa. The client must obtain a Visa in their birth country or acquire an Electronic 
                    Travel Authorization (eTA) to travel to Canada. 
                </p>
            </div>
            
        </div>
       

        <div className='working-with-div'>
            <span>Steps required before your Visa can be processed</span>
        </div>
        <div className='second-group'>
     
            <ul className='second-group-ul '>
                <li className='slide-in from-left'>
                    Make sure you are eligble to appply
                </li>
                <li className='slide-in from-right'>
                    Have your document ready: proof of identity, reason you are visiting, invitation letter (if applicable)
                </li>
                <li className='slide-in from-left'>
                    Apply for your Visa
                </li>

            </ul>

            <button className='contact-btn fade-in'>
                Contact Us
            </button>


        </div>
    </div>
  )
}
