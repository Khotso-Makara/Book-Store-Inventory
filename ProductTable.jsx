import React, { useState } from "react";

function ProductTable({ products, updateProduct, deleteProduct }) {
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const startEdit = (product) => {
    setEditId(product.id);
    setEditForm(product);
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    updateProduct(editId, editForm);
    setEditId(null);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th><th>Author</th><th>Category</th>
          <th>Price</th><th>Quantity</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            {editId === p.id ? (
              <>
                <td><input name="title" value={editForm.title} onChange={handleChange} /></td>
                <td><input name="author" value={editForm.author} onChange={handleChange} /></td>
                <td><input name="category" value={editForm.category} onChange={handleChange} /></td>
                <td><input name="price" value={editForm.price} onChange={handleChange} /></td>
                <td><input name="quantity" value={editForm.quantity} onChange={handleChange} /></td>
                <td>
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </td>
              </>
            ) : (
              <>
                <td>{p.title}</td>
                <td>{p.author}</td>
                <td>{p.category}</td>
                <td>M {p.price}.00</td>
                <td>{p.quantity}</td>
                <td>
                  <button onClick={() => startEdit(p)}>Edit</button>
                  <button onClick={() => deleteProduct(p.id)}>Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
