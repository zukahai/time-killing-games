// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var keo = document.getElementById("keo");
var bao = document.getElementById("bao");
var bua = document.getElementById("bua");
// When the page loads, show the modal
window.onload = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span.onclick = function () {
    modal.style.display = "none";
}

keo.onclick = function () {
    modal.style.display = "none";
    localStorage.setItem("choice", "2");
}

bao.onclick = function () {
    modal.style.display = "none";
    localStorage.setItem("choice", "3");
}

bua.onclick = function () {
    modal.style.display = "none";
    localStorage.setItem("choice", "1");
}

// hover bua
bua.onmouseover = function () {
    var img = document.getElementById("choice");
    img.src = "./assets/images/1.png";
}

keo.onmouseover = function () {
    var img = document.getElementById("choice");
    img.src = "./assets/images/2.png";
}

bao.onmouseover = function () {
    var img = document.getElementById("choice");
    img.src = "./assets/images/3.png";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
