var picture1 = '/IMG_2194.JPG'
var picture2 = '/IMG_2231.JPG'

var btn1 = document.getElementById('btn-before')
var btn2 = document.getElementById('btn-after')

btn1.onclick = function(){
    document.getElementById('img-content').src = picture1
};

btn2.onclick = function(){
    document.getElementById('img-content').src = picture2
};