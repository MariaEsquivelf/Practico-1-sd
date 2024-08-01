const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
//Si no hay ingresos en el localStorage, crea un array vacío
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
//Si no hay balance en el localStorage, crea un valor cero
const balance = JSON.parse(localStorage.getItem('balance')) || 0;
const totalExpense = JSON.parse(localStorage.getItem('totalExpense')) || 0;
const errorSpan = document.getElementById('error');
/*
Función que agrega un ingreso al array de ingresos del usuario
*/
function handleSubmit(event) {
    event.preventDefault(); 

    const concept = document.getElementById('concept').value;
    const amount = document.getElementById('amount').value;
    console.log(amount);
  if (isNaN(amount) || amount <= 0) {
    console.log('error');
    errorSpan.textContent = 'Ingrese un número positivo.';
    errorSpan.style.display = 'block';
    errorSpan.style.color = 'red';
} else {
    errorSpan.style.display = 'none';
    const expense = {
        concept: concept,
        amount: amount,
      }
    
      expenses.push(expense);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      updateTotalExpense(amount);
      updateBalance(amount);
}
 
 
}
function updateTotalExpense(lastExpense) {
  const totalExpense = JSON.parse(localStorage.getItem('totalExpense')) || 0;
  const newTotalExpense = parseInt(totalExpense) + parseInt(lastExpense);
  localStorage.setItem('totalExpense', JSON.stringify(newTotalExpense));
}

/*
Función que resta el egreso al balance del usuario
*/
function updateBalance(lastExpense) {
  const balance = JSON.parse(localStorage.getItem('balance')) || 0;
  const newBalance = parseInt(balance) - parseInt(lastExpense);
  localStorage.setItem('balance', JSON.stringify(newBalance));
}
