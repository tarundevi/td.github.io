import React from 'react';
import tarun from './imgs/tarun.jpeg';
import github from './imgs/github.png';
import linkedin from './imgs/linkedin.png';
function About() {  
    return(
        <section className="about-section py-5" href = "about">
            <container>
                <h1 className="text-center mb-4">About Me</h1>
                <div className="d-flex align-items-center">
                    {/* Text on the left */}
                    <div className="about-text me-4">
                        <p>
                            Hi, I'm <strong>Tarun Devi</strong>, a software developer and High School Senior. I specialize in Machine Learning, and I am working on expanding my skills in Full Stack Development.
                        </p>
                        <p>
                            I've worked on analyzing physical systems, and both computer vision and multimodal approaches to lie detection.
                            When I'm not coding, you'll find me working out or playing pickleball.
                        </p>
                    </div>
                    <div classname="about-image">
                        <img
                        src = {tarun}
                        alt="Tarun Devi" 
                        className="img-fluid rounded-circle size-10 img-end"
                        style={{
                            width: '150px', 
                            height: '150px', 
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }} 
                        />
                    </div>
                    <div className="social-links">
                        <a href = "https://github.com/tarundevi/">
                        <img 
                        src={github} 
                        alt="GitHub" 
                        width="48"
                        className="img-fluid rounded-circle size-10 img-en"
                        />
                        </a>
                        <a href = "https://www.linkedin.com/in/tarundevi/">
                        <img 
                            src={linkedin}
                            alt="LinkedIn" 
                            width="48"
                            className="img-fluid rounded-circle size-10 img-en"/>
                        </a>
                        


                   </div> 
                </div>
            </container>
        </section>

    );
}
export default About;