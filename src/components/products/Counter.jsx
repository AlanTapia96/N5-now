const Counter = ({ stock, setStock, amountToBuy, setAmountToBuy }) => {
  const handleAmount = {
    increase: () => {
      if (stock !== 0) {
        setAmountToBuy(amountToBuy + 1);
        setStock(stock - 1);
      }
    },
    decrease: () => {
      if (amountToBuy > 0) {
        setAmountToBuy(amountToBuy - 1);
        setStock(stock + 1);
      }
    },
  };

  return (
    <div>
      <button
        type="button"
        disabled={amountToBuy === 0}
        onClick={handleAmount.decrease}
      >
        -
      </button>
      {amountToBuy}
      <button
        type="button"
        disabled={stock === 0}
        onClick={handleAmount.increase}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
