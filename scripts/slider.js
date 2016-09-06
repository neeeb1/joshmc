var initial_slider = 1;
var next_slider = 2;

$(document).ready(function() {
	$("#slider > img#1").fadeIn(300);

	startSlider();

	$("#slider").mouseenter(stopSlider);
	$("#slider").mouseleave(startSlider);
});

function startSlider() {
	count = $("#slider > img").length;

	loop = setInterval(function() {
		if(next_slider > count) {
			next_slider = 1;
			initial_slider =1;
		}
		$("#slider > img").fadeOut(0);
		$("#slider > img#" + next_slider).fadeIn(300);

		initial_slider = next_slider;
		next_slider = next_slider + 1;
	
	}, 5500)


}

function stopSlider() {
	window.clearInterval(loop);
}