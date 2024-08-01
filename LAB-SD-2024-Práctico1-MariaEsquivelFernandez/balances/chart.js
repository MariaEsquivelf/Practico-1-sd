document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    const income = JSON.parse(localStorage.getItem('totalIncome')) || 0;
    const expense = JSON.parse(localStorage.getItem('totalExpense')) || 0;
  
    const data = {
        labels: ['Ingresos', 'Egresos'], // Los nombres de las porciones
        datasets: [{
            data: [income, expense], // Los valores de las porciones
            backgroundColor: ['#FF6384', '#36A2EB'], // Los colores de las porciones
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    };

    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
});
