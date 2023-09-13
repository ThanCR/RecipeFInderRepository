//API KEY = 1d585b41fe7d4a81857b4b80f68b0965
// const APIURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}`;
import RandomRecipe from './RandomRecipe.js';
const APIKEY = '1d585b41fe7d4a81857b4b80f68b0965';
const amountOfRandomRecipes = 3
const recommendedList = document.querySelector('.recommendations-list')

function displayRecommendedRecipes(newRecipe) {
    console.log(newRecipe.getHTMLComponent())
    recommendedList.appendChild(newRecipe.getHTMLComponent());
}

function getRandomRecipesInformation(data) {
    let recipes = data.recipes;
    recipes.forEach((recipe) => {
        let newRecipe = new RandomRecipe(
            recipe.title,
            recipe.image,
            recipe.vegetarian,
            recipe.vegan,
            recipe.readyInMinutes
        )
        // console.log(recommendedList)
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

function loadInformation() {
    getRandomRecipes(3);
}

loadInformation()
