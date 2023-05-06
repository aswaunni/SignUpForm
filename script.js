let _pass = document.querySelector('#password');
let _cPass = document.querySelector('#cPassword');
let _errMsg = document.querySelector('#error-msg');

function onChange() {
    if (_pass.value != _cPass.value)
        _errMsg.textContent = '* Passwords do not match.';
    else
        _errMsg.textContent = '';
}