import { summary, balanceStatus } from "../dom.js";
import { saveBalance } from "./storage.js";

export function renderSummary(transactions) {
  const income = transactions
    .filter(tx => tx.type === "income")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const expense = transactions
    .filter(tx => tx.type === "expense")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const currentBalance = transactions.reduce((sum, tx) => {
    return sum + (tx.type === "income" ? Number(tx.amount) : -Number(tx.amount));
  }, 0);

  summary.textContent = `Total Income: ₹${income} | Total Expense: ₹${expense}`;
  balanceStatus.textContent = `Current Balance: ₹${currentBalance}`;

  saveBalance(currentBalance);
}
