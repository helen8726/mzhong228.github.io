if(document.documentElement.clientWidth>768){
	var controller=new ScrollMagic.Controller();
	new 		ScrollMagic.Scene({triggerElement:"#parallex",triggerHook:"onEnter",}).duration('200%').setTween("#parallex",{backgroundPosition:"90% 100%",ease:Linear.easeNone}).addTo(controller);
	
	new ScrollMagic.Scene({triggerElement:"#slidein",triggerHook:"onLeave",}).setPin("#slidein").addTo(controller);
	
	
	var fromLeftTimeline=new TimelineMax();
	var fromLeftFrom=TweenMax.from("#left",1,{x:-300,y:0,autoAlpha:0.5});
	var fromLeftTo=TweenMax.to("#left",1,{x:0,y:-100,autoAlpha:1});fromLeftTimeline.add(fromLeftFrom).add(fromLeftTo);
	
	new ScrollMagic.Scene({triggerElement:"#grey",offset:100,}).setTween(fromLeftTimeline).duration(1200).addTo(controller);
	
	
	
	var iphoneTimeline=new TimelineMax();
	var iphoneFrom=TweenMax.from("#right",1,{x:0,y:200,autoAlpha:0});
	var iphoneTo=TweenMax.to("#right",1,{x:0,y:-150,autoAlpha:1});iphoneTimeline.add(iphoneFrom).add(iphoneTo);
	
	new ScrollMagic.Scene({triggerElement:"#ripple",offset:100,}).setTween(iphoneTimeline).duration(1400).addTo(controller);
	
	
	
	var fadeInTimeline=new TimelineMax();
	
	var fadeInFrom=TweenMax.from("#opacity",1,{x:-500,y:200,autoAlpha:0});
	
	var fadeInTo=TweenMax.to("#opacity",1,{y:-100,autoAlpha:1});fadeInTimeline.add(fadeInFrom).add(fadeInTo);
	
	new ScrollMagic.Scene({triggerElement:"#gutenberg",offset:0,}).setTween(fadeInTimeline).duration(1200).addTo(controller);
	
	
	
	
	
	
	var fromBottomTimeline=new TimelineMax();
	var fromBottomFrom=TweenMax.from("#bottom",1,{y:400,autoAlpha:0});
	var fromBottomTo=TweenMax.to("#bottom",1,{y:-150,autoAlpha:1});
	fromBottomTimeline.add(fromBottomFrom).add(fromBottomTo);
	new ScrollMagic.Scene({triggerElement:"#black",offset:100,}).setTween(fromBottomTimeline).duration(1200).addTo(controller);}






