import "./App.css";
import Navbar from "./components/Navbar";
import danyal from "./pictures/danyal.jpg";
import study from "./pictures/study.png";
import aboutme from "./pictures/aboutme.png";
import gearbookie from "./pictures/gearbookie.png";
import carvonix from "./pictures/carvonix.png";
import buildmizer from "./pictures/buildmizer.jpg";
import html from "./pictures/html.png";
import css from "./pictures/css.png";
import javascript from "./pictures/javascript.png";
import bootstrap from "./pictures/bootstrap.png";
import mysql from "./pictures/mysql.png";
import reactt from "./pictures/reactt.png";
import contactme from "./pictures/contactme.jpg";
import experience from "./pictures/experience.png";
import facebook from "./pictures/facebook.png";
import gmail from "./pictures/gmail.png";
import linkedin from "./pictures/linkedin.png";
import whatsapp from "./pictures/whatsapp.png";
import github from "./pictures/github.png";
import myClique from "./pictures/myClique.png"
import Noorsign from "./pictures/Noorsign.png"
import Footer from "./components/Footer";




function App() {
  return (
    <div className="home">
      <Navbar />

      <div className="main">
        <div className="leftmain">
          Hi, I am <span>Danyal Hamid</span>
          <p>And I am a Passionate</p>
          <p className="animated-text">Front-end Developer</p>
          <p className="intro">
            I specialize in creating stunning, user-friendly web experiences
            that captivate audiences and I leave a lasting impression. With a
            keen eye for design and a passion for cutting-edge technologies, I
            craft seamless digital solutions that elevate brands and exceed
            expectations.
          </p>
        </div>
        <div className="rightmain">
          <div className="mainlines"></div>
          <div className="mainlines"></div>
          <div className="mainlines"></div>
          <div className="mainlines"></div>
          <div className="mainlines"></div>
          <img src={danyal} alt="" />
        </div>
      </div>

      <div className="education">
        <div className="lefteducation">
          <div className="educationlines"></div>
          <div className="educationlines"></div>
          <div className="educationlines"></div>
          <div className="educationlines"></div>
          <div className="educationlines"></div>
          <img src={study} alt="" />
        </div>
        <div className="righteducation">
          <div className="edu">Education</div>
          <div className="inter">
            <div>
              <span>Intermediate (2017-2019)</span>
            </div>
            <div>
              <span>Punjab College</span>
            </div>
            <div>Pre-Engineering (Computer Science)</div>
            <div>86% Marks</div>
          </div>
          <br />
          <br />
          <div className="inter">
            <div>
              <span>Bachelors (2020-2024)</span>
            </div>
            <div>
              <span>COMSATS University Islamabad</span>
            </div>
            <div>Computer Science</div>
            <div>3.02 CGPA</div>
          </div>
        </div>
      </div>

      <div className="about" id="about">
        <div className="leftabout">
          <div className="aboutheading">About Me</div>
          <div className="abouttext">
            Hi Visitor! I'm a passionate Front-End Developer with a year of
            dedicated experience in crafting visually appealing and highly
            functional interfaces. Currently, I am honing my skills at "The
            Webie Storms," where I contribute to a team of talented software
            developers. My love for coding and designing user-friendly
            interfaces dates back to my childhood, igniting a lifelong passion
            for technology and creativity. I thrive on the challenge of
            transforming complex problems into intuitive solutions, and I am
            committed to leveraging the latest technologies to deliver standout
            digital experiences. Whether it's building from scratch or refining
            existing projects, I bring a detail-oriented and innovative approach
            to every task at hand.
          </div>
        </div>

        <div className="rightabout">
          <div className="aboutlines"></div>
          <div className="aboutlines"></div>
          <div className="aboutlines"></div>
          <div className="aboutlines"></div>
          <div className="aboutlines"></div>
          <img src={aboutme} alt="" />
        </div>
      </div>

      <div className="skills" id="skills">
        <div className="skillsheading">My Skills</div>
        <div className="skillsbody">
          <div className="skillbox">
            <img src={html} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="skillbox">
            <img src={css} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="skillbox">
            <img src={javascript} alt="Javascript" />
            <p>Javascript</p>
          </div>
          <div className="skillbox">
            <img src={reactt} alt="REACT" />
            <p>REACT</p>
          </div>
          <div className="skillbox">
            <img src={mysql} alt="MySQL" />
            <p>My SQL</p>
          </div>
          <div className="skillbox">
            <img src={bootstrap} alt="Bootstrap" />
            <p>BOOTSTRAP 5</p>
          </div>
        </div>
      </div>

      <div className="experience" id="experience">
        <div className="expLeft">
          <div className="expHeading">My Experience</div>
          <div className="expDescription">
            <h3> The Webie Storms </h3>
            <p>Nov/2023 --- Current</p>
            <p>
              Front-end development with React.js, responsive design principles,
            </p>
            <p>
              I began my career at a highly reputed technology firm as an
              intern, contributing my services for three months. Following my
              internship, I was offered a probationary position, and I am
              currently continuing my professional journey there as a software
              developer.
            </p>
          </div>
        </div>

        <div className="expRight">
          <div className="explines"></div>
          <div className="explines"></div>
          <div className="explines"></div>
          <div className="explines"></div>
          <div className="explines"></div>
          <img src={experience} alt="" />
        </div>
      </div>

      <div className="projects" id="projects">
        <div className="projectHeading">My Projects</div>
        <div className="projectDiscription">
          <div className="proj1">
            <img className="img1" src={carvonix} alt="" />
            <div className="description1">
              <div className="head">Carvonix</div>
              <div className="disc">
                Carvonix is a dynamic web and mobile application designed
                specifically for car enthusiasts. This platform enables users to
                immerse themselves in a vibrant community of fellow car lovers,
                share their passion for car modifications, and engage in
                activities with their curated crews.
              </div>
            </div>
          </div>

          <div className="proj2">
            <div className="description1">
              <div className="head">Build-Mizer</div>
              <div className="disc">
                The Build Mizer Web Application is a user-friendly interface
                that enables the user to input the dimensions of an area such as
                the length, width, and height. The user can then select the type
                of material needed, such as cement, tiles, bricks, or paint, and
                the application will calculate the estimated quantity required.
              </div>
            </div>
            <img className="img2" src={buildmizer} alt="" />
          </div>

          <div className="proj1">
            <img className="img1" src={gearbookie} alt="" />
            <div className="description1">
              <div className="head">Gearbookie</div>
              <div className="disc">
                Gearbookie is an innovative platform designed for both web and
                mobile users, offering a unique marketplace where vendors and
                users can rent beach-related items on an hourly or weekly basis.
                Whether you're looking to enjoy a day at the beach without the
                hassle of buying and transporting gear, or you're a local vendor
                aiming to reach a broader audience, Gearbookie makes it easy and
                efficient
              </div>
            </div>
          </div>

          <div className="proj2">
            <div className="description1">
              <div className="head">My Clique</div>
              <div className="disc">
                MyClique offers a group of friends who want a new way to save
                their hangouts and discover new places to visit on their next
                outing. We believe that we grow by focusing on our similarities
                and what we all love are hangouts! We want our app to actually
                encourage people to be social, meet up with their cliques and
                meet new people to expand their circle.
              </div>
            </div>
            <img className="img2" src={myClique} alt="" />
          </div>

          <div className="proj1">
            <img className="img1" src={Noorsign} alt="" />
            <div className="description1">
              <div className="head">Noor Signs</div>
              <div className="disc">
                Your business deserves to be seen, and at the custom sign shop
                NOORSIGN, we can help you with visibility and so much more. We
                are a custom sign and visual solutions company that can handle a
                wide variety of your business’s needs, including content
                development, graphic design, and project management. Our visual
                idea experts offer unmatched insight and will work closely with
                you to understand your business and develop customized solutions
                that convey your message
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactpage" id="contactpage">
        <div className="contactme">Let's connect to Deployee more</div>
        <div className="flexcontact">
          <div className="pic">
            <img src={contactme} alt="" />
          </div>

          <div className="contactlinks">
            <div className="contactitems">
              <a
                href="https://www.linkedin.com/in/danyal-hamid-41053327b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn Profile" />
              </a>
              <p>danyalhamid19</p>
            </div>
            <div className="contactitems">
              <a
                href="https://github.com/DanyalHamid19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github Profile" />
              </a>
              <p>DanyalHamid19</p>
            </div>
            <div className="contactitems">
              <a
                href="https://www.facebook.com/profile.php?id=100004737647236b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook Profile" />
              </a>
              <p>daniyalhameed34@yahoo.com</p>
            </div>

            <div className="contactitems">
              <img src={whatsapp} alt="whatsapp" />
              <p>+92 308 7527322</p>
            </div>

            <div className="contactitems">
              <a
                href="https://www.gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gmail} alt="gmailId" />
              </a>
              <p>daniyalhameed19@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
