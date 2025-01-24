const ctx = document.getElementById('myChart')

// Create a new chart using the canvas element

new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: 'Sales',
            data: [1200, 1500, 1800, 2100, 1800],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    // Add more chart configurations if needed


})