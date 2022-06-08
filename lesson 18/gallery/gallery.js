var current = 0;

function createGallery() {
    
  for (var x = 1; x <= 10; x++) {
    document.getElementById("gallery").innerHTML += `<img src="images/img (${x}).jpg" alt="image discription">`;
    
    document.getElementById("sideBar").innerHTML += `<img src="images/img (${x}).jpg" alt="image discription">`;
    
  }

    showNext();

}
var timeOut;

function showNext(){
    clearTimeout(timeOut);
   var images = document.getElementById("gallery").children;
   var sideBarImg = document.getElementById("sideBar").children;
   

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

function showPrev(){
    clearTimeout(timeOut);

   var images = document.getElementById("gallery").children;

   for(var x = 0; x < images.length; x++){
       images[x].style.display = "none";
   }

    current--;

   if(current < 0){
        current = images.length - 1;
    }

images[current].style.display = "block";
   

    


    timeOut = setTimeout(showNext, 3 * 1000);
}
