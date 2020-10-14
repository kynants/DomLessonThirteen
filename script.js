// https://www.w3schools.com/js/js_window.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_win_inner

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("demo");
x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";