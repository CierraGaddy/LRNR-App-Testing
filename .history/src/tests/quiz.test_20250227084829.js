import { render, screen } from "@testing-library/react";
import Quiz from "../pages/Quiz";
import { MemoryRouter } from "react-router-dom";

test("displays the quiz topic", () => {
  render(
    <MemoryRouter>
      <Quiz />
    </MemoryRouter>
  );

  expect(screen.getByText(/Topic/i)).toBeInTheDocument();
});

test("has a dropdown for selecting an answer", () => {
  render(
    <MemoryRouter>
      <Quiz />
    </MemoryRouter>
  );

  expect(screen.getByRole("combobox")).toBeInTheDocument(); // Checks for the dropdown
});

test("has multiple options in the dropdown", () => {
  render(
    <MemoryRouter>
      <Quiz />
    </MemoryRouter>
  );

  const options = screen.getAllByRole("option");
  expect(options.length).toBeGreaterThan(1); // Ensures the dropdown has choices
});
