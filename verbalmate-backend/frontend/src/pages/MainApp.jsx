import React from 'react';
import './MainApp.css';

const MainApp = () => {
  return (
    <div className="main-app-container">
      <iframe
        src="http://localhost:8506"
        title="VerbalMate AI Application"
        className="streamlit-embed"
      />
    </div>
  );
};

export default MainApp; 