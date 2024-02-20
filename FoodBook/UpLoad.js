window.onload = function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (checkRecipeExist(form.elements["nameRec"].value)) {
      alert("קיים מתכון עם שם זהה. לא נוצר המתכון!");
    } else {
      addRecipeToDB();
      alert("מתכון הוסף בהצלחה!");
    }
  });

  const addRecipeToDB = () => {
    usersList[0].recipes.push({
      name: form.elements["nameRec"].value,
      ingredients: addListToArrayFromTextarea(),
      instructions: form.elements["INST"].value,
      hardness: form.elements["HARD"].value,
      minutes: form.elements["NUM"].value,
      kosher: form.elements["KOSH"].value,
      image: form.elements["PHOT"].value,
      category1: form.elements["CAT1"].value,
      category2: form.elements["CAT2"].value,
      category3: form.elements["CAT3"].value,
      Comment: [],
    });
    recipes.push({
      name: form.elements["nameRec"].value,
      ingredients: addListToArrayFromTextarea(),
      instructions: form.elements["INST"].value,
      hardness: form.elements["HARD"].value,
      minutes: form.elements["NUM"].value,
      kosher: form.elements["KOSH"].value,
      image: form.elements["PHOT"].value,
      category1: form.elements["CAT1"].value,
      category2: form.elements["CAT2"].value,
      category3: form.elements["CAT3"].value,
      Comment: [],
    });
  };

  function addListToArrayFromTextarea() {
    const text = form.elements["INGR"].value;

    const ingredients = text.split("\n");

    const array = [];

    // הוספת כל שורה למערך
    for (const ingredient of ingredients) {
      array.push(ingredient);
    }
    return array;
  }

  const checkRecipeExist = (name) => {
    const nameRecipesList = usersList[0].recipes.map((recipe) => recipe.name);
    for (let Index in nameRecipesList) {
      const nameRecipe = nameRecipesList[Index];
      if (nameRecipe === name) return true;
    }
    return false;
  };
};
