import React, { useState, useEffect } from "react";
import { fetchPricingPlan, subscribePlan } from "./api";
import Plan from "./components/plan/plan";

import "./App.css";

function App() {
  const [state, setState] = useState({
    plans: [],
    selectedPlan: null,
  });

  useEffect(() => {
    async function fetchData() {
      const plans = await fetchPricingPlan();
      setState((prevState) => {
        return {
          ...prevState,
          plans,
        };
      });
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (state.selectedPlan) {
      alert(`You have subscribed to ${state.selectedPlan} plan`);
    }
  }, [state.selectedPlan]);

  const handlePlanSelect = (name) => {
    setState((prevState) => {
      return {
        ...prevState,
        selectedPlan: name,
      };
    });
  };

  return (
    <div className="App">
      <h2>Pricing</h2>
      <p>Simple pricing, no hidden charges</p>
      <div className="plans">
        {state.plans
          ? state.plans.map((plan) => (
              <Plan key={plan.id} {...plan} onSubscribe={handlePlanSelect} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
