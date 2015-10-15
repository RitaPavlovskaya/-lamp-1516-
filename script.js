function counter(el) {
    var wrapper = document.createElement('DIV');
    wrapper.innerHTML = el.value;
    var len = (wrapper.textContent || wrapper.innerText).length;
    document.getElementById('count').innerHTML = len;
    document.getElementById('kb').innerHTML = (200 - len);
    if (len > 200) {
        alert("Count symbols can't be more than 200. Stop it, please!)))");
    }
}

function check() {
    editPassword = document.contacts.editPassword.value.toString();
    if (editPassword == "") {
        alert("Enter password");
        document.contacts.editPassword.focus();
    }
    checkPassword = document.contacts.checkPassword.value.toString();
    if (checkPassword == "") {
        alert("Please enter password again");
        document.contacts.checkPassword.focus();
    }
    if (editPassword != checkPassword) {
        alert("Passwords must be the same");
    }
    email = document.contacts.email.value.toString();
    if (email != "") {
        MyReg = /^[a-z\d]+@[a-z\d]+(.([a-z\d])+)+$/i;
        if (!(MyReg.test(email))) {
            alert("Enter correct E-mail");
            document.contacts.email.focus();
            document.contacts.email.select();
            return false;
        }
    } else {
        alert("Enter e-mail!");
        document.contacts.email.focus();
    }

}