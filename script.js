let button = document.getElementById("checkBtn");

button.addEventListener("click", function() {

    let password = document.getElementById("password").value;

    let result = document.getElementById("result");

    let suggestion = document.getElementById("suggestion");
    let meter = document.getElementById("meter");

    if(password.length < 8){

        result.innerHTML = "Weak Password";
        result.style.color = "red";

        suggestion.innerHTML = "Password should be at least 8 characters";
            meter.style.backgroundColor = "red";


    }
    else if(/[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[@#$%!]/.test(password))
    {

        result.innerHTML = "Strong Password";
        result.style.color = "green";

        suggestion.innerHTML = "Excellent Password";
        meter.style.backgroundColor = "green";

    }
    else{

        result.innerHTML = "Medium Password";
        result.style.color = "orange";

        suggestion.innerHTML = "Add a special character for a stronger password";
        meter.style.backgroundColor = "orange";
    }

});