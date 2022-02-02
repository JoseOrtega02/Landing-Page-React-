import React from 'react';


import second from '.././assets/2.png';
import third from '.././assets/3.png';

export  function Footer() {
  return <div className="footer">
      
      <div className="footer__container">
        <img  className="footer-icon" src={second} alt=""/>
        <h3>lorem</h3>
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
      <div className="footer__container">
          <img className="footer-icon" src={third} alt=""/>
          <h3>lorem</h3>
          <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
  </div>;
}
