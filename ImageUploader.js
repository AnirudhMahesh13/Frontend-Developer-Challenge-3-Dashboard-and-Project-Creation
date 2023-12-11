// ImageUploader.js
import React, { useState, useRef } from 'react';

const ImageUploader = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;

    if (files.length > 0) {
      const image = files[0];
      onImageUpload(image);
    }
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const image = files[0];
      onImageUpload(image);
    }
  };

  const toggleUploader = () => {
    setShowUploader(!showUploader);
  };

  return (
    <div>
      <button className="dropdown-btn1" onClick={toggleUploader}>
        Select Image
      </button>
      {showUploader && (
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={isDragging ? dropzoneStyleDragging : dropzoneStyle}
        >
          <p>Drag and drop an image here, or click to select one</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            // Remove display none style to make the input visible
            // style={{ display: 'none' }}
            ref={fileInputRef}
          />
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

const dropzoneStyleDragging = {
  ...dropzoneStyle,
  backgroundColor: '#f0f0f0',
};

export default ImageUploader;
