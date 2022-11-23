import { useState } from "react";
import Counter from "./Counter";
import ButtonCartAdd from "./ButtonAddCart";

const AddCartContainer = ({ product }) => {
  const { amount } = product;
  const [amountToBuy, setAmountToBuy] = useState(1);
  const [stock, setStock] = useState(amount - 1);

  return (
    <>
      <Counter
        stock={stock}
        setStock={setStock}
        amountToBuy={amountToBuy}
        setAmountToBuy={setAmountToBuy}
      />
      <ButtonCartAdd product={product} amountToBuy={amountToBuy} />
    </>
  );
};

export default AddCartContainer;
