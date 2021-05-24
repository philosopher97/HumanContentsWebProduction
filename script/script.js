// JavaScript Document

function ShowText() {   // eslint-disable-line no-unused-vars
	var text_bg = document.getElementById("text_bg");
	var text = document.getElementById("text");
	//var obj = document.getElementById("obj");
	text_bg.style.zIndex=3;
	text.style.zIndex=4;
	//obj.style.zIndex=-1;
	
	var next_btn = document.getElementById("next_btn");
	next_btn.style.position="relative";
	next_btn.style.zIndex=4;
	next_btn.style.top="auto";
	next_btn.style.left="auto";
}

