import { render, screen } from "@testing-library/react";
import Homepage from "../pages/Homepage"; // Adjust path if needed
import { MemoryRouter } from "react-router-dom";

test("displays the homepage title", () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  expect(screen.getByText(/lrnr/i)).toBeInTheDocument(); // Matches homepage title
});

test("has a 'Begin Journey' button", () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("button", { name: /Begin Journey/i })
  ).toBeInTheDocument();
});
