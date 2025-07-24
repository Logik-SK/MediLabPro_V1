// component.js

export function createModal(titleName) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "flex";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.zIndex = "1000";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    // Modal content
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.style.position = "relative";
    modalContent.style.padding = "1rem";
    modalContent.style.width = "40rem";
    modalContent.style.backgroundColor = "	#f6f6f6";
    modalContent.style.borderRadius = "1.5rem";
    modalContent.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.3)";
    modalContent.style.fontFamily = "'Roboto', sans-serif";
    modalContent.style.fontSize = "1rem";
    modalContent.style.color = "#333";
    modalContent.style.overflowY = "auto";
    modalContent.style.maxHeight = "80vh";

    // Title
    const title = document.createElement("h3");
    title.innerText = titleName;
    title.style.textAlign = "center";
    title.style.color = "#333";
    title.style.marginBottom = "1rem";
    modalContent.appendChild(title);

    // Form
    const form = document.createElement("form");
    form.id = "modal-form";
    modalContent.appendChild(form);

    // Button Container
    const buttonContainer = document.createElement("div");
    buttonContainer.style.textAlign = "right";
    buttonContainer.style.marginTop = "1rem";

    // Close Button
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.innerText = "Cancel";
    closeButton.className = "btn btn-secondary";
    // closeButton.style.padding = "0.6rem 1rem";
    closeButton.style.backgroundColor = "#6c757d";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "0.5rem";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginLeft = "0.5rem";
    buttonContainer.appendChild(closeButton);
    closeButton.addEventListener("click", function () {
        document.body.removeChild(modal);
    });

    buttonContainer.appendChild(closeButton);
    form.appendChild(buttonContainer);
    modal.appendChild(modalContent);

    return { modal, form, buttonContainer };
};

export function addCancelButton(buttonContainer) {
    // Add Cancel Button
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.innerText = "Cancel";
    closeButton.className = "btn btn-secondary";
    // closeButton.style.padding = "0.6rem 1rem";
    closeButton.style.backgroundColor = "#6c757d";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "0.5rem";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginLeft = "0.5rem";
    buttonContainer.appendChild(closeButton);
    return closeButton;
};
export function addSubmitButton(buttonContainer,buttonText) {

    // Add Submit Button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = buttonText;
    submitButton.className = "btn btn-primary";
    // submitButton.style.padding = "1rem 1rem";
    submitButton.style.backgroundColor = "#007bff";
    submitButton.style.color = "#fff";
    submitButton.style.border = "none";
    submitButton.style.borderRadius = "0.5rem";
    submitButton.style.cursor = "pointer";
    buttonContainer.prepend(submitButton);
    return submitButton;
};

export function createCheckbox(labelText, id) {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.id = id;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + labelText));
    label.style.fontSize = "1rem";
    label.style.color = "#333";
    label.style.left = "0.5rem";
    label.style.padding = "0.5rem";
    label.style.marginBottom = "0.5rem";

    return label;
};
export function addUpdateButton(buttonContainer) {
    // Create Update Button
    const updateButton = document.createElement("button");
    updateButton.type = "button";
    updateButton.innerText = "Update";
    updateButton.className = "btn btn-primary";

    // Apply styling (matching the Save button)
    updateButton.style.padding = "0.6rem 1rem";
    updateButton.style.backgroundColor = "rgb(38, 84, 5)"; // Bootstrap primary blue
    updateButton.style.color = "#fff";
    updateButton.style.border = "none";
    updateButton.style.borderRadius = "0.5rem";
    updateButton.style.cursor = "pointer";
    updateButton.style.marginLeft = "0.5rem";
    updateButton.style.transition = "all 0.2s ease-in-out"; // Smooth transition effect

    // Add hover effect (like Save button)
    updateButton.addEventListener("mouseover", () => {
        updateButton.style.backgroundColor = "rgb(33, 70, 6)"; // Darker blue on hover
        updateButton.style.transform = "scale(1.05)"; // Slight pop effect
    });

    updateButton.addEventListener("mouseout", () => {
        updateButton.style.backgroundColor = "#007bff"; // Revert to original color
        updateButton.style.transform = "scale(1)"; // Reset scale
    });

    // Append to button container
    buttonContainer.appendChild(updateButton);
    return updateButton;
}

export function addDiscardButton(buttonContainer) {
    // Create Discard Button
    const discardButton = document.createElement("button");
    discardButton.type = "button";
    discardButton.innerText = "Discard";
    discardButton.className = "btn btn-warning";

    // Apply styling
    discardButton.style.padding = "0.6rem 1rem";
    discardButton.style.backgroundColor = "#ffc107"; // Bootstrap warning yellow
    discardButton.style.color = "#000"; // Black text for contrast
    discardButton.style.border = "none";
    discardButton.style.borderRadius = "0.5rem";
    discardButton.style.marginLeft = "0.5rem";
    discardButton.style.transition = "transform 0.2s ease, box-shadow 0.2s ease"; // Smooth transition

    // Add hover effect
    discardButton.addEventListener("mouseenter", () => {
        discardButton.style.transform = "scale(1.05)"; // Slightly increase size
        discardButton.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)"; // Add shadow
    });

    discardButton.addEventListener("mouseleave", () => {
        discardButton.style.transform = "scale(1)"; // Reset size
        discardButton.style.boxShadow = "none"; // Remove shadow
    });

    // Append to button container
    buttonContainer.appendChild(discardButton);

    return discardButton;
}
export function addeditButton(buttonContainer) {
    // Create Edit Button  
    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.innerText = "Edit";
    editButton.className = "btn btn-warning";

    // Apply styling
    editButton.style.padding = "0.6rem 1rem";
    // editButton.style.backgroundColor = "rgb(197, 115, 39)"; // Bootstrap secondary gray
    editButton.style.color = "#fff"; // White text for contrast
    editButton.style.border = "none";
    editButton.style.borderRadius = "0.5rem";
    editButton.style.cursor = "pointer";
    editButton.style.marginLeft = "0.5rem";
    editButton.style.transition = "transform 0.2s ease, box-shadow 0.2s ease"; // Smooth transition

    // Add hover effect
    editButton.addEventListener("mouseenter", () => {
        editButton.style.transform = "scale(1.05)"; // Slightly increase size
        editButton.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)"; // Add shadow
    });

    editButton.addEventListener("mouseleave", () => {
        editButton.style.transform = "scale(1)"; // Reset size
        editButton.style.boxShadow = "none"; // Remove shadow
    });

    // Append to button container
    buttonContainer.appendChild(editButton);

    return editButton;


}

export function addDeleteButton(buttonContainer) {
    // Create Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    deleteButton.className = "btn btn-danger";

    // Apply styling
    deleteButton.style.padding = "0.6rem 1rem";
    deleteButton.style.backgroundColor = "#dc3545"; // Bootstrap danger red
    deleteButton.style.color = "#fff";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "0.5rem";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.marginLeft = "0.5rem";

    // Append to button container
    buttonContainer.appendChild(deleteButton);

    return deleteButton;
};
export function addSaveButton(buttonContainer) {
    // Create Save Button
    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.innerText = "Save";
    saveButton.className = "btn btn-success";

    // Apply styling
    saveButton.style.padding = "0.6rem 1rem";
    saveButton.style.backgroundColor = "#28a745"; // Bootstrap success green
    saveButton.style.color = "#fff";
    saveButton.style.border = "none";
    saveButton.style.borderRadius = "0.5rem";
    saveButton.style.cursor = "pointer";
    saveButton.style.marginLeft = "0.5rem";
    saveButton.style.transition = "transform 0.2s ease, box-shadow 0.2s ease"; // Smooth transition

    // Add hover effect
    saveButton.addEventListener("mouseenter", () => {
        saveButton.style.transform = "scale(1.05)"; // Slightly increase size
        saveButton.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)"; // Add shadow
    });

    saveButton.addEventListener("mouseleave", () => {
        saveButton.style.transform = "scale(1)"; // Reset size
        saveButton.style.boxShadow = "none"; // Remove shadow
    });

    // Append to button container
    buttonContainer.appendChild(saveButton);

    return saveButton;

};
export function createFormLayout(titleText) {
    // Create form container
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    // Style the form container
    formContainer.style.width = "80%";
    formContainer.style.margin = "20px auto";
    formContainer.style.border = "1px solid black";
    formContainer.style.borderRadius = "10px";
    formContainer.style.padding = "20px";
    formContainer.style.backgroundColor = "#f0f0f0";
    formContainer.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    formContainer.style.fontFamily = "'Roboto', sans-serif";
    formContainer.style.fontSize = "1rem";
    formContainer.style.color = "#333";

    // Create form
    const form = document.createElement("form");
    form.classList.add("form");
    form.style.width = "100%";

    // Create title
    const title = document.createElement("h1");
    title.textContent = titleText; // Use input title
    title.style.color = "black";
    title.style.fontSize = "2rem";
    title.style.textAlign = "center";
    formContainer.appendChild(title); // Add title to formContainer

    // Create form row (to hold 2 columns)
    const formRow = document.createElement("div");
    formRow.classList.add("form-row");
    formRow.style.display = "flex";
    // formRow.style.justifyContent = "space-between";
    formRow.style.gap = "1rem";
    formRow.style.flexWrap = "wrap"; // Allow wrapping for smaller screens
    formRow.style.marginTop = "20px"; // Add some space above the form row
    formContainer.appendChild(form); // Add form to formContainer
    form.appendChild(formRow); // Add formRow to form

    // Return the elements so they can be used in other files
    return { formContainer, form, formRow };
};
export function createFormGroup(labelText, className, inputId, inputType, placeholderText,required = true) {
    // Create label
    const label = document.createElement("label");
    label.textContent = labelText;
    label.style.fontSize = "1rem";
    label.style.color = "#333";
    label.style.fontWeight = "bold";
    label.style.marginBottom = "0.3rem";
    label.style.display = "block"; // Ensure label stays above the input

    // Create input field
    const inputElement = document.createElement("input");
    inputElement.type = inputType;
    // inputElement.id = inputId;
   // inputElement.classList.add("form-control", className);
    inputElement.className = className; // Use Bootstrap classes
    inputElement.id = inputId;
    inputElement.placeholder = placeholderText;
    inputElement.style.width = "100%";
    inputElement.style.padding = "0.4rem";
    inputElement.style.border = "0.1rem solid #ccc";
    inputElement.style.borderRadius = "0.5rem";
    inputElement.style.height = "2rem";
    inputElement.style.fontSize = "1rem";
    inputElement.style.color = "#333";
    inputElement.required = required;

    // Create form group container
    const formGroup = document.createElement("div");
    formGroup.className = "form-group";
    formGroup.style.flex = "1";
    formGroup.style.minWidth = "15rem";
    formGroup.style.borderRadius = "0.5rem";

    formGroup.appendChild(label);
    formGroup.appendChild(inputElement);

    return formGroup;
};
export function createSelectGroup(labelText, options) {
    // Create label
    const label = document.createElement("label");
    label.textContent = labelText;
    label.style.fontSize = "1rem";
    label.style.color = "#333";
    label.style.left = "0.5rem";
    label.style.padding = "0.5rem";
    label.style.marginBottom = "0.5rem";

    // Create select field
    const select = document.createElement("select");
    select.style.width = "100%";
    select.style.padding = "0.5rem";
    select.style.borderRadius = "5px";
    select.style.border = "1px solid #ccc";

    // Add options to select field
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        select.appendChild(opt);
    });

    // Create form group container
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");
    formGroup.style.flexGrow = "1"; // Allow the form group to grow and fill space
    formGroup.appendChild(label);
    formGroup.appendChild(select);

    return formGroup;
};
export function createTextAreaGroup(labelText, placeholderText) {
    // Create label
    const label = document.createElement("label");
    label.textContent = labelText;
    label.style.fontSize = "1rem";
    label.style.color = "#333";
    label.style.left = "0.5rem";
    label.style.padding = "0.5rem";
    label.style.marginBottom = "0.5rem";

    // Create textarea field
    const textarea = document.createElement("textarea");
    textarea.placeholder = placeholderText;
    textarea.style.width = "100%";
    textarea.style.padding = "0.5rem";
    textarea.style.borderRadius = "5px";
    textarea.style.border = "1px solid #ccc";

    // Create form group container
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");
    formGroup.style.flexGrow = "1"; // Allow the form group to grow and fill space
    formGroup.appendChild(label);
    formGroup.appendChild(textarea);

    return formGroup;
};
export function createButton(text, className) {
    const button = document.createElement("button");
    button.innerText = text;
    button.className = className; // Use Bootstrap classes
    button.style.padding = "0.6rem 1rem";
    button.style.border = "none";
    button.style.borderRadius = "0.5rem";
    button.style.transition = "transform 0.2s ease, box-shadow 0.2s ease"; // Smooth transition
    button.setAttribute("type", "button");

    // Add hover effect
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)"; // Slightly increase size
        button.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)"; // Add shadow
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)"; // Reset size
        button.style.boxShadow = "none"; // Remove shadow
    });

    return button;
}
export function createFormRow() {
    // Create form row (to hold 2 columns)
    const formRow = document.createElement("div");
    formRow.classList.add("form-row");
    formRow.style.display = "flex";
    // formRow.style.justifyContent = "space-between";
    formRow.style.gap = "1rem";
    formRow.style.flexWrap = "wrap"; // Allow wrapping for smaller screens
    formRow.style.marginTop = "20px"; // Add some space above the form row
    return formRow;
};
export function createHorizontalLine() {
    // Create a horizontal line element

    const hr = document.createElement("hr");
    hr.style.width = "100%"; // Full width
    hr.style.border = "none"; // Remove default border
    hr.style.height = "0.1rem"; // Make it **thicker** for bold effect
    hr.style.backgroundColor = "#000"; // **Black color** for strong visibility
    hr.style.margin = "0.5rem 0"; // Spacing before and after
    return hr;


};
export function createButtonContainer() {
    // Create button container  
    const buttonContainer = document.createElement("div");
    buttonContainer.style.textAlign = "right";
    buttonContainer.style.marginTop = "1rem";
    return buttonContainer;

};
export function addBackToDashBoardButton(element) {

    const backToDashboard = document.createElement("div");
    backToDashboard.classList.add("text-start", "mt-3");
    backToDashboard.innerHTML = `<a href="/dashboard" class="btn btn-secondary">
						            <i class="fas fa-arrow-left"></i> Back to Dashboard
					            </a>`
    element.appendChild(backToDashboard);

};
export function addFormHeading(element, headingName) {
    const formHeading = document.createElement("div");
    formHeading.classList.add("text-start", "mt-3");

    // Styled Heading with Underline and Light Bold Effect
    formHeading.innerHTML = `
        <p>
            ${headingName}
        </p>`;
    formHeading.style.fontSize = "1.3rem";
    formHeading.style.fontWeight = "bold";
    formHeading.style.textDecoration = "underline"

    element.appendChild(formHeading);
}

export function addToggleSwitch(parent = document.body, labelText = "Toggle", onChangeCallback = null) {
    // Create main container
    const switchContainer = document.createElement("div");
    switchContainer.classList.add("d-flex", "align-items-center", "mb-2", "mt-2"); // Optional Bootstrap classes for layout

    // Create label
    const label = document.createElement("label");
    label.textContent = labelText;
    label.classList.add("form-check-label", "me-2");

    // Create switch wrapper
    const switchWrapper = document.createElement("div");
    switchWrapper.classList.add("form-check", "form-switch");

    // Create checkbox input
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input");

    // Build the elements
    switchWrapper.appendChild(checkbox);
    switchContainer.appendChild(label);
    switchContainer.appendChild(switchWrapper);
    parent.appendChild(switchContainer); // Append the whole container to the parent

    // Event listener
    if (onChangeCallback) {
        checkbox.addEventListener("change", () => {
            onChangeCallback(checkbox.checked);
        });
    }

    return { switchContainer, label };
}

export function formatToDateDDMMYYYY(dateString) {
    if (!dateString) return ""; // null, undefined, or empty

    const date = new Date(dateString);

    // Check if date is valid
    if (isNaN(date.getTime())) return "";

    return date.toISOString().split("T")[0]; // yyyy-mm-ddd
}
export function formatToTime(time){
    if (!time) return ""; // null, undefined, or empty

    const date = new Date(time);

    // Check if date is valid
    if (isNaN(date.getTime())) return "";

    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function showAlert(message, error) {
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-danger";
    alertDiv.role = "alert";
    alertDiv.innerText = message;

    styleAlertBox(alertDiv);
    document.body.prepend(alertDiv);

    console.error("Error:", error);

    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

export function showSuccess(message, timeout ) {
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-success";
    alertDiv.role = "alert";
    alertDiv.innerText = message;

    styleAlertBox(alertDiv);
    document.body.prepend(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, timeout);
}

// Reusable styling for both alerts
function styleAlertBox(alertDiv) {
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "4rem";
    alertDiv.style.right = "1rem";
    alertDiv.style.padding = "0.5rem 1rem";
    alertDiv.style.fontSize = "1rem";
    alertDiv.style.border = "1px solid #f5c6cb"; // Border color
    alertDiv.style.borderRadius = "5px";
    alertDiv.style.width = "auto"; // Adjust width to content
    alertDiv.style.maxWidth = "300px"; // Max width for larger screens
    alertDiv.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"; // Shadow for depth
    alertDiv.style.zIndex = "9999";
    alertDiv.style.borderRadius = "5px";
    alertDiv.style.maxWidth = "300px";
    alertDiv.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

}



