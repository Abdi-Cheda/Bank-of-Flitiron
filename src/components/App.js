import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://fitness-hub-g8e1.onrender.com/transactions')
      .then(({ data }) => {
        if (Array.isArray(data)) {
          setTransactions(data);
        } else {
          console.error('Invalid response format:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
      <h1>MY BANK APP</h1>
      </header>
      <TransactionList transactions={filteredTransactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar searchTerm={setSearchTerm} />
    </div>
  );
}

export default App;