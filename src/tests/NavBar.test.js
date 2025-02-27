import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders navigation links", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  expect(screen.getByText(/Account/i)).toBeInTheDocument();
  expect(screen.getByText(/Quiz Generation/i)).toBeInTheDocument();
});
