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
    name: "Creamy Mushroom Soup",
    ingredients: ["mushrooms", "cream", "water", "salt"],
    cookingTime: 25
  },
  {
    name: "Rice Pilaf",
    ingredients: ["rice", "water", "oil", "salt"],
    cookingTime: 20
  },
  {
    name: "Salad",
    ingredients: ["lettuce", "tomato", "cucumber", "olive oil", "salt"],
    cookingTime: 10
  },
  {
    name: "Walnut Carrot Cake",
    ingredients: [
      "carrot",
      "walnuts",
      "flour",
      "eggs",
      "sugar",
      "oil",
      "vanilla",
      "cinnamon",
      "baking powder"
    ],
    cookingTime: 45
  }
];
// console.log("RecipeBook running ✅");
// console.log(recipes);


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
    console.log(
`Recipe Name: ${recipe.name}
Ingredients: ${recipe.ingredients.join(", ")}
Cooking Time: ${recipe.cookingTime} minutes`
    );
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

function addRecipe(name, ingredients, cookingTime) {
  if (
    typeof name !== "string" ||
    !Array.isArray(ingredients) ||
    typeof cookingTime !== "number"
  ) {
    console.warn(
      'Invalid input. Please provide: name (string), ingredients (array), cookingTime (number).'
    );
    return;
  }

  const existingRecipeIndex = recipes.findIndex(
    recipe => recipe.name.toLowerCase() === name.toLowerCase()
  );

  if (existingRecipeIndex !== -1) {
    console.warn(`There is already a recipe named "${name}".`);
    return;
  }

  recipes.push({ name, ingredients, cookingTime });
  console.log(`Recipe "${name}" added successfully.`);
}


addRecipe(
  "SALAD",
  ["lettuce", "tomato", "cucumber", "olive oil", "salt"],
  10
);

addRecipe(
  "Creamy mushroom soup",
  ["mushrooms", "cream", "water", "salt"],
  25
);

addRecipe(
  "Cherry Muffins",
  ["cherries", "flour", "eggs", "sugar", "butter"],
  35
);



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