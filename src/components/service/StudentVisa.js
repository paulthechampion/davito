import React from 'react';
import Studygroup from "../../img/study-group.png"

export default function StudentVsa() {
  return (
            <div className='begin-margin'>
                <h3 className='student-visa-h3 top-margin fade-in'>
                    Thinking Of Studying In Canada?  We Can Help
                </h3>
                

                <div className='about-flex our-service-div'>
                    <div className='student-p-div slide-in from-left fade-in'>
                        <h4>
                        Canada is the third most popular country for international students.
                        </h4>
                        <p className='student-p'>
                            A student visa is a document issued by the Canadian government that allows 
                            international students to study in Canada. According to Immigration, Refugees 
                            and Citizenship Canada (IRCC), the number of international students in Canada 
                            increased by 13% in 2019, with universities such as the University of Toronto, 
                            McGill University, and the University of British Columbia ranking 26, 27, and 46 
                            in the world's top 50 universities, respectively. Canada's international student 
                            rate is expected to rise by 50% in the next few years. At Davito services, we can 
                            assist you in gaining admission to any school of your choice (high school, 
                            university, or postgraduate). We deal directly with institutions in many cities 
                            and can provide in-depth information about the school and program of your choice. 
                            We are committed to ensuring that your study experience in Canada is exceptional.
                        </p>
                    </div>
                    <div className='slide-in from-right fade-in'>
                        <img src={Studygroup} alt="Study group"  className='study-group'/>
                    </div>
                </div>

                <div className='working-with-div'>
                    <span>Working with a studuent visa</span>
                </div>
                <div className='second-group'>
                    <p className='fade-in'>
                    As of June 1st, 2014, specific international students with study permits are permitted to work 
                    on campus without a work permit during the academic period. They can only work for 20hrs a week 
                    and full time during their academic breaks. <br/>
                    The following requirements must be met to work without a work visa in Canada:
                    </p>

                    <ul className='second-group-ul '>
                        <li className='slide-in from-left fade-in'>
                            Possess valid study permission.



                        </li>
                        <li className='slide-in from-right fade-in'>
                        Attend a Designed Learning Institution full-time (DLI)
                        </li>
                        <li className='slide-in from-left fade-in'>
                        They must be enrolled in a post-secondary academic, vocational, or professional training programme, or a secondary vocational training programme, both of which are available in Quebec.
                        </li>

                        <li className='slide-in from-right fade-in'>
                        Their study program must last at least six months and culminates in a degree, diploma, or certificate.
                        </li>
                    </ul>
                    
                       <p className='fade-in'> NOTE: The Post-Graduation Job Permit Program (PGWPP) has different eligibility conditions than off-campus work eligibility.
                        Students who do not match this criterion may be eligible for a work permit.
                        </p>

                    <button className='contact-btn fade-in'>
                        Contact Us
                    </button>
                </div>
            </div>
        );
}
