// JavaScript Document

function ShowText() {   // eslint-disable-line no-unused-vars
	var text_bg = document.getElementById("text_bg");
	var text = document.getElementById("text");
	text_bg.style.zIndex=3;
	text.style.zIndex=4;
	
	var next_btn = document.getElementById("next_btn");
	next_btn.style.position="relative";
	next_btn.style.zIndex=4;
	next_btn.style.top="auto";
	next_btn.style.left="auto";
	next_btn.style.animationPlayState = "running";
	
	var obj = document.getElementById("obj");
	obj.style.animationPlayState = "paused";
}

function  FadeIn_bg() {  // eslint-disable-line no-unused-vars
	var x = document.getElementById("text_bg");
	x.style.animationPlayState = "running";
}

function  FadeIn_text() {  // eslint-disable-line no-unused-vars
	var x = document.getElementById("text");
	x.style.animationPlayState = "running";
}

// 선택A 화면에서 이미지들과 텍스트, 버튼이 차례로 나타나게 하는 함수. (이미지 3장용)
function ShowImages() {  // eslint-disable-line no-unused-vars
	setTimeout(function() {var img2 = document.getElementById("img2");
	img2.style.zIndex=3; img2.style.animationPlayState="running"}, 1500);
	
	setTimeout(function() {var img3 = document.getElementById("img3");
	img3.style.zIndex=4; img3.style.animationPlayState="running"}, 4000);
	
	
	setTimeout(function() {var x = document.getElementById("text"); x.style.zIndex=6;
	x.style.animationPlayState = "running";}, 6500);
	
	setTimeout(function() {var x = document.getElementById("text_bg"); x.style.zIndex=5;
	x.style.animationPlayState = "running";}, 6500);
	
	setTimeout(function() {var next_btn = document.getElementById("next_btn");
	next_btn.style.position="relative";
	next_btn.style.zIndex=4;
	next_btn.style.top="auto";
	next_btn.style.animationPlayState = "running";
	next_btn.style.left="auto";}, 7500);
}

// 선택B, C 화면에서 이미지들과 텍스트, 버튼이 차례로 나타나게 하는 함수. (이미지 3장용)
function ShowImages2() {  // eslint-disable-line no-unused-vars
	setTimeout(function() {var img2 = document.getElementById("img2");
	img2.style.zIndex=3; img2.style.animationPlayState="running"}, 1500);
	
	setTimeout(function() {var img3 = document.getElementById("img3");
	img3.style.zIndex=4; img3.style.animationPlayState="running"}, 4000);
	
	
	setTimeout(function() {var x = document.getElementById("text"); x.style.zIndex=6;
	x.style.animationPlayState = "running";}, 6500);
	
	setTimeout(function() {var x = document.getElementById("text_bg"); x.style.zIndex=5;
	x.style.animationPlayState = "running";}, 6500);
	
	setTimeout(function() {var btn = document.getElementById("back_btn");
	btn.style.position="relative";
	btn.style.zIndex=4;
	btn.style.top="auto";
	btn.style.animationPlayState = "running";
	btn.style.left="auto";}, 7500);
	
	setTimeout(function() {var btn = document.getElementById("to_index_btn");
	btn.style.position="relative";
	btn.style.zIndex=4;
	btn.style.top="auto";
	btn.style.animationPlayState = "running";
	btn.style.left="auto";}, 7500);
}

// 선택A, B, C 화면에서 이미지들과 텍스트, 버튼이 차례로 나타나게 하는 함수. (이미지 2장용)
function ShowImages3() {  // eslint-disable-line no-unused-vars
	setTimeout(function() {var img2 = document.getElementById("img2");
	img2.style.zIndex=3; img2.style.animationPlayState="running"}, 1500);
	
	
	setTimeout(function() {var x = document.getElementById("text"); x.style.zIndex=6;
	x.style.animationPlayState = "running";}, 4000);
	
	setTimeout(function() {var x = document.getElementById("text_bg"); x.style.zIndex=5;
	x.style.animationPlayState = "running";}, 4000);
	
	setTimeout(function() {var btn = document.getElementById("back_btn");
	btn.style.position="relative";
	btn.style.zIndex=4;
	btn.style.top="auto";
	btn.style.animationPlayState = "running";
	btn.style.left="auto";}, 6500);
	
	setTimeout(function() {var btn = document.getElementById("to_index_btn");
	btn.style.position="relative";
	btn.style.zIndex=4;
	btn.style.top="auto";
	btn.style.animationPlayState = "running";
	btn.style.left="auto";}, 6500);
	
	setTimeout(function() {var next_btn = document.getElementById("next_btn");
	next_btn.style.position="relative";
	next_btn.style.zIndex=4;
	next_btn.style.top="auto";
	next_btn.style.animationPlayState = "running";
	next_btn.style.left="auto";}, 6500);
}

// 지상으로 올라가는 길 1, 2, 3에서 이미지와 텍스트, 버튼이 차례로 나타나게 하는 함수.
function ShowImages4() {  // eslint-disable-line no-unused-vars
	setTimeout(function() {var x = document.getElementById("text"); x.style.zIndex=6;
	x.style.animationPlayState = "running";}, 2000);
	
	setTimeout(function() {var x = document.getElementById("text_bg"); x.style.zIndex=5;
	x.style.animationPlayState = "running";}, 2000);
	
	setTimeout(function() {var btn = document.getElementById("lookBack_btn");
	btn.style.position="relative";
	btn.style.zIndex=4;
	btn.style.top="auto";
	btn.style.animationPlayState = "running";
	btn.style.left="auto";}, 5000);
	
	setTimeout(function() {var btn = document.getElementById("notLookBack_btn");
	btn.style.position="relative";
	btn.style.zIndex=4;
	btn.style.top="auto";
	btn.style.animationPlayState = "running";
	btn.style.left="230px";}, 5000);
}

// 지상으로 가는 중 돌아보는 장면에서 이미지들과 텍스트, 버튼이 차례로 나타나도록 하는 함수.
function ShowImages5() {  // eslint-disable-line no-unused-vars
	setTimeout(function() {var img2 = document.getElementById("img2");
	img2.style.zIndex=3; img2.style.animationPlayState="running"}, 1500);
	
	setTimeout(function() {var img3 = document.getElementById("img3");
	img3.style.zIndex=4; img3.style.animationPlayState="running"}, 4000);
	
	
	setTimeout(function() {var x = document.getElementById("text"); x.style.zIndex=6;
	x.style.animationPlayState = "running";}, 6500);
	
	setTimeout(function() {var x = document.getElementById("text_bg"); x.style.zIndex=5;
	x.style.animationPlayState = "running";}, 6500);

	setTimeout(function() {var next_btn = document.getElementById("next_btn");
	next_btn.style.position="relative";
	next_btn.style.zIndex=4;
	next_btn.style.top="auto";
	next_btn.style.animationPlayState = "running";
	next_btn.style.left="auto";}, 7500);
}

// 일반 스토리 페이지에서 나비를 클릭해야 텍스트와 버튼이 나타나는 방식이 아니라 이미지가 나타난 뒤에 텍스트와 버튼이 자동으로 나타나는 방식을 구현하게 하는 함수. (지상으로 가는 중 돌아보지 않는 장면에서도 사용됨)
function ShowImages6() {  // eslint-disable-line no-unused-vars
	setTimeout(function() {var x = document.getElementById("text"); x.style.zIndex=6;
	x.style.animationPlayState = "running";}, 2000);
	
	setTimeout(function() {var x = document.getElementById("text_bg"); x.style.zIndex=5;
	x.style.animationPlayState = "running";}, 2000);
	
	setTimeout(function() {var next_btn = document.getElementById("next_btn");
	next_btn.style.position="relative";
	next_btn.style.zIndex=4;
	next_btn.style.top="auto";
	next_btn.style.animationPlayState = "running";
	next_btn.style.left="auto";}, 3000);
}

function stopMusic() {  // eslint-disable-line no-unused-vars
	var bgm = document.querySelector('#bgm');
	bgm.pause();
}

function playMusic() {  // eslint-disable-line no-unused-vars
	var bgm = document.querySelector('#bgm');
	bgm.play();
}
