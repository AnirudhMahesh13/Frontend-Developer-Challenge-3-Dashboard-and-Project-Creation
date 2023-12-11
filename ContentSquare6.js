// ContentSquare6.js
import React, { useState } from 'react';
import './ContentSquare6.css';
const ContentSquare6 = ({ title, tabs }) => {
    const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="content-square6">
      <h33>{title}</h33>

      <div className="tabs">
        {/* Tab 1 */}
        <button
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          My Labs
        </button>

        {/* Tab 2 */}
        <button
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Invited
        </button>
      </div>

      {/* Tab 1 Content */}
      {activeTab === 'tab1' && (
        <div className="tab-content">
          <button>Web Developer</button>
          <hr className="content-divider" />
          <button>Youth Boost - Career Planning La</button>
          <hr className="content-divider" />
        </div>
      )}

      {/* Tab 2 Content */}
      {activeTab === 'tab2' && (
        <div className="tab-content">
No pending Lab invitations
        </div>
      )}
        <div className="button">
      <button variant="text">Explore More</button>
      </div>
    </div>
  );
};

export default ContentSquare6;
