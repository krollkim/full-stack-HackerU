function createArticles(arr) {
    console.log(arr)
    
    let html = '';

    for(const item of arr){
        html += `<div class="card">
        <img src="${item.urlToImage}" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>${item.author}</b></h4>
            <p>Architect & Engineer</p>
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

    const limit = document.querySelector("#limit").value;
    let url = "data.php";

    if (limit) {
        url += `?limit=${limit}`;
    }

    http.open("GET", url);
    http.send();
}