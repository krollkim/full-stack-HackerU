function Gallery(id, images) {
    // מגדיר משתנה של הגלרייה ע"פ ה-ID שקיבלנו
    const elem = document.getElementById(id);
    let html = "";
    let i = -1;

    // מייצר HTML של התמונות
    for (const img of images) {
        html += `<img src="${img}">`;
    }

    // מוסיף את התמונות לאלמנט
    elem.innerHTML = html;
    elem.classList.add("gallery");

    // מוסיף לגלרייה לחצנים
    elem.innerHTML += `
        <button class="btn right">></button>
        <button class="btn left"><</button>
    `;

    // פונקציה האחראית להציג את התמונה הבאה
    this.next = function() {
         i++;
        if (i >= images.length) {
            i = 0;
        }

        const imageList = document.querySelectorAll(`#${id} img`);

        for (const elem of imageList) {
            elem.classList.remove("current");
        }

        imageList[i].classList.add("current");

       
    }
  

    // הוספת אירוע למעבר לתמונה הבאה בלחיצה עם העכבר
    document.querySelector(`#${id} .right`).addEventListener('click', this.next);

  
 
    this.prev = function() {
        i--;
        if (i <= 0) {
            i = images.length - 1;
        }


        const imageList = document.querySelectorAll(`#${id} img`);

        for (const elem of imageList) {
            elem.classList.remove("current");
        }

        imageList[i].classList.add("current");

        
    }

    // הוספת אירוע למעבר לתמונה הבאה בלחיצה עם העכבר
    document.querySelector(`#${id} .left`).addEventListener('click', this.prev);

  // בכדי להציג בהתחלה את התמונה הראשונה
    this.next();
}

const gallery1 = new Gallery("g1", [
    "images/img (1).jpg",
    "images/img (2).jpg",
    "images/img (3).jpg",
    "images/img (4).jpg",
    "images/img (5).jpg",
]);

// gallery1.


const gallery2 = new Gallery("g2", [
    "images/img (6).jpg",
    "images/img (7).jpg",
    "images/img (8).jpg",
    "images/img (9).jpg",
    "images/img (10).jpg",
]);


const gallery3 = new Gallery("g3", [
    "images/img (1).jpg",
    "images/img (2).jpg",
    "images/img (3).jpg",
    "images/img (4).jpg",
    "images/img (5).jpg",
]);

let i = 0;

function hello() {
    console.log('hi ' + i++)
}




    // for (let i = 0; i <= 100; i++){

    //     const num = i.toString();
    //     if(Number(num[1]) > Number(num[0])){
    //          console.log(i);
    //     }

       
    // }

    for(let i = 0; i < 10; i++){
    const num1 = i.toString("*")
        console.log(num1);
    }