// Utility to expose transaction history
let transactionHistory = [];

export function initGetData(transactionsRef) {
  transactionHistory = transactionsRef;
}

export function getTransactionData() {
  return transactionHistory;
}
