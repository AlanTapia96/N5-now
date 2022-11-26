import { useRef, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { Button, Form } from "react-bootstrap";
import { createProduct } from "../../../store/actions/productsActions";

// import styles from "./taskForm.module.css";

const AddProductForm = () => {
  // const notify = useContext(NotifContext);
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
      price: price.current.value,
      stock: stock.current.value,
    };

    dispatch(createProduct(newProduct));

    // notify("Task added");
    form.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <h2>Add Product</h2>
      <div>
        <Form.Control
          type="text"
          placeholder="Enter name"
          required
          ref={name}
        />
      </div>
      <div>
        <Form.Control
          type="text"
          ref={price}
          required
          placeholder="Enter price"
        />
      </div>
      <div>
        <Form.Control
          type="text"
          ref={stock}
          required
          placeholder="Enter stock"
        />
      </div>
      <div>
        <Button variant="secondary" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
