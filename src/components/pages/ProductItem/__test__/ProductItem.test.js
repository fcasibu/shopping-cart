import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductItem from "../ProductItem";
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
];

const mockAddToCart = jest.fn();
const mockRemoveFromCart = jest.fn();

const mockContext = {
  items: mockData,
  cart: mockData,
  addToCart: mockAddToCart,
  removeFromCart: mockRemoveFromCart,
};

const renderComponent = ({ id, ctx }) =>
  render(
    <ProductsContext.Provider value={ctx}>
      <MemoryRouter initialEntries={[`/products/${id}`]}>
        <Routes>
          <Route path="/products/:id" element={<ProductItem />} />
        </Routes>
      </MemoryRouter>
    </ProductsContext.Provider>
  );

describe("Item page", () => {
  it("renders the page correctly", () => {
    renderComponent({ id: "1", ctx: mockContext });

    const name = screen.getByRole("heading", { name: mockData[0].name });
    const price = screen.getByRole("heading", { name: mockData[0].price });

    expect(name).toBeInTheDocument();
    expect(price.textContent).toBe("$69.00");
  });

  it("calls the addToCart/removeToCart function", () => {
    renderComponent({ id: "2", ctx: mockContext });

    const btnAdd = screen.getByRole("button", { name: "+" });
    const btnRemove = screen.getByRole("button", { name: "-" });
    userEvent.click(btnAdd);
    userEvent.click(btnRemove);

    expect(mockAddToCart).toHaveBeenCalled();
    expect(mockRemoveFromCart).toHaveBeenCalled();
  });
});
