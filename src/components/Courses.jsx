import React from 'react';
import { FaCog, FaFlask, FaLaptopCode, FaPills } from 'react-icons/fa';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      icon: <FaCog />,
      title: 'Engineering',
      description: 'Bachelor of Engineering (B.E.) programs in various disciplines',
      color: '#FF5722'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Diploma',
      description: 'Polytechnic diploma courses in technical fields',
      color: '#2196F3'
    },
    {
      icon: <FaPills />,
      title: 'Pharmacy',
      description: 'Bachelor of Pharmacy (B.Pharm) and Diploma in Pharmacy',
      color: '#4CAF50'
    },
    {
      icon: <FaFlask />,
      title: 'Post Graduate',
      description: 'Master of Engineering (M.E.) and M.Tech programs',
      color: '#9C27B0'
    }
  ];

  return (
    <div className="courses-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Programs</h2>
          <p>Explore our wide range of technical education programs</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-icon" style={{ backgroundColor: course.color }}>
                {course.icon}
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="course-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
