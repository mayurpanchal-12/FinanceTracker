// import { Chart } from "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.esm.js";

// import { aggregateMonthlyData } from "./months.js";
// import { renderLineChart } from "./lineChart.js";
// import { renderPieChart } from "./pieChart.js";

// // Load transactions
// const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
// transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

// // Read month from URL (optional)
// const params = new URLSearchParams(window.location.search);
// const selectedMonth = params.get("month");

// // Filter for pie charts
// const pieTransactions = selectedMonth
//   ? transactions.filter(tx => tx.date.startsWith(selectedMonth))
//   : transactions;

// // Line chart
// const { labels, incomeData, expenseData, balanceData } = aggregateMonthlyData(transactions);
// renderLineChart({ labels, incomeData, expenseData, balanceData });

// // Pie charts
// renderPieChart(pieTransactions, "income");
// renderPieChart(pieTransactions, "expense");




import { aggregateMonthlyData } from "./months.js";
import { renderLineChart } from "./lineChart.js";
import { renderPieChart } from "./pieChart.js";
console.log("mainAnalysis loaded");

// Load transactions (NO SORT HERE)
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Read month from URL
const params = new URLSearchParams(window.location.search);
const selectedMonth = params.get("month");

// Filter only for pie charts
const pieTransactions = selectedMonth
  ? transactions.filter(tx => tx.date.startsWith(selectedMonth))
  : transactions;

// Line chart (full history)
const data = aggregateMonthlyData(transactions);
renderLineChart(data);

// Pie charts (filtered)
renderPieChart(pieTransactions, "income");
renderPieChart(pieTransactions, "expense");
