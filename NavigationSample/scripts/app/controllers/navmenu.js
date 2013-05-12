define([], function () {
	return {
		init: function (initEvt) {
            // runs the first time the page is loaded
			console.log("hit navmenu.init");
		},
 
		beforeShow: function (beforeShowEvt) {
            // runs before the page is shown
			console.log("hit navmenu.beforeShow");
		},
        
		show: function (showEvt) {
            // runs after the page is shown
			console.log("hit navmenu.show");
		},

        onNavListClick: function() {
             app.toggleMenu();  
        },
        
        onHomeButtonClick: function() {
            app.toggleMenu();
        }
	}
});