import { color } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa';

const About = () =>{
return(
    <section id = "about">
        <div class="section-title">
            <h2> About</h2>

       <p> I’m Krunal Patel, a Junior Software Developer based in Irving, TX, with experience building full-stack applications using Java, Python, React.js, and SQL. I’ve developed APIs, optimized databases, and deployed cloud-native apps on AWS, always focusing on performance, scalability, and user experience.
        </p>
        <br></br>
      <p> I’ve worked on enterprise systems at Wells Fargo and Prudential Finance, where I improved backend response times, automated testing pipelines, and built responsive front-end components. Beyond professional roles, I’ve built projects like an AI-powered Resume Analyzer and a Serverless Expense Tracker, showcasing my ability to solve real-world problems with clean, efficient code.
        </p>
        <br></br>
    <p> I’m passionate about problem-solving, cloud technologies, and building software that makes a difference. Currently, I’m open to opportunities where I can contribute to impactful projects while continuing to grow as a full-stack developer.
      </p>
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