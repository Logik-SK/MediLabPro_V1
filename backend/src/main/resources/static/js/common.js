// Function to load HTML components dynamically
function loadComponent(selector, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            if (callback) callback(); // Call the callback after loading
        })
        .catch(error => console.error(error));
}

// Load navbar and sidebar
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('.navbar', 'html/navbar.html', toggleSidebar);
    loadComponent('.sidebar', 'html/sidebar.html'); 
});

// Sidebar toggle functionality
function toggleSidebar() {
    console.log("Toggle Sidebar Function Called"); // Log to check if the function is called
    const sidebar = document.querySelector('.sidebar'); // Select the sidebar
    const toggleButton = document.querySelector('.btn-toggle-sidebar'); // Select the toggle button

    if (sidebar && toggleButton) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('expanded'); // Toggle the 'expanded' class
        });
    } else {
        console.error('Sidebar or toggle button not found!');
    }
}

function toggleSidebarOnHover() {
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
        sidebar.addEventListener('mouseenter', () => {
            sidebar.classList.add('expanded');
        });

        sidebar.addEventListener('mouseleave', () => {
            sidebar.classList.remove('expanded');
        });
    } else {
        console.error('Sidebar not found!');
    }
}

// Call the function after the DOM loads
document.addEventListener('DOMContentLoaded', toggleSidebarOnHover);
