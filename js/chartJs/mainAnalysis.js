
import { aggregateMonthlyData } from "./months.js";
import { renderLineChart } from "./lineChart.js";
import { renderPieChart } from "./pieChart.js";

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
