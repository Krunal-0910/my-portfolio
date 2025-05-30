import { color } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa';

const About = () =>{
return(
    <section id = "about">
        <div class="section-title">
            <h2> About</h2>
        <p>I am an ambitious undergraduate student in Computer and Information Science, set to graduate in May 2025. 
          My academic pursuits are characterized by a robust engagement with diverse programming languages such as 
          Python, Java, C/C++, and Linux. My practical experience includes leading projects like Weather Brainiac, 
          where I developed a secure login framework that significantly enhanced data privacy and system efficiency. 
          In Ethereum Empower, I directed the creation of a cutting-edge application utilizing React.js and Tailwind 
          CSS for efficient blockchain interactions. Additionally, I have managed complex database systems in AirHome, 
          improving scalability and performance in the real estate sector, and engineered an Autocomplete API that 
          boosted user engagement by optimizing search functionality.</p>
        <p>Beyond my technical projects, my ongoing exploration of advanced topics in algorithms and data structures 
          underscores my dedication to continual learning and professional growth. I remain keenly aware of the 
          latest industry trends, contributing to my holistic understanding of technology and its applications. 
          This dynamic blend of hands-on experience and theoretical knowledge prepares me to make impactful 
          contributions to the evolving tech landscape, while I also enjoy cinema and social outings with friends.</p>
      </div>
    
      <div className="about-row">
        <div className="left-side" data-aos="fade-right">
          <img src="/img/utd.jpg" className="img-fluid" alt="UTD Icon"></img>
        </div>
        <div className="right-side" data-aos="fade-left">
            <div class ="about-description-title" >
          <h4>Education Background</h4>
          </div>
          <p className="font-italic">
            Passionate about lifelong learning and dedicated to enhancing knowledge through continuous education and practical experiences.
          </p>
          <br></br>
  <div className="degree-info-list">
  <ul>
  <li className="flex items-center mb-2">
    <FaAngleRight className="text-blue-500 mr-2" />
    <strong>Latest Degree:</strong> <span className="ml-1">Bachelor of Science in Computer Science</span>
  </li>
  <br></br>
  <li className="flex items-center mb-2">
    <FaAngleRight className="text-blue-500 mr-2" />
    <strong>University:</strong> <span className="ml-1">University of Texas at Dallas</span>
  </li>
  <br></br>
  <li className="flex items-center mb-2">
    <FaAngleRight className="text-blue-500 mr-2" />
    <strong>Graduation Year:</strong> <span className="ml-1">May 2025</span>
  </li>
  <br></br>
  <li className="flex items-center mb-2">
    <FaAngleRight className="text-blue-500 mr-2" />
    <strong>Specialization:</strong> <span className="ml-1">Software Development</span>
  </li>
  <br></br>
</ul>
            </div>
            <br></br>
          <p>
            Dedicated to fostering an environment of learning and innovation, I am committed to utilizing my educational background to contribute positively to academic and professional communities. Engaged in continuous personal and professional development to remain abreast of the latest advancements in technology and education.
          </p>
        </div>
      </div>
      </section>


)

}

export default About;