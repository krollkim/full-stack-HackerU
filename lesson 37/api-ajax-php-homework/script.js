function createArticles(arr) {
    console.log(arr)


    let html = '';

    for(const item of arr){
        
        html += `<div class="card">
        <img class="imgs" src="${item.enclosure["@attributes"].url
    }" alt="Avatar" style="width:100%">
        <div class="container">
            <h4 class="folder" id="folder"><b>${item.title}</b></h4>
            
        </div>
    </div>`
}
document.querySelector("#output").innerHTML = html;

}
function getData() {
    // בתחילת הפנייה לשרת, זה מציג את הסימון של הטעינה
    document.querySelector(".loader").style.display = "block";
    // מנקה את הנתונים הקיימים
    document.querySelector("#output").innerHTML = "";

    // יצירת אובייקט של ה-Ajax
    const http = new XMLHttpRequest();

    http.onload = () => {
        const arr = JSON.parse(http.responseText);
        createArticles(arr);

        document.querySelector(".loader").style.display = "none";
    }

    http.open("GET", "data.php", true);
    http.send();
}