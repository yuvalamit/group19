
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('NAME').value;

    if(name in user.recipe){////////////////////////////////////
        alert('קיים מתכון עם שם זהה. לא נוצר המתכון!');
  } else {
    alert('מתכון הוסף בהצלחה!');
    }
})
