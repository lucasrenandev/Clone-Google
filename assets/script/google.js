
const search = document.querySelector("#search")
const button = document.querySelector("#button")

/* Quando a tecla ENTER for pressionada */
search.addEventListener("keypress", function(e) {
    
    if(e.key === "Enter") {
        const url = "https://www.google.com/search?q=" + search.value
        search.click()
        window.open(url, "_self")
    }
})

/* Quando o BOTÃO for clicado */
button.addEventListener("click", () => {
    const url = "https://www.google.com/search?q=" + search.value
    window.open(url, "_self")
})