/*
===========================================================
  RECIPE BOOK APPLICATION
===========================================================
In this mini-project, you will create a simple Recipe Book 
to store and manage recipes.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex)
3. Conditionals (if-else)
4. CRUD operations (Create, Read, Update, Delete)
5. Extra challenge: Filter by ingredient or cooking time

Run this file in Node.js or the browser console to test.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Recipes
-----------------------------------------------------------
1. Create a variable 'recipes' with a suitable data type with a few starter recipes.
2. Each recipe  should have:
   - name (string)
   - ingredients (array of strings)
   - cookingTime (number, in minutes)
*/

const recipes = [
  {
    name: "Red Lentil Soup",
    ingredients: [
      "red lentils",
      "onion",
      "carrot",
      "pepper paste",
      "olive oil",
      "butter",
      "dry mint",
    ],
    cookingTime: 30,
  },
  {
    name: "Artichokes with Greens",
    ingredients: [
      "artichoke hearts",
      "onion",
      "olive oil",
      "lemon",
      "parsly",
      "dill",
      "scallion",
    ],
    cookingTime: 45,
  },
  {
    name: "Sarma",
    ingredients: [
      "grape leaves",
      "ground beef",
      "rice",
      "onion",
      "tomato",
      "pepper paste",
      "olive oil",
    ],
    cookingTime: 90,
  },
  {
    name: "Fig Tart",
    ingredients: ["fresh figs", "flour", "butter", "sugar", "eggs", "cinnamon"],
    cookingTime: 60,
  },
];

/*
-----------------------------------------------------------
  STEP 2: Display All Recipes
-----------------------------------------------------------
Function: displayAllRecipes()
- Logs each recipe from recipes in a nice format:
  Name: Pasta
  Ingredients: pasta, tomato, garlic
  Cooking Time: 20 minutes
*/

function displayAllRecipes() {
  console.log("Displaying the recipes...");
  for (const recipe of recipes) {
    console.log(`
      Recipe Name: ${recipe.name}, 
      Ingredients: ${recipe.ingredients}, 
      Cooking Time: ${recipe.cookingTime} minutes`);
  }

  console.log("End of the recipes.");
  console.log("");
  console.log("");
}

displayAllRecipes();

/*
-----------------------------------------------------------
  STEP 3: Add a New Recipe
-----------------------------------------------------------
Function: addRecipe(name, ingredients, cookingTime)
- Checks if a recipe with the same name exists.
- If yes, log a warning and return.
- If not, add the new recipe and log success.
- ingredients should be an array like ['egg', 'milk', 'flour']
*/

function addRecipe(name, ingredients, cookingTime) {
  if (
    typeof name !== "string" ||
    !Array.isArray(ingredients) ||
    typeof cookingTime !== "number"
  ) {
    console.log(
      `Please provide a string format for "name", an array for "ingredients", and a number for "cookingTime".`
    );
    console.log("");
    console.log("");
    return;
  }
  for (let i = 0; i < recipes.length; i++) {
    if (name.toLocaleLowerCase() === recipes[i].name.toLocaleLowerCase()) {
      console.warn(`There is already a recipe named ${name}.`);
      console.log("");
      console.log("");
      return;
    }
  }
  recipes.push({ name, ingredients, cookingTime });
  console.log("Recipe added successfully.");
  console.log(`Finished adding ${name} recipe.`);
  console.log("");
  console.log("");
}

addRecipe("sarma", ["rice", "onion", "tomato"], 90);
addRecipe("Mantı", ["flour", "water", "ground beef", "onion", "yoghurt"], 120);
addRecipe(90, "sarma", ["rice", "onion", "tomato"]);

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/

function viewRecipe(name) {
  if (typeof name !== "string") {
    console.log(`Please provide a string format for "name"`);
    console.log("");
    console.log("");
    return;
  }

  console.log(`Looking for ${name} in the recipe book...`);
  for (let i = 0; i < recipes.length; i++) {
    if (name.toLocaleLowerCase() === recipes[i].name.toLocaleLowerCase()) {
      console.log(`
        Recipe Name: ${recipes[i].name}, 
        Ingredients: ${recipes[i].ingredients}, 
        Cooking Time: ${recipes[i].cookingTime} minutes.`);
      console.log("");
      console.log("");
      return;
    }
  }
  console.log(`There is no recipe named ${name}.`);
  console.log("");
  console.log("");
}

viewRecipe("Red Lentil Soup");
viewRecipe("SARMA");
viewRecipe("Roasted Vegetables");

/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/

function updateRecipe(name, newIngredients, newCookingTime) {
  if (
    typeof name !== "string" ||
    !Array.isArray(newIngredients) ||
    typeof newCookingTime !== "number"
  ) {
    console.log(
      `Please provide a string format for "name", an array for "newIngredients", and a number for "newCookingTime".`
    );
    console.log("");
    console.log("");
    return;
  }
  console.log(`Updating ${name} in the recipe book...`);
  for (let i = 0; i < recipes.length; i++) {
    if (name.toLocaleLowerCase() === recipes[i].name.toLocaleLowerCase()) {
      recipes[i].ingredients = newIngredients;
      recipes[i].cookingTime = newCookingTime;
      console.log("Recipe updated successfully");
      console.log(
        `New recipe details of ${recipes[i].name} : 'Ingredients: ${recipes[i].ingredients}, Cooking Time: ${recipes[i].cookingTime} minutes'`
      );
      console.log("");
      console.log("");
      return;
    }
  }
  console.log("There is not a matching recipe name");
  console.log("");
  console.log("");
}

updateRecipe(
  "Mantı",
  ["flour", "water", "ground beef", "onion", "yoghurt", "pepper paste"],
  130
);
updateRecipe(
  "Cheese Omlette",
  ["eggs", "cheese", "olive oil", "salt", "black pepper"],
  10
);

/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/

function deleteRecipe(name) {
  if (typeof name !== "string") {
    console.log(`Please provide a string format for "name"`);
    console.log("");
    console.log("");
    return;
  }
  console.log(`Deleting recipe of ${name}...`);
  for (let i = 0; i < recipes.length; i++) {
    if (name.toLocaleLowerCase() === recipes[i].name.toLocaleLowerCase()) {
      recipes.splice(i, 1);
      console.log("Recipe deleted successfully.");
      console.log("");
      console.log("");
      return;
    }
  }
  console.log("There is not a matching recipe name");
  console.log("");
  console.log("");
}

deleteRecipe("Mantı");
deleteRecipe("Rice Pudding");
displayAllRecipes();

/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.
*/

function filterByIngredient(ingredient) {
  if (typeof ingredient !== "string") {
    console.log(`Please provide a string format for "name"`);
    console.log("");
    console.log("");
    return;
  }
  console.log(`Showing the recipes that contain ${ingredient}...`);
  let counter = 0;
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].ingredients.includes(ingredient.toLocaleLowerCase())) {
      console.log(recipes[i]);
      console.log("");
      console.log("");
      counter++;
    }
  }
  if (counter === 0) {
    console.log(`There is no recipe that contains ${ingredient} `);
    console.log("");
    console.log("");
  }
}

filterByIngredient("onion");
filterByIngredient("ONION");
filterByIngredient("mushroom");

/*
Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.*/

function filterByMaxTime(maxMinutes) {
  if (typeof maxMinutes !== "number") {
    console.log("Please provide cooking time in number format.");
    return;
  }
  console.log("");
  console.log("");
  console.log(`Showing the recipes that take ${maxMinutes} minutes or less...`);
  let counter = 0;
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].cookingTime <= maxMinutes) {
      console.log(recipes[i]);
      console.log("");
      console.log("");
      counter++;
    }
  }
  if (counter === 0) {
    console.log(`There is no recipe that takes ${maxMinutes} minutes or less`);
  }
}

filterByMaxTime("thirty");
filterByMaxTime(45);
filterByMaxTime(25);
