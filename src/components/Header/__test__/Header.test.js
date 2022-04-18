import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  it("renders the logo correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const title = screen.getByRole("heading", { name: "Site Title" });

    expect(title.textContent).toMatch(/custom keyboard/i);
  });

  it("renders the nav correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const navbar = screen.getByRole("navigation", { name: "Navigation" });

    expect(navbar.children.length).toBe(3);
  });

  it("renders the cart size correctly", () => {
    render(
      <BrowserRouter>
        <Header cartSize="7" />
      </BrowserRouter>
    );

    const size = screen.getByText("7");

    expect(size.textContent).toEqual("7");
  });
});
