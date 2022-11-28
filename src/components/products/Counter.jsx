const Counter = ({ stock, amount, onAmount }) => {
  return (
    <div className="add-to-cart_counter">
      <button
        type="button"
        className="add-to-cart_counter_button"
        disabled={amount === 0}
        onClick={onAmount.decrease}
      >
        -
      </button>
      <p className="mb-0">{amount}</p>
      <button
        type="button"
        className="add-to-cart_counter_button"
        disabled={stock <= amount}
        onClick={onAmount.increase}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
