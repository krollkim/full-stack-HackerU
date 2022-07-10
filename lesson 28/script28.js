/**making a circle that changes size on click **/

let width = 100;
let temp = 50;

function circle(){
    if (width >= 500){
        temp = -50;
    }else if(width < 100){
        temp = 50;
    }
        width += temp;
    
    


const circle = document.querySelector("#output1");

   circle.style.width = width + `px`;
   circle.style.height = width + `px`;
   circle.innerHTML = width + `px`;
  
   if(width == 250){
    circle.style.backgroundColor = "green";
}else if(width >= 400){
    circle.style.backgroundColor = "red";
}else{
    circle.style.backgroundColor = "";
}

if(width >= 300){
    circle.style.borderRadius = 0;
}else if(width < 300){
    circle.style.borderRadius = "";
}

 

}


const contact = new form(`contact-form`, `contact-information`, [
    {type: 'text', key: 'firstName', name: 'first name'},
    {type: 'text', key: 'lastName', name: 'last name'},
    {type: 'tel', key: 'phone', name: 'phone number'},
    {type: 'number', key: 'id', name: 'id'}
])