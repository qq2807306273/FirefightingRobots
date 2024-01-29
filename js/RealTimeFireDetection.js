// 无需等待，点击warning图标直接跳转指定链接
var warning = document.getElementById("warning");
var JiNanMap = document.getElementById("JiNanMap");

// 监听视频播放进度更新事件
JiNanMap.addEventListener("timeupdate", function() {
  if (!warning.dataset.show && JiNanMap.currentTime / JiNanMap.duration >= 0.25) {
    warning.style.zIndex = 5; // 当视频播放进度达到25%时，将warning的zIndex设置为5
    warning.dataset.shown = "true";
  }
  
  if (JiNanMap.currentTime === 0) {
    warning.style.zIndex = -1; // 当视频重新开始播放时，将warning的zIndex设置为-1
  }
});

warning.addEventListener("click", function() {
  window.location.href = "../page/RoutePlanning.html";
});


// 按钮点击跳转至"智能终端认证系统"页面
var button = document.getElementById("button");
button.addEventListener("click", function() {
  window.location.href = "../index.html";
});

// 按钮点击跳转至"地形地势智能分析系统"页面
var terrain = document.getElementById("terrain");
terrain.addEventListener("click", function() {
  window.location.href = "../page/TerrainAnalysis.html";
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

function playVideo() {
	var video = document.getElementById('JiNanMap');
	video.play();
}