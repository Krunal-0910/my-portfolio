"use client"
import { FaAngleRight } from 'react-icons/fa';

const Certifications=()=>{
    return(
        <section id="certifications">
            <div className="section-title"> 
            <h2>Certifications</h2>
            </div>
            <div>
                    <div className="flex items-center mb-2">
                    <FaAngleRight className="text-blue-500 mr-2" />
                    <span>Learn Java with no prior programming experience (Courseera), issued June 2022</span>
                    </div>
                    <div className="flex items-center mb-2">
                    <FaAngleRight className="text-blue-500 mr-2" />
                    <span>AWS Certified Cloud Practitioner </span>
                    </div>
            </div>
            
        </section>



    )
}

export default Certifications;