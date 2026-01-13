// // lineChart.js - renders full history line chart

// import { Chart } from "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.esm.js";
// export function renderLineChart({ labels, incomeData, expenseData, balanceData }) {
//   new Chart(document.getElementById("balanceChart"), {
//     type: "line",
//     data: {
//       labels,
//       datasets: [
//         {
//           label: "Income",
//           data: incomeData,
//           borderColor: "#16a34a",
//           backgroundColor: "rgba(22,163,52,0.1)",
//           fill: true,
//           tension: 0.3,
//           pointRadius: 5
//         },
//         {
//           label: "Expense",
//           data: expenseData,
//           borderColor: "#dc2626",
//           backgroundColor: "rgba(220,38,38,0.1)",
//           fill: true,
//           tension: 0.3,
//           pointRadius: 5
//         },
//         {
//           label: "Overall Balance",
//           data: balanceData,
//           borderColor: "#2563eb",
//           backgroundColor: "rgba(37,99,235,0.1)",
//           fill: true,
//           tension: 0.3,
//           pointRadius: 6
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: { display: true },
//         tooltip: { callbacks: { label: ctx => `₹${ctx.raw}` } }
//       },
//       scales: {
//         y: { beginAtZero: false, ticks: { callback: v => `₹${v}` } },
//         x: {
//           title: { display: true, text: "Month" },
//           ticks: { autoSkip: false, maxRotation: 45, minRotation: 45 }
//         }
//       }
//     }
//   });
// }


// import { Chart } from "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.esm.min.js";



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
