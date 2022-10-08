// jquery auto function
$(function () {

  // get request to product.php file
  $.get("products.php", function (res) {

    // running a function that takes the data and convert from json to object
    const data = JSON.parse(res);

    // running the information inside data using a loop (each section is called item)
    data.forEach((item) => {

        // calling createHTML to insert all the data with "item" tag-name to insert all items data to the html
        createHTML(item);
    });
  });
});

// inserting all "item" data by the keyword "append" into createHTML and concating the sections we want
function createHTML(item){
    $("#products").append(`
    <tr id="${item.id}">
        <td></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.date}</td>
        <td><button onclick="removeItem(this)" class="w3-btn w3-red remove">x</button</td>
    </tr>
 `);

    // calling numbering
    numbering();
}

// numbering function generates the ability to count each of the items in the table
function numbering(){

    // appealing all the trs inside tbody(#products), looping through with "each"
    $("#products tr").each(function(i){

        // ("this" = tr) .children is calling the trs children that is calld tds .first give the first td that comes .text puts inside what i choose
        $(this).children().first().text(i + 1);
    });
}

// a function that removes the item from the database and the front end as well
function removeItem(elem){

    // a boolen thet confirms if sure to delete the item
    if(!confirm("are you sure you want to delete the item?")){
        return;
    }

    // finding what item to delete by using the items id, finding each element parent "tr" and assigning the id by the atribute .attr
    const id = $(elem).parents('tr').attr('id');

    // sending the updated data to the server with a post atribute, and giving the parameters (id, action: 'delete') to the DB to be able to delete the item from the DB also 
    $.post("products.php", {id, action: 'delete'}, function(res){

        // finding the td by the parent tr and removing by using the .remove atribute
        $(elem).parents('tr').remove();
        numbering();
    });
}

function addProduct(){

    // data reception from the modal
    const name = $('#productName').val();
    const price = $('#price').val();

    // a boolen that blocks the way to progress if theres missing data
    if(!name || !price){
        alert('info is missing...');
        return;
    }

    // sending the updated data to the server with a post atribute,(and the parameters i want) (id, action: 'add')  to the DB to be able to add the item in DB also 
    $.post("products.php", {name, price, action: 'add'}, function(res){
        const item = JSON.parse(res);

        // adding the product to our table
        createHTML(item);

        // hiding the modal window
        $('#modal').hide();
    });
}