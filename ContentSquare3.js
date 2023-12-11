// ContentSquare3.js
import React, { useState } from 'react';
import './ContentSquare3.css'; 
const ContentSquare1 = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState('challenges');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="content-square3">
      <h3>{title}</h3>
      {/* First Row */}
      <div className="button2">
      <button variant="text">Frontend Developer Challenge 1: Web Page Creation</button>
      </div>

      {/* Visual Line */}
      <hr className="content-divider" />

      {/* Second Row */}
      <div className="button2">
      <button variant="text">DTP & FUN - Team Business Innovation Challenge</button>
      </div>
      <hr className="content-divider" />
    </div>
  );
};

export default ContentSquare1;
