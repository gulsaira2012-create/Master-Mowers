import React from 'react';

import loader from "../assets/preloader.gif"

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Preloader;