class RandomRecipe {
    constructor(title, image, isVegetarian, isVegan, duration) {
        this.title = title
        this.image = image
        this.isVegetarian = isVegetarian ? 'Yes' : 'No'
        this.isVegan = isVegan ? 'Yes' : 'No'
        this.duration = duration
    }

    getHTMLComponent() {
        const li = document.createElement("li")
        li.classList.add("recommendations-list_item");
        li.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url("${this.image}")`
        li.innerHTML = 
        `
            <h3>${this.title}</h3>
            <p>Vegan: ${this.isVegan}</p>
            <p>Vegetarian: ${this.isVegetarian}</p>
            <p>Duration: ${this.duration} minutes (aprox)</p>
            <i class="fa-solid fa-arrow-right fa-2xl"></i>
        `
        return li
    }

}

export default RandomRecipe;