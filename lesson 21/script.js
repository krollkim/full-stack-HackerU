
// פונקציה ליצירת הרשימה
function createList() {
    let htmlList = "";

    const search = document.getElementById("search").value;

    for (const car of cars) {
        
        if(search){
            const str = `${car.manufacturer} ${car.name} ${car.number}`;
            if(!str.includes(search)){
               continue; 
            }
            

        }
        
        htmlList += `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${car.id}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${car.id}" aria-expanded="false" aria-controls="collapse${car.id}">
                    <b>${car.manufacturer} ${car.name}</b>&nbsp;<span>${car.number}</span>
                </button>
            </h2>
            <div id="collapse${car.id}" class="accordion-collapse collapse" aria-labelledby="heading${car.id}" data-bs-parent="#list">
            <div class="accordion-body">
                <ul class="list-group">
                    <li class="list-group-item">
                        <b>שם משפחה: </b> ${car.lastName}
                    </li>
                    <li class="list-group-item">
                        <b>שם פרטי: </b> ${car.firstName}
                    </li>
                    <li class="list-group-item">
                        <b>מודל: </b> ${car.model}
                    </li>
                    <li class="list-group-item">
                        <b>ק"מ: </b> ${car.km}
                    </li>
                </ul>
            </div>
        </div>
    </div>`;
}

if (search) {
    htmlList = htmlList.replace(new RegExp(search, "g"), `<mark>${search}</mark>`);
}


document.getElementById("list").innerHTML = htmlList;
}

// הפעלת הפונקציה בעת הטעינה
createList();
