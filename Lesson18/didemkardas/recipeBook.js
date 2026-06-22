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
    name: "Omlet",
    ingredients: ["yumurta", "süt", "tuz", "biber"],
    cookingTime: 10
  },
  {
    name: "Mercimek Çorbası",
    ingredients: ["mercimek", "soğan", "havuç", "su"],
    cookingTime: 45
  },
  {
    name: "Pratik Tavuk Sote",
    ingredients: ["tavuk", "biber", "domates", "soğan"],
    cookingTime: 30 
  },
  {
    name: "Mozaik Pasta",
    ingredients: ["petibör bisküvi", "tereyağı", "kakao", "süt"],
    cookingTime: 15 
  }
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
  for (const recipe of recipes) {
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
    console.log('---------------------------');
  }
} 

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
  if (typeof name !== 'string' || !Array.isArray(ingredients) || typeof cookingTime !== 'number') {
  console.log('ERROR: Please provide a string for name, an array for ingredients, and a number for cookingTime.');
  return;
}
  const existingRecipe = recipes.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
  if (existingRecipe) {
    console.log(`A recipe with the name "${name}" already exists.`);
    return;
  }
  
  const newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime
  };
  
  recipes.push(newRecipe);
  console.log(`Recipe "${name}" added successfully.`);
} 

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/
function viewRecipe(name) {
  if (typeof name !== 'string') {
    console.log('ERROR: Recipe name must be a string.');
    return;
  }
  const recipe = recipes.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
  if (recipe) {
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
  } else {
    console.log(`Recipe with the name "${name}" not found.`);
  }
} 


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
  if (typeof name !== 'string' || !Array.isArray(newIngredients) || typeof newCookingTime !== 'number') {
    console.log('ERROR: Please provide a string for name, an array for newIngredients, and a number for newCookingTime.');
    return;
  }
  const index = recipes.findIndex(recipe => recipe.name.toLowerCase() === name.toLowerCase());
  if (index !== -1) {
    recipes[index].ingredients = newIngredients;
    recipes[index].cookingTime = newCookingTime;
    console.log(`Recipe "${name}" updated successfully.`);
  } else {
    console.log(`Recipe with the name "${name}" not found.`);
  } 
}


/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
function deleteRecipe(name) {
  if (typeof name !== 'string') {
    console.log('ERROR: Recipe name must be a string.');
    return;
  }
  const index = recipes.findIndex(recipe => recipe.name.toLowerCase() === name.toLowerCase());
  if (index !== -1) {
    recipes.splice(index, 1);
    console.log(`Recipe "${name}" deleted successfully.`);
  } else {
    console.log(`Recipe with the name "${name}" not found.`);
  }
} 

/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/
function filterByIngredient(ingredient) {
  if (typeof ingredient !== 'string') {
    console.log('ERROR: Ingredient must be a string.');
    return;
  }
  const filteredRecipes = recipes.filter(recipe => 
    recipe.ingredients.some(ing => ing.toLowerCase() === ingredient.toLowerCase())
  );
  
  if (filteredRecipes.length > 0) {
    console.log(`Recipes with ingredient "${ingredient}":`);
    filteredRecipes.forEach(recipe => console.log(`- ${recipe.name}`));
  } else {
    console.log(`No recipes found with the ingredient "${ingredient}".`);
  }
} 

function filterByMaxTime(maxMinutes) {
  if (typeof maxMinutes !== 'number') {
    console.log('ERROR: maxMinutes must be a number.');
    return;
  }
  const filteredRecipes = recipes.filter(recipe => recipe.cookingTime <= maxMinutes);
  
  if (filteredRecipes.length > 0) {
    console.log(`Recipes that take ${maxMinutes} minutes or less:`);
    filteredRecipes.forEach(recipe => console.log(`- ${recipe.name}`));
  } else {
    console.log(`No recipes found that take ${maxMinutes} minutes or less.`);
  }
} 