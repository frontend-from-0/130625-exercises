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
  { name: "Omelette", ingredients: ["Eggs", "Butter", "Salt"], cookingTime: 5 },
  {
    name: "Pasta",
    ingredients: ["Pasta", "Tomato", "Garlic"],
    cookingTime: 20,
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
  console.log("Displaying all recipes...");
  for (const recipe of recipes) {
    console.log(
      `Name: ${recipe.name}, Ingredients: ${recipe.ingredients}, Cooking Time: ${recipe.cookingTime} minutes`
    );
  }
  console.log("End of recipes.");
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
  console.log("Adding recipe...");
  for (let i = 0; i < recipes.length; i++) {
    const currentlySelectedRecipe = recipes[i];
    if (currentlySelectedRecipe.name === name) {
      console.warn("Recipe already exists!");
      console.log("");
      console.log("");
      return;
    }
  }
  recipes.push({ name, ingredients, cookingTime });
  console.log("Recipe added successfully.");
  console.log("Finished adding recipe.");
  console.log("");
  console.log("");
}

addRecipe("Omelette", ["Eggs", "Butter", "Salt"], 5);
addRecipe("Pancakes", ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder"], 20);
addRecipe(
  "Salad",
  ["Cucumber", "Tomato", "Feta Cheese", "Olive Oil", "Olives"],
  15
);
displayAllRecipes();
/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/
function viewRecipe(name) {
  console.log(`Looking for ${name} in the recipe book...`);
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    if (recipe.name === name) {
      console.log(
        `Recipe details: 'Ingredients: ${recipe.ingredients}, Cooking Time: ${recipe.cookingTime} minutes'`
      );
      console.log("");
      console.log("");
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}.`);
  console.log("");
  console.log("");
}
viewRecipe("Omelette");
viewRecipe("Chocolate Chip Cookies");

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
  console.log(`Updating recipe ${name} in the recipe book...`);
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes[i].ingredients = newIngredients;
      /*I used the assignment operator (=) 
      instead of the comparison operator (===) 
      to successfully update the recipe's data.*/
      recipes[i].cookingTime = newCookingTime;
      console.log("Recipe updated successfully.");
      console.log(
        `New recipe details: 'Ingredients: ${newIngredients}', Cooking Time: ${newCookingTime} minutes'`
      );
      console.log("");
      console.log("");
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}.`);
  console.log("");
  console.log("");
}

updateRecipe("Pasta", ["Pasta", "Cooking cream", "Cheese", "Butter"], 25);
updateRecipe("Cake", ["Eggs", "Sugar", "Flour"], 30);
displayAllRecipes();
/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
function deleteRecipe(name) {
  console.log(`Deleting recipe with name ${name}...`);
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes.splice(i, 1);

      console.log("Recipe deleted successfully.");

      console.log("");
      console.log("");
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}`);
}
deleteRecipe("Pancakes");
deleteRecipe("Cookie");
console.log("");
console.log("");
displayAllRecipes();

/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.
*/
function filterByIngredient(ingredient) {
  console.log(`Searching recipes with the ingredient: ${ingredient}...`);
  console.log("");
  let foundRecipe = false;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].ingredients.includes(ingredient)) {
      console.log(
        `Name: ${recipes[i].name}, Ingredients: ${recipes[i].ingredients}, Cooking Time: ${recipes[i].cookingTime} minutes`
      );
      console.log("");
      foundRecipe = true;
    }
  }
  if (foundRecipe === false) {
    console.log(`No recipe found with the ingredient: ${ingredient}...`);
    console.log("");
  }
}
filterByIngredient("Butter");
filterByIngredient("Onion");

/*
Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/
function filterByMaxTime(maxMinutes) {
  console.log(`Searching recipes that take up to ${maxMinutes} minutes...`);

  let foundRecipe = false;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].cookingTime <= maxMinutes) {
      console.log(
        `Name: ${recipes[i].name}, Ingredients: ${recipes[i].ingredients}, Cooking Time: ${recipes[i].cookingTime} minutes`
      );
      console.log("");
      foundRecipe = true;
    }
  }
  if (foundRecipe === false) {
    console.log(`No recipe found that takes up to ${maxMinutes} minutes.`);
    console.log("");
  }
}

filterByMaxTime(15);
filterByMaxTime(3);

