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
	next_btn.style.left="auto";}, 7500);
}

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
	btn.style.left="auto";}, 7500);
	
	setTimeout(function() {var btn = document.getElementById("to_index_btn");
	btn.style.position="relative";
	btn.style.zIndex=4;
	btn.style.top="auto";
	btn.style.left="auto";}, 7500);
}

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
	btn.style.left="auto";}, 6500);
	
	setTimeout(function() {var btn = document.getElementById("to_index_btn");
	btn.style.position="relative";
	btn.style.zIndex=4;
	btn.style.top="auto";
	btn.style.left="auto";}, 6500);
	
	setTimeout(function() {var next_btn = document.getElementById("next_btn");
	next_btn.style.position="relative";
	next_btn.style.zIndex=4;
	next_btn.style.top="auto";
	next_btn.style.left="auto";}, 6500);
}
