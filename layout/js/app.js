$(document).ready(function(){

// init controller
var controller = new ScrollMagic.Controller();
var triggers = {};
var triggerOnce = function(event) {
  if (!triggers.hasOwnProperty(event)) {
    triggers[event] = false;
  }
  if (!triggers[event]) {
      var e = new Event(event);
      document.dispatchEvent(e);
      triggers[event] = true;
    }
}

//Fish
new ScrollMagic.Scene({
	triggerElement: "#environmentalEffects",
	offset: 200
	})
	.setClassToggle("#fish", "awake") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

//Oyster					
new ScrollMagic.Scene({
	triggerElement: "#environmentalEffects",
	offset:600
	})
	.setClassToggle("#oyster", "awake") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

//Stream		
new ScrollMagic.Scene({
	triggerElement: "#environmentalEffects",
	offset:1000
	})
	.setClassToggle("#stream", "awake") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

//Lakes	
new ScrollMagic.Scene({
	triggerElement: "#environmentalEffects",
	offset:1500
	})
	.setClassToggle("#lakes", "awake") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	
//Text after Lakes	
new ScrollMagic.Scene({
	triggerElement: "#environmentalEffects",
	offset:1500
	})
	.setClassToggle("#figure2Text", "awake") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	
//Relative Abundance figure appears
new ScrollMagic.Scene({
	triggerElement: "#relativeAbundance",
	})
	.setClassToggle("#figure2Section", "awake") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	
// show pin state
function updateBox (e) {
	if (e.type === "enter") {
		$("#pin p").text("Pinned.");
	} else {
		$("#pin p").text("Unpinned.");
		}
}

//Figure 3 section appears
new ScrollMagic.Scene({
	triggerElement: "#landUse",
	})
	.setClassToggle("#figure3Section", "awake") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	
//Figure3 appears	
new ScrollMagic.Scene({
	triggerElement: "#landUse",
	offset:150
	})
	.setClassToggle("#landUseFig", "awake") // add class toggle
	.on("enter leave", updateBox)
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

//Figure3 is pinned	
new ScrollMagic.Scene({
	triggerElement: "#landUse",
	duration:100,
	offset:590
	})
	.setPin('#landUse')
	.on("enter leave", updateBox)
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

//First text disappears	
new ScrollMagic.Scene({
	triggerElement: "#landUse",
	offset:690
	})
	.setClassToggle("#first", "gone") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

//Second text appears	
new ScrollMagic.Scene({
	triggerElement: "#landUse",
	offset:690
	})
	.setClassToggle("#second", "here") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	
//Sorting	
new ScrollMagic.Scene({
	triggerElement: "#landUse",
	duration:100,
	offset:690
	})
	.setPin('#landUse')
	.on("enter leave", updateBox)
	.on("enter", function() {
    	triggerOnce("landUseTrigger");
  	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

$('#referenceTitle').on('click', function(){
	$('#referenceTitle').toggleClass('corners');
	$('#arrow').toggleClass('rotate');
	$('#referencePanels').slideToggle('slow');
});

});