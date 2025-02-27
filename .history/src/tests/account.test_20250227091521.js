import { render, screen } from "@testing-library/react";
import Account from "../pages/Account"; // Adjust the path if needed
import { MemoryRouter } from "react-router-dom";

test("displays user streak information", () => {
  render(
    <MemoryRouter>
      <Account />
    </MemoryRouter>
  );

  expect(screen.getByText(/Streak/i)).toBeInTheDocument();
});

test("displays XP progress", () => {
  render(
    <MemoryRouter>
      <Account />
    </MemoryRouter>
  );

  expect(screen.getByText(/XP/i)).toBeInTheDocument();
});
