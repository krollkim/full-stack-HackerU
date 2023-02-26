
let shoppingCart = [];

function showProducts() {
    let html = "";

    for (const item of fruits) {
        html += `<div class="card">
                    <img src="images/${item.img}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><b>מחיר: </b> ${item.price} ש"ח</p>
                        <button class="btn btn-primary" onclick="addProduct(${item.id})">הוסף לסל</button>
                    </div>
                </div>`;
    }

    document.querySelector("#products").innerHTML = html;

    if(localStorage.cart){
        shoppingCart = JSON.parse(localStorage.cart);
        updateCartCount();
    }
}


function addProduct(id) {
    shoppingCart.push(id);
    localStorage.cart = JSON.stringify(shoppingCart);
    updateCartCount();
    
}

function updateCartCount() {
    document.querySelector("#cart span").innerHTML = shoppingCart.length;
    localStorage.cart = JSON.stringify(shoppingCart);
    updateCartCount();
}

function showCart() { 
    let html = "";
    shoppingCart.forEach((cartId, i) => {
      const item = fruits.find(x => x.id == cartId)
    //   const price = fruits.find(y => y.price == price)
     

    html += 
        `<tr>
             <td>${i + 1}</td>
             <td>${item.name}</td>
             <td>1</td>
             <td>${item.price}</td>
             <td><button id="${i}" class="btn btn-danger remove" title="delete">x</button></td>
        </tr>`
        
});  

 document.querySelector(".modal-body tbody").innerHTML = html;

 const removes = document.querySelector(".modal-body tbody").querySelectorAll(".remove");

 for(const elem of removes){
    elem.addEventListener('click', function(ev){
        const index = ev.target.id;
        shoppingCart.splice(index, 1);
        updateCartCount();
        showCart();

    });
 }


}

showProducts();

