import { render, screen } from "@testing-library/react";
import Quiz from "../pages/Quiz"; // Adjust path if needed
import { MemoryRouter } from "react-router-dom";

test("displays quiz topic", () => {
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

  expect(screen.getByRole("combobox")).toBeInTheDocument(); // Checks if dropdown exists
});
