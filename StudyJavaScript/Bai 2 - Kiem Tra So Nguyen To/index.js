const { isNull } = require("util");

function checkNguyenTo() {
    var number = document.getElementById('txtNumber').value;
    var so = document.forms["form-input"]["inputNumber"].value;
    if (so == "" || so == null) {
        document.getElementById('displayResult').innerHTML = "Nhap day du"
        return false;
    }
    var isNguyenTo1 = isNguyenTo(number);
    
    if (isNguyenTo1) {
        document.getElementById('displayResult').innerHTML = number + " la so nguyen to"
    } else {
        document.getElementById('displayResult').innerHTML = number + " khong phai la so nguyen to"
    }
}
function isNguyenTo(number) {
    for (var i = 2; i < number - 1; i++) {
        if (number % i === 0) {
            return false;
        } 
    }
    return true;
}