// ContentSquare7.js
import React, { useState } from 'react';
import './ContentSquare7.css';
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
          My Challenges
        </button>

        {/* Tab 2 */}
        <button
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Invited
        </button>
        <button
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          Following
        </button>
      </div>

      {/* Tab 1 Content */}
      {activeTab === 'tab1' && (
        <div className="tab-content">
          <button>DTP & FUN - Team Business Innovation Challenge</button>
          <hr className="content-divider" />
          <button>Youth Boost - Career Planning 7: Engage with Alumni & Industry Professionals</button>
          <hr className="content-divider" />
          <button>Youth Boost - Career Planning 6: Develop Your Learning Plan</button>
          <hr className="content-divider" />
        </div>
      )}

      {/* Tab 2 Content */}
      {activeTab === 'tab2' && (
        <div className="tab-content">
No current Challenge invitations
        </div>
      )}
     {activeTab === 'tab3' && (
        <div className="tab-content">
No challenge being followed yet
        </div>
      )}
            <div className="button">
      <button variant="text">Explore More</button>
      </div>
    </div>
  );
};

export default ContentSquare6;
