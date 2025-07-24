import * as components from "./component.js";
import { fetchData, postData, putData, deleteData, fetchDataById } from './api.js';
const apiUrl = 'api/patients'; //  API URL
let isEditable = false;

document.addEventListener("DOMContentLoaded", () => {
    const patientData = JSON.parse(sessionStorage.getItem("patientData"));
    isEditable = JSON.parse(sessionStorage.getItem("isEditable"));
    const content = document.querySelector(".content");

    const { formContainer, form, formRow } = components.createFormLayout("Patient Details");
    content.appendChild(formContainer);
    const hr = components.createHorizontalLine();

    for (const [key, value] of Object.entries(patientData)) {
        if (key === "pId") continue;

        const labelText = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1").trim();

        if (typeof value === "object" && value !== null) {
            form.appendChild(addFormRowForObject(form, value, key, key));
        } else {
            let inputType = typeof value === "number" ? "number" : "text";
            let inputValue = value;

            if (key.endsWith("Date")) {
                inputValue = components.formatToDateDDMMYYYY(value);
                inputType = "date"; // lowercase 'date' for HTML input
            }

            const formGroup = components.createFormGroup(labelText, "patient-data", key, inputType, "patient-" + key);
            const input = formGroup.querySelector("input");

            if (input) {
                input.value = inputValue;
                input.readOnly = true;
                input.disabled = true;
            }

            formRow.appendChild(formGroup);
        }
    }

    const buttonContainer = components.createButtonContainer();
    formContainer.appendChild(buttonContainer);

    const backButton = components.createButton("Back", "btn btn-secondary");
    buttonContainer.appendChild(backButton);
    backButton.addEventListener("click", (event) => { window.location.href = "/patients"; });

    const editButton = components.addeditButton(buttonContainer);
    const saveButton = components.addSaveButton(buttonContainer);
    const discardButton = components.addDiscardButton(buttonContainer);
    const updateButton = components.addUpdateButton(buttonContainer);

    discardButton.style.display = "none";
    saveButton.style.display = "none";
    updateButton.style.display = "none";

    editButton.addEventListener("click", (event) => {
        document.querySelectorAll("input").forEach(input => {
            console.log(input.classList)
            if (input.classList.contains("patient-data")) {
                input.removeAttribute("readonly");
                input.disabled = false;
            }
        })
        editButton.style.display = "none"; // Hide Edit button
        saveButton.style.display = "inline-block"; // Show Save button
        discardButton.style.display = "inline-block";
    });

    discardButton.addEventListener("click", (Event) => {
        window.location.reload();
        document.querySelectorAll("input").forEach(input => {
            if (input.type === "checkbox") return; // Skip checkbox inputs
            input.setAttribute("readonly", "true");
            input.disabled = true;
        });
        editButton.style.display = "inline-block"; // Hide Edit button
        saveButton.style.display = "none"; // Show Save button
        discardButton.style.display = "none";
    });

    if (isEditable) {
        document.querySelectorAll("input").forEach(input => {
            if (input.classList.contains("patient-data")) {
                input.removeAttribute("readonly");
                input.disabled = false;
            }

        })
        editButton.style.display = "none"; // Hide Edit button
        saveButton.style.display = "inline-block"; // Show Save button
        discardButton.style.display = "inline-block";
    };

    saveButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent any unintended form submission
        editButton.style.display = "inline-block"; // Show Edit button
        updateButton.style.display = "inline-block"; // Show Update button
        saveButton.style.display = "none"; // Hide Save button
        discardButton.style.display = "none"; // Hide Discard button
        document.querySelectorAll("input").forEach(input => {
            if (input.type === "checkbox") return; // Skip checkbox inputs
            input.setAttribute("readonly", "true");
            input.disabled = true;
        });
        saveFormToSession();
        components.showSuccess("Patient data saved successfully", 5000);
    });

    updateButton.addEventListener("click", async (event) => {
        event.preventDefault(); // Prevent any unintended form submission
        editButton.style.display = "inline-block"; // Show Edit button
        updateButton.style.display = "none"; // Hide Update button
        saveButton.style.display = "none"; // Hide Save button
        discardButton.style.display = "none"; // Hide Discard button


        const patientData = JSON.parse(sessionStorage.getItem("patientData"));

        const PreUpdatedPatient = {};
        for (const [key, value] of Object.entries(patientData)) {
            if (typeof value === "object") continue; // Skip the "id" field
            PreUpdatedPatient[key] = value;
        }

        const updatedPatient = await putData(apiUrl, PreUpdatedPatient.pId, PreUpdatedPatient);
        sessionStorage.removeItem("patientData");
        sessionStorage.setItem("patientData", JSON.stringify(updatedPatient));
        components.showSuccess("Patient updated successfully", 2000);
        //window.location.href = "/patients";



    });

    components.addBackToDashBoardButton(formContainer);
});


















/* ----------------------------------------------------------------functions------------------------------------------------------------------*/
function addFormRowForObject(form, objectData, sectionTitle, sectionClass) {
    const headingName = sectionTitle.charAt(0).toUpperCase() + sectionTitle.slice(1).replace(/([A-Z])/g, " $1").trim();
    const objectFormRow = components.createFormRow();
    objectFormRow.style.display = "none"; // Initially hide the form row
    const { switchContainer } = components.addToggleSwitch(form, headingName, (state) => {

        objectFormRow.style.display = state ? "flex" : "none";

        if (state && objectFormRow.childElementCount === 0) {
            const p = document.createElement("p");
            p.textContent = "No data available";
            p.style.color = "red";
            objectFormRow.appendChild(p);
        }

    });

    const label = switchContainer.querySelector("label");
    label.style.fontSize = "1rem";
    label.style.fontWeight = "bold";
    label.style.textDecorationLine = "underline";

    // Check if objectData is an array
    if (Array.isArray(objectData)) {
        objectData.forEach((item, index) => {
            // Loop through object properties
            for (const [key, value] of Object.entries(item)) {
                if (key.endsWith("Id") || key.endsWith("At")) continue; // Skip the "id" field
                let inputType = typeof value === "number" ? "number" : "text";
                let inputValue = value; // Handle null or undefined values

                if (key.endsWith("Date") ) {
                    inputValue = components.formatToDateDDMMYYYY(value);
                    inputType = "date";
                }
                if (key.toLowerCase().endsWith("time")) {
                    inputValue = components.formatToTime(value);
                    inputType = "time";
                }
                const labelText = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1").trim();
               //                   function createFormGroup(labelText, className, inputId, inputType, placeholderText,required = true)
                const formGroup = components.createFormGroup(labelText, sectionClass,`patient-${sectionClass}-${key}-${index}`, inputType);
                const input = formGroup.querySelector("input");

                if (input) {
                    input.value = inputValue; // Handle null or undefined values
                    input.readOnly = true;
                    input.disabled = true;
                }
                objectFormRow.appendChild(formGroup);
            }
            // Append horizontal line after each object
            const hr = components.createHorizontalLine();
            objectFormRow.appendChild(hr);
        });
    } else {
        // If objectData is a single object, process it normally
        for (const [key, value] of Object.entries(objectData)) {
            if (key.endsWith("Id") || key.endsWith("At")) continue; // Skip the "id" field
            let inputType = typeof value === "number" ? "number" : "text";
            let inputValue = value;

            if (key.endsWith("Date") && value) {
                inputValue = components.formatToDateDDMMYYYY(value);
                inputType = "date";
            }
            const labelText = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1").trim();
            const formGroup = components.createFormGroup(labelText, sectionClass, key, inputType, `patient-${sectionClass}-${key}-${index}`);
            const input = formGroup.querySelector("input");

            if (input) {
                input.value = inputValue;
                input.readOnly = true;
                input.disabled = true;
            }
            objectFormRow.appendChild(formGroup);
        }
    }
    return objectFormRow;
}


function saveFormToSession() {
    const patientData = JSON.parse(sessionStorage.getItem("patientData"));

    // Loop through inputs and update the object
    document.querySelectorAll(".patient-data").forEach(input => {
        const key = input.getAttribute("id");
        if (key) {
            patientData[key] = input.value;
        }
    });
    sessionStorage.setItem("patientData", JSON.stringify(patientData));
    console.log("updated Patient:", patientData);

}

