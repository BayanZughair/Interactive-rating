import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders Rating component initially and then ThankYou component after submission", () => {
  render(<App />);

  const ratingComponent = screen.getByTestId("rating-component");
  const thankYouComponent = screen.queryByTestId("thank-you-component");
  expect(ratingComponent).toBeInTheDocument();
  expect(thankYouComponent).not.toBeInTheDocument();

  const submitButton = screen.getByText("Submit"); 
  fireEvent.click(submitButton);
  expect(ratingComponent).not.toBeInTheDocument();
  expect(thankYouComponent).toBeInTheDocument();
});

