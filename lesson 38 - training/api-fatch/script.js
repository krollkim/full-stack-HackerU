
function createHtml(Response){
   let results = Response.results;
   for(let starWarsChar of results){
    let gender = starWarsChar.gender
    let eyeColor = starWarsChar.eye_color
    let name = starWarsChar.name
    let image = "https://static.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png"

   const starWarsCard = document.createElement("div")

    const genderParagraph = document.createElement("p")
    const nameParagraph = document.createElement("p")
    const eyeColorParagraph = document.createElement("p")
    const imageElement = document.createElement("img")
    
    
    imageElement.className = "card_img";
    starWarsCard.classList.add("flex");
    starWarsCard.classList.add = ("card_container");

    genderParagraph.innerText = gender;
    nameParagraph.innerText = name;
    eyeColorParagraph.innerText = eyeColor;
    imageElement.src = image;


    starWarsCard.appendChild(imageElement)
    starWarsCard.appendChild(nameParagraph)
    starWarsCard.appendChild(genderParagraph)
    starWarsCard.appendChild(eyeColorParagraph)
    

    document.querySelector(".container").appendChild(starWarsCard);
   }
}

fetch('https://swapi.dev/api/people/?page=3')

.then(Response => {
    console.log(Response);
    return Response.json()
}).then(JSON => {
    createHtml(JSON);
}).catch(err => {
    console.log(err);
})



