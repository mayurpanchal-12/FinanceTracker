

import { showNoTransactions } from "./utils.js";
                      

const chartInstances = {};

export function renderPieChart(transactions, type) {
  const chartId = type === "income" ? "incomeChart" : "expenseChart";
  const totalId = type === "income" ? "totalIncome" : "totalExpense";

  if (chartInstances[type]) chartInstances[type].destroy();

  const filtered = transactions.filter(tx => tx.type === type);

  if (!filtered.length) {
    showNoTransactions(
      chartId,
      totalId,
      type === "income" ? "No income transactions" : "No expense transactions"
    );
    return;
  }

  const byCategory = {};
  let total = 0;

  filtered.forEach(tx => {
    const cat = tx.category || "Other";
    byCategory[cat] = (byCategory[cat] || 0) + Number(tx.amount);
    total += Number(tx.amount);
  });

  document.getElementById(totalId).textContent =
    type === "income"
      ? `Total Income: ₹${total}`
      : `Total Expense: ₹${total}`;

  chartInstances[type] = new Chart(
    document.getElementById(chartId),
    {
      type: "pie",
      data: {
        labels: Object.keys(byCategory),
        datasets: [{
          data: Object.values(byCategory),
          backgroundColor:
            type === "income"
              ? ["#16a34a","#22c55e","#4ade80","#86efac"]
              : ["#dc2626","#ef4444","#f87171","#fca5a5"]
        }]
      }
    }
  );
}
