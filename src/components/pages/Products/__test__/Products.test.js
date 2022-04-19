import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Items from "../Items";
import ProductsContext from "../../../../products/ProductsContext";

const mockData = [
  {
    name: "Chronkey K2 Wireless Mechanical Keyboard (version 2)",
    id: "1",
    price: "$69.00",
    image: "/",
  },
  {
    name: "Chronkey K2 (Hot-Swappable) Wireless Mechanical Keyboard (Version 2)",
    id: "2",
    price: "$79.00",
    image: "/",
  },
  {
    name: "Chronkey K4 Wireless Mechanical Keyboard (Version 2)",
    id: "3",
    price: "$69.00",
    image: "/",
  },
];

const mockContext = {
  items: mockData,
  cart: mockData,
};

describe("Products", () => {
  it("renders page correctly", () => {
    render(
      <BrowserRouter>
        <Items />
      </BrowserRouter>
    );

    const products = screen.getByRole("main", { name: "Products Page" });

    expect(products).toBeInTheDocument();
  });

  it("renders items correctly", () => {
    render(
      <ProductsContext.Provider value={mockContext}>
        <BrowserRouter>
          <Items />
        </BrowserRouter>
      </ProductsContext.Provider>
    );

    const items = screen.getAllByRole("img");

    expect(items.length).toBe(3);
  });

  it("adds to cart correctly", () => {
    render(
      <ProductsContext.Provider value={mockContext}>
        <BrowserRouter>
          <Items />
        </BrowserRouter>
      </ProductsContext.Provider>
    );

    const btn = screen.getAllByRole("button");
    for (let i = 0; i < btn.length; i++) {
      userEvent.click(btn[i]);
      expect(btn[i].textContent).toMatch(/added to cart/i);
    }
  });
});
