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
  name: 'Tomato bruschetta',
  ingredients:['Tomatoes ', 'Red Onion ', 'Garlic ', 'Basil ', ' Olive Oil ', 'Balsamic Vinegar ', 'Baguette '],
  cookingTime: 15
},
{
  name: 'Caprese Salad',
  ingredients: ['Tomatoes ', 'Mozzarella ', 'Basil ', 'Olive Oil ', 'Balsamic Vinegar '],
  cookingTime: 10
},
{ 
  name: 'Minestrone Soup',
  ingredients: [ 'Olive Oil ', 'Onion ', 'Celery Stick ', 'Carrot ', 'Courgette ', 'Pancetta ', 'Garlic ', 'Oregano ', 'Canneli Beans ', 'Tomatoes' , 'Vegetable Stock ', 'Pasta ', 'Parmesan '],
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

function displayAllRecipes () {
  for (let i=0; i<recipes.length; i++) {
    console.log(' ');
    console.log('Name: ' + recipes[i].name);
    console.log(' ');
    console.log('Ingredients: ' + recipes[i].ingredients);
    console.log(' ');
    console.log('Cooking Time: ' + recipes[i].cookingTime + ' minutes');
    console.log(' ');
    console.log(' ');
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


/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/



/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/


/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/


/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/

// --- Demo / Auto-run when executed with Node ---
// This file defines functions but didn't call any of them.
// Add a simple call so running `node recipeBook.js` prints output.
console.log('--- Displaying all recipes ---');
displayAllRecipes();
