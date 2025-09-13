import React, { useState } from "react";

function ProductForm({ addProduct }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return;
    addProduct(form);
    setForm({ title: "", author: "", category: "", price: "", quantity: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
      <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default ProductForm;
