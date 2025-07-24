// Fetch data from the API and populate the table
document.addEventListener("DOMContentLoaded", function () {
    fetch("api/billing")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Sort data by bill.bId
            data.sort((a, b) => a.bId - b.bId);

            const tableBody = document.querySelector("#billing-table");
            tableBody.innerHTML = ""; // Clear existing rows

            data.forEach(bill => {
                const row = document.createElement("tr");

                // Assuming bill object has id, patientName, amount, and status fields
                row.innerHTML = `
                    <td>${bill.bId}</td>
                    <td>${bill.bId}</td>
                    <td>${bill.totalAmount}</td>
                    <td>${bill.finalAmount}</td>
                    <td>${bill.paymentStatus}</td>
                    <td>
                        <button class="view-btn btn btn-primary btn-sm td-btn" data-id="${bill.billId}" style="margin-right: 0.3125rem;">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="edit-btn btn btn-warning btn-sm td-btn" data-id="${bill.billId}" style="margin-right: 0.3125rem;">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="delete-btn btn btn-danger btn-sm td-btn" data-id="${bill.billId}" style="margin-right: 0.3125rem;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
});

function addBill() {
    fetch('/api/addBill', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // Add necessary data here if required
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Bill added successfully!',
                confirmButtonText: 'OK'
            });
            // Optionally reload or update the table
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to add bill.',
                confirmButtonText: 'Try Again'
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred.');
    });
}
