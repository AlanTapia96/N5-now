import { useRef, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { Button, Form } from "react-bootstrap";
import { createProduct } from "../../../store/actions/productsActions";
import { NotifContext } from "../../context/NotifContext";

const ProductForm = () => {
  const notify = useContext(NotifContext);
  const dispatch = useDispatch();

  const form = useRef(null);
  const name = useRef(null);
  const price = useRef(null);
  const stock = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: uuid(),
      name: name.current.value,
      price: parseFloat(price.current.value),
      stock: parseInt(stock.current.value),
    };

    dispatch(createProduct(newProduct));

    notify("Product added");
    form.current.reset();
  };

  return (
    <div className="product-form-container">
      <form onSubmit={handleSubmit} ref={form}>
        <h2 className="mb-3">Add Product</h2>
        <div>
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Enter name"
            required
            ref={name}
          />
        </div>
        <div>
          <Form.Control
            className="mb-2"
            type="text"
            ref={price}
            required
            placeholder="Enter price"
          />
        </div>
        <div>
          <Form.Control
            className="mb-2"
            type="number"
            ref={stock}
            required
            placeholder="Enter stock"
          />
        </div>
        <Button className="btn-block w-100" variant="secondary" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
