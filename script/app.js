let email = {},
    password = {},
    signInButton;

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    let checkbox = document.querySelector(`.c-toggle-password__checkbox`);
    let passwordInput = document.querySelector(`.c-toggle-password__input`);
    checkbox.addEventListener(`change`, function(){

        if(checkbox.checked){
            passwordInput.type = "text";
            console.log("checked")
        }
        else{
            passwordInput.type = "password";
            console.log("unchecked")
        }
        


    })
}

function enableListeners() {
    email.input.addEventListener("blur", function(){
        if(isValidEmailAddress(email.input.value) == false){
            if (isEmpty(email.input.value) == true){
                email.errorMessage = "This field is required"
            }
            else{
                email.errorMessage = "Invalid emailaddress"
            }
            console.log(email.errorMessage)
        }
    });
    password.field.addEventListener("blur", isValidPassword);
    // signInButton.addEventListener("click", )     
}

function getDOMElements() {
    email.errorMessage = "Geen geldige email";
    email.input = document.querySelector(`.js-email-input`);
    email.field = document.querySelector(`.c-form-field--email`)
    
    password.errorMessage = "Geen geldig wachtwoord"
    password.input = document.querySelector(`.c-toggle-password__input`)
    password.field = document.querySelector(`.c-form-field--password`)
    
    signInButton = document.querySelector(`.js-sign-in-button`)
}

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

 const isValidPassword = function(value) {
     if( value.length > 1){
         return true
     }
     else{
         return false
     }
 }

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    getDOMElements();
    enableListeners();
});