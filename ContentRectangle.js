import React, { useState } from 'react';
import './ContentRectangle.css';

const ContentRectangle = ({ title, tabs, verticalList }) => {
  const [activeTab, setActiveTab] = useState('challenges');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="content-rectangle">
      <h3>{title}</h3>
      <div className="buttonrec">
      <button variant="text">View Leaderboard</button>
      </div>
      <p>Organization Labs Challenge Sort by</p>
      <div className="horizontal-drop-downs">
        {/* Five horizontally placed drop-down menus */}
      <p></p>
        <select>
          <option>All Organizations</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select>
          <option>All Labs</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select>
          <option>Challenge</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select>
          <option>Learn</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <div className="vertical-scroll-list">
        <ul>
          <li>#</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          {/* Add more items as needed */}
        </ul>
        <ul>
          <li>Username</li>
          <li><img src="/user5.png" alt="wehaveanissue" />User 1</li>
          <li><img src="/user5.png" alt="wehaveanissue" />User 2</li>
          <li><img src="/user5.png" alt="wehaveanissue" />User 3</li>
          <li><img src="/user5.png" alt="wehaveanissue" />User 4</li>
          <li><img src="/user5.png" alt="wehaveanissue" />User 5</li>
          <li><img src="/user5.png" alt="wehaveanissue" />User 6</li>
          <li><img src="/user5.png" alt="wehaveanissue" />User 7</li>
          <li><img src="/user5.png" alt="wehaveanissue" />User 8</li>
          {/* Add more items as needed */}
        </ul>
        <ul>
          <li>Learning Points</li>
          <li>564516</li>
          <li>446541</li>
          <li>354654</li>
          <li>25648</li>
          <li>21687</li>
          <li>8465</li>
          <li>3658</li>
          <li>0</li>
          {/* Add more items as needed */}
        </ul>
        <ul>
          <li>Learning Rank</li>
          <li>1</li>
          <li>232</li>
          <li>174</li>
          <li>92</li>
          <li>87</li>
          <li>84</li>
          <li>77</li>
          <li>23</li>
          {/* Add more items as needed */}
        </ul>
        <ul>
          <li>Achievements</li>
          <li>1</li>
          <li>3</li>
          <li>12</li>
          <li>43</li>
          <li>163</li>
          <li>13</li>
          <li>34</li>
          <li>234</li>
          {/* Add more items as needed */}
        </ul>
      </div>
     
    </div>
  );
};

export default ContentRectangle;
