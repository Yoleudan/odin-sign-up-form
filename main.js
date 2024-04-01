const error = document.querySelector('#error');

function confirmPassword(){
    const pw = document.getElementById('password').value
    const pwconfirm = document.getElementById('confirmPassword').value
    if (pw !== pwconfirm || pw === "" || pwconfirm === ""){
        const submitBtn = document.getElementById('submitBtn').disabled = true
        document.getElementById('confirmPassword').setCustomValidity("Invalid field.");
        error.textContent="Passwords do not match!"
        console.log("button disabled")
    }
    else{
        error.textContent=""
    }

}

const pwconfirm = document.getElementById('confirmPassword');

pwconfirm.addEventListener('focusout', function(){
    confirmPassword();
})

const pw = document.getElementById('password')
pw.addEventListener('focusout', function(){
    confirmPassword();
})

pwconfirm.addEventListener('focusin', function(){
    document.getElementById('submitBtn').disabled = false
    document.getElementById('confirmPassword').setCustomValidity("")

})
pw.addEventListener('focusin', function(){
    document.getElementById('submitBtn').disabled = false
    document.getElementById('confirmPassword').setCustomValidity("")

})


