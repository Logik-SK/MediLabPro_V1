import { createModal, addSubmitButton, createCheckbox } from "./component.js";
import { fetchData, postData, putData, deleteData, fetchDataById } from './api.js';
const apiUrl = 'api/patients'; //  API URL





document.addEventListener("DOMContentLoaded", loadPatients);
const patientTableHeadersList = ["#", "Reg No", "Name", "Age", "Gender", "Contact", "Action"];
const tableHeaderRow = document.querySelector('#patient-table-header');
if (tableHeaderRow) {
    const fragment = document.createDocumentFragment(); // Improves performance by batch appending
    patientTableHeadersList.forEach(headerName => {
        const th = document.createElement("th"); 
        th.textContent = headerName;
        fragment.appendChild(th); 
    });
    tableHeaderRow.appendChild(fragment); 
};

// Fetch data from the API and populate the table
async function loadPatients() {
    try {
        const patients = await getPatients();
        const tableBody = document.querySelector("#patient-table");
        tableBody.innerHTML = ""; // Clear existing rows

        if (patients && patients.length > 0) {
            patients.forEach((patient,index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index+1}</td>
                    <td>${patient.registrationNumber}</td>
                    <td>${patient.name}</td>
                    <td>${patient.age}</td>
                    <td>${patient.gender}</td>
                    <td>${patient.contact}</td>
                    <td>
                        <button class="view-btn btn btn-primary btn-sm td-btn" data-id="${patient.pId}" style="margin-right: 0.3125rem;">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="edit-btn btn btn-warning btn-sm td-btn" data-id="${patient.pId}" style="margin-right: 0.3125rem;">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="delete-btn btn btn-danger btn-sm td-btn" data-id="${patient.pId}" style="margin-right: 0.3125rem;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                `;

                // Add event listener for the view button
                row.querySelector(".view-btn").addEventListener("click", async function () {
                    const patientId = this.getAttribute("data-id");
                    const patientData = await getPatientById(patientId);
                    if (patientData) {
                        sessionStorage.setItem("patientData", JSON.stringify(patientData));
                        sessionStorage.setItem("isEditable", JSON.stringify(false));
                        window.location.href = "/viewPatient";
                    }

                });

                // Add event listener for the edit button
                row.querySelector(".edit-btn").addEventListener("click", async function () {
                    const patientId = this.getAttribute("data-id");
                    const patientData = await getPatientById(patientId);
                    if (patientData) {
                        sessionStorage.setItem("patientData", JSON.stringify(patientData));
                        sessionStorage.setItem("isEditable", JSON.stringify(true));
                        window.location.href = "/editPatient";
                    }

                });

                // Add event listener for the delete button
                row.querySelector(".delete-btn").addEventListener("click", async function () {
                    const patientId = this.getAttribute("data-id");
                    const result = await Swal.fire({
                        title: 'Are you sure?',
                        text: 'This action cannot be undone!',
                        icon: 'warning',
                        showCancelButton: true,  // Show a cancel button
                        confirmButtonText: 'Yes, delete it!',
                        cancelButtonText: 'No, keep it',
                        reverseButtons: true,  // Reverses the order of the buttons
                        confirmButtonColor: '#d33', // Red color for confirm button (dangerous action)
                        cancelButtonColor: '#3085d6' // Blue color for cancel button (safe action)

                    });
                    if (result.isConfirmed) {
                        try {
                            const response = await removePatient(patientId);
                            const rowToDelete = document.querySelector(`[data-id='${patientId}']`).closest('tr');

                            if (rowToDelete && response.ok) {
                                // Apply fade-out animation by changing opacity to 0
                                rowToDelete.style.transition = 'opacity 1s ease'; // Smooth fade over 1 second
                                rowToDelete.style.opacity = 0;

                                // After animation completes (1 second), remove the row from the table
                                setTimeout(() => {
                                    rowToDelete.remove();
                                    location.reload(); 
                                }, 1000); // Wait 1 second for the fade-out effect
                            }
                            Swal.fire({ title: 'Deleted!', text: 'The patient has been deleted.', icon: 'success', timer: 1000, showConfirmButton: false, });
                        } catch {
                            Swal.fire({ title: 'Cancelled', text: 'The patient was not deleted. Please try again later.', icon: 'error', confirmButtonText: 'OK', confirmButtonColor: '#d33', });
                        }
                    }
                    else {
                        Swal.fire('Cancelled', 'The patient was not deleted.', 'info');
                    }
                });

                tableBody.appendChild(row);
            });
        } else {
            showAlert("No patients found.");
        }
    } catch (error) {
        showAlert("There was a problem fetching patient data.", error);
    }
    
}

document.getElementById("add-patient-btn").addEventListener("click", addPatientPopUp);

function addPatientPopUp() {

    // Create a modal container 
    const { modal, form, buttonContainer } = createModal("Add New Patient");
    const formRow = createFormRow();

    form.prepend(formRow);
    // Append input fields using createFormRow
    formRow.appendChild(createFormGroup("First Name:", "text", "patient-firstname"));
    formRow.appendChild(createFormGroup("Last Name:", "text", "patient-lastname"));
    formRow.appendChild(createFormGroup("Age:", "number", "patient-age"));
    formRow.appendChild(createFormGroup("Contact:", "text", "patient-contact"));
    formRow.appendChild(createFormGroup("Gender:", "select", "patient-gender", [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" }
    ]));
    formRow.appendChild(createFormGroup("Email:", "email", "patient-email"));
    formRow.appendChild(createFormGroup("Address:", "text", "patient-address"));
    formRow.appendChild(createFormGroup("City:", "text", "patient-city"));
    formRow.appendChild(createFormGroup("State:", "text", "patient-state"));
    formRow.appendChild(createFormGroup("Country:", "text", "patient-country"));
    formRow.appendChild(createFormGroup("Zip Code:", "text", "patient-zip"));

    // Checkbox for scheduling an appointment
    const scheduleCheckbox = createCheckbox("Schedule Appointment", "checkbox", "schedule-patient-appointment");
    form.insertBefore(scheduleCheckbox, buttonContainer);

    // Create a container for additional fields (hidden by default)
    const additionalFieldsContainer = createFormRow();
    additionalFieldsContainer.id = "appointment-fields";
    additionalFieldsContainer.style.display = "none"; // Initially hidden

    // Additional fields


    // Append additional fields to container
    additionalFieldsContainer.appendChild(createFormGroup("Appointment Date:", "date", "appointment-date"));
    additionalFieldsContainer.appendChild(createFormGroup("Appointment Time:", "time", "appointment-time"));
    additionalFieldsContainer.appendChild(createFormGroup("Doctor:", "select", "appointment-doctor", [
        { value: "Doctor 1", text: "Doctor 1" },
        { value: "Doctor 2", text: "Doctor 2" },
        { value: "Doctor 3", text: "Doctor 3" }
    ]));
    additionalFieldsContainer.appendChild(createFormGroup("Appointment Fee:", "number", "appointment-fee"));
    additionalFieldsContainer.appendChild(createFormGroup("Appointment Reason:", "text", "appointment-reason"));

    // Append the container to the form
    form.insertBefore(additionalFieldsContainer, buttonContainer);

    // Event listener for checkbox toggle
    scheduleCheckbox.querySelector("input").addEventListener("change", function () {
        if (this.checked) {
            additionalFieldsContainer.style.display = "flex";
        } else {
            additionalFieldsContainer.style.display = "none";
        }
    });

    // Add Submit Button
    const submitButton = addSubmitButton(buttonContainer,"Add Patient");
    // Append modal to the body
    document.body.appendChild(modal);
    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const firstName = document.getElementById("patient-firstname").value;
        const lastName = document.getElementById("patient-lastname").value;
        const age = document.getElementById("patient-age").value;
        const gender = document.getElementById("patient-gender").value;
        const contact = document.getElementById("patient-contact").value;
        const name = `${firstName} ${lastName}`;
        const newPatient = { name, age, gender, contact };

        addPatient(newPatient);



        fetch("/api/patients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPatient)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                console.log("Response Status:", response.status); // Log the response status
                if (response.status === 400) {
                    const alertDiv = document.createElement("div");
                    alertDiv.className = "alert alert-danger";
                    alertDiv.role = "alert";
                    alertDiv.innerText = "Failed to add patient. Please check the input data.";
                    alertDiv.style.top = "4rem";
                    document.body.prepend(alertDiv);
                    setTimeout(() => {
                        alertDiv.remove();
                    }, 5000);
                }
                return response.json();
            })
            .then(data => {
                console.log("Patient added successfully:", data);
                document.body.removeChild(modal);
                location.reload(); // Optionally, refresh the patient table
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    });


}

// Function to create form fields
function createFormGroup(labelText, inputType, inputId, options = []) {
    const formGroup = document.createElement("div");
    formGroup.className = "form-group";
    formGroup.style.flex = "1";
    formGroup.style.minWidth = "15rem";
    formGroup.style.borderRadius = "0.5rem";

    const label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.innerText = labelText;
    label.style.display = "block";
    label.style.fontWeight = "bold";
    label.style.marginBottom = "0.2rem";
    label.style.color = "#333";

    let inputElement;
    if (inputType === "select") {
        inputElement = document.createElement("select");
        inputElement.id = inputId;
        inputElement.className = "form-control";
        inputElement.style.width = "100%";
        inputElement.style.padding = "0.4rem";
        inputElement.style.border = "0.1rem solid #ccc";
        inputElement.style.borderRadius = "0.5rem";
        inputElement.style.height = "2rem";
        inputElement.required = true;

        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option.value;
            opt.innerText = option.text;
            inputElement.appendChild(opt);
        });
    } else {
        inputElement = document.createElement("input");
        inputElement.type = inputType;
        inputElement.id = inputId;
        inputElement.className = "form-control";
        inputElement.style.width = "100%";
        inputElement.style.padding = "0.4rem";
        inputElement.style.border = "0.1rem solid #ccc";
        inputElement.style.borderRadius = "0.5rem";
        inputElement.style.height = "2rem";
        inputElement.required = true;
    }

    formGroup.appendChild(label);
    formGroup.appendChild(inputElement);

    return formGroup;
};

//     // Create a modal container
//     const modal = document.createElement("div");
//     modal.className = "modal";
//     modal.style.display = "block";
//     modal.style.position = "fixed";
//     modal.style.top = "0";
//     modal.style.left = "0";
//     modal.style.width = "100%";
//     modal.style.height = "100%";
//     modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//     modal.style.zIndex = "1000";
//     modal.style.display = "flex";
//     modal.style.justifyContent = "center";
//     modal.style.alignItems = "center";

//     // Create a modal content box
//     const modalContent = document.createElement("div");
//     modalContent.className = "modal-content";
//     modalContent.style.position = "relative";
//     modalContent.style.padding = "1rem";
//     modalContent.style.width = "30rem";
//     modalContent.style.backgroundColor = "#f8f9fa"; // Off-white background
//     modalContent.style.borderRadius = "1.5rem";
//     modalContent.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.3)";
//     modalContent.style.fontFamily = "'Roboto', sans-serif";
//     modalContent.style.fontSize = "1rem";
//     modalContent.style.color = "#333";
//     modalContent.style.overflowY = "auto";
//     modalContent.style.maxHeight = "80vh";

//     // Create form
//     const form = document.createElement("form");
//     form.id = "add-patient-form";

//     // Add heading
//     const title = document.createElement("h3");
//     title.innerText = titleName;
//     title.style.textAlign = "center";
//     title.style.color = "#333";
//     title.style.marginBottom = "1rem";
//     modalContent.appendChild(title);
//     // Append form to modal content
//     modalContent.appendChild(form);
//     // Append modal content to modal
//     modal.appendChild(modalContent);   
//     return modal;

// };

function createFormRow() {
    // Create form row container
    const formRow = document.createElement("div");
    formRow.className = "form-row";
    formRow.style.display = "flex";
    formRow.style.flexWrap = "wrap";
    formRow.style.gap = "1rem";
    return formRow;

};




/** Fetch all patients */
async function getPatients() {
    try {
        const patients = await fetchData(apiUrl);
        console.log("All Patients:", patients);
        return patients;
    } catch (error) {
        console.error("Failed to fetch patients:", error);
    }

}

/** Fetch patient by ID */
async function getPatientById(id) {
    try {
        const patient = await fetchDataById(apiUrl, id);
        // console.log(`Patient ${id}:`, patient);
        return patient;
    } catch (error) {
        console.error(`Failed to fetch patient ${id}:`, error);
    }
}

/** Add a new patient */
async function addPatient(newPatient) {
    //const newPatient = { name: "John Doe", age: 30, condition: "Flu" };
    try {
        const response = await postData(apiUrl, newPatient);
        console.log("Patient added successfully:", response);
    } catch (error) {
        console.error("Failed to add patient:", error);
    }
}

/** Update a patient */
async function updatePatient(id) {
    const updatedPatient = { name: "John Doe", age: 31, condition: "Recovered" };
    try {
        const response = await putData(apiUrl, id, updatedPatient);
        console.log(`Patient ${id} updated successfully:`, response);
    } catch (error) {
        console.error(`Failed to update patient ${id}:`, error);
    }
}

/** Delete a patient */
async function removePatient(id) {
    try {
        const response = await deleteData(apiUrl, id);
        console.log(`Patient ${id} deleted successfully:`, response);
        return response;
    } catch (error) {
        console.error(`Failed to delete patient ${id}:`, error);
    }
}



function showAlert(message, error) {
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-danger";
    alertDiv.role = "alert";
    alertDiv.innerText = message;

    // Style the alert to appear as a small block in the top-right corner
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "4rem";    // 1rem from the top of the page
    alertDiv.style.right = "1rem";  // 1rem from the right edge of the page
    alertDiv.style.padding = "0.5rem 1rem"; // Smaller padding for compact look
    alertDiv.style.fontSize = "14px";        // Smaller font size
    alertDiv.style.zIndex = "9999";   // Make sure it appears above other content
    alertDiv.style.borderRadius = "5px"; // Rounded corners
    alertDiv.style.maxWidth = "300px";  // Limit the width to 300px
    alertDiv.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"; // Slight shadow for visibility

    document.body.prepend(alertDiv);

    console.error("Error:", error);

    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}






