class RecipeFound {
    constructor(id, title, image, imageType) {
        this.id = id
        this.title = title
        this.image = image
        this.imageType = imageType
    }

    getHTMLComponent() {
        const li = document.createElement('li')
        li.classList.add('result')
        li.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url("${this.image}")`
        li.innerHTML =
            `
            <h4 class="result-title">${this.title}</h4>
            <i class="fa-solid fa-arrow-right fa-2xl"></i>
            `

        return li
    }
}

export default RecipeFound