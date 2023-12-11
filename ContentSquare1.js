// ContentSquare1.js
import React, { useState } from 'react';
import './ContentSquare1.css';
const ContentSquare1 = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState('challenges');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="content-square1">
      <h3>{title}</h3>
      <div className="mini-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`mini-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
            <p>{tab.sentence}</p>
            <ul>
              {tab.bulletPoints.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
            {/* Image placeholder */}
            {/* <i className="image-placeholder">Image goes here</i> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSquare1;
