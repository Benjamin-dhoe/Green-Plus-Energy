function updateInputState(event) {
  const input = event.target;
  const targetDiv = input.previousElementSibling;

  if (input.type === 'radio') {
    const radioGroup = document.querySelectorAll(`input[name="${input.name}"]`);
    radioGroup.forEach(radio => {
      const radioDiv = radio.previousElementSibling;
      if (radio.checked) {
        radioDiv.classList.add('w--redirected-checked');
      } else {
        radioDiv.classList.remove('w--redirected-checked');
      }
    });
  } else if (input.type === 'checkbox') {
    if (input.checked) {
      targetDiv.classList.add('w--redirected-checked');
    } else {
      targetDiv.classList.remove('w--redirected-checked');
    }
  }
}

const inputs = document.querySelectorAll('.checkbox-or-radio-field input[type="checkbox"], .checkbox-or-radio-field input[type="radio"]');

inputs.forEach(input => {
  input.addEventListener('change', updateInputState);
});
