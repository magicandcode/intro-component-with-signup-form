const freeTrialForm = document.getElementById('free-trial-form');

const freeTrialFormFields = document.querySelectorAll('#free-trial-form input');
const freeTrialFormErrorMessages = document.querySelectorAll('.error-messge');

const freeTrialSubmit = document.getElementById('free-trial-submit');

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
/*
freeTrialFormFields.forEach(field => {
  const index = Array.prototype.indexOf.call(freeTrialFormFields, field);
  const errorMessage = freeTrialFormErrorMessages[index];
/*
  if(field.value === '') {
      field.classList.add('validation-error');
      errorMessage.getElementsByClassName.visibility = 'visible';
  }
*/
  /*
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