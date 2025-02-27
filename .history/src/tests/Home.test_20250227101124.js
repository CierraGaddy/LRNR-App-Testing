import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";

test("displays the homepage title", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText(/lrnr/i)).toBeInTheDocument();
});

test("has a 'Begin Journey' button", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("button", { name: /Begin Journey/i })
  ).toBeInTheDocument();
});
