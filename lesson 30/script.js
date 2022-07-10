
const shoppingCart = [];

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
}

function addProduct(id) {
    shoppingCart.push(id);
    updateCartCount();
    
}

function updateCartCount() {
    document.querySelector("#cart span").innerHTML = shoppingCart.length;

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

// let total = 0;
//    $("#items").on('click', ".item", function() {        
//         $(this).appendTo("#basket");
//         getTotal()
//    });
//     $("#basket").on('click', ".item", function() {      
//       $(this).appendTo("#items");   
//       getTotal()
//    });


//   function getTotal(){
//      total = 0;
//      $("#basket").find('.price').each(function(i){
//         total += parseInt($(this).text().slice(0,-1));
//         if(i + 1 === $("#basket").find('.item').length){
//          $('.total_price').text(total+'$');
//        } 
//      });
//    }


showProducts();

