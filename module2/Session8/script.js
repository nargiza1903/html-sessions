document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); //Prevents the form from submiting the traditional way

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    alert("Thank you, " + name + "! We have received your email: " + email);
})