import { monthFilter } from "./dom.js";
import { getTransactionData } from "./transaction/getData.js";

export function downloadCSV() {
  const transactionHistory = getTransactionData();
  const selectedMonth = monthFilter.value;

  let filtered = transactionHistory;
  if (selectedMonth) filtered = transactionHistory.filter(tx => tx.date.startsWith(selectedMonth));

  if (filtered.length === 0) {
    alert("No visible data to download");
    return;
  }

  let csv = "Date,Amount,Type,Category,Description,Running Balance\n";
  filtered.forEach(tx => {
    csv += `${tx.date},${tx.amount},${tx.type},${tx.category},${tx.info},${tx.balance}\n`;
  });
  csv += `\nCurrent Balance,₹${transactionHistory.reduce((sum, tx) => sum + (tx.type === "income" ? Number(tx.amount) : -Number(tx.amount)), 0)}\n`;

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = selectedMonth ? `finance_${selectedMonth}.csv` : "finance_all.csv";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
