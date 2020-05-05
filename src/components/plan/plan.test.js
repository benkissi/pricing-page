import React from "react";
import { render } from "@testing-library/react";
import Plan from "./plan";

test("renders feature name", () => {
  const plan = {
    id: "1",
    name: "Bronze",
    price: 10,
    features: ["1000 identity verification"],
    description: "Good for start-ups",
    recommended: false,
  };
  const { getByText } = render(<Plan {...plan} />);
  const planName = getByText(/Bronze/i);
  const planDescription = getByText(/Good for start-ups/i);

  expect(planName).toBeInTheDocument();
  expect(planDescription).toBeInTheDocument();
});
