import React from "react";
import { render, screen } from "@testing-library/react";
import Account from "../pages/Account";
import { MemoryRouter } from "react-router-dom";

test("displays user streak information", () => {
  render(
    <MemoryRouter>
      <Account />
    </MemoryRouter>
  );

  expect(screen.getAllByText(/streak/i)[0]).toBeInTheDocument();
});

test("displays XP progress", () => {
  render(
    <MemoryRouter>
      <Account />
    </MemoryRouter>
  );

  expect(screen.getByText(/xp/i)).toBeInTheDocument();
});
