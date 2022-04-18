import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";

describe("Home", () => {
  it("renders Home correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const home = screen.getByRole("main", { name: "Homepage" });
    expect(home).toBeInTheDocument();
  });

  it("Shop button has the correct path", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/products");
  });
});
