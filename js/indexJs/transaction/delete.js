// import { renderTransactions } from "./render.js";

// let transactionHistory;

// export function initDeleteModule(transactionsRef) {
//   transactionHistory = transactionsRef;
// }

// export function deleteTransaction(id) {
//   transactionHistory = transactionHistory.filter(tx => tx.id !== id);
//   renderTransactions();
// }


import { renderTransactions } from "./render.js";

let transactionHistory;

export function initDeleteModule(transactionsRef) {
  transactionHistory = transactionsRef;
  console.log("dele1");
}

export function deleteTransaction(id) {
  // Find the index of the transaction to delete
  const index = transactionHistory.findIndex(tx => tx.id === id);
  
  // Remove it in-place to keep the array reference intact
  if (index !== -1) {
    transactionHistory.splice(index, 1);
  }

  console.log("del2", transactionHistory);

  // Re-render the table (renderTransactions already reads the shared array)
  renderTransactions();
}
