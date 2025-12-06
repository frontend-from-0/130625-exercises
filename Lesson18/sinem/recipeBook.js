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
    name: "Köfte",
    ingredients: ["Kıyma", "Soğan", "Ekmek", "Maydonoz", "Tuz"],
    cookingTime: "30 Dk",
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
  console.log("Displaying all available contacts...");
  for (let i = 0; i < recipes.length; i++) {
    rep = recipes[i];
    console.log(
      `Name: ${rep.name} \nIngredients: ${rep.ingredients} \nCooking Time: ${rep.cookingTime}`
    );

    console.log("End of contacts.");
    console.log("");
    console.log("");
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
  console.log("Adding recipe...");
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      console.warn(`${name} recipe is already exists!`);
      console.log("");
      console.log("");
      return;
    }
  }

  recipes.push({ name, ingredients, cookingTime });
  console.log("Recipe added successfully.");
  console.log(`Added recipe is ${name}`);
  console.log("");
  console.log("");
}

addRecipe("Patates Kızartması", ["Patates, Yağ"], "15 Dk");
addRecipe("Mantı", ["Un, Tuz, Su, Kıyma, Yağ, Yoğrt"], "60 Dk");
addRecipe("Makarna", ["Makarna, Su, Yağ, Salça, Tuz"], "20 Dk");

addRecipe("Köfte", ["Patates, Yağ"], "20 Dk");

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
    const rep = recipes[i];
    if (rep.name === name) {
      console.log(
        `${name} recipe is details: \nIngredients: ${rep.ingredients} \nCooking Time: ${rep.cookingTime}`
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

viewRecipe("Islak Hamburger");
viewRecipe("Köfte");

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
      recipes[i].cookingTime = newCookingTime;
      console.log("Recipe book updated successfully.");
      console.log(
        `New recipe details: \nIngredients: ${recipes.ingredients} \nCooking Time: ${recipes.cookingTime}`
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

updateRecipe("Patates Kızartması", ["Dondurulmuş Patates, Yağ"], "5 Dk");
updateRecipe("Patates Haşlama", ["Patates, Su"], "35 Dk");
/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/

function deleteRecipe(name) {
  console.log(`Deleting contact ${name} in the contact book...`);
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes.splice(i, 1);
      console.log(`${name} recipe deleted successfully.`);
      console.log("");
      console.log("");
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}`);
  console.log("");
  console.log("");
}

deleteRecipe("Köfte");
deleteRecipe("Hamburger");

/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.
*/

function filterByIngredient(ingredient) {
  console.log(`Looking for '${ingredient}' in the contact book...`);
  const foundRecipes = [];
  for (let i = 0; i < recipes.length; i++) {
    const art = recipes[i];
    const newArt = art.ingredients;
    for (let i = 0; i < newArt.length; i++) {
      if (
        newArt[i].toLocaleLowerCase().includes(ingredient.toLocaleLowerCase())
      )
        foundRecipes.push(art.name);
      break;
    }
  }
  const out = foundRecipes.join(", ");
  console.log(`Recipes containing the word ${ingredient}: ${out}`);

  console.log(`No more recipe found with followig details.`);
  console.log("");
  console.log("");
}

filterByIngredient("yağ");
filterByIngredient("su");
filterByIngredient("TUz");
filterByIngredient("paT");
/*
Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/

function filterByMaxTime(maxMinutes) {
  console.log("Shows recipes max minutes:");
  const takeTimes = [];
  for (let i = 0; i < recipes.length; i++) {
    const art = recipes[i];
    const artNum = parseInt(art.cookingTime);
    if (artNum <= maxMinutes) takeTimes.push(art.name);
  }
  const out = takeTimes.join(", ");
  console.log("The recipes that take less than the maximum minutes: " + out);
}

filterByMaxTime(60);
filterByMaxTime(30);
filterByMaxTime(5);
