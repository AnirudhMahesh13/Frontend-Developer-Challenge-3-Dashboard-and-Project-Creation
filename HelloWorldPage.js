// HelloWorldPage.js

import './HelloWorldPage.css';
import Header from './Header';
import React, { useState } from 'react';
import ImageUploader from './ImageUploader';

const HelloWorldPage = () => {
  const [showSearch1, setShowSearch1] = useState(false);
  const [showSearch2, setShowSearch2] = useState(false);
  const handleImageUpload = (image) => {
    console.log('Image uploaded:', image);
  }
  const toggleSearch1 = () => {
    setShowSearch1(!showSearch1);
  };

  const toggleSearch2 = () => {
    setShowSearch2(!showSearch2);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <Header />
      <div className='rectangleStyle'>
        <h1>CREATE PROJECT</h1>
        <hr className="content-divider" />
        <img src="/dumbell.png" alt="wehaveanissue" />
        <p>Challenge: No active challenge selected</p>
        <div className='minirectangleStyle'>
          <p1>To browse challenge requirements here, you need to select an active challenge below.</p1>
        </div>
        <div className='minirectangleStyle2'>
          <p1>Project Overview</p1>
          <div className="grid-container">
            <div className="input-column">
              <h4>Title</h4>
              <div className="input-with-image">
                <input type="text" placeholder="Max 150 Characters" />
              </div>
            </div>
            <div className="input-column">
              <h4>Project Slug</h4>
              <div className="input-with-image">
                <input type="text" placeholder="Project Slug" />
                <img src="/preprquestion.png" alt="Image 2" className="hover-image" />
                <div className="hover-text">Max 150 words and unique.</div>
              </div>
            </div>
            <div className="input-column">
              {/* Empty column */}
            </div>
            <div className="input-column">
              <h4>Active Challenge</h4>
              <div className="dropdown" onClick={toggleSearch1}>
                <button className="dropdown-btn">Select Challenge</button>
                {showSearch1 && (
                  <input
                    type="text"
                    placeholder="Search..."
                    onClick={stopPropagation}
                  />
                )}
                <div className="input-with-image2">
                  <img src="/preprquestion.png" alt="Image 5" className="hover-image" />
                  <div className="hover-text">Max 150 words and unique.</div>
                </div>
              </div>
            </div>
            <div className="input-column">
              <h4>Description</h4>
              <div className="input-with-image">
                <input type="text" placeholder="Max 300 Characters" />
              </div>
            </div>
            <div className="input-column">
              <h4>Associated Lab</h4>
              <div className="dropdown1" onClick={toggleSearch2}>
                <button className="dropdown-btn1">Select Lab</button>
                {showSearch2 && (
                  <input
                    type="text"
                    placeholder="Search..."
                    onClick={stopPropagation}
                  />
                )}
                <div className="input-with-image2">
                  <img src="/preprquestion.png" alt="Image 5" className="hover-image" />
                  <div className="hover-text">Max 150 words and unique.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space"></div>
          <div className="checkbox-section">
            <label>
              <input type="checkbox" />
              
Allow users outside your team to view your project

              <div className="input-with-image2">
                <img src="/preprquestion.png" alt="Image 5" className="hover-image" />
                <div className="hover-text">Max 150 words and unique.</div>
              </div>
            </label>
            <label>
              <input type="checkbox" />
              Allow users outside your team to download your project file
              <div className="input-with-image2">
                <img src="/preprquestion.png" alt="Image 5" className="hover-image" />
                <div className="hover-text">Max 150 words and unique.</div>
              </div>
            </label>
          </div>
        </div>
        <div className='minirectangleStyle3'>
          <h>Upload Project Banner</h>
          <p>Please select png, jpg or jpeg image with minimum dimension of width: 625px, height: 355px</p>
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>
        <div className='addspace'></div>
        <div className="bottombuttons">
        <button variant="bottombuttons">Cancel</button> <button variant="bottombuttons">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default HelloWorldPage;
