//
$(".listLi1").mouseenter(function() {
	$(".listDiv").slideDown(1000);
	$(".listDiv").html($(this).text())
})
$(".listLi1").mouseleave(function() {
	$(".listDiv").slideUp(500);
})
//轮播图
var n = 1;
var timer = null;
timer = setInterval(move, 2000)

function move() {
	$(".banner-div .banner-ul li").eq(n).fadeIn(600);
	$(".banner-div .banner-ul li").eq(n).siblings("li").fadeOut(600);
	n++;
	if(n == $(".banner-div .banner-ul li").length) {
		n = 0
	}
}

//显示list
$(".list-ul li").hover(function() {
	$(this).css("color", "#FF6B0C").css("border-bottom", "1px solid #FF6B0C").css("cursor", "pointer");
	$(this).siblings("li").css("color", "black").css("border", "none")
})

//
$(".bannerUl li").hover(function() {
	$(".show-div").show();
	$(".show-div").html($(this).text())
}, function() {
	$(".show-div").hide();
})
//显示p标签
$(".show-li").append("<p class='show-p'></p>");
$(".show-li").css("position", "relative").css("overflow", "hidden");
$(".show-p").css({ "width": "100%", "height": "100px", "background": "orange", "opacity": ".8", "position": "absolute", "bottom": "0", "transform": "translateY(110%)" });
$.each($(".show-li"), function(a) {
	$(this).hover(function() {
		$(".show-p").eq(a).css("transform", "translateY(10%)").css("transition", ".5s")
	}, function() {
		$(".show-p").eq(a).css("transform", "translateY(110%)").css("transition", ".5s")
	})
});



$(".turnLeft-li").css("cursor","pointer");
$(".turnRight-li").css("cursor","pointer");


var n=0;
$(".turnLeft-li").click(function(){
	n--;
	if(n<=-5){
		n=-5
	}else{
	$("#showUl").animate({"left":n*($("#showUl li").width()+13)+"px"})	
	}
	
})
$(".turnRight-li").click(function(){
	n++;
	if(n>=0){
		n=0
	}else{
	$("#showUl").animate({"left":n*($("#showUl li").width()+13)+"px"})		
	}

})