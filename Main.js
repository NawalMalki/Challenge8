var Mail = document.querySelector(".email");
var Out = document.querySelector(".output");
var SUB = document.querySelector(".Submit");

SUB.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    
    if (Mail.value === "") {
        Out.textContent = "This field is required";
    } else {
        Out.textContent = ""; // Clear any previous error message
    }
});


const hamburgerToggle = document.querySelector(".MenuIcon");
const mobileNav = document.querySelector(".SideMenu");
const CloseMenu = document.querySelector(".closeMenu"); 

hamburgerToggle.addEventListener("click", function () {
    mobileNav.style.display = "block";
});


CloseMenu.addEventListener("click" , function(){
    mobileNav.style.display = "none"; 
})