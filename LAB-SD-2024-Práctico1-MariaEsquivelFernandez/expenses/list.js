
  const expenses = JSON.parse(localStorage.getItem('expenses'))|| [];
  const table = document.getElementById('expenseTable');

  expenses.map(expense => {
    const row = document.createElement('tr');
    const concept = document.createElement('td');
    const amount = document.createElement('td');

    concept.innerText = expense.concept;
    amount.innerText = expense.amount;

    row.appendChild(concept);
    row.appendChild(amount);

    table.appendChild(row);
  });

  
  var modal = document.getElementById("modal");

  var btn = document.getElementById("add");

  var span = document.getElementsByClassName("close")[0];

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