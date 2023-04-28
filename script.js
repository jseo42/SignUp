const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault()
})