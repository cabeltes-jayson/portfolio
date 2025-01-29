import React, { useState, useEffect } from "react";
import { FaReact, FaDatabase, FaJs } from "react-icons/fa";
import { SiSupabase, SiMysql, SiDjango, SiTailwindcss } from "react-icons/si";
import './aboutMe.css'; // Import the CSS file

export default function AboutMe() {
  const [skillProgress, setSkillProgress] = useState([]);

  useEffect(() => {
    const skills = [
      { name: "Back-End Development", percentage: 90 },
      { name: "C++", percentage: 90 },
      { name: "Django", percentage: 90 },
      { name: "Cloud Computing", percentage: 80 },
      { name: "Internet-of-Things Development", percentage: 80 },
      { name: "JavaScript", percentage: 80 },
      { name: "Supabase", percentage: 80 },
      { name: "Python", percentage: 70 },
      { name: "Front-End Development", percentage: 70 },
      { name: "React.js", percentage: 50 },
      { name: "MySQL", percentage: 50 },
      { name: "Tailwind CSS", percentage: 30 },
    ];

    // Initialize progress to 0 for each skill
    setSkillProgress(skills.map(() => 0));

    // Start animation
    skills.forEach((skill, index) => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress < skill.percentage) {
          currentProgress++;
          setSkillProgress((prev) => {
            const updatedProgress = [...prev];
            updatedProgress[index] = currentProgress;
            return updatedProgress;
          });
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust speed here (20ms per increment)
    });
  }, []);

  return (
    <div id="aboutme" className="about-me-container">
      {/* Left Section: Personal Details */}
      <div className="personal-details">
        <h1>About Me</h1>
        <h2>I'm Jayson, a Web Developer</h2>
        <p>
          I am a passionate Full Stack Web Developer with expertise in creating efficient, scalable, and user-friendly web applications. My goal is to solve real-world problems through modern and innovative solutions.
        </p>
        <div className="details-grid">
          <div><strong>Birthday:</strong> December 27, 2002</div>
          <div><strong>Age:</strong> 22</div>
          <div><strong>Email:</strong> cabeltes.jayson7@gmail.com</div>
          <div><strong>Degree:</strong> BS Information Technology</div>
          <div><strong>Phone:</strong> 09667645728</div>
          <div><strong>City:</strong> Cagayan De Oro</div>
        </div>
      </div>

      {/* Right Section: Skills */}
      <div className="skills-section">
        <h2>Skills</h2>
        {[
          { name: "Back-End Development", percentage: 90 },
          { name: "C++", percentage: 90 },
          { name: "Django", percentage: 90 },
          { name: "Cloud Computing", percentage: 80 },
          { name: "Internet-of-Things Development", percentage: 80 },
          { name: "JavaScript", percentage: 80 },
          { name: "Supabase", percentage: 80 },
          { name: "Python", percentage: 70 },
          { name: "Front-End Development", percentage: 70 },
          { name: "React.js", percentage: 50 },
          { name: "MySQL", percentage: 50 },
          { name: "Tailwind CSS", percentage: 30 },
        ].map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-name">
              <span>{skill.name}</span>
              <span>{skillProgress[index]}%</span>
            </div>
            <div className="bar-container">
              <div
                className="bar"
                style={{ width: `${skillProgress[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}