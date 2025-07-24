document.addEventListener("DOMContentLoaded", () => {
    // Sidebar Active State Toggle
    const sidebarItems = document.querySelectorAll(".sidebar ul li");
    sidebarItems.forEach(item => {
        item.addEventListener("click", () => {
            sidebarItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });

    // Chart Example (Using Chart.js)
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Appointments',
                data: [10, 20, 15, 30, 25, 35],
                borderColor: '#00c4ff',
                backgroundColor: 'rgba(0, 196, 255, 0.2)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
