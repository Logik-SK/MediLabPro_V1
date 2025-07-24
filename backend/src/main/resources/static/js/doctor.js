import { createModal, addSubmitButton, createCheckbox, createFormRow, createFormGroup } from "./component.js";
import { fetchData, postData, putData, deleteData, fetchDataById } from './api.js';
const apiUrl = 'api/doctors'; //  API URL
const doctorTable = document.querySelector("#doctor-table");
console.log(doctorTable);
document.addEventListener("DOMContentLoaded", async () => {
    try {
        createTableHeader(); // Create table header
        const doctors = await fetchData(apiUrl);
        console.log(doctors);
        renderDoctors(doctors);
        
    } catch (error) {
        console.error("Error loading doctors:", error);
    }
});
document.querySelector("#add-doctor-btn").addEventListener("click", openAddModal);






/* -----------------------functions------------------------- */
function createTableHeader() {
    const doctorTableHeadersList = ["#", "Registration Number","Name", "Gender", "Phone", "Department","Actions"];
    const tableHeaderRow = document.querySelector('#doctor-table-header');
    console.log(tableHeaderRow);
    if (tableHeaderRow) {
        const fragment = document.createDocumentFragment(); // Improves performance by batch appending
        doctorTableHeadersList.forEach(headerName => {
            const th = document.createElement("th");
            th.textContent = headerName;
            fragment.appendChild(th);
        });
        tableHeaderRow.appendChild(fragment);
    };
}


function renderDoctors(doctors) {
    doctorTable.innerHTML = ""; // Clear the table
    doctors.forEach((doctor, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${doctor?.doctorRegistrationNumber || "NA"}</td>
            <td>${doctor?.name || "NA"}</td>
            <td>${doctor?.gender || "NA"}</td>
            <td>${doctor?.phone || "NA"}</td>
            <td>${doctor?.department || "NA"}</td>
            <td>
            <button class="view-btn btn btn-primary btn-sm td-btn" data-id="${doctor.aId}" style="margin-right: 0.3125rem;"> <i class="fas fa-eye"></i> </button>
            <button class="edit-btn btn btn-warning btn-sm td-btn" data-id="${doctor.aId}" style="margin-right: 0.3125rem;"> <i class="fas fa-edit"></i></button>
            <button class="delete-btn btn btn-danger btn-sm td-btn" data-id="${doctor.aId}" style="margin-right: 0.3125rem;"> <i class="fas fa-trash"></i> </button>
            </td>
        `;
        doctorTable.appendChild(row);
    });
    addEventListeners();
}

function addEventListeners() {
    const editButtons = document.querySelectorAll(".edit-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");

    editButtons.forEach(button => {
        button.addEventListener("click", async (e) => {
            const doctorId = e.currentTarget.dataset.id;
            try {
                const doctor = await fetchDataById(apiUrl, doctorId);
                openEditModal(doctor);
            } catch (error) {
                console.error("Error fetching doctor:", error);
            }
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener("click", async (e) => {
            const doctorId = e.currentTarget.dataset.id;
            try {
                await deleteData(apiUrl, appointmentId);
                renderAppointments(await fetchData(apiUrl)); // Refresh the table
            } catch (error) {
                console.error("Error deleting doctor:", error);
            }
        });
    });
}
function openEditModal(doctor) {
    const { modal, form, buttonContainer } = createModal("Edit doctor");
    const formRow = createFormRow();
    form.prepend(formRow);
    // createFormGroup(labelText, className, inputId, inputType, placeholderText)
    formRow.appendChild(createFormGroup("Date:", "Form-group", "date", "Date", "Date"));
    formRow.appendChild(createFormGroup("Time:", "Form-group", "time", "time", "time"));
    addSubmitButton(buttonContainer, "Update doctor");

    document.body.appendChild(modal);
}


function openAddModal() {
    const { modal, form, buttonContainer } = createModal("Add doctor", "add-doctor-modal");
    const formRow = createFormRow();
    form.prepend(formRow);
    formRow.appendChild(createFormGroup("First Name:", "Form-group", "name", "text", "Firstname"));
    formRow.appendChild(createFormGroup("Last Name:", "Form-group", "name", "text", "Firstname"));


    addSubmitButton(buttonContainer, "Add doctor", async (e) => {
        e.preventDefault();
        const newDoctor = {
            patientName: form.patientName.value,

        };
        try {
            await postData(apiUrl, newAppointment);
            modal.remove(); // Close the modal
            renderAppointments(await fetchData(apiUrl)); // Refresh the table
        } catch (error) {
            console.error("Error adding doctor:", error);
        }
    });

    // modal.appendChild(form);
    document.body.appendChild(modal);
}
function openViewModal(doctor) {
    const modal = createModal("View doctor", "view-doctor-modal");
    const form = document.createElement("form");

    form.innerHTML = `
        <label for="patientName">Patient Name:</label>
        <input type="text" id="patientName" name="patientName" value="${doctor.patientName}" disabled>
        <label for="doctorName">Doctor Name:</label>
        <input type="text" id="doctorName" name="doctorName" value="${doctor.doctorName}" disabled>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date" value="${doctor.date}" disabled>
        <label for="time">Time:</label>
        <input type="time" id="time" name="time" value="${doctor.time}" disabled>
        <label for="status">Status:</label>
        ${createCheckbox("status", doctor.status, true)}
    `;

    modal.appendChild(form);
    document.body.appendChild(modal);
}

