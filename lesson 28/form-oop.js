
function form(elemId, title, stracture){
    let html = `<div class="card">`;

    html += `<h1>${title}</h1>`;
   
    stracture.forEach(item => {
         html +=  `<div class="mb-3">
            <label class="form-label">${item.name}</label>
            <input id="${item.key}" type="${item.type}" class="form-control">
        </div>`
    });
   
    html += `<button id="submit1" class="btn btn-warning">send</button>`

html += `</div>`;

const elem = document.getElementById(elemId);
elem.innerHTML = html;
elem.querySelector("#submit1").addEventListener('click', () => {

    const obj = {};

    stracture.forEach(item => {
       obj[item.key] = elem.querySelector('#' + item.key).value;
    });
    console.log(obj)
});
}