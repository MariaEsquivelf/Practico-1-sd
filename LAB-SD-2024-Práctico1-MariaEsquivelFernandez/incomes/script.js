const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
//Si no hay ingresos en el localStorage, crea un array vacío
const incomes = JSON.parse(localStorage.getItem('incomes')) || [];
//Si no hay balance en el localStorage, crea un valor cero
const balance = JSON.parse(localStorage.getItem('balance')) || 0;

function handleSubmit(event) {
  event.preventDefault();
  const amount = document.querySelector('#amount').value;
  incomes.push(amount);
  localStorage.setItem('incomes', JSON.stringify(incomes));
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
