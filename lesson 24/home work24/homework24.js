function changeBtn(){
    let btn = document.getElementById("btn1");
    console.log(btn)
    if(btn.innerText === "on"){
       
        btn.innerText = "off";
        btn.style.backgroundColor = "red";
        btn.style.color = "white"
    }
    else{
       btn.innerText = "on";
       btn.style.backgroundColor = "green";
       btn.style.color = "white"
    }
}