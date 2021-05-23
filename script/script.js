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

function  FadeIn_bg() {
	var x = document.getElementById("text_bg");
	x.style.animationPlayState = "running";
}

function  FadeIn_text() {
	var x = document.getElementById("text");
	x.style.animationPlayState = "running";
}
