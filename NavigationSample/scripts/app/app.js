define([
	"jQuery", 
	"kendo", 
	"app/controllers/home", 
	"app/controllers/local", 
	"app/controllers/remote", 
	"app/controllers/navmenu"
], 

	   function ($, kendo, homeController, localController, remoteController, navMenuController) {
		   return {
        
			   init: function () {
				   var me = this;
            
				   me.isMenuVisible = false;
				   me.kendoApplication = new kendo.mobile.Application(document.body, { transition: "slide" });
            
				   $("body").kendoTouch({
					   enableSwipe: true,
					   swipe: function(e) {
						   if (e.direction == "right") {
							   me.showMenu();
						   }
						   else {
                               me.hideMenu();
						   }
					   }
				   });
			   },

			   controllers: {
				   home: homeController,
				   local: localController,
				   remote: remoteController,
				   navmenu: navMenuController
			   },    
        
			   hideMenu: function() {
				   var me = this;
            
				   if (me.isMenuVisible == true) {
					   $('#right-pane').kendoRemoveClass("slide");
					   me.isMenuVisible = false;
					   $("#right-pane .protective-layer").remove();
				   }
			   },
    
			   showMenu: function() {
				   var me = this;
            
				   if (me.isMenuVisible == false) {
					   $('#right-pane').kendoAddClass("slide");
					   me.isMenuVisible = true;
					   var currentView = $("#right-pane").data("kendoMobilePane").view();
					   var layer = $(currentView.content).append("<div class=\"protective-layer\"></div>");
					   layer.click(function() {
						   app.toggleMenu();
					   });
				   }
			   },
    
			   toggleMenu: function() {     
				   var me = this;
            
				   if (me.isMenuVisible == true) {
					   me.hideMenu(); 
				   }
				   else {
					   me.showMenu();
				   }
			   }
		   }
	   });