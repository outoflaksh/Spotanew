import React from "react";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <h1>Fetching random song...</h1>
    </div>
  );
};

export default LoadingScreen;
