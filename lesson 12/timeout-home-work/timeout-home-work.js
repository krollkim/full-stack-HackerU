function currentTime() {
  var date = new Date(); 
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  
  
    document.getElementById("clock").innerHTML = hh + " : " + mm + " : " + ss;

    setInterval(currentTime, 1000);

}

