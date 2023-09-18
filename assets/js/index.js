//API KEY = 1d585b41fe7d4a81857b4b80f68b0965
// const APIURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}`;
import RandomRecipe from './RandomRecipe.js';
import RecipeFound from './RecipeFound.js'
const APIKEY = '1d585b41fe7d4a81857b4b80f68b0965';
const amountOfRandomRecipes = 3
const recommendedList = document.querySelector('.recommendations-list')

/* Code for populating recommendations section */

function displayRecommendedRecipes(newRecipe) {
    recommendedList.appendChild(newRecipe.getHTMLComponent());
}

function getRandomRecipesInformation(data) {
    let recipes = data.recipes;
    recipes.forEach((recipe) => {
        console.log(recipe.image)
        let newRecipe = new RandomRecipe(
            recipe.title,
            recipe.image,
            recipe.vegetarian,
            recipe.vegan,
            recipe.readyInMinutes
        )
        displayRecommendedRecipes(newRecipe)
    });
}

function getRandomRecipes(amountOfRandomRecipes) {
    let query = `&number=${amountOfRandomRecipes}`
    let randomRecipesEndpoint = `https://api.spoonacular.com/recipes/random/?apiKey=${APIKEY}${query}`
    fetch(randomRecipesEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error: call failed')
            }
            return response.json();
        })
        .then(data => {
            getRandomRecipesInformation(data)
        })
}

/* Finder section logic */

const recipeInput = document.querySelector('.search-input')
const resultList = document.querySelector('.results-list')

const displayRecipeFound = (recipeFound) =>{
    resultList.appendChild(recipeFound.getHTMLComponent());
}

const getRecipeInformation = (recipeData) =>{
    let recipes = recipeData.results
    recipes.forEach(recipe =>{
        let newRecipe = new RecipeFound(recipe.id, recipe.title, recipe.image, recipe.type)
        displayRecipeFound(newRecipe)
    })
}

const searchRecipe = keyword =>{
    resultList.innerHTML = ''
    let query = `&query=${keyword}`
    let searchRecipesEndpoint = `https://api.spoonacular.com/recipes/complexSearch/?apikey${APIKEY}${query}`
    fetch(searchRecipesEndpoint, {
        headers:{
            'x-api-key':APIKEY
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error: call failed')
        }
        return response.json();
    })
    .then(recipeData => {
        getRecipeInformation(recipeData)
    })
}

recipeInput.addEventListener("keydown", (element) => {
    if (element.key == 'Enter' && element.target.value != "") searchRecipe(element.target.value)
})

function loadInformation() {
    getRandomRecipes(amountOfRandomRecipes);
}

loadInformation()
