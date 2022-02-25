import React from 'react'
import Work from "../../img/workss.png"

export default function WorkVisa() {
  return (
    <div className='begin-margin'>
        <h3 className='student-visa-h3 top-margin'>
            Thinking Of Working In Canada?  We Can Help
        </h3>
        

        <div className='about-flex our-service-div'>
            <div>
                <img src={Work} alt="Study group"  className='work-pic'/>
            </div>
            <div className='student-p-div'>
                <h4 className='work-h4'>
                80% of immigrants in Canada are employed 
                </h4>
                <p className='work-study-p'>
                    A work visa is a type of employment permit that permits a  person to take a job in Canada. 
                    Who qualifies for a work visa in Canada? a person outside Canada who has a job offer or an 
                    immigrate who is already in Canada and is not a Canadian citizen. Most immigrants require their 
                    employers to obtain a Labour Market Impact Assessment(LMIA) for them to work in Canada. 
                </p>
            </div>
            
        </div>

        <div className='working-with-div'>
            <span>Labour Market Impact Assessment (LMIA)</span>
        </div>
        <div className='second-group'>
            <p>
            What is the LMAI (Labour Market Impact Assessment)? It is a document that a Canadian employer must obtain before recruiting a foreign worker. After the employer has received the LMIA, the employee can apply for a work visa.
An employee must meet the following requirements to apply for a work permit:
            </p>

            <ul className='second-group-ul '>
                <li>
                    A letter of employment offer
                </li>
                <li>
                    A legal agreement
                </li>
                <li>
                    A duplicate of the LMIA
                </li>

                <li>
                    The LMIA number is a unique identifier for each individual.
                </li>
            </ul>

            <button className='contact-btn'>
                Contact Us
            </button>


        </div>
    </div>
  )
}
