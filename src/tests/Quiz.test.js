import React from "react";
import { render, screen } from "@testing-library/react";
import Quiz from "../pages/Quiz";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("displays quiz topic", () => {
  render(
    <MemoryRouter>
      <Quiz />
    </MemoryRouter>
  );

  expect(screen.getAllByText(/Topic/i)[0]).toBeInTheDocument();
});

test("has a dropdown for selecting an answer", () => {
  render(
    <MemoryRouter>
      <Quiz />
    </MemoryRouter>
  );

  expect(screen.getAllByRole("combobox")[0]).toBeInTheDocument();
});
