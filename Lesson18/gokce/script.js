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
let recipes = [
  {
    name: "Apple Pear Dessert",
    ingredients: ["apple", "pear", "cinnamon", "teaspoon sugar"],
    cookingTimeMinutes: 20,
  },

  {
    name: "3-Ingredient Quick Bread",
    ingredients: ["flour", "sugar", "water", "a pinch of salt"],
    cookingTimeMinutes: 45,
  },

  {
    name: "Milk Pudding",
    ingredients: ["milk", "sugar", "starch", "vanilla"],
    cookingTimeMinutes: 15,
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
  for (let recipe of recipes) {
    console.log(`Name:${recipe.name}`);
    console.log(`Ingredients:${recipe.ingredients.join(",")}`);
    console.log(`Cooking Time:${recipe.cookingTimeMinutes} minutes`);
  }
}

displayAllRecipes(recipes);

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
      `Please provide a string format for "name", an array for "ingredients", and a number for "cookingTime".`,
    );
    return;
  }
  for (let recipe of recipes) {
    if (name === recipe.name) {
      console.warn(`This recipe already exists.`);
      return;
    }
  }
  const newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTimeMinutes: cookingTime,
  };
  recipes.push(newRecipe);
  console.log(`Success`);
}

addRecipe("Milk Pudding", ["milk", "sugar", "starch", "vanilla"], 15);
addRecipe("Banana Smoothie", ["banana", "milk", "honey"], 10);
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
    console.log(`Please provide a string format for "name".`);
    return;
  }
  if (name !== recipes.name) {
    console.log(`Recipe not found`);
  }
  for (let recipe of recipes) {
    if (name === recipe.name) {
      console.log(`You can view the recipe for ${name}:
      Ingredients: ${recipe.ingredients.join(",")}
      Cooking Time: ${recipe.cookingTimeMinutes} minutes`);
    }
  }
}
viewRecipe("3-Ingredient Quick Bread");
viewRecipe("Chocolate Cake");
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
      `Please provide a string format for "name", an array for "newingredients", and a number for "newcookingTime".`,
    );
    return;
  }
  for (let recipe of recipes) {
    if (name === recipe.name) {
      console.log(`This recipe already exists.`);
      recipe.ingredients = newIngredients;
      recipe.cookingTimeMinutes = newCookingTime;
      console.log(`Recipe updated successfully.`);
      return;
    }
  }
  console.log(`Recipe not found`);
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
  if (typeof name !== "string") {
    console.log(`Please provide a string format for "name".`);
    console.log("********************");
    return;
  }

  const countObjectsFirst = recipes.length;
  for (let i = 0; i < recipes.length; i++) {
    if (name === recipes[i].name) {
      recipes.splice(i, 1);
      i--; //geminidan yardım aldım. İndexlerin splice işlemi sonrasında kaymaması için.
      break;
    }
  }
  const countObjectsSecond = recipes.length;
  if (countObjectsSecond === countObjectsFirst) {
    console.log(`Recipe not found`);
  } else if (countObjectsFirst > countObjectsSecond) {
    {
      console.log(`Recipe deleted successfully.`);
    }
  }
}
deleteRecipe("Milk Pudding");
deleteRecipe("Chocolate Cake");
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
    return;
  }
  //diğer tariflerde de sugar bulunuyor ancak kodum sadece bir tariftekini gösteriyor.Bunu düzeltemedim!
  let counter = 0;
  for (let recipe of recipes) {
    if (recipe.ingredients.includes(ingredient.toLocaleLowerCase())) {
      console.log(`This ingredient is used in ${recipe.name}`);
      counter++;
    }
  }
  if (counter === 0) {
    console.log(`There is no recipe that contains ${ingredient} `);
  }
}
filterByIngredient("sugar");
filterByIngredient("chocolate");

/*
Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/
function filterByMaxTime(maxMinutes) {
  if (typeof maxMinutes !== "number") {
    console.log(`Please provide a number for "maxMinutes".`);
    return;
  }
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].cookingTimeMinutes <= maxMinutes) {
      console.log(
        `Recipes that can be cooked within ${maxMinutes} minutes: ${recipes[i].name}`,
      );
    }
  }
}
filterByMaxTime(20);
filterByMaxTime(10);
