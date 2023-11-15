import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions && transactions.length > 0 ? (
          transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.description} - {transaction.amount}
            </li>
          ))
        ) : (
          <li>No transactions available.</li>
        )}
      </ul>
    </div>
  );
}

export default TransactionList;
