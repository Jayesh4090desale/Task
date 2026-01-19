import React from 'react';
import { FaUniversity, FaUserGraduate, FaChalkboardTeacher, FaAward } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const stats = [
    { icon: <FaUniversity />, number: '400+', label: 'Institutes' },
    { icon: <FaUserGraduate />, number: '2.5L+', label: 'Students' },
    { icon: <FaChalkboardTeacher />, number: '15K+', label: 'Faculty Members' },
    { icon: <FaAward />, number: '50+', label: 'Years of Excellence' }
  ];

  return (
    <div className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
