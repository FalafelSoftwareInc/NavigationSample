define([], function () {
	return {
		init: function (initEvt) {
            // runs the first time the page is loaded
			console.log("hit home.init");
		},
 
		beforeShow: function (beforeShowEvt) {
            // runs before the page is shown
			console.log("hit home.beforeShow");
		},
        
		show: function (showEvt) {
            // runs after the page is shown
			console.log("hit home.show");
            
			// hide the splashscreen now
			navigator.splashscreen.hide();
		},

        onNavButtonClick: function() {
             app.toggleMenu();  
        }
	}
});