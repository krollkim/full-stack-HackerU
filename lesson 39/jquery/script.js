function addUser() {

    let firstName, lastName;

    do{
        firstName = prompt("please insert users first name");
    }while(!firstName)
    do{
         lastName = prompt("please insert users last name");
    }while(!lastName)
    
   

    const html = $('table template').html();

  tr =  $(html);
  let n = $("table tr").length

  tr.children('#num').text(n);
  tr.children('#firstName').text(firstName);
  tr.children('#lastName').text(lastName);

   $("table").append(tr);
}

function remove(elem){
    $(elem).parents('tr').remove();
}

$(function() {
    $('img').hover(function(){

        $(this).fadeOut(1000);
    }); 
});
