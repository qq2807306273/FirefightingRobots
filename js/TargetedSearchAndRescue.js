var button = document.getElementById("button");
button.addEventListener("click", function() {
  window.location.href = "../page/RealTimeFireDetection.html";
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

function playVideo() {
	var video = document.getElementById('build');
	video.play();
}