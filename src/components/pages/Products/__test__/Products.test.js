import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Products from "../Products";
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
};

describe("Products", () => {
  it("renders product page correctly", () => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    );

    const products = screen.getByRole("main", { name: "Products Page" });

    expect(products).toBeInTheDocument();
  });

  it("renders items correctly", () => {
    render(
      <ProductsContext.Provider value={mockContext}>
        <BrowserRouter>
          <Products />
        </BrowserRouter>
      </ProductsContext.Provider>
    );
  });
});
