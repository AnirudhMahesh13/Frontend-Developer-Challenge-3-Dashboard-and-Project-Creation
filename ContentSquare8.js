// ContentSquare8.js
import React, { useState } from 'react';
import './ContentSquare8.css';

const ContentSquare8 = ({ title, tabs, switchToHelloWorldPage }) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleExploreClick = () => {
    // Log a message to check if the function is being called
    console.log("Button clicked");
    // Switch to the HelloWorldPage using the provided function
    switchToHelloWorldPage();
  };

  return (
    <div className="content-square6">
      <h3>{title}</h3>
      <div className="create-button">
        <button onClick={switchToHelloWorldPage}>Create</button>
      </div>
      <div className="tabs">
        {/* Tab 1 */}
        <button
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          My projects
        </button>

        {/* Tab 2 */}
        <button
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Need to assess
        </button>

        <button
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          Invited
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'tab1' && (
        <div className="tab-content">
          <button>AnirudhMahesh - Frontend Developer Challenge 1: Web Page Creation</button>
          <hr className="content-divider" />
          <button>FoodLink Group 2 - DTP & FUN - Team Business Innovation Challenge</button>

          <hr className="content-divider" />

        </div>
      )}

      {activeTab === 'tab2' && (
        <div className="tab-content">
This area will display project submissions for you to assess in a challenge if you’re invited to be an assessor!
        </div>
      )}

      {activeTab === 'tab3' && (
        <div className="tab-content">
No pending project invitations
        </div>
      )}

      {/* Button linking to HelloWorldPage */}
      <div className="button">
      <button variant="text">Explore More</button>
      </div>
    </div>
  );
};

export default ContentSquare8;
