import React from "react";
import Feature from "../feature/feature";
import "./plan.css";

function Plan(props) {
  return (
    <div className={`wrapper ${props.recommended ? "recommended" : ""}`}>
      <div className="plan-header">{props.name}</div>
      <div className="pricing">
        <span className="symbol">$</span>
        {props.price}
        <span className="period">/mo</span>
      </div>
      <div>{props.description}</div>
      <div className="features">
        {props.features.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </div>
      <button onClick={() => props.onSubscribe(props.name)}>Subscribe</button>
    </div>
  );
}

export default Plan;
