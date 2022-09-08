$(function(){

});

function createBoard(){
    
    const numbers = [];

    for(let i = 0; i < 16; i++)
    numbers.push(i);

    $('td').each(function(i){
            const rand = Math.floor(Math.random() * numbers.length);
            const num = numbers[rand];
            numbers.splice(rand, 1);

        $(this).attr('id', i);
        
       if(num == 16){
        $(this).html(`<div></div>`);
       }else{
        $(this).html(`<div>${num}</div>`);
       }
    });

    $('td').click(function(){
        const index = $(this).attr('id');
        
        if(!$(this).prev().text()){
            
        }else if(!$(this).next().text()){
            
        }
    })
}
function isCompleted(){
    let isOrder = true;
    $('td').each(function(i){
        const val = $(this).text();
        const num = i + 1;

        if(val != num && num != 16){
            isOrder = false;
            return;
        }
    })

    return isOrder;
}