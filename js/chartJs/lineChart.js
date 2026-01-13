
let chartInstance;

export function renderLineChart({ labels, incomeData, expenseData, balanceData }) {
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(
    document.getElementById("balanceChart"),
    {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Income",
            data: incomeData,
            borderColor: "#16a34a",
            backgroundColor: "rgba(22,163,52,0.1)",
            fill: true,
            tension: 0.3
          },
          {
            label: "Expense",
            data: expenseData,
            borderColor: "#dc2626",
            backgroundColor: "rgba(220,38,38,0.1)",
            fill: true,
            tension: 0.3
          },
          {
            label: "Overall Balance",
            data: balanceData,
            borderColor: "#2563eb",
            backgroundColor: "rgba(37,99,235,0.1)",
            fill: true,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { callbacks: { label: ctx => `₹${ctx.raw}` } }
        },
        scales: {
          y: { ticks: { callback: v => `₹${v}` } }
        }
      }
    }
  );
}
