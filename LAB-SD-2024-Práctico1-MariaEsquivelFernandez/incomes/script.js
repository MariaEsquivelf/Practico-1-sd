const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
const balance = JSON.parse(localStorage.getItem('balance')) || 0;
var modal = document.getElementById("modal");
const totalIncome = JSON.parse(localStorage.getItem('totalIncome')) || 0;
const incomes = JSON.parse(localStorage.getItem('incomes')) || [];
const table = document.getElementById('incomeTable');
var btn = document.getElementById("add");
var span = document.getElementsByClassName("close")[0];

function list() {
  table.querySelector('tbody').innerHTML = '';
  incomes.forEach((income, index) => {
      const row = document.createElement('tr');
      const concept = document.createElement('td');
      const amount = document.createElement('td');
      const actions = document.createElement('td');
      const deleteButton = document.createElement('button');
      const deleteIcon = document.createElement('img');

      concept.innerText = income.concept;
      amount.innerText = income.amount;

      deleteIcon.src = "https://cdn-icons-png.flaticon.com/128/3363/3363974.png";
      deleteIcon.alt = "Eliminar";
      deleteIcon.style.width = "1rem"; 
      deleteButton.className = "delete";
      deleteButton.appendChild(deleteIcon);
      deleteButton.onclick = function() { deleteIncome(index); };

      actions.appendChild(deleteButton);
      row.appendChild(concept);
      row.appendChild(amount);
      row.appendChild(actions);
      table.querySelector('tbody').appendChild(row);
  });
}

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
    modal.style.display = "none";
    form.reset();
    list();
}

function deleteIncome(index) {
    const income = incomes[index];
    incomes.splice(index, 1);
    localStorage.setItem('incomes', JSON.stringify(incomes));
    updateTotalIncome(-income.amount);
    updateBalance(-income.amount);
    list();
}

function updateBalance(lastIncome) {
    const balance = JSON.parse(localStorage.getItem('balance')) || 0;
    const newBalance = parseInt(balance) + parseInt(lastIncome);
    localStorage.setItem('balance', JSON.stringify(newBalance));
}

function updateTotalIncome(lastIncome) {
    const totalIncome = JSON.parse(localStorage.getItem('totalIncome')) || 0;
    const newTotalIncome = parseInt(totalIncome) + parseInt(lastIncome);
    localStorage.setItem('totalIncome', JSON.stringify(newTotalIncome));
}

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

list();