
// Gets form fields to validate, in this case all fields are inputs and the
// submit button is a button element; safe to select all form inputs
const freeTrialFormFields = document.querySelectorAll(
    '#free-trial-form input'
);

// Sets name of class to indicate an invalid input value
// Class will be added to or removed from input indicating whether it is
// invalid or not
const validationErrorClass = 'validation-error';

// Gets all error messages to display with error class
// Error message will be either visible or hidden, depending on its input's
// validity
const freeTrialFormErrorMessages = document.querySelectorAll(
    '.error-message'
);

// Gets form submit button
const freeTrialSubmitButton = document.getElementById(
    'free-trial-submit'
);

// Checks if form input type is email (requires specific validation rules)
const  isEmailField = field => field.type === 'email';

// Checks if form input value is valid email
const isValidEmail = field => field.value.match(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
);

// Checks if form input value is not empty
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

const isValidFormField = field => {
    if (isEmailField(field)) {
        if (!isValidEmail(field)) {
            return false;
        } else {
            return true;
        }
    } else {
        if (isValidTextField(field)) {
            return true;
        } else {
            return false;
        }
    }
};

const validateFormField = (field, errorMessage) => {
    if (isValidFormField(field)) {
        removeErrorIndicators(field, errorMessage);
    } else {
        addErrorIndicators(field, errorMessage);
    }
};

freeTrialFormFields.forEach(field => {
    field.autocomplete = 'off'; // Turns off autocomplete from all form fields

    // Gets index of current form field to get corresponding error message
    const index = Array.prototype.indexOf.call(freeTrialFormFields, field);
    const errorMessage = freeTrialFormErrorMessages[index];

    // Adds validation on focus event
    field.addEventListener(
        'focus',
        () => validateFormField(field, errorMessage)
    );

    // Adds validation on blur event
    field.addEventListener(
        'blur',
        () => validateFormField(field, errorMessage)
    );

    // Adds validation on key up event
    field.addEventListener(
        'keyup',
        () => validateFormField(field, errorMessage)
    );
});


const validateFormOnSubmit = (form) => {

    const {fields, errorMessages, submit} = form;

    submit.addEventListener('click', e => {
        fields.forEach(field => {
            // Gets index of current form field to get corresponding error message
            const index = Array.prototype.indexOf.call(fields, field);
            const errorMessage = errorMessages[index];

            // Adds or removes error indications
            validateFormField(field, errorMessage);

            // Prevents form to be submitted if any field is invalid
            if (! isValidFormField(field)) {
               e.preventDefault();
            }
        });
    });
};

const freeTrialForm = {
    fields:  document.querySelectorAll('#free-trial-form input'),
    errorClass: 'validation-error',
    errorMessages: document.querySelectorAll('.error-message'),
    submit: document.getElementById('free-trial-submit')
};

validateFormFields(freeTrialForm); // Validates each field when interacted with
validateFormOnSubmit(freeTrialForm); // Validates form before submitting