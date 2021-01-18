
function validation() {
    var username = document.querySelector('[name="txtUsername"]').value;
    var password = document.querySelector('[name="txtPassword"]').value;
    var email = document.querySelector('[name="txtEmail"]').value;
    var phone = document.querySelector('[name="txtPhone"]').value;

    var myReUsername = new RegExp("[a-z0-9_-]{6,32}$");
    var myRePassword = new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})");
    var myReEmail = new RegExp("[a-z0-9A-Z]{15,25}//@[a-z]//.[]");
    var myRePhone = new RegExp("[0-9]{10}$");

    //Check Username
    if (myReUsername.test(username) == false) {
        console.log("User must be have 6 - 12 char");
        return false;
    }

    //Check password
    if (myRePassword.test(password) == false) {
        console.log("Password must be have 6 - 20 character");
        return false;
    }


    //check Email
    if (myReEmail.test(email) == false) {
        console.log("Wrong Email Format!");
        return false;
    }

    //check Phone
    if (myRePhone.test(phone) == false) {
        console.log("Wrong Phone Format!");
        return false;
    }
}
function check() {
    var password = document.getElementById('input_password1').value;
    var rePassword = document.getElementById('input_password2').value;

    if (password === rePassword) {
        document.getElementById('message').style.color = 'Green';
        document.getElementById('message').innerHTML = 'Matching';
    } else {
        document.getElementById('message').style.color = 'Red';
        document.getElementById('message').innerHTML = 'Not Matching';
    }
}
