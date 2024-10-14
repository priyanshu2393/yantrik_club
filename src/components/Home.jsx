import React, { useEffect, useRef, useState } from 'react';
import ThreeScene from './Threescene';
import logo from '../assets/logobgr.png';
import '../stylings/Home.css';

import { useTextScramble } from './TextScramleHook';
import { RiH5 } from 'react-icons/ri';

const contentItems = [
  {
    title: "Active College Participation",
    text: "Our club regularly participates in tech-fests and competitions at prestigious institutions across India, including IIT Kanpur, IIT Bombay, IIT Ropar, IIT Delhi, and IIT Jammu. We also host our own hardware hackathons, fostering innovation and hands-on experience."
  },
  {
    title: "Engaging Regular Sessions",
    text: "We conduct frequent sessions and hackathons focusing on 3D modeling, animation, and MATLAB, offering our juniors and newcomers an opportunity to enhance their skills. We also provide guidance to freshers for their first-year projects, ensuring a strong foundation."
  },
  {
    title: "Innovative Projects",
    text: "Our club is at the forefront of innovation, working on exciting projects like RC Cars, RC Planes, Unicycles, and Battle Bots. These projects not only provide practical experience but also nurture creativity and teamwork among members."
  }
];

const LandingPage = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useTextScramble(titleRef, contentItems.map(item => item.title));
  useTextScramble(textRef, contentItems.map(item => item.text));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleItems(prev => [...prev, entry.target.id]);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.session-item').forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="App">
        <ThreeScene />
        <div className="overlay">
          <div className="typewriter" style={{ marginLeft: "25px" , fontFamily : "Helvetica " }}>
            <h1>We Brings Ideas to Life</h1>
          </div>
          <div className="scroll-link">
            <a href="#container">Scroll to know more</a>
          </div>
        </div>
      </div>

      <div className="container" id="container">
        <div className="intro">
          <img src={logo} alt="Yantrik Logo" className="logo" />
          <div className="text">
            <h4>
              Yantrik is one of the amazing student clubs of IIT Mandi. Under the Science and Technology Council, the club is showing its charm. Yantrik conducts various interesting events, makes amazing projects, and teaches a lot to get the learnings into action. With the contribution of new members, the family of Yantrik is growing:
            </h4>
          </div>
        </div>
      </div>

      <div className="idc">
        <div className="info-section">
          <div className="info-item">
            <h2 ref={titleRef}></h2>
            <p ref={textRef}></p>
          </div>
        </div>
      </div>

      <div className="container" id="container2">
        <div className= "ls" style={{}}>
          <h1 style={{ color: 'white', border: "2px", fontSize: '2.8em', marginTop: '20px' }}>Sessions</h1>
        </div>
      </div>
      
      <div className='session'>
        <div className="container mt-5 mb-3">
          <div className="inner-child">
            <div className="col-md-8 col-sm-12 col-xs-12 col-lg-8 col-xl-8" style={{ padding: 'auto', }}>
              <ul className="timeline">
                <li id="session1" className={`session-item ${visibleItems.includes('session1') ? 'visible' : ''}`}>
                  <a href="#">SNTC INTRODUCTION TO FRESHER's</a>
                  <a href="#" className="float-right">11 AUGUST 2024</a>
                  <p>INTRODUCTION TO ALL THE TECHNICAL CLUBS UNDER SNTC <b>IIT, MANDI</b></p>
                </li>
                <li id="session2" className={`session-item ${visibleItems.includes('session2') ? 'visible' : ''}`}>
                  <a href="#">SOLIDWORKS AND 3D PRINTING SESSION </a>
                  <a href="#" className="float-right">17-AUGUST-2024</a>
                  <p>Join us for an immersive session on SolidWorks and 3D Printing, where you'll explore advanced design techniques and hands-on printing skills to bring your ideas to life with cutting-edge technology. <b>A18-2 IIT, Mandi</b></p>
                </li>
                <li id="session3" className={`session-item ${visibleItems.includes('session3') ? 'visible' : ''}`}>
                  <a href="#">INTODUCTION TO MECH LAB B23 </a>
                  <a href="#" className="float-right">3RD WEEK OF AUG</a>
                  <p>Explore the Mech Lab B23, where hands-on experience meets cutting-edge mechanical engineering technology</p>
                </li>
                <li id="session4" className={`session-item ${visibleItems.includes('session4') ? 'visible' : ''}`}>
                  <a href="#">SOLIDWORKS ADVANCED</a>
                  <a href="#" className="float-right">28 SEPT - 29 SEPT 2024</a>
                  <p>Advance your skills with SolidWorks in this session, focusing on advanced modeling and design techniques<b>IIT MANDI</b> </p>
                </li>
                <li id="session5" className={`session-item ${visibleItems.includes('session5') ? 'visible' : ''}`}>
                  <a href="#">MATLAB SESSION</a>
                  <a href="#" className="float-right">19 OCT - 20 OCT 2024 </a>
                  <p>Master MATLAB essentials in this session, focusing on data analysis, visualization, and scripting techniques.<b>IIT MANDI</b></p>
                </li>
                <li id="session6" className={`session-item ${visibleItems.includes('session6') ? 'visible' : ''}`}>
                  <a href="#">ENERGY PHOTOGRAPHY</a>
                  <a href="#" className="float-right">27 OCT - 31 OCT 2024 </a>
                  <p>Explore the art of capturing energy through photography, focusing on dynamic compositions and innovative techniques <b>IIT Mandi</b></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
