// JavaScript Document
var clickevent = false;
var overevent = false;
var positionleft;
var nowleft;
var direct = 0;

$('#cardback').css("height", $('#cardimage').height());
$(document).on("mousedown", "#cardimage", function(x){
	clickevent = true;
	positionleft = x.clientX;
	direct=0;
});
$(document).on("mouseup", function(x){
	clickevent = false;
	$("#cardimage").css("transform", "rotateZ(0deg)");
	document.getElementById("cardtext").innerText = "왼쪽이나 오른쪽으로 드래그해보세요.";
	if(direct==1){
		$('#cardimage').css("opacity","0");
		$("#cardimage").css("transform", "rotateZ(30deg) translateX(125%) translateY(-40%)");
		$('#cardback').css("transform", "rotateY(90deg)");
		$('#cardbacktext').css("transform", "rotateY(0deg)");
	}
	if(direct==2){
		$('#cardimage').css("opacity","0");
		$("#cardimage").css("transform", "rotateZ(-30deg) translateX(-125%) translateY(-40%)");
		$('#cardback').css("transform", "rotateY(90deg)");
		$('#cardbacktext').css("transform", "rotateY(0deg)");
	}
});
$(document).on("mousemove", function(e){
	if(clickevent==true){
		nowleft=e.clientX;
		halfarea = $('#cardimage').width()/2;
		
		if(innerWidth/2-halfarea<=nowleft&&nowleft<=innerWidth/2+halfarea){
			$("#cardimage").css("transform", "translateX(0)");
			direct=0;
		}
		if(nowleft>positionleft+20){
			$("#cardimage").css("transform", "translateX(20%)");
			document.getElementById("cardtext").innerText = "간단한 자기소개";
			document.getElementById("introtext").innerHTML = "20202868학번 신종혁입니다.<br>컴퓨터를 좋아해서 컴소과를 선택했습니다.<br>독학으로 웹디자인 공부한적있습니다.<br>잘은 다루지 못하지만<br> 포트폴리오를 준비하면서 공부하고 있습니다.";
			direct=1;//오른쪽
		   }
		if(nowleft>positionleft+50){
		   	$("#cardimage").css("transform", "rotateZ(15deg) translateX(50%) translateY(-25%)");
		   }
		if(nowleft>positionleft+100){
		   	$("#cardimage").css("transform", "rotateZ(30deg) translateX(100%) translateY(-50%)");
		   }
		if(nowleft<positionleft-20){
			$("#cardimage").css("transform", "translateX(-20%)");
			document.getElementById("cardtext").innerText = "앞으로 하고싶은 일";
			document.getElementById("introtext").innerHTML = "앞으로 3D 모델링, 각종 프로그래밍 언어, 외국어<br>등을 공부하고자 합니다.";
			direct=2;//왼쪽
		   }
		if(nowleft<positionleft-50){
		   	$("#cardimage").css("transform", "rotateZ(-15deg) translateX(-50%) translateY(-25%)");
		   }
		if(nowleft<positionleft-100){
		   	$("#cardimage").css("transform", "rotateZ(-30deg) translateX(-100%) translateY(-50%)");
		   }
	}
});

setInterval(function(){
	if(clickevent==true||overevent==true){
	   $('#cardtext').css("display", "block");
	}else if(clickevent==false&&overevent==false){
		$('#cardtext').css("display", "none");
	}
})

$(document).on("mouseover","#cardimage", function(){
	overevent=true;
});
$(document).on("mouseleave","#cardimage", function(){
	overevent=false;
});
$(document).on("click","#gotohome_button", function(){window.location="../index.html";});
$(document).on("click","#return_button", function(){window.location.reload();});