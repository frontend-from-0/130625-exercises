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

const recipes = [ {
  name: 'Tomato Bruschetta',
  ingredients:['Tomatoes', 'Red Onion', 'Garlic', 'Basil', 'Olive Oil', 'Balsamic Vinegar', 'Baguette'],
  cookingTime: 15
},
{
  name: 'Caprese Salad',
  ingredients: ['Tomatoes', 'Mozzarella', 'Basil', 'Olive Oil', 'Balsamic Vinegar'],
  cookingTime: 10
},
{ 
  name: 'Minestrone Soup',
  ingredients: [ 'Olive Oil', 'Onion', 'Celery Stick', 'Carrot', 'Courgette', 'Pancetta', 'Garlic', 'Oregano', 'Canneli Beans', 'Tomatoes' , 'Vegetable Stock', 'Pasta', 'Parmesan'],
  cookingTime: 50
}
  ]

  

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
  console.log(" ");
  console.log("STEP 2 : DISPLAYING ALL RECIPES FROM BOOK. ");
  function displayAllRecipes() {
    for (let i = 0; i < recipes.length; i++) {
      console.log(" ");
      console.log("Name: " + recipes[i].name);
      console.log("Ingredients: " + recipes[i].ingredients);
      console.log("Cooking Time: " + recipes[i].cookingTime + " minutes");
      console.log(" ");
  
    }
    
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
console.log(" ");
console.log("STEP 3 : ADDING NEW RECIPE.");
console.log(" ");
function addRecipe (name, ingredients, cookingTime) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      console.log(`${name} recipe already exist.`);
      console.log(' ');
      return;
    }
  }
  recipes.push({
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime,
  });
  console.log(`${name} recipe added successfully.`);
  
}console.log(' ');
  console.log(' ');

addRecipe('Arancini', ['Unsalted Butter', 'Garlic', 'Rissotto Rice', 'Stock', 'Parmesan', 'Flour', 'Eggs', 'Breadcrumbs', 'Olive Oil', 'Mozarella'], 40);
addRecipe('Caprese Salad', ['Unsalted Butter', 'Garlic', 'Rissotto Rice', 'Stock', 'Parmesan', 'Flour', 'Eggs', 'Breadcrumbs', 'Olive Oil', 'Mozarella'], 40);

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/

console.log(" ");
console.log("STEP 4 : VIEW A RECIPE BY NAME.");
console.log(" ");

function viewRecipe(name) {
  for(let i=0; i<recipes.length;i++) {
    if(recipes[i].name===name) {
      console.log("Name: " + recipes[i].name);
      console.log("Ingredients: " + recipes[i].ingredients.join(', '));
      console.log("Cooking Time: " + recipes[i].cookingTime + " minutes");
      return;
    } 
  } 
  console.log(`Recipe with name ${name} not found.`);
}

viewRecipe('Minestrone Soup');
viewRecipe('Pasta');

/* When I log STEP 4, it looks in terminal with curly brackets and square brackets as well. I couldn't find out why. */

/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/
console.log(" ");
console.log("STEP 5 : UPDATE A RECIPE.");
console.log(" ");
function updateRecipe(name,newIngredients,newCookingTime) {
for(let i = 0; i < recipes.length; i++){
  if(recipes[i].name === name){
    recipes[i].ingredients = newIngredients;
    recipes[i].cookingTime = newCookingTime;
    console.log( `${name} recipe is updated.`);
    return;
  } 
} 
console.log(`Recipe with name ${name} is not found.`);
}

updateRecipe('Arancini', ['Unsalted Butter', 'Garlic', 'Rissotto Rice', 'Stock', 'Parmesan', 'Flour', 'Eggs', 'Breadcrumbs', 'Olive Oil', 'Mozarella'], 45);
updateRecipe('Pasta', ['Tomatoes', 'Red Onion', 'Garlic', 'Basil', 'Olive Oil', 'Balsamic Vinegar', 'Baguette'], 20);
updateRecipe('Arancini', ['Unsalted Butter', 'Garlic', 'Rissotto Rice', 'Stock', 'Parmesan', 'Flour', 'Eggs', 'Breadcrumbs', 'Olive Oil', 'Mozarella'], 45);
updateRecipe('Pasta', ['Tomatoes ', 'Red Onion ', 'Garlic ', 'Basil ', ' Olive Oil ', 'Balsamic Vinegar ', 'Baguette '], 20);

/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/

console.log(" ");
console.log("STEP 6 : DELETE A RECIPE.");
console.log(" ");

function deleteRecipe(name){
  for ( let i = 0; i<recipes.length; i++){
    if(recipes[i].name === name){
      recipes.splice(i, 1);
      console.log(`${name} recipe deleted.`);
      return;
    }
  } console.log(`${name} recipe is not found.` );
}

deleteRecipe('Caprese Salad');
deleteRecipe('Pasta');

/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/
console.log(" ");
console.log("STEP 7 : FILTER RECIPES BY INGREDIENT.");
console.log(" ");

function filterByIngredient(ingredient) {
  let found=0;
  console.log(`Recipes with ingredient: ${ingredient}`);
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].ingredients.includes(ingredient)) {
      console.log(recipes[i].name);
      found++;
    }
  }
  if (found === 0) {
    console.log(`${ingredient} is not found in any recipe.`);
  }
}

filterByIngredient('Olive Oil');
filterByIngredient('Chicken');


/* I couldn't find why it shows only 1 recipe. Below it shows all, and I see them same.*/

console.log(" ");
console.log("STEP 7 : FILTER RECIPES BY MAX COOKING TIME.");
console.log(" ");

function filterByMaxTime(maxMinutes) {
  console.log(`Recipes with max cooking time: ${maxMinutes} minutes`);
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].cookingTime <= maxMinutes) {
      console.log(recipes[i].name);
    }
  }
}

filterByMaxTime(30);
filterByMaxTime(60);

// --- Demo / Auto-run when executed with Node ---
// This file defines functions but didn't call any of them.
// Add a simple call so running `node recipeBook.js` prints output.

console.log(' ');
console.log('Recipe Book Ends Here');
console.log(' ');
