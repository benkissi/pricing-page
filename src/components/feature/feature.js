import React from "react";

function Feature({ feature }) {
  return (
    <div className="feature">
      <span>
        <img src="./ui.svg" />
      </span>
      {feature}
    </div>
  );
}

export default Feature;
