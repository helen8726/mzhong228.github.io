if (document.documentElement.clientWidth > 768) {
    // init controller
    var controller = new ScrollMagic.Controller();if (document.documentElement.clientWidth > 768) {document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`,
				direct: true
			}
		}
	}).start()
		
})document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`,
				direct: true
			}
		}
	}).start()
		
})document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`,
				direct: true
			}
		}
	}).start()
		
})document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`,
				direct: true
			}
		}
	}).start()
		
})document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`,
				direct: true
			}
		}
	}).start()
		
})$(document).ready(function(){

	var controller = new ScrollMagic.Controller();
	
	var fadeInTimeline = new TimelineMax();
var fadeInFrom = TweenMax.from("#opacity", 1, {
    autoAlpha: 0
});
var fadeInTo = TweenMax.to("#opacity", 1, {
    autoAlpha: 1
});
fadeInTimeline
    .add(fadeInFrom)
    .add(fadeInTo);
 
new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        offset: 200,
    })
    .setTween(fadeInTimeline)
    .duration(400)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

});



