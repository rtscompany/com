const scriptURL = 'https://script.google.com/macros/s/AKfycbyQuCgvnUGPDt3PrErsSmena0xAphCMEq4I8OJk4igQx8FfLqaWyFgZ9SsbGq6DYBIzXw/exec'
const form = document.forms['product']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
      