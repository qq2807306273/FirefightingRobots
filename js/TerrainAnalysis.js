document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

var button = document.getElementById("button");
button.addEventListener("click", function() {
  window.location.href = "../page/RealTimeFireDetection.html";
});