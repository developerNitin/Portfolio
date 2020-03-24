import React, { useState } from "react";

function Head() {
  return (
    <div className="top-container">
      {/* <div className="flying-man-div">
        <span className="flying-man">
          <i className="fab fa-studiovinari"></i>
        </span>
      </div> */}

      <h1 className="name" alt="nitin">
        {/* <span style={{ fontSize: "100px" }}>
          <i class="fab fa-dev"></i>
        </span> */}
        N<span style={{ fontSize: "250px" }}>itin</span>
        {/* <i class="fab fa-linkedin-in"></i> */}
        {/* <spam style={{ fontSize: "44px" }}> .com</spam> */}
      </h1>
    </div>
  );
}

export default Head;

// let timer = setInterval(fancy, 1000);

// document.querySelector(".name").textContent= 'nitin';

// function fancy() {
//   console.log(myname[char]);
//   char++;

//   if (char === 4) {
//     complete();
//     return 0;
//   }
// }

// function complete() {
//   clearInterval(timer);
//   timer = null;
// }
