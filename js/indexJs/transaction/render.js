import { tbody, monthFilter } from "../dom.js";
import { deleteTransaction, initDeleteModule } from "./delete.js";
import { renderSummary } from "./summary.js";
import { saveTransactions } from "./storage.js";

let transactionHistory = [];

export function initRenderModule(transactionsRef) {
  transactionHistory = transactionsRef;
  initDeleteModule(transactionsRef);
}

export function renderTransactions() {
  tbody.innerHTML = "";
  const selectedMonth = monthFilter.value;

  let filtered = transactionHistory;
  if (selectedMonth) {
    filtered = transactionHistory.filter(tx => tx.date.startsWith(selectedMonth));
  }

  if (filtered.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td colspan="8" style="text-align:center; font-style:italic;">
        No transactions for this month
      </td>`;
    tbody.appendChild(row);
  } else {
    let runningBalance = 0;

    filtered.forEach((tx, index) => {
      runningBalance += tx.type === "income" ? Number(tx.amount) : -Number(tx.amount);
      tx.balance = runningBalance;

      const row = document.createElement("tr");
      if (selectedMonth) row.classList.add("filtered-month");

      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${tx.date}</td>
        <td>${tx.amount}</td>
        <td>${tx.info}</td>
        <td>${tx.type}</td>
        <td>${tx.category}</td>
        <td><button data-id="${tx.id}" class="delete-btn">Delete</button></td>
        <td>${tx.balance}</td>
      `;

      tbody.appendChild(row);
    });
  }

  renderSummary(transactionHistory);
  saveTransactions(transactionHistory);

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => deleteTransaction(Number(btn.dataset.id)));
  });
}
