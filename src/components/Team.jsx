import React from 'react';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import '../stylings/Team.css';
import styled from 'styled-components';

// Styled component for the background
import invertedBg from '../../src/Images/inverted_bg1.png';

const BackgroundDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${invertedBg});
  background-size: cover;
  background-position: center;
  z-index: -1; /* Make sure it's behind other content */
`;

const ContentWrapper = styled.div`
  min-height: 100vh; /* Ensures the content can scroll */
  z-index: 1; /* Puts the content above the background */
`;

const Team = () => {
  return (
    <>
      <BackgroundDiv />
      <ContentWrapper>
        <div>

          <div className="team_glow-border"></div>
          <header>
            <h2 className="team_flicker-text">Yantrik Team</h2>
            <h2 className='team_intro'>Coordinator</h2>
            <div className='coordinators'>
            <div className="team_team-section">
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0017.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Gunjeet Kumawat</h3>
                    <h4>Coordinator</h4>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/yantrik_club" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/Manjeet Rai.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Manjeet Rai</h3>
                    <h4>Co-Coordinator</h4>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/___manjeet1729___" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/bhoomi.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Bhoomi</h3>
                    <h4>Tech Lead </h4>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/bhoomidvn13/" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/bhoomi-dhawan-a125a6280/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0039.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Kartik Gupta</h3>
                    <h4>Tech Lead </h4>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/_.k.a.r.t.i.k._11_?igsh=M3M5d2Joc3Y3Z2lo" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/kartik-gupta-3b92aa243/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="team_container">
              <h2>Mentors</h2>
              <div className="team_team-section">
                <div className="team_card">
                  <img className="team_bg" src='../../src/Images/photo1.jpg' alt="bg" />

                  <img className="team_person" src={`../../src/Images/vaibhav_kes.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Vaibhav Kesharwani</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/born_engineer73/" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/born-engineer73/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>

                </div>

                {/* Repeat for other mentors */}
                {/* Hemank Soni */}
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/heman.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Hemank Soni</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/yantrik_club" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/shemank/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>

                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/aryan.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Aryan Singh</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/skd.arya18/" target="_blank " rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/aryan0singh/" target="_blank " rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/aritra].jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Aritra Boral</h3>

                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/lucifer_morningstar_06660/" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/aritra-boral/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/pranja.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Pranjal Vats</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/yantrik_club" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/pranjal-vats-0a6b38264/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                {/* Repeat similar structure for other team members */}
              </div>



              {/* Coordinator Section */}


              {/* Web Developer Section */}
              <h2>Web Developers</h2>
              <div className="team_team-section">
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0021.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Priyanshu Prajapati</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/priyanshu_prajapati_0_0/" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/priyanshu-prajapati-9176b22a7" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/me.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Himanshi Namdev</h3>

                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/him_anshi1104" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/himanshi-namdev-640595320" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/aarushi.jpg `} alt="person" />
                  <div className="team_info">
                    <h3>Aarushi Garg</h3>

                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/aarushi25.04" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/arushigrg/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0031.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Jaya Pandey</h3>

                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/j.a.y.a_20" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/jaya-pandey-402125311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>

                {/* Repeat for other web developers */}
              </div>

              {/* Design Section */}
              <h2>Design</h2>
              <div className="team_team-section">
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`$../../src/Images/mohit.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Mohit</h3>

                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/aalsimohit" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0018.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Tushar Bhati</h3>

                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/tusharbhatiiii" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/tushar-bhati-632862318/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0020.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Yashodeep</h3>

                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/yantrik_club" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`$../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0028.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Dheeraj Gavendra</h3>

                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/dheeraj_gavendra_" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
              </div>

              <h2>Content</h2>
              <div className="team_team-section">
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0034.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Priyanka</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/priynka_0004" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/Chinmay Patel.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Chinmay Patel</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/chinpat_2005/" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0019.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Vamshi</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/_vamshixx.__" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href=" https://www.linkedin.com/in/gundoju-sai-vamshi-981355282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
              </div>

              <h2>Inventory</h2>
              <div className="team_team-section">
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0030.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Vani Dhiman</h3>
                  </div>
                  <div className="team_icon">
                    <a href="http://www.instagram.com/vanidhiman583" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="http://www.linkedin.com/in/vanidhiman583" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>

                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0026.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Alok Kumar Yadav</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/__.al0k.__?igsh=b2lwemRvOTVlYjlh" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
              </div>

              <h2>Event Mangement</h2>
              <div className="team_team-section">
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0022.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Aditya Kumar Gupta</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/adityakumargupta430" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-gupta-72a2b3287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`$../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0040.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Rahul Patidar</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/rahul__patidar___" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0027.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Chetan Meena</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/chetan_cm_1" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/chetan-meena-65b336324" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0023.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Aaryan Tyagi</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/aaryantyagi07?utm_source=qr&igsh=cGMxbXkwemFnd2J6" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/aaryan-tyagi-53a562285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/divyanshu.jpeg`} alt="person" />
                  <div className="team_info">
                    <h3>Divyanshu Raj</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/divyanshu_raj_2004" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>

                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/ADITYA_B23189.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Aditya</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/Yaar.aditya_" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-888196263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0035.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Kripal</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/kkripalll/" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/kripal-dahariya-462225276/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/Nimit Garg.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Nimit</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/nimit004" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0033.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Mahenderkar Thanooju</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://instagram.com/its_thanooj_48" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/yantrik-club-iit-mandi/" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/IMG-20240901-WA0024.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Shubham Meena</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/shubham_badgotiya?igsh=am45NzRuZGZjaXcy" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/shubham-meena-2139992b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/Tarun Singh.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Tarun Singh</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/tarunsingh.insta" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/tarun-singh-9493462a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="team_card">
                  <img className="team_bg" src={`../../src/Images/photo1.jpg`} alt="bg" />

                  <img className="team_person" src={`../../src/Images/Adarsh Agrawal.jpg`} alt="person" />
                  <div className="team_info">
                    <h3>Adarsh Agrawal</h3>
                  </div>
                  <div className="team_icon">
                    <a href="https://www.instagram.com/adarsh.agrawal.359126?igsh=MWRsNzE5MmE0OW0xdw==" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/adarsh-agrawal-09838728a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              {/* Other sections like Content, Inventory, Event etc. follow the same pattern */}
            </div>
          </header>

        </div>
      </ContentWrapper>
    </>
  );
};

export default Team;
