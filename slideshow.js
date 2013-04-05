/*$("#slideshow-button").bind("click",function() {
	
})
*/
var index = 0;
var lessonclothes = new Array
lessonclothes[0] = "imgs/beauty-cheapdress.png";
lessonclothes[1] = "imgs/beauty-cheapdress-walking.png";
lessonclothes[2] = "imgs/beauty-cheapdress-twins.png";
lessonclothes[3] = "imgs/beauty-cheapdress-fiancentwin.png";
lessonclothes[4] = "imgs/beauty-cheapdress-hawaii.png";
lessonclothes[5] = "imgs/beauty-cheapdress-networking.png";
lessonclothes[6] = "imgs/beauty-cheapdress-mom.png";
lessonclothes[7] = "imgs/beauty-cheapdress-baby.png";
lessonclothes[8] = "imgs/beauty-cheapdress-knotts.png";

var lessonclothesCaption = new Array
lessonclothesCaption[0] = "I am second from the right, sitting next to my always beautiful and ageless mother."; 
lessonclothesCaption[1] = " I am on the right.";
lessonclothesCaption[2] = "In Taiwan, no less! Here I am with my twin sister. You know which one I am.";
lessonclothesCaption[3] = "With my twin and fiance.";
lessonclothesCaption[4] = "At a luau in Hawaii.";
lessonclothesCaption[5] = "At a networking event in Los Angeles.";
lessonclothesCaption[6] = "At a garden lunch with my mom.";
lessonclothesCaption[7] = "Sightseeing in Tawaian (with my baby nephew).";
lessonclothesCaption[8] = "At Knotts Berry Farm.";

var lessonclothes_captions = new Array

var beginSlideshow = function() {
	temp = "<img src='" + lessonclothes[index] + "' class='article-image' 	 />";
	temp = temp + "<br />";
	temp = temp + "<a href='#' id='back' onClick='back()' >-Back-</a>";
	temp = temp + "<span class='article-caption'>" + lessonclothesCaption[index] + "</span>";
	temp = temp + "<a href='#' id='next' onClick='next()' >-Next-</a>";
	$("#slideshow img").hide();
	document.getElementById("slideshow").innerHTML = temp;
}

var next = function() {

$("#slideshow").hide();

index = index + 1;
if(index == lessonclothes.length) {
	index = 0;
}
temp = "<img src='" + lessonclothes[index] + "' class='article-image' 	 />";
	temp = temp + "<br />";
	temp = temp + "<a href='#' id='back' onClick='back()' >-Back-</a>";
	temp = temp + "<span class='article-caption'>" + lessonclothesCaption[index] + "</span>";
	temp = temp + "<a href='#' id='next' onClick='next()' >-Next-</a>";
	document.getElementById("slideshow").innerHTML = "";
	document.getElementById("slideshow").innerHTML = temp;
	
	$("#slideshow").fadeIn(500);
}

var back = function() {

$("#slideshow").hide();

index = index - 1;
if(index == -1) {
	index = lessonclothes.length-1;
}
temp = "<img src='" + lessonclothes[index] + "' class='article-image' 	 />";
	temp = temp + "<br />";
	temp = temp + "<a href='#' id='back' onClick='back()' >-Back-</a>";
	temp = temp + "<span class='article-caption'>" + lessonclothesCaption[index] + "</span>";
	temp = temp + "<a href='#' id='next' onClick='next()' >-Next-</a>";
	document.getElementById("slideshow").innerHTML = "";
	document.getElementById("slideshow").innerHTML = temp;
	
	$("#slideshow").fadeIn(500);
	
}