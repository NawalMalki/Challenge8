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
