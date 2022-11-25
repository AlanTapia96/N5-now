const Counter = ({ stock, amount, onAmount }) => {
  return (
    <div>
      <button type="button" disabled={amount === 0} onClick={onAmount.decrease}>
        -
      </button>
      {amount}
      <button
        type="button"
        disabled={stock <= amount}
        onClick={onAmount.increase}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
