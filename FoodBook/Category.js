window.onload = function () {
  loadRecipes();
};

const loadRecipes = () => {
  const recipesCateg = recipes;
  recipesCateg.forEach((recipe) => {
    if (
      recipe.category1 == "חלבי" ||
      recipe.category2 == "חלבי" ||
      recipe.category3 == "חלבי"
    ) {
      createRecipeCube(recipe);
    }
  });
};

const createRecipeCube = (recipe) => {
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("recipe");

  const heading = document.createElement("h3");
  heading.textContent = recipe.name;

  const imageLink = document.createElement("a");
  imageLink.href = "Recipe.html";

  const image = document.createElement("img");
  image.src = recipe.image;
  image.alt = recipe.name;
  image.classList.add("recipeImage");

  imageLink.appendChild(image);

  const duration = document.createElement("h4");
  duration.textContent = `${recipe.hardness} | ${recipe.minutes} דקות`;

  recipeDiv.appendChild(heading);
  recipeDiv.appendChild(imageLink);
  recipeDiv.appendChild(duration);

  const allRecipes = document.getElementById("AllRecipes");
  allRecipes.appendChild(recipeDiv);
};
