$(function() {
	$(".btn-submenu").click(function(e) {
		e.preventDefault();
		if($(this).parent().hasClass("click")) {
			$(this).parent().removeClass("click").removeClass("open");
		} else {
			$(this).children("li").removeClass("click").removeClass("open");
			$(this).parent().addClass("click").addClass("open");
		}
	});
	$("nav.DropDownMenu > ul > li:has(ul)").mouseenter(function() {
		if($(this).css("float") == "left") if(!$(this).parent().children("li").hasClass("click")) $(this).addClass("open");
	}).mouseleave(function(){
		if($(this).css("float") == "left") if(!$(this).hasClass("click")) $(this).removeClass("open");
	});

	/*Mobile version opening*/
	$("body > header > div > svg").click(function() {
		$("body > header > div > nav").toggleClass("open");
	});
});
