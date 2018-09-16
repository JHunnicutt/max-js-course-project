document.querySelector('button').onclick = function () {
  alert("JavaScript is loaded");
}

document.getElementById('changeText').onclick = function () {
  document.querySelector('h1').innerHTML = "Heading has been changed";
}
