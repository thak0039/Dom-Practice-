let pera = document.querySelectorAll('p');

function changetext() {
    pera[0].innerHTML = "I have change the inner html by javascript dom content";
    pera[0].style = "color:blue";
    pera[1].style = "color:red";
}


var imgdoc = document.getElementById('getnewimage');

function changenewImage(newpath) {
    imgdoc.src = newpath;

}
imgdoc.setAttribute("class", "myimg");

let classsub = {

    sub1: "java",
    sub2: "css",
    sub3: "html",
    sub4: "bootstrap"

};
const getkey = Object.keys(classsub);

getkey.forEach((key) => {
    // console.log(`${classsub[key]}`);

    document.write(` ${key}: ${classsub[key]}` + "<br>");

});

for (let key in classsub) {
    document.write(key + ":" + classsub[key] + "<br>")

}