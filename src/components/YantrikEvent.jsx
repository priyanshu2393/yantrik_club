import React, { useState } from "react";
import "./style.css";
import AnimatedBackground from './AnimatedBackground';

// Import images
import unicycle from "../assets/unic.webp";
import wallClimber from "../assets/wall_climber.jpeg";
import roboticArm from "../assets/robotic arm.jpeg";
import rcCar from "../assets/rccar2.jpg";
import rcPlane from "../assets/rcplane1.jpg";
import roboCar from "../assets/robowar.jpg";

const projects = [
  {
    title: "Unicycle",
    description: "Master the art of balance with the unicycle, where one wheel leads to endless possibilities!",
    image: unicycle,
    details:  "The rise of urbanization and the need for sustainable transportation have led to increasing interest in compact and energy-efficient mobility solutions. Electric unicycles (EUCs) provide an innovative and environmentally friendly means of transport that caters to the growing demand for personal mobility in congested urban spaces. The aim of this project is to design and build a self-balancing electric unicycle that utilizes advanced control algorithms, efficient electric propulsion, and smart design features to offer a practical, green alternative to traditional vehicles.The unicycle’s propulsion is powered by a brushless direct current (BLDC) hub motor, which offers higher efficiency compared to conventional motors. A lithium-ion battery provides the necessary power, managed by a Battery Management System (BMS) to ensure optimal operation. The balance of the unicycle is maintained through a Proportional-Derivative (PD) control system, which continuously adjusts motor output based on data from an Inertial Measurement Unit (IMU) sensor. The ESP32-S3 microcontroller processes the sensor data and executes the control algorithms in real-time.This project aims to push the boundaries of personal transportation, offering an innovative solution that is not only functional but also contributes to reducing the environmental impact of daily commuting."
  },
  {
    title: "Wall Climber",
    description: "Conquer every height with precision and power – the ultimate wall climber experience.",
    image: wallClimber,
    details: "Detailed information about the Wall Climber project."
  },
  {
    title: "Robotic Arm",
    description: "Redefine versatility with the robotic arm – your gateway to precision engineering!",
    image: roboticArm,
    details: "Detailed information about the Robotic Arm project."
  },
  {
    title: "Vajra",
    description: "Embark on an off-road adventure with the terrain vehicle, engineered for the toughest challenges.",
    image: rcCar,
    details: "Vajra is a high-speed, robust remote-controlled racing car with a rear-wheel drive powered by 1000 KV BLDC motors. These motors are controlled by two ESCs, which receive power from an 12V battery, with signals transmitted via a Flysky i6x transmitter. Equipped with shock absorbers, Vajra is designed to handle challenging terrains with ease. For steering, it employs an inverse Ackermann mechanism, reducing drift for better control. To minimize its weight, the chassis is built using 3D-printed PLA and acrylic sheets, making it both durable and lightweight, perfect for achieving high performance in competitive racing environments."
  },
  {
    title: "Garuda",
    description: "Glide effortlessly into the future – the hoverboard is your personal transportation revolution!",
    image: rcPlane,
    details: "Garuda is a high-speed, easily controllable remote-control plane powered by a 1400 KV BLDC motor with an 8-inch, 4.5-pitch propeller at the back, providing ample thrust for smooth flight. It uses ailerons for roll control and an elevator for pitch control, both operated by SG90 mini servo motors. Garuda features a 40-inch wingspan attached to its fuselage, ensuring stability in the air. Built primarily with lightweight foam board, it weighs around 600 grams. For added strength, carbon rods and fiber-threaded tapes reinforce the structure. The Flysky i6x transmitter, with six channels, handles signal transmission, allowing room for future enhancements."
  },
  {
    title: "Battle Bot",
    description: "Unleash the power of automation with the RoboCar – where innovation meets performance!",
    image: roboCar,
    details: "Combat robotics is a rapidly evolving field that blends multiple engineering disciplines, offering a unique opportunity to apply theoretical knowledge in a highly practical and competitive environment. This project focuses on the development of a Drumbot, a combat robot that uses a high-speed rotating drum as its primary offensive weapon. The primary objective of this project is to create a highly durable, agile, and powerful robot capable of competing in combat robotics events.The Drumbot’s design is driven by the need for a balance between offensive power and defensive robustness. By integrating a compact two-wheel drive system, the Drumbot maintains stability and maneuverability during intense combat scenarios. The design emphasizes a robust chassis, effective control systems, and strategically selected components to withstand impacts from opponents."
  },
];

const EpicProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="epic-page">
      <AnimatedBackground />
      <div className="project-content">
        <div className="heading">
          <h1 className="header-title">Yantrik Ongoing Projects</h1>
          <p className="header-subtitle">Explore the cutting-edge innovations!</p>
        </div>

        <div className="projects">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              onClick={() => handleCardClick(project)}
            >
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-detail-overlay" onClick={handleCloseDetail}>
            <div className="project-detail-card" onClick={(e) => e.stopPropagation()}>
              <div className="close-button" onClick={handleCloseDetail}>×</div>
              <h2>{selectedProject.title}</h2>
              <div
                className="project-detail-image"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              ></div>
              <p>{selectedProject.details}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EpicProjectPage;
