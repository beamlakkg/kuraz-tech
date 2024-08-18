var btn= document. getElementById("mobilemenu");
var mobilenav= document.getElementById("mobilenav");
mobilenav.style.left = "-100%";
btn.onclick= function(){
    if(mobilenav.style.left== "-100%"){
        mobilenav.style.left= "50%";
        btn.src="images/icon-close.svg";
    }
    else{
        mobilenav.style.left="-100%";
        btn.src = "images/icon-hamburger.svg";

    }
}
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector("#mobilenav");
    const connectItems = document.querySelectorAll(".connect-text");
  
    connectItems.forEach(item => {
      item.addEventListener("click", function() {
        const dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
      });
    });
  });
  