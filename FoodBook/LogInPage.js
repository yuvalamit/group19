
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'adi@gmail.com' && password === '1212') {
    alert('התחברת בהצלחה!');
    //window.location.href = '.html';
  } else {
    alert('שם משתמש או סיסמה שגויים!');
  }
});