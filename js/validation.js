// Sets class to add to invalid form fields
const validationErrorClass = 'validation-error';

// Checks if form input type is email (requires specific validation rules)
const  isEmailField = field => field.type === 'email';

// Checks if form input value is valid email
const isValidEmailField = field => field.value.match(
    // Simplified RFC 2822 regex
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
);

// Checks if form input value is not empty (validation rules for text inputs)
const isValidTextField = field => field.value !== '';

// Adds error class to input and displays error message
const addErrorIndicators = (field, errorMessage) => {
    field.classList.add(validationErrorClass);
    errorMessage.getElementsByClassName.visibility = 'visible';
};

// Removes error class from input and hides error message
const removeErrorIndicators = (field, errorMessage) => {
    field.classList.remove(validationErrorClass);
    errorMessage.getElementsByClassName.visibility = 'hidden';
};

// Checks if form field is valid based on its type and validation rules
const isValidFormField = field => {
    if (isEmailField(field)) {
        return isValidEmailField(field) || false;
    }

    return isValidTextField(field) || false;
};

// Adds or removes error indicators from form field based on its validity
const validateFormField = (field, errorMessage) => {
    field.placeholder = false;

    if (isValidFormField(field)) {
        removeErrorIndicators(field, errorMessage);
    } else {
        addErrorIndicators(field, errorMessage);
    }
};

// Validates form field on supplied events
const addFormFieldValidationEventListeners = (events, field, errorMessage) => {
    events.forEach(eventName => {
       field.addEventListener(
           eventName,
           () => validateFormField(field, errorMessage)
       );
    });
};

// Checks and validates each form field on triggered events
const validateFormFields = form => {
    const {fields, errorMessages} = form;

    fields.forEach(field => {
        field.autocomplete = 'off'; // Disables autocomplete for form input

        // Gets index of form field
        const index = Array.prototype.indexOf.call(fields, field);

        // Gets error message for form field
        const errorMessage = errorMessages[index];

        addFormFieldValidationEventListeners(
            ['focus', 'blur', 'keyup'],
            field,
            errorMessage
        );
    });
};

// Validates form fields on form submission
const validateFormOnSubmit = form => {
    const {fields, errorMessages, submit} = form;

    submit.addEventListener('click', e => {
        fields.forEach(field => {
            // Gets index of current form field to get belonging error message
            const index = Array.prototype.indexOf.call(fields, field);
            const errorMessage = errorMessages[index];

            // Adds or removes error indicators
            validateFormField(field, errorMessage);

            // Prevents form to be submitted if any field is invalid
            if (! isValidFormField(field)) {
               e.preventDefault();
            }
        });
    });
};

// Validates supplied form
const validateForm = form => {
    validateFormFields(form); // Validates each field when interacted with
    validateFormOnSubmit(form); // Validates form before submitting
};

// Sets form to validate
const freeTrialForm = {
    fields:        document.querySelectorAll('#free-trial-form input'),
    errorMessages: document.querySelectorAll('.error-message'),
    submit:        document.getElementById('free-trial-submit')
};

// Validates form on input for input events and form submission
validateForm(freeTrialForm);