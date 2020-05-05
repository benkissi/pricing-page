import React from "react";
import { render } from "@testing-library/react";
import Feature from "./feature";

test("renders feature name", () => {
  const { getByText } = render(<Feature feature="Feature 1" />);
  const featureName = getByText(/Feature 1/i);

  expect(featureName).toBeInTheDocument();
  expect(featureName.innerHTML).toBe(
    '<span><img src="./ui.svg"></span>Feature 1'
  );
});
