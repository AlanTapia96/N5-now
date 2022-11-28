// import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, test, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Counter from "../../components/products/Counter";
import AddToCartContainer from "../../components/products/AddToCartContainer";

const mockProduct = {
  product: {
    name: "Lentejas",
    price: 175000,
    stock: 42,
    id: 8,
  },
};

describe("Counter tests", () => {
  afterEach(cleanup);
  test("should render a counter with value 1", () => {
    render(<AddToCartContainer product={mockProduct} />);
    screen.getByText("1");
  });

  // test("should increment counter", async () => {
  //   const { debug } = render(<Counter amount={1} setAmount={setAmount} />);
  //   const increaseButton = screen.getByRole("button", { name: "+" });
  //   debug();
  //   fireEvent.click(increaseButton);
  //   debug();
  //   const counter = screen.getByText("2");
  //   expect(counter).toBeInTheDocument();
  // });
});
