const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("NAME").value;

  const recipes = usersList[0].recipes;
  recipes.forEach((recipe) => {
    if (recipe.name === name) {
      alert("קיים מתכון עם שם זהה. לא נוצר המתכון!");
    } else {
      alert("מתכון הוסף בהצלחה!");
    }
  });
});
