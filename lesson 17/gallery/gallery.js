var current = 0;

function createGallery() {
    
  for (var x = 1; x <= 10; x++) {
    document.getElementById("gallery").innerHTML += `<img src="images/img (${x}).jpg" alt="image discription" onclick="showNext()">`;
    
  }

    showNext();

}
var timeOut;

function showNext(){
    clearTimeout(timeOut);
   var images = document.getElementById("gallery").children;

   for(var x = 0; x < images.length; x++){
       images[x].style.display = "none";
   }

images[current].style.display = "block";
    current++;

    if(current == images.length){
        current = 0;
    }


    timeOut = setTimeout(showNext, 3 * 1000);
}
