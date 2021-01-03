//

  $(document).ready(function(){
	var top_header = $('header');
	top_header.css({'background-position':'center center'}); // better use CSS

$(window).scroll(function () {
var st = $(this).scrollTop();
top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
});
});

//

$(document).scroll(function(){
	if($(document).scrollTop() > 300){
		$(".header-bottom").addClass("header-top");

	}else
	{
	$(".header-bottom").removeClass("header-top");
	}
});	


//

$('.nav-btn').click(function(){
	$('.nav').addClass("center-mobile");
	$('.nav').fadeIn();
	$('.mobile-menu').hide();
	$('.close-btn').show();
});

//

$('.close-btn').click(function(){
	$('.nav').fadeOut();
	$('.mobile-menu').show();
	$('.close-btn').hide();
});

//

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1600, 'easeInOutQuint');
        event.preventDefault();
    });
});

//

$('.nav>li>a').click(function(){
    $('.nav').fadeOut();
    $('.mobile-menu').show();
	$('.close-btn').hide();
});
