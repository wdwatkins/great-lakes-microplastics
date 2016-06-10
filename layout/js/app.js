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
	.addTo(controller);

//Oyster					
new ScrollMagic.Scene({
	triggerElement: "#environmentalEffects",
	offset:600
	})
	.setClassToggle("#oyster", "awake") // add class toggle
	.addTo(controller);

//Stream		
new ScrollMagic.Scene({
	triggerElement: "#environmentalEffects",
	offset:1000
	})
	.setClassToggle("#stream", "awake") // add class toggle
	.addTo(controller);

//Lakes	
new ScrollMagic.Scene({
	triggerElement: "#environmentalEffects",
	offset:1500
	})
	.setClassToggle("#lakes", "awake") // add class toggle
	.addTo(controller);
	
//Environmental Hazards text	
new ScrollMagic.Scene({
	triggerElement: "#environmentalHazards",
	})
	.setClassToggle("#envHazardsSection", "awake") // add class toggle
	.addTo(controller);
	
//Bead ban text
new ScrollMagic.Scene({
	triggerElement: "#beadBan",
	})
	.setClassToggle("#beadBanSection", "awake") // add class toggle
	.addTo(controller);

//Relative Abundance figure appears
new ScrollMagic.Scene({
	triggerElement: "#relativeAbundance",
	})
	.setClassToggle("#figure1Section", "awake") // add class toggle
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
	.addTo(controller);
	
//Figure3 appears	
new ScrollMagic.Scene({
	triggerElement: "#landUse",
	offset:50
	})
	.setClassToggle("#landUseFig", "awake") // add class toggle
	.on("enter leave", updateBox)
	.addTo(controller);

//Figure3 is pinned	
new ScrollMagic.Scene({
	triggerElement: "#landUse",
	duration:100
	})
	.setPin('#landUse')
	.triggerHook(0)
	.on("enter leave", updateBox)
	.addTo(controller);

//Second text appears	
new ScrollMagic.Scene({
	triggerElement: "#landUse",
	offset:100
	})
	.setClassToggle("#figure3Text2", "awake") // add class toggle
	.triggerHook(0)
	.addTo(controller);
	
//Sorting	
new ScrollMagic.Scene({
	triggerElement: "#landUse",
	duration:100,
	offset:100
	})
	.setPin('#landUse')
	.triggerHook(0)
	.on("enter leave", updateBox)
	.on("enter", function() {
    	triggerOnce("landUseTrigger");
  	})
	.addTo(controller);

//Conclusion section appears
new ScrollMagic.Scene({
	triggerElement: "#conclusion",
	offset:-100
	})
	.setClassToggle("#conclusionSection", "awake") // add class toggle
	.addTo(controller);
	
//reference section appears
new ScrollMagic.Scene({
	triggerElement: "#referenceBox",
	offset:-100
	})
	.setClassToggle("#referenceBox", "awake") // add class toggle
	.addTo(controller);


$('#referenceTitle').on('click', function(){
	$('#referenceTitle').toggleClass('corners');
	$('#arrow').toggleClass('rotate');
	$('#referencePanels').slideToggle('slow');
});

});