import React, { useState } from "react";

function Head() {
  const [name, setName] = useState("Nitin");

  const name_arr = ["N", "i", "t", "i", "n"];

  return (
    <div className="top-container">
      <div className="flying-man-div">
        {/* <span className="flying-man">
          <i class="fab fa-studiovinari"></i>
        </span> */}
      </div>
      
      <h1 className="name" alt="nitin">
        {/* <span style={{ fontSize: "100px" }}>
          <i class="fab fa-dev"></i>
        </span> */}
        N<span style={{fontSize: "250px"}}>itin</span>
        {/* <i class="fab fa-linkedin-in"></i> */}
        {/* <spam style={{ fontSize: "44px" }}> .com</spam> */}
      </h1>
    </div>
  );
}

export default Head;
