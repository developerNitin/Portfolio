import React, { useState } from "react";

function navbar() {

  return <nav className="navbar">
    <button className="btn-sun">
    <svg height="33.8" width="30" xmlns="http://www.w3.org/2000/svg"> 
       <circle cx="12.8" cy="14" r="4"></circle> 
       <rect className="svg-sun-ray" height="5" width="1.5" rx="1" x="11.5" y="5.9" transform="rotate(-180 12.5 5.9)"></rect> 
       <rect className="svg-sun-ray" height="5" width="1.5" rx="1" x="12" y="22"></rect> 
       <rect className="svg-sun-ray" height="5" width="1.5" rx="1" x="16.4" y="15.1" transform="rotate(-90 18.2 13)"></rect> 
       <rect className="svg-sun-ray" height="5" width="1.5" rx="1" x="6.9" y="11.6" transform="rotate(90 5.2 11.6)"></rect> 
       <rect className="svg-sun-ray" height="5" width="1.5" rx="1" x="15.6" y="20.1" transform="rotate(-45 15.6 17.6)"></rect> 
       <rect className="svg-sun-ray" height="5" width="1.5" rx="1" x="7.6" y="6.2" transform="rotate(135 7.6 7.2)"></rect> 
       <rect className="svg-sun-ray" height="5" width="1.5" rx="1" x="15.4" y="9.1" transform="rotate(-135 16.8 8.3)"></rect> 
       <rect className="svg-sun-ray" height="5" width="1.5" rx="1" x="8.6" y="17.3" transform="rotate(45 6.6 16.3)"></rect>
       </svg>
    </button>
      <button className="btn-burger">
        <svg height="40" width="20">
          <rect height="2" width="20"  rx="1" x="0" y="12"></rect> 
          <rect height="2" width="15"  rx="1" x="5" y="19"></rect> 
          <rect height="2" width="20"  rx="1" x="0" y="26"></rect>
        </svg>
      </button>
  </nav>
}

export default navbar;