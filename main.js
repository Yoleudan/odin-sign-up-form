const error = document.querySelector('#error');
const pwconfirm1 = document.getElementById('confirmPassword');
const pw1 = document.getElementById('password')

function confirmPassword(){
    const pw = document.getElementById('password').value
    const pwconfirm = document.getElementById('confirmPassword').value
    if (pw !== pwconfirm || pw === "" || pwconfirm === ""){
        const submitBtn = document.getElementById('submitBtn').disabled = true
        document.getElementById('confirmPassword').setCustomValidity("Invalid field.");
        error.textContent="Passwords do not match!"
        pw1.style.border = "2px solid red"
        pwconfirm1.style.border = "2px solid red"
        console.log("button disabled")
    }
    else{
        error.textContent="match!"
        error.style.color= "#05f551"
        pw1.style.border="2px solid #05f551"
        pwconfirm1.style.border="2px solid #05f551 "
    }

}



pwconfirm1.addEventListener('focusout', function(){
    confirmPassword();
})


pw1.addEventListener('focusout', function(){
    confirmPassword();
})

pwconfirm1.addEventListener('focusin', function(){
    document.getElementById('submitBtn').disabled = false
    document.getElementById('confirmPassword').setCustomValidity("")

})
pw1.addEventListener('focusin', function(){
    document.getElementById('submitBtn').disabled = false
    document.getElementById('confirmPassword').setCustomValidity("")

})


