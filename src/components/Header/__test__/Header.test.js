import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import ProductsContext from "../../../products/ProductsContext";

describe("Header", () => {
  it("renders the logo correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const title = screen.getByRole("heading", { name: "Chronkey" });

    expect(title.textContent).toMatch(/chronkey/i);
  });

  it("renders the nav correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const navbar = screen.getByRole("navigation");

    expect(navbar.children.length).toBe(3);
  });

  it("renders the cart size correctly", () => {
    render(
      <ProductsContext.Provider value={{ cart: [1, 2, 3, 4, 5, 6, 7, 8] }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ProductsContext.Provider>
    );

    const size = screen.getByText("8");

    expect(size.textContent).toEqual("8");
  });
});
