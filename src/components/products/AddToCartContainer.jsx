import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import Counter from "./Counter";

const AddToCartContainer = ({ product }) => {
  const { stock } = product;
  const [amount, setAmount] = useState(1);

  const handleAmount = {
    increase: () => {
      if (stock !== 0) {
        setAmount(amount + 1);
      }
    },
    decrease: () => {
      if (amount > 0) {
        setAmount(amount - 1);
      }
    },
  };

  return (
    <>
      <Counter stock={stock} amount={amount} onAmount={handleAmount} />
      <AddToCartButton
        product={product}
        amount={amount}
        stock={stock}
        setAmount={setAmount}
      />
    </>
  );
};

export default AddToCartContainer;
