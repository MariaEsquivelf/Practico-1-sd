const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
const balance = JSON.parse(localStorage.getItem('balance')) || 0;
const totalExpense = JSON.parse(localStorage.getItem('totalExpense')) || 0;
const errorSpan = document.getElementById('error');
var modal = document.getElementById("modal");

var btn = document.getElementById("add");

var span = document.getElementsByClassName("close")[0];
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
const table = document.getElementById('expenseTable');

function list() {
    table.querySelector('tbody').innerHTML = '';
    
    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        const concept = document.createElement('td');
        const amount = document.createElement('td');
        const actions = document.createElement('td');
        const deleteButton = document.createElement('button');
        const deleteIcon = document.createElement('img');

        concept.innerText = expense.concept;
        amount.innerText = expense.amount;

        deleteIcon.src = "https://cdn-icons-png.flaticon.com/128/3363/3363974.png";
        deleteIcon.alt = "Eliminar";
        deleteIcon.style.width = "1rem"; 
        deleteButton.className = "delete";
        deleteButton.appendChild(deleteIcon);
        deleteButton.onclick = function() { deleteExpense(index); };

        actions.appendChild(deleteButton);
        row.appendChild(concept);
        row.appendChild(amount);
        row.appendChild(actions);

        table.querySelector('tbody').appendChild(row);
    });
}
list();

function handleSubmit(event) {
    event.preventDefault(); 

    const concept = document.getElementById('concept').value;
    const amount = document.getElementById('amount').value;

    if (isNaN(amount) || amount <= 0) {
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
        modal.style.display = "none";
        form.reset();
        list();
    }
}

function deleteExpense(index) {
    const expense = expenses[index];
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateTotalExpense(-expense.amount);
    updateBalance(-expense.amount);
    list();
}

function updateTotalExpense(lastExpense) {
    const totalExpense = JSON.parse(localStorage.getItem('totalExpense')) || 0;
    const newTotalExpense = parseInt(totalExpense) + parseInt(lastExpense);
    localStorage.setItem('totalExpense', JSON.stringify(newTotalExpense));
}

function updateBalance(lastExpense) {
    const balance = JSON.parse(localStorage.getItem('balance')) || 0;
    const newBalance = parseInt(balance) - parseInt(lastExpense);
    localStorage.setItem('balance', JSON.stringify(newBalance));
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