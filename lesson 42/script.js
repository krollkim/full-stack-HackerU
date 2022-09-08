// defining the players turn
let isFirstPlayer = true;
let isProceccing = false;

let data = $.get("getImages.php", function(data){
    const imageList = JSON.parse(data);
    const image = [...imageList, ...imageList];
});
// creating the players counter
const playerOne = [];
const playerTwo = [];

// defining a document .ready call (function)
$(function(){

    // .get func pulling the information from the php file
    $.get("getImages.php", function(data){ // requesting parameters that will recive only if the request is ok

        // assigning a variable and adding the data as string after converting the json
        const imageList = JSON.parse(data)
        const images = [...imageList, ...imageList]; // spreading the images twice to make an array with two pictures each
        const temp = $(".board template").html(); 

        
        while(images.length){
            const rand = Math.floor(Math.random() * images.length);
            const path = images[rand];
            images.splice(rand, 1);

            const elem = $(temp);
            elem.css("background-image", `url('images/${path}')`);
            elem.attr("id", path);

            $(".board").append(elem);
        }

        updateScore();
        $(".imgFrame").click(function(){
            if($(this).hasClass('showed') || isProceccing){
                return;
            }

            const showed = $(".imgFrame.showed");

            if(showed.length < 2){
               $(this).addClass("showed") 
            }
            
                // אם בלחיצה היה כבר קלף אחד, כלומר, כרגע יש 2 קלפים מוצגים
                  if (showed.length) {
                    isProceccing = true;
                    const card1 = $(".imgFrame.showed").first();
                    const card2 = $(".imgFrame.showed").last();
    
                    // אם הקלפים המוצגים זההים
                    if (card1.attr('id') == card2.attr('id')) {
                        // בודק של מי התור
                        if (isFirstPlayer) {
                            playerOne.push(card1.attr('id'));
                            snackBar("player one have answerd succesfully");
                        } else {
                            playerTwo.push(card1.attr('id'));
                            snackBar("player two have answerd succesfully");
                        }

  confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
  });
                        
                      setTimeout(function() {
                       $('.imgFrame.showed').addClass('usedCard').removeClass('showed');
                            updateScore();
                    }, 1000 * 2);

                    } else {

                        snackBar("no matching cards");
                        // הופך במחזרה את הקלפים
                        setTimeout(function() {
                            $('.imgFrame').removeClass('showed');
                                updateScore();
                        }, 1000 * 2);
                    
    
                    // מחליף בין התורות
                    isFirstPlayer = !isFirstPlayer;
                }
             }
    
        });
    })

});

function updateScore(){
    $(".players").children().removeClass('active');

    if(isFirstPlayer){
        $("#point1").children().first().addClass('active');
    }else{
        $("#point2").children().last().addClass('active');
    }

    $("#point1 p").text(playerOne.length);
    $("#point2 p").text(playerTwo.length);

    isProceccing = false

  if($('.imgFrame:not(".usedCard")').length == 0)  {

    if(playerOne.length > playerTwo.length){
        snackBar("player one won");

    } else if(playerOne.length < playerTwo.length){

        snackBar("player two won");

    } else{
        snackBar("its a tie");
    }
  }
}

function snackBar(message){
    $('#snackbar').text(message).addClass('show')

      // After 3 seconds, remove the show class from DIV
      setTimeout(function() {
        $('#snackbar').removeClass('show');
    }, 1000 * 3);
}


function newGame() {
    
    $('.imgFrame').removeClass('usedCard').addClass('showed');
    // let info = data.responseText;
    // let info2 = JSON.parse(info)
    // let arr = [...info2, ...info2];
    // let arr2 = []
    // while (arr.length > 0) {
    //     const rand = Math.floor(Math.random() * arr.length);
    //     arr2.push(arr[rand]);
    //     arr.pop(rand);

    // }
    $('.imgFrame').removeClass('usedCard');
            let parent = $(".board");
            let divs = parent.children();
            while (divs.length) {
                parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
            }
    console.log(arr2);
};