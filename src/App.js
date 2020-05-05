import React, { useState, useEffect } from "react";
import { fetchPricingPlan } from "./api";
import Plan from "./components/plan/plan";

import "./App.css";

function App() {
  const [state, setState] = useState({
    plans: [],
    selectedPlan: null,
  });

  useEffect(async () => {
    const plans = await fetchPricingPlan();
    setState((prevState) => {
      return {
        ...prevState,
        plans,
      };
    });
  }, []);

  return (
    <div className="App">
      <div>App</div>
      {state.plans ? state.plans.map((plan) => <Plan {...plan} />) : ""}
    </div>
  );
}

export default App;
