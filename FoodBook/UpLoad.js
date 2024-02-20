window.onload = function () {
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if(checkRecipeExist(form.elements["nameRec"].value)){
      alert("קיים מתכון עם שם זהה. לא נוצר המתכון!");
    } else {
      alert("מתכון הוסף בהצלחה!");
    }
});

const checkRecipeExist = (name) => {
  const nameRecipesList = usersList[0].recipes.map((recipe) => recipe.name)
  for(let Index in nameRecipesList){
    const nameRecipe = nameRecipesList[Index];
    if(nameRecipe === name)
      return true;
  }
  return false;
}
}
