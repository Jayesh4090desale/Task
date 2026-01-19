import React from 'react';
import { FaBullhorn, FaCalendar } from 'react-icons/fa';
import './Announcements.css';

const Announcements = () => {
  const announcements = [
    {
      title: 'CAP Round 1 Admissions 2024-25',
      date: 'January 15, 2024',
      type: 'Admissions'
    },
    {
      title: 'Winter Semester Examination Schedule Released',
      date: 'January 10, 2024',
      type: 'Examinations'
    },
    {
      title: 'Scholarship Application Deadline Extended',
      date: 'January 8, 2024',
      type: 'Scholarships'
    },
    {
      title: 'New Polytechnic Institute Approval List',
      date: 'January 5, 2024',
      type: 'Institutes'
    },
    {
      title: 'Faculty Recruitment Notification',
      date: 'January 3, 2024',
      type: 'Recruitment'
    }
  ];

  const news = [
    {
      title: 'DTE Maharashtra Launches New Online Portal',
      date: 'January 12, 2024',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Industry-Academia Partnership Program Announced',
      date: 'January 9, 2024',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Technical Education Excellence Awards 2024',
      date: 'January 6, 2024',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="announcements-section">
      <div className="container">
        <div className="announcements-grid">
          <div className="announcements-column">
            <div className="section-header">
              <FaBullhorn className="section-icon" />
              <h2>Latest Announcements</h2>
            </div>
            <div className="announcements-list">
              {announcements.map((item, index) => (
                <div key={index} className="announcement-item">
                  <div className="announcement-badge">{item.type}</div>
                  <h3>{item.title}</h3>
                  <div className="announcement-date">
                    <FaCalendar /> {item.date}
                  </div>
                </div>
              ))}
            </div>
            <button className="view-all-btn">View All Announcements</button>
          </div>

          <div className="news-column">
            <div className="section-header">
              <h2>Latest News</h2>
            </div>
            <div className="news-list">
              {news.map((item, index) => (
                <div key={index} className="news-item">
                  <img src={item.image} alt={item.title} />
                  <div className="news-content">
                    <h3>{item.title}</h3>
                    <div className="news-date">
                      <FaCalendar /> {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="view-all-btn">View All News</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
