//import { useState, useEffect } from 'react'
//import { useParallax, Parallax } from 'react-scroll-parallax';
import SmoothScroll from '../components/smoothScroll';
import nmdteam from '../assets/img/nmdteam (1).jpg';
import founder from '../assets/img/founder.jpg';
import cofounder from '../assets/img/cofounder.jpg';
import contact from '../pages/contact';
import '../css/work.css';

import '../css/about.css';
import { color } from 'framer-motion';
import { BsArrowRightCircle, BsFillLightbulbFill, BsGift, BsHandIndex, BsHandbag, BsLightbulb, BsLightbulbOff, BsSearch } from 'react-icons/bs';
import Footer from '../components/footer';
import TalkUs from '../components/talkus';

function About() {

    return (
        <>
            <SmoothScroll>
                <div>
                    <div className="scroll-container">
                        <section className='work-title-container'>
                            <div>
                                <h2><span> About Us </span></h2>
                            </div>
                            <div>
                                <div className="about-right-img-Head" >
                                    <img style={{ borderRadius: "50px", height: "70vh", marginLeft: "28%" }} src="/projects/nmd/static/media/img2.814a8b32693b6489ba67.jpg" alt="mv" />
                                </div>
                            </div>
                        </section>
                        <section>
                            <div>
                                <section className="about-content-section" style={{ background: "rgb(17, 10, 6)" }}>

                                    <div className="about-content-text-wrapper">
                                        {/* <h4> <span className="about-content-title">About Us</span> </h4> */}
                                        <span className="about-content-title-cur">Hello.</span>
                                        <p >A stellar organization for interior designing, NMD Interiors boasts of its forte in Healthcare, residential and corporate interiors. We are a well-integrated and highly coordinated bunch of naturally gifted individuals specializing in a wide array of professional domains such as turnkey interior projects, 3D design modelling and site supervision.</p>
                                    </div>
                                    <div className="about-content-img-wrapper-right">
                                        <div className="about-right-image">
                                            <img src="/projects/nmd/static/media/img2.814a8b32693b6489ba67.jpg" alt="mv" />
                                        </div>
                                        <div>
                                            <div className="about-right-img-1">
                                                <img src="/projects/nmd/static/media/img4.4cb59346db973397a48f.jpg" alt="dj" />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="about-title-section">
                                    <div className="about-title-wrapper">
                                        <h4> <span className="about-msg-title">High-end exteriors &amp; interiors</span> <span className="about-msg-title-cur">Designs</span></h4>
                                        <p style={{fontSize:"18px",textAlign:"justify",textJustify:"inter-character"}}>At its fundamental core, here at NMD Interiors, we dynamically portray the new-age vision in its implementation of crucial forms of knowledge, diving into the sheer depths of a subject matter, exploring and sharing its beauty. Unlike other players functioning currently in the interior designing industry, our work principles believe in finding inspiration in various forms, spaces, relations, tangibles, and intangibles, while we try to search hidden resources within and without.</p>
                                    </div>
                                </section>
                                <section>
                                    <div className="container">
                                        <div className="text-wrapper">
                                            <div className="left-to-right">
                                                <h1>NMD Interior and exterior designers</h1>
                                            </div>
                                        </div>
                                        <div className="text-wrapper">
                                            <div className="right-to-left">
                                                <h1>NMD Interior and exterior designers</h1>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="about-know-how-section" style={{ height: "80vh", marginTop: "10%" }}>
                                    <h2 style={{ textAlign: "center" }}>
                                        <span className="about-know-title">
                                            know
                                        </span>
                                    </h2>
                                    <div className="about-know-flex-container">

                                        <div className="about-know-title-flex">

                                            <div>
                                                <img src="/projects/nmd/static/media/img3.6cc1f70d761d0113727f.jpg" alt="nv" />
                                            </div>
                                        </div>

                                        <div className="about-know-text-flex">
                                            <div>
                                                <p>Mr. Niraj Mehta, the visionary Founder of our prestigious company, completed his bachelors and master’s in interior design and Technology from the globally reputed London Metropolitan University, England. He emerged victorious in a notable city and art competition in 2009.</p>
                                                <p>With his academic background of extensive design process studied during his Masters gave Mr. Niraj an edge over his fellow competitors as he was able to hone his creative skills as well as testing digital technology so as to encounter several creative challenges, consequently channelizing his interests and skills to combine digital technology with designing craftsmanship through various processes such as 3 D printing, laser cutting.</p>
                                                <p>Our family of extremely dedicated employees tries to celebrate the exquisite Nature in every subtlety, exhibiting respect and gratitude towards people, practices, science, services, and above all, the cradle called environment nourishes and flourishes us.</p><p>
                                                    Exemplary integrity, efficient execution, down-the-line commitment to quality, and time blended with excellent human relations make NMD Interiors a successful venture to partner with on any project. We specialize in incorporating groundbreaking and technologically innovative products and concepts that are simply stunning and often outshine the industry standards. We come up with some of the best offbeat and unconventional ideas for interior spaces of our clients and use various disciplines and constituents of interior design by concentrating on practical application and implications of our concepts.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="about-know-how-section" style={{ height: "80vh", marginTop: "10%" }}>
                                    <h2 style={{ textAlign: "center" }}>
                                        <span className="about-know-title">
                                            the team
                                        </span>
                                    </h2>
                                    <div className="about-know-flex-container">
                                        <div className="about-know-title-flex">
                                            <div>
                                                <img src={nmdteam} alt="nv" />
                                            </div>
                                        </div>

                                        <div className="about-know-text-flex">
                                            <div>
                                                <p>Team NMD is bunch of creative professionals who always passionate of delivering different ideas to client.</p>
                                                <p>At NMD, we all sit together and think together. Our open office work culture has resulted in free interaction between employees and creating a strong team. Freedom to think and explore is evident in our work. We also invest a lot of time and energy in nurturing our talent. Management and technical training workshops are a part of the routine. Our colleagues come from diverse cultures and backgrounds, bringing in their wealth of knowledge to the organization.</p>
                                                <p>NMD is a family of inspired individuals headed by young, passionate professional designers bringing in their expertise into different verticals.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section style={{ height: "120vh" }}>
                                    <div>
                                        <h2 style={{ textAlign: "center", margin: "30px" }}>
                                            <span className="about-know-title">
                                                The Way We Work
                                            </span>
                                        </h2>
                                    </div>

                                    <section className='project-box-wrapper'>

                                        <div className='project-title-container'>
                                            <div style={{ marginLeft: "25%", padding: "3%" }}> <BsSearch color='#fff' size={50} /></div>
                                            <h2>Analysis</h2>
                                            <p>
                                                The aim is always to acquire a deep understanding of each project and each product. The identification of the exact needs and desires of all parties involved is key in order to define the essence of the project. In addition to this we also tries to lever our influence on clients to make decisions believed to be better for them, the product, the end user or the production process.
                                            </p>
                                        </div>
                                        <div className='project-title-arrow'>
                                            <BsArrowRightCircle color='#fff' size={50} />

                                        </div>
                                        <div className='project-title-container'>
                                            <div style={{ marginLeft: "25%", padding: "3%" }}> <BsLightbulb color='#fff' size={50} /></div>

                                            <h2>Idea Generation</h2>
                                            <p>For us communication is the most important tool in our studio and in our projects. Whether it is with producer, manufacturer, each other or anyone else with a relevant input, it provides inspiration and insight. Dialogues within us are, we would like to believe, of positive nature: nothing is labeled as wrong or right, in the end the goal is to always get closer to the essence. An inquisitive and open- minded process is of great value to us</p>
                                        </div>
                                        <div className='project-title-arrow'>
                                            <BsArrowRightCircle color='#fff' size={50} />
                                        </div>
                                        <div className='project-title-container'>
                                            <div style={{ marginLeft: "25%", padding: "3%" }}> <BsHandbag color='#fff' size={50} /></div>
                                            <h2>Materialization</h2>
                                            <p>
                                                Visualizing the ideas, by giving them a material form, is an important communicative tool. Visualization will often involve hand- drawn and digital sketches, model- making and mock- ups as well as 3D visualization and detailed technical plans.
                                            </p>
                                        </div>
                                        <div className='project-title-arrow'>
                                            <BsArrowRightCircle color='#fff' size={50} />
                                        </div>
                                        <div className='project-title-container'>
                                            <div style={{ marginLeft: "25%", padding: "3%" }}> <BsGift color='#fff' size={50} /></div>

                                            <h2>Products</h2>
                                            <p>
                                                The pre- production phase of the project calls for great attention to details. This implies the production of technical detailing, cost – and manufacturing analysis as well as packaging and life cycle analysis.
                                            </p>
                                        </div>
                                    </section>

                                </section>
                                <section style={{ height: "200vh" }}>
                                    <div>
                                        <h2 style={{ textAlign: "center", margin: "5px" }}>
                                            <span className="about-know-title">
                                                Our Leaders
                                            </span>
                                        </h2>
                                    </div>
                                    <div style={{ margin: "50px", textAlign: "center" }}>
                                        <img src={founder} alt="nh" />
                                        <h1 style={{ color: "white", padding: "10px", textAlign: "center" }}>Mr. Niraj Mehta</h1>
                                        <h1 style={{ color: "white", padding: "0px", textAlign: "center" }}>Founder & Principal Designer</h1>
                                        <p style={{ color: "white", padding: "5px" }}>Niraj Mehta, did his Masters in Interior Design with distinction in 2011 from prestigious department of Sir John Cass Faculty of Art, Architecture and Design in London Metropolitan University, located in the heart of London, U.K. He is a Professional Member of Society of British and International Interior design (SBID). Niraj also won International City and art Competition in London, which gave him boost to the career. His art was placed in national museum of arts in Turkey in year 2009. </p>
                                        <p style={{ color: "white", padding: "20px" }}>After taking healthy on field experience for two years in Bangalore and London he established NMD Interiors., a design firm, in 2013. While working in Bangalore Niraj Designed Facebook Asia Pacific Headquarter in Hyderabad as a main design head for the competition. Niraj has travelled extensively to the Europe, Dubai & East Asia to explore the world of Interior Design. Niraj loves wildlife photography which he pursue the most for flowing his creative instinct. </p>
                                    </div>
                                    <div style={{ float: "right", margin: "50px", textAlign: "center" }}>
                                        <img src={cofounder} alt="nh" />
                                        <h1 style={{ color: "white", padding: "10px", textAlign: "center" }}>Mrs. Manasi Mehta</h1>
                                        <h1 style={{ color: "white", padding: "0px", textAlign: "center" }}>Co-Founder & Admin Head</h1>
                                        <p style={{ color: "white", padding: "5px", textAlign: "center" }}>Manasi Mehta, did her MSc Mathematics and looks after the design back office and manages the team extensively. In 2012, Manasi Marries Niraj and helping him to grow the business. She looks after all new materials and vendors to keep team updated.</p>
                                    </div>
                                </section>
                                <TalkUs txtcolor="#fff" />
                                <Footer txtcolor="#fff" />

                            </div>
                        </section>
                    </div>
                    <div style={{ height: "7600px" }}>
                    </div>
                </div>
            </SmoothScroll>
        </>

    );
}

export default About; 
