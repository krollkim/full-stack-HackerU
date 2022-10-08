const fruits = [
    "אגס",
    "תפוז",
    "דובדבן",
    "תפוח",
    "לימון",
    "אננס",
    "בננה",
    "ענבים",
    "אבטיח",
];

const btn = `<button onclick="remove(this)">x</button>`;

function remove(btn){
      // קודם שמרנו את אלמנט האב
    const p = $(btn).parent();
     // מחקנו את הכפתור
    $(btn).remove();
    // אנחנו מוחקים את זה מהמערך, ע"מ שנוכח להוסיף מוצר זהה
    const text = p.text();

    const i = fruits.indexOf(text);

    fruits.splice(i, 1);
    // מחקנו את אלמנט האב
    p.remove();

}
$(function() {
 $('#sec1 input').on('input', function(){
   const num = +$(this).val();

   if(!num){
    $(this).siblings('output').val("");
   }
   for(let i = 2; i <= num / 2; i++){
        if(num % i == 0){
            $(this).siblings('output').val("not prime");
            return;
        }
   }
   $(this).siblings('output').val("prime");
});
    
    $('#sec3 input').on('input', function(){
      const num = +$(this).val();
      const numbers = [];

     for(let i = 1; i <= num; i++){
        if(num % i == 0){
            numbers.push(i); 
        }
      }
      $(this).siblings('output').val(numbers.join(', ')); 
  });

  
  for(const f of fruits){
    $('#sec4 ul').append(`<li>${f}${btn}</li>`); 
  }
  $('li').click(function() {
    event.preventDefault()
    $(this).prev().before($(this));
})

$('li').contextmenu(function() {
    event.preventDefault()
    $(this).next().after($(this));
})

  $('#sec4 ul').hide().slideDown(3333);
    

  $('#sec4 input').keyup(function(ev){
    if(ev.keyCode != 13){
        return;
    }

    const val = $(this).val();

    if(!val){
        return;
    }

    if(fruits.includes(val)){
        $(this).val("");
        alert('its already writen')
        return;
    }

    fruits.push(val);
    $('#sec4 ul').append(`<li>${val}${btn}</li>`);
    
    $(this).val("");

    
  });
});