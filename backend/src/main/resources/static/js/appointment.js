import { createModal, addSubmitButton, createCheckbox, createFormRow, createFormGroup } from "./component.js";
import { fetchData, postData, putData, deleteData, fetchDataById } from './api.js';
const apiUrl = 'api/appointments'; //  API URL
const appointmentTable = document.querySelector("#appointment-table");
console.log(appointmentTable);
document.addEventListener("DOMContentLoaded", async () => {
    try {
        createTableHeader(); // Create table header
        const appointments = await fetchData(apiUrl);
        console.log(appointments);
        renderAppointments(appointments);
    } catch (error) {
        console.error("Error loading appointments:", error);
    }
});
document.querySelector("#add-appointment-btn").addEventListener("click", openAddModal);






/* -----------------------functions------------------------- */
function createTableHeader() {
    const AppointmentTableHeadersList = ["#", "Appointment No", "Patient Name", "Doctor", "Date", "Time", "Status", "Action"];
    const tableHeaderRow = document.querySelector('#appointment-table-header');
    console.log(tableHeaderRow);
    if (tableHeaderRow) {
        const fragment = document.createDocumentFragment(); // Improves performance by batch appending
        AppointmentTableHeadersList.forEach(headerName => {
            const th = document.createElement("th");
            th.textContent = headerName;
            fragment.appendChild(th);
        });
        tableHeaderRow.appendChild(fragment);
    };
}


function renderAppointments(appointments) {
    appointmentTable.innerHTML = ""; // Clear the table
    appointments.forEach((appointment, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${appointment?.appointmentNumber || "NA"}</td>
            <td>${appointment?.patient?.name || "NA"}</td>
            <td>${appointment?.doctor?.doctorName || "NA"}</td>
            <td>${appointment?.appointmentDate || "NA"}</td>
            <td>${appointment.time}</td>
            <td>${appointment.status}</td>
            <td>
            <button class="view-btn btn btn-primary btn-sm td-btn" data-id="${appointment.aId}" style="margin-right: 0.3125rem;"> <i class="fas fa-eye"></i> </button>
            <button class="edit-btn btn btn-warning btn-sm td-btn" data-id="${appointment.aId}" style="margin-right: 0.3125rem;"> <i class="fas fa-edit"></i></button>
            <button class="delete-btn btn btn-danger btn-sm td-btn" data-id="${appointment.aId}" style="margin-right: 0.3125rem;"> <i class="fas fa-trash"></i> </button>
            </td>
        `;
        appointmentTable.appendChild(row);
    });
    addEventListeners();
}

function addEventListeners() {
    const editButtons = document.querySelectorAll(".edit-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");

    editButtons.forEach(button => {
        button.addEventListener("click", async (e) => {
            const appointmentId = e.currentTarget.dataset.id;
            try {
                const appointment = await fetchDataById(apiUrl, appointmentId);
                openEditModal(appointment);
            } catch (error) {
                console.error("Error fetching appointment:", error);
            }
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener("click", async (e) => {
            const appointmentId = e.currentTarget.dataset.id;
            try {
                await deleteData(apiUrl, appointmentId);
                renderAppointments(await fetchData(apiUrl)); // Refresh the table
            } catch (error) {
                console.error("Error deleting appointment:", error);
            }
        });
    });
}
function openEditModal(appointment) {
    const { modal, form, buttonContainer } = createModal("Edit Appointment");
    const formRow = createFormRow();
    form.prepend(formRow);
    // createFormGroup(labelText, className, inputId, inputType, placeholderText)
    formRow.appendChild(createFormGroup("Date:", "Form-group", "date", "Date", "Date"));
    formRow.appendChild(createFormGroup("Time:", "Form-group", "time", "time", "time"));
    addSubmitButton(buttonContainer, "Update Appointment");

    document.body.appendChild(modal);
}


function openAddModal() {
    const { modal, form, buttonContainer } = createModal("Add Appointment", "add-appointment-modal");
    const formRow = createFormRow();
    form.prepend(formRow);
    formRow.appendChild(createFormGroup("First Name:", "Form-group", "name", "text", "Firstname"));
    formRow.appendChild(createFormGroup("Last Name:", "Form-group", "name", "text", "Firstname"));


    addSubmitButton(buttonContainer, "Add Appointment", async (e) => {
        e.preventDefault();
        const newAppointment = {
            patientName: form.patientName.value,

        };
        try {
            await postData(apiUrl, newAppointment);
            modal.remove(); // Close the modal
            renderAppointments(await fetchData(apiUrl)); // Refresh the table
        } catch (error) {
            console.error("Error adding appointment:", error);
        }
    });

    // modal.appendChild(form);
    document.body.appendChild(modal);
}
function openViewModal(appointment) {
    const modal = createModal("View Appointment", "view-appointment-modal");
    const form = document.createElement("form");

    form.innerHTML = `
        <label for="patientName">Patient Name:</label>
        <input type="text" id="patientName" name="patientName" value="${appointment.patientName}" disabled>
        <label for="doctorName">Doctor Name:</label>
        <input type="text" id="doctorName" name="doctorName" value="${appointment.doctorName}" disabled>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date" value="${appointment.date}" disabled>
        <label for="time">Time:</label>
        <input type="time" id="time" name="time" value="${appointment.time}" disabled>
        <label for="status">Status:</label>
        ${createCheckbox("status", appointment.status, true)}
    `;

    modal.appendChild(form);
    document.body.appendChild(modal);
}

