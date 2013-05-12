define([], function () {
	return {
		init: function (initEvt) {
			// runs the first time the page is loaded
			console.log("hit remote.init");
		},
 
		beforeShow: function (beforeShowEvt) {
			// runs before the page is shown
			console.log("hit remote.beforeShow");
		},
        
		show: function (showEvt) {
			// runs after the page is shown
			console.log("hit remote.show");
		},
        
		onNavButtonClick: function() {
			app.toggleMenu();  
		}
	}
});