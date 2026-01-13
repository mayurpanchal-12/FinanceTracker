// Handles LocalStorage read/write
export function loadTransactions() {
  return JSON.parse(localStorage.getItem("transactions")) || [];
}

export function saveTransactions(transactions) {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

export function loadBalance() {
  return parseFloat(localStorage.getItem("balance")) || 0;
}

export function saveBalance(balance) {
  localStorage.setItem("balance", balance);
}
