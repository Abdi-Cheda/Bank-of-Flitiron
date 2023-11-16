import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(newTransaction);
    setNewTransaction({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input
        type="text"
        name="date"
        value={newTransaction.date}
        onChange={handleInputChange}
      />

      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={newTransaction.description}
        onChange={handleInputChange}
      />

      <label>Category:</label>
      <input
        type="text"
        name="category"
        value={newTransaction.category}
        onChange={handleInputChange}
      />

      <label>Amount:</label>
      <input
        type="text"
        name="amount"
        value={newTransaction.amount}
        onChange={handleInputChange}
      />

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;