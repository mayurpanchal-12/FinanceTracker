
import { showNoTransactions } from "./utils.js"; // Make sure you have this helper

export function renderPieChart(pieTransactions, type, selectedMonth = null) {
  let dataByCategory = {};
  let total = 0;

  // Filter transactions by type and calculate totals
  pieTransactions.forEach(tx => {
    if (tx.type === type) {
      const cat = tx.category || "Other";
      dataByCategory[cat] = (dataByCategory[cat] || 0) + Number(tx.amount);
      total += Number(tx.amount);
    }
  });

  const chartId = type === "income" ? "incomeChart" : "expenseChart";
  const totalId = type === "income" ? "totalIncome" : "totalExpense";

  // Handle no transactions
  if (!pieTransactions.some(tx => tx.type === type)) {
    showNoTransactions(
      chartId,
      totalId,
      selectedMonth
        ? `No ${type} transactions for ${selectedMonth}`
        : `No ${type} transactions yet`
    );
    return;
  }

  // Update total dynamically
  document.getElementById(totalId).textContent = selectedMonth
    ? `Total ${capitalize(type)} for ${selectedMonth}: ₹${total}`
    : `Total ${capitalize(type)}: ₹${total}`;

  // Pie chart colors
  const backgroundColors =
    type === "income"
      ? ["#16a34a","#22c55e","#4ade80","#86efac","#d1fae5"]
      : ["#dc2626","#ef4444","#f87171","#fca5a5","#fee2e2"];

  // Render Chart
  new Chart(document.getElementById(chartId), {
    type: "pie",
    data: {
      labels: Object.keys(dataByCategory),
      datasets: [{
        data: Object.values(dataByCategory),
        backgroundColor: backgroundColors
      }]
    },
    options: {
      plugins: { legend: { position: "bottom" } }
    }
  });
}

// Helper to capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

