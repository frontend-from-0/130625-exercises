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
    name: "Kek",
    ingredients: ["un", "şeker", "yumurta", "kakao","yağ"],
    cookingTime: 45
  },
  {
    name: "Sote",
    ingredients: ["kuşbaşı et", "domates", "yeşil biber", "soğan", "yağ"],
    cookingTime: 60
  },
  {
    name: "Pişi",
    ingredients: ["un", "su", "tuz", "yağ"],
    cookingTime: 3
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
  console.log("Tarif Ölçüleri:");
  for(const recipe of recipes) {
    console.log(`Name: ${recipe.name}, Ingredients: ${recipe.ingredients}, cookingTime: ${recipe.cookingTime + " minutes"}`);
  }
  }
displayAllRecipes();
console.log("Tarif Bitti, Afiyet Olsun!");
console.log("");
console.log("");

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
  console.log("Yeni Tarif Ekleniyor...")
  for(let i=0; i< recipes.length; i++){
if (recipes[i].name === name){
  console.log("Bu tarif mevcut!");
  return;
}
  }
recipes.push({name, ingredients, cookingTime});
console.log("Yeni tarif eklendi: " + name);
console.log("");
console.log("");
}
addRecipe("Makarna", ["makarna", "domates", "sarımsak"], 20);
/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/

function viewRecipe(name){
  for(let i=0; i< recipes.length; i++){
    const recipe = recipes[i];
if (recipe.name === name){
  console.log(`Recipes details; 'Name: ${recipe.name}, Ingredients: ${recipe.ingredients}, cookingTime: ${recipe.cookingTime + " minutes"}`);
  return;
}else{
  console.log("Tarif bulunamadı!");
}
  }

}
addRecipe("Makarna", ["makarna", "domates", "sarımsak"], 20);


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
  console.log(`Tarif Güncelleniyor... ${name} in the recipes book...`);

  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i]; 

    if (recipe.name === name) {
      recipe.ingredients = newIngredients;
      recipe.cookingTime = newCookingTime;

      console.log("Tarif güncellendi: " + name);
      console.log(`New Recipes details; Name: ${recipe.name}, Ingredients: ${recipe.ingredients}, Cooking Time: ${recipe.cookingTime} minutes`);
      console.log("");
      return;
    }
  }

  console.log(`No recipes found with the name: '${name}'`);
  console.log("");
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
  console.log(`Tarif Siliniyor... ${name} from the recipes book...`);

  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i]; 

    if (recipe.name === name) {
      recipes.splice(i, 1); 
      console.log("Tarif silindi: " + name);
      console.log("");
      return;
    }
  }

  console.log(`No recipes found with the name: '${name}'`);
  console.log("");
}


/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.
function filterByIngredient(ingredient){
  for(let i=0; i<recipes.length; i++){
    const recipe = recipes[i];
    if (recipe.ingredients.includes(ingredient)){
      console.log("Bulundu!");
      return;
    } else {
      console.log("Bulunamadı!");
    }
  }
}

filterByIngredient("makarna");



Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.*/
function filterByMaxTime(maxMinutes){
  for(let i=0; i<recipes.length; i++){
    const recipe = recipes[i];
    if(recipe.cookingTime <= maxMinutes){
      console.log("Bulundu! Tarif adı: " + recipe.name);
    } else {
      console.log("Bu tarif uzun!"); 
    }
  }
}

filterByMaxTime(30);
