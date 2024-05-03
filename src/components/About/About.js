import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello, I am <strong>Arun Giri</strong> a motivated and dedicated individual with a passion for software engineering 
            and a strong foundation in computer science equipped with my Bachelor's degree in Computer Science from Fisk University. 
            I am currently working as a Full stack Engineer at Algorizin.
        
            </ScrollAnimation>
            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            I am currently a Full Stack Developer at Algorizin, Inc., where I've developed Algorizin Copilot, a platform that significantly streamlines legal procedures for international students. My work includes enhancing user engagement by 25% through a fine-tuned GPT model, improving legal compliance by 40% with an AI-powered application, and reducing business start-up times by 30% with advanced data processing features. My projects leverage technologies like Next.js, Node.js, and TypeScript to facilitate efficient, technology-driven solutions
        
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            During my two internships with Microsoft's Cloud Security Team, I developed a bot to automate ticket tagging, reducing manual tagging time by 4 hours/day and improving customer query response time by 20%. Additionally, I led efforts in vulnerability detection within Azure functions, reducing potential security risks by 10% and enhancing Microsoft Defender Cloud's capabilities. These experiences have honed my technical skills and demonstrated the impact of innovative solutions in real-world software engineering.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            I've led various impactful projects, showcasing my proficiency in diverse technologies. College Hub, developed with HTML, JavaScript, CSS, Bootstrap, React, Python, and Django, assists international students in U.S. university applications. Take Flight (Airy) simplifies flight booking using HTML, CSS, ReactJS, and American Airlines API integration. Fisk Serve, built with HTML, CSS, ReactJS, and NodeJS, enhances dining experiences at Fisk University’s Dining Hall. These projects highlight my adeptness in delivering innovative solutions across multiple tech stacks.

              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
