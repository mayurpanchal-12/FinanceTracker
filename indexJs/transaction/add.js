import { renderTransactions } from "./render.js";

let transactionHistory;

export function initAddModule(transactionsRef) {
  transactionHistory = transactionsRef;
}

export function addTransaction(tx) {
  transactionHistory.push(tx);
  renderTransactions();
}
