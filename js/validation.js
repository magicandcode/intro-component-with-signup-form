
const freeTrialForm = document.getElementById('free-trial-form');
const freeTrialFormFields = document.querySelectorAll('#free-trial-form input');
const validationErrorClass = 'validation-error';
const freeTrialFormErrorMessages = document.querySelectorAll('.error-messge');
const freeTrialSubmitButton = document.getElementById('free-trial-submit');

const  isEmailField = field => field.type === 'email';

const isValidEmail = field => field.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i);
const isValidField = field => field.value !== '';

const setErrors = (field, errorMessage, event) => {
    event.preventDefault();
    field.classList.add(validationErrorClass);
    errorMessage.getElementsByClassName.visibility = 'visible';
};
const removeErrors = (field, errorMessage, event) => {
    field.classList.remove(validationErrorClass);
    errorMessage.getElementsByClassName.visibility = 'hidden';
};

const validateField = (field, errorMessage, event) => {
    if (isEmailField(field)) {
        if (!isValidEmail(field)) {
            setErrors(field, errorMessage, event);
        } else {
            removeErrors(field, errorMessage, event);
        }
    } else {
        if (isValidField(field)) {
            removeErrors(field, errorMessage, event);
        } else {
            setErrors(field, errorMessage, event);
        }
    }
};
/*
const validateFormOnSubmit = (fields, submitButton) => {
    submitButton.addEventListener('click', e => {
        fields.forEach(field => {
            if (isValidField(field)) {
                if (!isValidEmail()) {
                    e.preventDefault();
                    validateField(field);
                }
            } else {
                e.preventDefault();
                validateField(field);
            }
        });
    });
};

//validateFormOnSubmit(freeTrialFormFields, freeTrialSubmitButton);
*/

freeTrialFormFields.forEach(field => {
    field.autocomplete = 'off';
    const index = Array.prototype.indexOf.call(freeTrialFormFields, field);
    const errorMessage = document.querySelectorAll('.error-message')[index];

    field.addEventListener(
        'focus',
        e => validateField(field, errorMessage, e)
    );

    field.addEventListener(
        'blur',
        e => validateField(field, errorMessage, e)
    );

    field.addEventListener(
        'keyup',
        e => validateField(field, errorMessage, e)
    );
});


/*
freeTrialSubmit.addEventListener('click', e => {
  e.preventDefault();
  freeTrialFormFields.forEach(field => {
    if (field.value === '') {
      field.classList.add('validation-error');
    } else {
      field.classList.remove('validation-error');
      //field.nextSibling.style.visibility = 'hidden';
    }
  });
});

freeTrialFormFields.forEach(field => {
  const index = Array.prototype.indexOf.call(freeTrialFormFields, field);
  const errorMessage = freeTrialFormErrorMessages[index];

  if(field.value === '') {
      field.classList.add('validation-error');
      errorMessage.getElementsByClassName.visibility = 'visible';
  }


  field.addEventListener('focus', e => {
    if (field.value === '') {
      field.classList.toggle('validation-error');
    }
  });
  field.addEventListener('onchange', e => {
    if (field.value === '') {
      field.classList.toggle('validation-error');
    }
  });
  *
  freeTrialSubmit.addEventListener('click', e => {
    if (field.value === '') {
      e.preventDefault();
      field.classList.add('validation-error');
    }
  });
});
*/