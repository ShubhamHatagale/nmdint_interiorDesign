//import { useState, useEffect } from 'react'
//import { useParallax, Parallax } from 'react-scroll-parallax';
import SmoothScroll from '../components/smoothScroll';
import nmdteam from '../assets/img/nmdteam (1).jpg';
import founder from '../assets/img/founder.jpg';
import cofounder from '../assets/img/cofounder.jpg';
import contact from '../pages/contact';

import '../css/about.css';
import { color } from 'framer-motion';
import { BsArrowRightCircle, BsFillLightbulbFill, BsGift, BsHandIndex, BsHandbag, BsLightbulb, BsLightbulbOff, BsSearch } from 'react-icons/bs';

function About() {

    return (
        <>
            <SmoothScroll>
                <div>
                    <div className="scroll-container">
                        <section>
                            <div>
                                <section className="about-content-section" style={{ background: "rgb(17, 10, 6)" }}>
                                    <div className="about-content-text-wrapper">
                                        <h4> <span className="about-content-title">About Us</span> </h4>
                                        <span className="about-content-title-cur">Hello.</span>
                                        <p>A stellar organization for interior designing, NMD Interiors boasts of its forte in Healthcare, residential and corporate interiors. We are a well-integrated and highly coordinated bunch of naturally gifted individuals specializing in a wide array of professional domains such as turnkey interior projects, 3D design modelling and site supervision.</p>
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
                                        <p>At its fundamental core, here at NMD Interiors, we dynamically portray the new-age vision in its implementation of crucial forms of knowledge, diving into the sheer depths of a subject matter, exploring and sharing its beauty. Unlike other players functioning currently in the interior designing industry, our work principles believe in finding inspiration in various forms, spaces, relations, tangibles, and intangibles, while we try to search hidden resources within and without.</p>
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
                                <section className="about-know-how-section" style={{ height: "150vh" }}>
                                    <div className="about-know-flex-container">
                                        <div className="about-know-title-flex">
                                            <h2><span className="about-know-title">Know</span></h2>
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
                                <section style={{ height: "120vh" }}>
                                    <div>
                                        <h2 style={{ textAlign: "center", margin: "20px" }}>
                                            <span className="about-know-title">
                                                The team
                                            </span>
                                        </h2>
                                    </div>
                                    
                                    <div className='team-img'>
                                        <img src={nmdteam} alt="nh" />
                                    </div>
                                    <div style={{ color: "white", float: "right", width: "600px", margin: "50px" }}>
                                        <p>Team NMD is bunch of creative professionals who always passionate of delivering different ideas to client.</p>
                                        <p>At NMD, we all sit together and think together. Our open office work culture has resulted in free interaction between employees and creating a strong team. Freedom to think and explore is evident in our work. We also invest a lot of time and energy in nurturing our talent. Management and technical training workshops are a part of the routine. Our colleagues come from diverse cultures and backgrounds, bringing in their wealth of knowledge to the organization.</p>

                                        <p>NMD is a family of inspired individuals headed by young, passionate professional designers bringing in their expertise into different verticals.</p>
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
                                    {/* <div className='team-img'>
                                        <img src={nmdteam} alt="nh" />
                                    </div>
                                    <div style={{ color: "white", float: "right", width: "600px", margin: "50px" }}>
                                        <p>Team NMD is bunch of creative professionals who always passionate of delivering different ideas to client.</p>
                                        <p>At NMD, we all sit together and think together. Our open office work culture has resulted in free interaction between employees and creating a strong team. Freedom to think and explore is evident in our work. We also invest a lot of time and energy in nurturing our talent. Management and technical training workshops are a part of the routine. Our colleagues come from diverse cultures and backgrounds, bringing in their wealth of knowledge to the organization.</p>

                                        <p>NMD is a family of inspired individuals headed by young, passionate professional designers bringing in their expertise into different verticals.</p>
                                    </div> */}
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
                                <section className="talk-us-section">
                                    <div className="talk-title-container">
                                        <h2><span className="talk-title">Talk   to  Us</span></h2>
                                        <a href={"contact"}><p className="talk-text-cur" style={{ color: "rgb(255, 255, 255)" }}>contact now</p></a>
                                    </div>
                                </section>
                                <footer>
                                    <div className="footer-conatiner">
                                        <div className="footer-copyright" style={{ color: "rgb(255, 255, 255)" }}>Copyright ©2023 all rights reserved to NMD </div>
                                        <div className="footer-credit">
                                            <p>Designed and Developed by Conversant</p>
                                        </div>
                                        <div className="footer-social">
                                            <ul>
                                                <li style={{ color: "rgb(255, 255, 255)" }}>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z">
                                                    </path>
                                                    </svg>
                                                </li>
                                                <li style={{ color: "rgb(255, 255, 255)" }}>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                                    </path>
                                                    </svg>
                                                </li>
                                                <li style={{ color: "rgb(255, 255, 255)" }}>
                                                    <svg stroke-width="0" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke="currentColor" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /> </svg>
                                                </li>
                                                <li style={{ color: "rgb(255, 255, 255)" }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-4.412 0-8 3.587-8 8s3.587 8 8 8 8-3.588 8-8-3.588-8-8-8zM8 14.931c-0.716 0-1.403-0.109-2.053-0.309 0.281-0.459 0.706-1.216 0.862-1.816 0.084-0.325 0.431-1.647 0.431-1.647 0.225 0.431 0.888 0.797 1.587 0.797 2.091 0 3.597-1.922 3.597-4.313 0-2.291-1.869-4.003-4.272-4.003-2.991 0-4.578 2.009-4.578 4.194 0 1.016 0.541 2.281 1.406 2.684 0.131 0.063 0.2 0.034 0.231-0.094 0.022-0.097 0.141-0.566 0.194-0.787 0.016-0.069 0.009-0.131-0.047-0.2-0.287-0.347-0.516-0.988-0.516-1.581 0-1.528 1.156-3.009 3.128-3.009 1.703 0 2.894 1.159 2.894 2.819 0 1.875-0.947 3.175-2.178 3.175-0.681 0-1.191-0.563-1.025-1.253 0.197-0.825 0.575-1.713 0.575-2.306 0-0.531-0.284-0.975-0.878-0.975-0.697 0-1.253 0.719-1.253 1.684 0 0.612 0.206 1.028 0.206 1.028s-0.688 2.903-0.813 3.444c-0.141 0.6-0.084 1.441-0.025 1.988-2.578-1.006-4.406-3.512-4.406-6.45 0-3.828 3.103-6.931 6.931-6.931s6.931 3.103 6.931 6.931c0 3.828-3.103 6.931-6.931 6.931z">
                                                </path>
                                                </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </footer>

                            </div>
                        </section>
                    </div>
                    <div style={{ height: "8000px" }}>
                    </div>
                </div>
            </SmoothScroll>
        </>

    );
}

export default About; 
