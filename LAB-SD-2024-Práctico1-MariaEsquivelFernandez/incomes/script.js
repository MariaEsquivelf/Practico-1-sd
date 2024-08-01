const form = document.querySelector('.form');
console.log(form);
form.addEventListener('submit', handleSubmit);
//Si no hay ingresos en el localStorage, crea un array vacío
const incomes = JSON.parse(localStorage.getItem('incomes')) || [];
//Si no hay balance en el localStorage, crea un valor cero
const balance = JSON.parse(localStorage.getItem('balance')) || 0;
const totalIncome = JSON.parse(localStorage.getItem('totalIncome')) || 0;
function handleSubmit(event) {
  event.preventDefault();
  const concept = document.getElementById('concept').value;
  const amount = document.getElementById('amount').value;
  const income = {
    concept: concept,
    amount: amount,
  }
  incomes.push(income);
  localStorage.setItem('incomes', JSON.stringify(incomes));
  updateTotalIncome(amount);
  updateBalance(amount);
}
/*
Función que suma el ingreso al balance del usuario
*/
function updateBalance(lastIncome) {
  const balance = JSON.parse(localStorage.getItem('balance')) || 0;
  const newBalance = parseInt(balance) + parseInt(lastIncome);
  localStorage.setItem('balance', JSON.stringify(newBalance));
}

/*
Función que suma el ingreso al balance del usuario
*/
function updateTotalIncome(lastIncome) {
  const totalIncome = JSON.parse(localStorage.getItem('totalIncome')) || 0;
  const newTotalIncome = parseInt(totalIncome) + parseInt(lastIncome);
  localStorage.setItem('totalIncome', JSON.stringify(newTotalIncome));
}