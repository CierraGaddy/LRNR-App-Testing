import { render, screen } from "@testing-library/react";
import Navbar from "../components/NavBar";
import { MemoryRouter } from "react-router-dom";

test("renders navigation links", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText(/Account/i)).toBeInTheDocument();
  expect(screen.getByText(/Quiz Generation/i)).toBeInTheDocument();
});
