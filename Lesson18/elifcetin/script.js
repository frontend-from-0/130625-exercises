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
    name: "mashed potatoes",
    ingredients: ["Potato", "garlic", "pepper", "salt"],
    cookingTime: 10
  },
  {
    name: "Lemonade",
    ingredients: ["Lemon", "ice", "sugar", "salt"],
    cookingTime: 5
  },
  {
    name: "salad",
    ingredients: ["Cucumber", "tomatoes", "onion", "lettuce", "salt"],
    cookingTime: 8
  }
]

console.log("----")
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
function displayAllRecipes(){
  for(const recipe of recipes){
    console.log("recipe names are:", recipe.name);
    console.log("Ingredients are:", recipe.ingredients.join(", "))
    console.log("Cooking time:", recipe.cookingTime + " mins")
  }
}
displayAllRecipes()
console.log("---")
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
function addRecipe(name, ingredients, cookingTime){
  for(let i = 0; i < recipes.length; i++){
    if(recipes[i].name === name ){
       console.warn("this recipe already exists!")
       return
    } 
}
recipes.push({
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime
})
console.log("Added successfully!")
}
addRecipe("salad", ["Cucumber", "Tomatoes", "Onion", "Lettuce"], 8);
addRecipe("Pancakes", ["egg", "milk", "flour"], 10); 
console.log("----")

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/
function viewRecipe(name){
  for(let i =0; i < recipes.length; i++){
    if(recipes[i].name === name){
      console.log("your search:", recipes[i].name);
      console.log("Ingredients:", recipes[i].ingredients.join(", "));
      console.log("Cooking time:", recipes[i].cookingTime)
      return
    } 
  }
 console.log("This recipe doesnt exist!")
}

viewRecipe("salad")
console.log("----")

/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/

function updateRecipe(name, newIngredients, newCookingTime){
  for(let i = 0; i < recipes.length; i++){
    if(recipes[i].name === name) {
      recipes[i].ingredients = newIngredients;
      recipes[i].cookingTime = newCookingTime;
      console.log("Ingredients and cooking time have been updated!")
      return;
    }
  }
  console.log("Recipe not found!")
}


updateRecipe("salad", ["Lettuce", "Carrot", "Cucumber", "salt"], 7);
viewRecipe("salad")
console.log("---");




/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
function deleteRecipe(name){
  for(let i = 0; i < recipes.length; i++){
    if(recipes[i].name === name){
      delete recipes[i].name;
      console.log("your recipe has been successfully removed!")
      return
    }
  }
  console.log("failed removing the recipe because it doesnt exist!")
}

deleteRecipe("salad");
deleteRecipe("kebap");
console.log("--")







/*
-----------------------------------------------------------
  STEP 7: Extra Challenge - Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/

function filterByIngredient(ingredient){
  let found = false;
  for(let i = 0; i < recipes.length; i++){
    if(recipes[i].ingredients.includes(ingredient)){
      console.log("here is the recipe with that ingredient ", recipes[i].name);
      found = true
  }
}
if(!found){
  console.log("no recipes found with that ingredient")
}
}

filterByIngredient("salt");
console.log("----");

function filterByMaxTime(maxMinutes){
if(recipes.length ===0){
  console.log("please provide a recipe");
  return
}

let maxMin = recipes[0];
for(let i = 1; i < recipes.length; i++){
  if(recipes[i].cookingTime > maxMin.cookingTime){
    maxMin = recipes[i]
  }


}
 console.log("longest cooking time is:", maxMin.name); 
}


filterByMaxTime(20)
console.log("--")

