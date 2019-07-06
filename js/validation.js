const freeTrialForm = document.getElementById('free-trial-form');

const freeTrialFormFields = document.querySelectorAll('#free-trial-form input');

const freeTrialSubmit = document.getElementById('free-trial-submit');

freeTrialFormFields.forEach(field => {
  
  if(field.value === '') {
      field.classList.add('validation-error');
  }
  
  
  field.addEventListener('focus', e => {
    if (field.value === '') {
      field.classList.toggle('validation-error');
  });
  field.addEventListener('onchange', e => {
    if (field.value === '') {
      field.classList.toggle('validation-error');
  });
  
  freeTrialSubmit.addEventListener('click', e => {
    if (field.value === '') {
      e.preventDefault();
      field.classList.add('validation-error');
    }
  });
});