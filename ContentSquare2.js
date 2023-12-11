// ContentSquare2.js
import React, { useState } from 'react';
import './ContentSquare2.css'; 
const ContentSquare1 = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState('challenges');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="content-square2">
      <h3>{title}</h3>
      <p>Start your PreprLabs journey now!</p>
      <div className= "con">
      <img src="/continuewhereyouleftoff.png" alt="wehaveanissue" />
      </div>
      <div className="button">
      <button variant="text">Explore More</button>
      </div>
    </div>
  );
};

export default ContentSquare1;
