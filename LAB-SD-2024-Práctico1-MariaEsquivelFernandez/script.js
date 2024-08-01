const income = document.getElementById("income");
income.innerText = localStorage.getItem("totalIncome") || 0;
console.log(localStorage.getItem("totalIncome"));
const expense = document.getElementById("expense");
expense.innerHTML = localStorage.getItem("totalExpense") || 0;

const balance = document.getElementById("balance");
balance.innerHTML = localStorage.getItem("balance")||0;