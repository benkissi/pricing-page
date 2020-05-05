import React from "react";
import "./plan.css";

function Plan(props) {
  return (
    <div className="wrapper">
      <div className="plan-header">{props.name}</div>
      <div className="pricing">
        <span className="symbol">$</span>
        {props.price}
        <span className="period">/mo</span>
      </div>
      <div>{props.description}</div>
      <div className="features">
        <ul>
          {props.features.map((feature) => {
            return <li>{feature}</li>;
          })}
        </ul>
      </div>
      <button>Subscribe</button>
    </div>
  );
}

export default Plan;
