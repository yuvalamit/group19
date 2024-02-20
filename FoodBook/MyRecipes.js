window.onload = function () {
  showHelloLabel();
  loadRecipes();
};

function showHelloLabel() {
  const helloLabel = document.querySelector("#helloUser");
  const firstName = usersList[0].firstName;
  helloLabel.textContent = `שלום, ${firstName}`;
}

const loadRecipes = () => {
  const recipes = usersList[0].recipes;
  recipes.forEach((recipe) => {
    createRecipeCube(recipe);
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
