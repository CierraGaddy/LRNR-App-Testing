import { render, screen } from "@testing-library/react";
import Home from "../pages/Home"; // Adjust the path if needed
import { MemoryRouter } from "react-router-dom";

test("displays the homepage title", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText(/Welcome/i)).toBeInTheDocument(); // Adjust text based on actual content
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
