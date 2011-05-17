$(document).ready(function() {
	
	/***********************
	Social Media Icon Hover Reveal
	***********************/
	
	$('.facebook').hover( function() {
		$(this).animate({
			width: '45px'
			}, 'fast');
	}, function () {
		$(this).stop(true).animate({
			width: '32px'
		}, 'fast');
	});
	
	$('.twitter').hover( function() {
		$(this).animate({
			width: '45px'
			}, 'fast');
	}, function () {
		$(this).stop(true).animate({
			width: '32px'
		}, 'fast');
	});
	
	$('.youtube').hover( function() {
		$(this).animate({
			width: '45px'
			}, 'fast');
	}, function () {
		$(this).stop(true).animate({
			width: '32px'
		}, 'fast');
	});
	
});