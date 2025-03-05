import React from 'react';
import '../../styles/HeavyComponents.css';

// This would be a more complex component in a real app
const HeavyComponent2 = () => {
  return (
    <div className="heavy-component">
      <div className="component-content">
        <h4>Interactive Map Interface</h4>
        <p>This component would typically include mapping libraries and geospatial calculations.</p>
        <div className="mock-map">
          <div className="map-container">
            <div className="map-pin" style={{top: '30%', left: '40%'}}></div>
            <div className="map-pin" style={{top: '50%', left: '60%'}}></div>
            <div className="map-pin" style={{top: '70%', left: '20%'}}></div>
            <div className="map-region"></div>
            <div className="map-control-panel">
              <button className="map-button">Zoom +</button>
              <button className="map-button">Zoom -</button>
              <button className="map-button">Layers</button>
            </div>
          </div>
        </div>
        <div className="component-footer">
          <p>✅ Component loaded successfully</p>
          <p className="code-note">Note: In a real application, this would include ~96KB of mapping libraries</p>
        </div>
      </div>
    </div>
  );
};

export default HeavyComponent2; 