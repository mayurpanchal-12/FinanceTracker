import { renderTransactions } from "./render.js";

let transactionHistory;

export function initDeleteModule(transactionsRef) {
  transactionHistory = transactionsRef;
}

export function deleteTransaction(id) {
  transactionHistory = transactionHistory.filter(tx => tx.id !== id);
  renderTransactions();
}
