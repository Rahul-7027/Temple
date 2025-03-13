import React from 'react';
import ShriRam from "../../images/SriRam.mp4";

const Video = () => {
  return (
    <div className='container d-flex justify-content-center my-5'>
      <video width="80%" controls autoPlay muted>
        <source src={ShriRam} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
