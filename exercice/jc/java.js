var txt=document.getElementById("texte");
function b(){	
	txt.style.fontWeight="bold";
}

var txt=document.getElementById("texte");
function i(){	
	txt.style.fontStyle= "italic";
}

var txt=document.getElementById("texte");
function inderline(){	
	txt.style.textDecoration="inderline";
}
var txt=document.getElementById("texte");
function changeFontsize(){
	txt.style.fontSize="select value";
}
var txt=document.getElementById("texte");
function changename(){
	txt.style.fontFamily="select value";
}
$(document).ready(function(){
	$(".carre button").css("opacity", "0");
  $(".carre").find("div").hover(function(){
    $(this).css("opacity", "0.4");
	   $(this).find("button").css("opacity", "1");
    }, function(){
    $(this).css("opacity", "1");
	  $(this).find("button").css("opacity", "0");
  });
});
	