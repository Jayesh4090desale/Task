import React from 'react';
import { FaGraduationCap, FaFileAlt, FaUniversity, FaCalendarAlt, FaBookOpen, FaAward } from 'react-icons/fa';
import './QuickLinks.css';

const QuickLinks = () => {
  const links = [
    { icon: <FaGraduationCap />, title: 'Admissions', color: '#4CAF50' },
    { icon: <FaFileAlt />, title: 'Examinations', color: '#2196F3' },
    { icon: <FaUniversity />, title: 'Institutes', color: '#FF9800' },
    { icon: <FaCalendarAlt />, title: 'Academic Calendar', color: '#9C27B0' },
    { icon: <FaBookOpen />, title: 'Curriculum', color: '#F44336' },
    { icon: <FaAward />, title: 'Scholarships', color: '#00BCD4' }
  ];

  return (
    <div className="quick-links-section">
      <div className="container">
        <div className="quick-links-grid">
          {links.map((link, index) => (
            <a href={`#${link.title.toLowerCase()}`} key={index} className="quick-link-card">
              <div className="quick-link-icon" style={{ backgroundColor: link.color }}>
                {link.icon}
              </div>
              <h3>{link.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
