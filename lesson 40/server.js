const cocktail_api_url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"


function createCocktailElements(cocktails) {

}

function createCocktailRequest() {
    fetch(cocktail_api_url).then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
    })
}


createCocktailRequest()
