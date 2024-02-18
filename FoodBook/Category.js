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
  // Create the recipe div
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("recipe");

  // Create the heading for the recipe
  const heading = document.createElement("h3");
  heading.textContent = recipe.name;

  // Create the link for the image
  const imageLink = document.createElement("a");
  imageLink.href = "Recipe.html";

  // Create the image element
  const image = document.createElement("img");
  image.src = recipe.image;
  image.alt = recipe.name;
  image.classList.add("recipeImage");

  // Append the image to the link
  imageLink.appendChild(image);

  // Create the duration for the recipe
  const duration = document.createElement("h4");
  duration.textContent = `${recipe.hardness} | ${recipe.minutes} דקות`;

  // Append all elements to the recipe div
  recipeDiv.appendChild(heading);
  recipeDiv.appendChild(imageLink);
  recipeDiv.appendChild(duration);

  const allRecipes = document.getElementById("AllRecipes");
  allRecipes.appendChild(recipeDiv);
};
