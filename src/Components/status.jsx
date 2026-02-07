import React from 'react';
import '../style/status.css';

const StatusSection = () => {
  return (
    <div className="status-section">
      <h2 className="status-title">Our Status</h2>
      <div className="status-cards">
        <div className="status-card">
          <i className="fas fa-briefcase status-icon"></i>
          <div className="card-text">
            <h3>10+</h3>
            <p>Experience</p>
          </div>
        </div>
        <div className="status-card">
          <i className="fas fa-building status-icon"></i>
          <div className="card-text">
            <h3>100+</h3>
            <p>Projects</p>
          </div>
        </div>
        <div className="status-card">
          <i className="fas fa-users status-icon"></i>
          <div className="card-text">
            <h3>200+</h3>
            <p>Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusSection;