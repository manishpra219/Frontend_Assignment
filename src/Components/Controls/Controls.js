import React, { useState, useEffect, useRef } from 'react';
import './Controls.css';

const Controls = ({ setGrouping, setOrdering }) => {
  const [showControls, setShowControls] = useState(false);
  const controlsRef = useRef(null);

  const handleDisplayClick = () => {
    setShowControls(!showControls); // Toggle the visibility of controls
  };

  const handleClickOutside = (event) => {
    if (controlsRef.current && !controlsRef.current.contains(event.target)) {
      setShowControls(false); // Close controls if click outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="controls" ref={controlsRef}>
      <button className="display-btn" onClick={handleDisplayClick}>
        Display
      </button>

      {showControls && (
        <div className="group-sort-controls">
          <label>Group by:</label>
          <select onChange={(e) => setGrouping(e.target.value)}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>

          <label>Sort by:</label>
          <select onChange={(e) => setOrdering(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Controls;
