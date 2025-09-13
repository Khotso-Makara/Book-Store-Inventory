import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm.jsx";
import ProductTable from "./ProductTable.jsx";
import Dashboard from "./Dashboard.jsx";
import "./App.css";

function BookStore() {
  const [products, setProducts] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, { id: Date.now(), ...product }]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(p => (p.id === id ? { ...p, ...updatedProduct } : p)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="container">
      <h1>📚 Bookstore Inventory</h1>
      <ProductForm addProduct={addProduct} />
      <Dashboard products={products} />
      <ProductTable
        products={products}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default BookStore;
