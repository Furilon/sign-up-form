const pass = document.getElementById('pass');
const conf = document.getElementById('conf');

function validatePassword() {
    if (pass.value != conf.value) {
        conf.setCustomValidity("Passwords don't match");
    } else {
        conf.setCustomValidity('');
    }
}

pass.onchange = validatePassword;
conf.onkey_up = validatePassword;
