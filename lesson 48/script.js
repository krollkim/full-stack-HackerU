$(function(){
$.get("products.php", function createHTML(data){
    
        const arr = JSON.parse(data);
        const temp = $('#art template').html();

        arr.forEach((item, i) => {
            const elem = $(temp);

            $(elem).find('#num').text(i + 1);
            $(elem).find('#rep').text(item.name);
            $(elem).find('#price').text(item.price);
            $(elem).find('#category').text(item.category);
            $(elem).find('#date').text(item.date);

            $('#art').append(elem);
        });
    

});
});

function removeItem(elem) {
    if(!confirm("are you sure to delete this?")){
        return;
    }
    const id = $(elem).parents('tr').attr('id');

    $.post("products.php", { id,action: 'delete' }, function(res) {
        $(elem).parents('tr').remove();

        $('#products tr').each(function(i){
            $(this).children().first().text(i + 1);
        });
    });
}
function numbering(){

}

function addProduct(){
    const name = $('#productName').val();
    const price = $('#price').val();

    if(!name || !price){
        alert('info is missing');
        return;
    }

    $.post('products.php', {name, price, action: 'add'}, function(res){
        const item = JSON.parse(res)
        createHTML(item);

        $('modal').hide();
    });
}
