// utils.js - helper functions

export function showNoTransactions(chartId, messageId, message) {
  const chartCanvas = document.getElementById(chartId);
  const messageP = document.getElementById(messageId);

  chartCanvas.style.display = "none";
  messageP.textContent = message;

}
