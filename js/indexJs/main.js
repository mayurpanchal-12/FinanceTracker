import { amountInput, infoInput, dateInput, typeInput, categoryInput, adBtn, downloadBtn, monthFilter, analysisBtn } from "./dom.js";
import { loadTransactions } from "./transaction/storage.js";
import { initRenderModule, renderTransactions } from "./transaction/render.js";
import { addTransaction, initAddModule } from "./transaction/add.js";
import { initGetData } from "./transaction/getData.js";
import { downloadCSV } from "./csv.js";

// Initialize
const transactionHistory = loadTransactions();

initRenderModule(transactionHistory);
initAddModule(transactionHistory);
initGetData(transactionHistory);

// Initial render
renderTransactions();

// Add transaction
adBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  const info = infoInput.value.trim();
  const date = dateInput.value;
  const type = typeInput.value;
  const category = categoryInput.value;

  if (!amount || !date || !info) {
    alert("Please fill all fields.");
    return;
  }

  const tx = {
    id: Date.now(),
    date,
    amount,
    info,
    type,
    category,
    balance: 0
  };

  addTransaction(tx);

  // Clear inputs
  amountInput.value = "";
  infoInput.value = "";
});

// Month filter
monthFilter.addEventListener("input", renderTransactions);

// CSV download
downloadBtn.addEventListener("click", downloadCSV);


analysisBtn.addEventListener("click", () => {
  const month = monthFilter.value;
  const url = month ? "chart.html?month=" + month : "chart.html";
  window.open(url, "_blank");
});

