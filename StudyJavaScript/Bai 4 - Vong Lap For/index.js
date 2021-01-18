

function myFunction() {
    var number = document.getElementById('txtNumber').value;
    var btnSubmit = document.getElementById('btn-submit');
    number = parseInt(number);

    console.log(number);
    var html = "";
    for (let i = 0; i < number; i++) {
        html = html + i + '<br/>';
    }
    document.getElementById('displayNumber').innerHTML = html;
}