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
    name: "Lentil Soup",
    kind: "Soup",
    ingredients: ["Red lentils", "Onion", "Carrot", "Water"],
    cookingTime: 30,
    preparing: "Boil the lentils and vegetables, then blend until smooth.",
  },
  {
    name: "Paçanga Pastry",
    kind: "Warm Starter",
    ingredients: ["Phyllo dough", "Pastrami", "Peppers", "Cheese"],
    cookingTime: 15,
    preparing: "Wrap the ingredients in dough and fry until golden brown.",
  },
  {
    name: "Grilled Steak",
    kind: "Main Course",
    ingredients: ["Beef steak", "Olive oil", "Salt", "Black pepper"],
    cookingTime: 20,
    preparing: "Season the steak and grill each side for 5-7 minutes.",
  },
  {
    name: "Rice Pilaf",
    kind: "Side Dish",
    ingredients: ["Rice", "Butter", "Orzo", "Water"],
    cookingTime: 20,
    preparing: "Fry the orzo, add rice and water, then simmer until absorbed.",
  },
  {
    name: "Magnolia",
    kind: "Dessert",
    ingredients: ["Milk", "Sugar", "Biscuits", "Strawberries", "Cornstarch"],
    cookingTime: 25,
    preparing: "Cook the pudding, layer with crushed biscuits and fruit.",
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
console.log("Step 2 starting...");
function displayAllRecipes() {
  console.log("Displayed all recipes in my recipe book...");
  for (const recipe of recipes) {
    console.log(
      `Name: ${recipe.name}, Kind: ${recipe.kind}, CookingTime: ${recipe.cookingTime}`,
    );
  }
}
console.log("Step 2 ended");
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
console.log("Step 3 starting...");
function addRecipe(name, kind, ingredients, cookingTime, preparing) {
  console.log("Adding new Recipe...");
  for (let i = 0; i < recipes.length; i++) {
    const currentlySelectedRecipe = recipes[i];

    if (currentlySelectedRecipe.name === name) {
      console.warn("Recipe is already exists!");
      return;
    }
  }
  recipes.push({ name, kind, ingredients, cookingTime, preparing });
  console.log(`${name}'s recipe added succesfully`);
}
addRecipe(
  "Sütlaç",
  "Dessert",
  ["Milk", "Rice", "Sugar", "Water"],
  45,
  "Boil rice, add milk and sugar, then thicken.",
);
console.log("Step 3 ended");
/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/
console.log("Step 4 starting...");
function viewRecipe(name) {
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    if (recipe.name === name) {
      console.log(
        `${recipe.name}'s recipe details: Kind: ${recipe.kind}, Ingredients: ${recipe.ingredients}, CookingTime: ${recipe.cookingTime}, preparing: ${recipe.preparing}`,
      );
      return;
    }
  }
  console.log(
    `Sorry, we don't have ${name}'s recipe yet. But I'm adding it to the list right now.`,
  );
}
viewRecipe("Sütlaç");
viewRecipe("Güllaç");
console.log("Step 4 finished...");
/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/
console.log("Step 5 starting...");
function updateRecipe(
  name,
  newkind,
  newIngredients,
  newCookingTime,
  newpreparing,
) {
  console.log(`${name}'s recipe updating ...`);
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes[i].kind = newkind;
      recipes[i].ingredients = newIngredients;
      recipes[i].cookingTime = newCookingTime;
      recipes[i].preparing = newpreparing;
      console.log(`${name}'s recipe updating is completed.`);
      console.log(
        `${name}'s recipe new detail: 'Kind: ${recipes[i].kind}, Ingredients: ${recipes[i].ingredients}, CookingTime: ${recipes[i].cookingTime}, preparing: ${recipes[i].preparing}'`,
      );
      return;
    }
  }
  console.log(
    `Sorry ${name} is not in my recipeBook. Try again different name.`,
  );
}
updateRecipe(
  "Sütlaç",
  "Dessert",
  ["Milk", "Rice", "cinnamon"],
  30,
  "Boil rice, add milk and sugar, then thicken. Add some cinnamon",
);
console.log("Step 5 finished...");
/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
console.log("Step 6 starting...");
function deleteRecipe(name) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes.splice(i, 1);
      console.log(`${name}'s recipe is deleted.`);
      return;
    }
  }
  console.log(`${name}'s recipe is not found in book.`);
}

deleteRecipe("Sütlaç");
deleteRecipe("Güllaç");
console.log("Step 6 finished...");
/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/
console.log("Step 7 starting...");
function filterByIngredient(ingredient) {
  const foundRecipesIngredient = [];
  for (i = 0; i < recipes.length; i++) {
    if (recipes[i].ingredients.includes(ingredient)) {
      foundRecipesIngredient.push(recipes[i].name);
    }
  }
  if (foundRecipesIngredient.length > 0) {
    console.log(
      `Recipes containing "${ingredient}": ${foundRecipesIngredient.join(", ")}`,
    );
  } else {
    console.log(`No recipes found with "${ingredient}".`);
  }
}
function filterByMaxTime(maxMinutes) {
  let CookingTimeFilter = [];
  for (i = 0; i < recipes.length; i++) {
    if (recipes[i].cookingTime <= maxMinutes) {
      CookingTimeFilter.push(recipes[i].name);
    }
  }
  if (CookingTimeFilter.length > 0) {
    console.log(
      `Recipes that has max ${maxMinutes} minute cooking time: ${CookingTimeFilter.join(", ")}`,
    );
  } else {
    console.log(`No recipes found with max ${maxMinutes} minute cooking time.`);
  }
}
filterByIngredient("Water");
filterByMaxTime(20);
console.log("Step 7 finished...");

displayAllRecipes();
