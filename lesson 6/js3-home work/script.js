
/*A*/
function getName(){

alert(document.getElementById("user-name").value);
console.log(document.getElementById("user-name").value);
}

/*B*/
function calc(){
 
    
  var  x = document.getElementById("numX");
  var  y = document.getElementById("numY");
  
/*C*/
    alert(x.value * y.value);

/*D*/
    x.value = "";
    y.value = "";
    
}
/*F*/
function calc1(){
    var  a = document.getElementById("num3");
    var  b = document.getElementById("num4");
    var  c = document.getElementById("num5");
    
    alert(Number(a.value) + Number(b.value) + Number(c.value));

    a.value = "";
    b.value = "";
    c.value = "";
}