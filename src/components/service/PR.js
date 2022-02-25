import React from 'react'
import Work from "../../img/familyB.png"
import { useMediaQuery } from 'react-responsive'

export default function PR() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1085px)'
      })
  return (
    <div className='begin-margin'>
        <h3 className='student-visa-h3 top-margin'>
            Thinking Of Becoming a PR ?  We Can Help
        </h3>
        

        <div className='pr-div our-service-div'>
            {
                isDesktopOrLaptop?
                    <div>
                        <img src={Work} alt="Study group"  className='work-pic'/>
                    </div>
                :null
            }
            <div className='student-p-div'>
                <h4 className='work-h4'>
                    who is eligble
                </h4>
                <p className='work-study-p'>
                    Thousands of immigrants become permanent residents in Canada each year. Canada is a 
                    diverse country with many opportunities for newcomers. What is the definition of a 
                    permanent resident? A permanent resident of Canada is a person who isn't a Canadian 
                    citizen but has been granted the ability to live and work in the country for an indefinite 
                    period. A permanent residency card is issued for five years and can be renewed every five years. 
                </p>
            </div>
            {
                isDesktopOrLaptop?null :
                    <div>
                        <img src={Work} alt="Study group"  className='work-pic'/>
                    </div>
            }
            <div className='joining-p'>
                <p>
                    To maintain your PR status, you must stay in Canada for a total of 3 years (730 days) within 
                    five years. To be considered, you must meet the following requirement: 
                </p>
                <ul className='second-group-ul pr-list '>
                    <li>
                        Have at least 12 months of full-time skilled job experience in Canada in the three years leading up to your application
                    </li>

                    <li>
                        Be able to communicate in English or French.
                    </li>
                </ul>


            </div>
            
        </div>

        <div className='working-with-div'>
            <span>Benefits of becoming a Permanent Resident</span>
        </div>
        <div className='second-group'>
        


            <ul className='second-group-ul '>
                <li>
                    High-level jobs
                </li>
                <li>
                    Dual citizenship
                </li>
                <li>
                    Canadian politics
                </li>

            </ul>

            <button className='contact-btn'>
                Contact Us
            </button>


        </div>
    </div>
  )
}
