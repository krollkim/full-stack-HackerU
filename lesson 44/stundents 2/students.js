$(function(){
    $.get("classes.txt", function(res){
        let temp = JSON.parse(res);
        console.log(temp);
    });
});