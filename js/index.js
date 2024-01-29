var center = document.getElementById("center");
var indexVideo = document.getElementById("index");


indexVideo.addEventListener("timeupdate", function() {
	// 每当视频时间更新时，检查是否播放完成
	if (indexVideo.currentTime === indexVideo.duration) {
		// 如果视频已经播放完成，则将center的zIndex设置为5，并进行跳转
		center.style.zIndex = 5;
	}
	
	// 如果视频重新开始播放，则将center的zIndex设置为-1
	if (indexVideo.currentTime === 0) {
			center.style.zIndex = -1;
	}
});


// 在点击事件处理程序中进行跳转操作
center.addEventListener("click", function() {
	window.location.href = "page/RealTimeFireDetection.html";
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

function playVideo() {
	var video = document.getElementById('index');
	video.play();
}