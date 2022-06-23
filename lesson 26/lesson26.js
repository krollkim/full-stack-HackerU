/**
 * 
 * @param {*} elemId 
 * @param {*} structure 
 * @param {*} data 
 */

function Table(elemId, structure, data) {
    let html = `<table class="table table-striped">`;

    // *********** יצירת כותרות הטבלה ************ //
    html += "<tr>";
    html += `<th>#</th>`;
    for (const s of structure) {
        html += `<th>${s.title}</th>`;
        
    }

    html += "</tr>";
    // ******************************************** //

    // *********** יצירת תוכן הטבלה ************ //

    let i = 1;

    for (const d of data) {
        html += "<tr>";
        html += `<td>${i++}</td>`;

        for (const s of structure) {
            html += `<td>${d[s.key]}</td>`;
        }

        html += "</tr>";
    }
    // ******************************************** //

     // *********** יצירת שורה תחתונה ************ //
     html += "<tr>";
     html += `<td><button class="btn btn-success">+</button></td>`;

     for (const s of structure) {
         html += `<td><input type="text" id="${s.key}" class="form-control" placeholder="${s.title}"></td>`;
     }
 
     html += "</tr>";

    html += "</table>";

    document.getElementById(elemId).innerHTML = html;
}

const clientStruc = [
    { key: 'firstName', title: 'שם פרטי' },
    { key: 'lastName', title: 'שם משפחה' },
    { key: 'phone1', title: 'טלפון' },
    { key: 'email', title: 'אמייל' },
    { key: 'city', title: 'עיר' },
];

new Table("output1", clientStruc, clients);

const subjectStruc = [
    { key: 'id', title: 'מזהה' },
    { key: 'code', title: 'קוד מקצוע' },
    { key: 'title', title: 'שם המקצוע' },
];

new Table("output2", subjectStruc, subjects);