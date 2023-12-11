// ContentSquare5.js
import React, { useState } from 'react';
import './ContentSquare5.css'; 
const ContentSquare1 = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState('challenges');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="content-square5">
      <h3>{title}</h3>
      <p>Join Challenges and Labs, get awarded with micro-credentials.</p>
      <div className= "con">
      <img src="/doc.png" alt="wehaveanissue" />
      </div>
      <div className="button">
      <button variant="text">Explore More</button>
      </div>
    </div>
  );
};

export default ContentSquare1;
