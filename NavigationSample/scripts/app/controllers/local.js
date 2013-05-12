define([], function () {
	return {
		init: function (initEvt) {
			// runs the first time the page is loaded
			console.log("hit local.init");
		},
 
		beforeShow: function (beforeShowEvt) {
			// runs before the page is shown
			console.log("hit local.beforeShow");
		},
 
		show: function (showEvt) {
			// runs after the page is shown
			console.log("hit local.show");
		},
        
		onNavButtonClick: function() {
			app.toggleMenu();  
		}
	}
});