let isCompleted;
$(function(){
    createBoard();

    let keyUpCounter = 0;
    let keyUpTimeOut;

    $('body').keyup(function(ev){
        if(ev.keyCode == 80){
            keyUpCounter++;

            clearTimeout(keyUpTimeOut);

        if (keyUpCounter === 5){

        $('td').each(function(i){
        const num = i + 1;
        $(this).attr('id', i);
                        
            if(num == 16){
            $(this).html(`<div></div>`);
            
            }else{
            $(this).html(`<div>${num}</div>`);
            }
        });

        checkIsCompleted();

                keyUpCounter = 0;

    }
         keyUpTimeOut = setTimeout(() => {
                keyUpCounter = 0
            }, 500);
        }
    })
});

function createBoard(){
    
    const numbers = [];

    for(let i = 1; i <= 16; i++)
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
        if(isCompleted){
            return;
        }
        const index = +$(this).attr('id');
        const source = $(this).html();

       const options = [
            $(this).next(),
            $(this).prev(),
            $('td').eq(index - 4),
            $('td').eq(index + 4)
       ];


        options.forEach(elem => {
            if(elem.length && !elem.text()){
            elem.html(source);
            $(this).html('<div></div>');
            }
        });

        checkIsCompleted();
    });

    $('td').hover(function() {
        if(isCompleted){
            return;
        }
        const index = +$(this).attr('id');

        const options = [
            $(this).next(),
            $(this).prev(),
            $('td').eq(index - 4),
            $('td').eq(index + 4)
        ];

        $('td div').removeClass('free');

        options.forEach(elem => {
            if (elem.length && !elem.text()) {
                $(elem).children().addClass('free');
            }
        });
    });


   $('td').mouseout
}
function checkIsCompleted(){
    
    let isOrder = true;

    $('td').each(function(i){
        const val = $(this).text();
        const num = i + 1;

        if(val != num && num != 16){
            isOrder = false;
            return;
        }
    });

    if(isOrder){
        confetti({
            particleCount: 500,
            spread: 70,
            origin: { y: 0.6 }
        });    
        
        isCompleted = true;

        $('.gameOver').show();
    }
    
}