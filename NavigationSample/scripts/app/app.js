define(["jQuery", "kendo", "app/controllers/home", "app/controllers/local", "app/controllers/remote"], function ($, kendo, homeController, localController, remoteController) {
	return {
		init: function () {
			var me = this;
			me.kendoApplication = new kendo.mobile.Application(document.body, { transition: "slide" });
		},
        
		controllers: {
			home: homeController,
			local: localController,
			remote: remoteController,
		},
        
		toggleMenu:function(e) {
			$('#right-pane').kendoToggleClass("slide");
			$(".protective-layer").toggleClass("active");
		}
	}
});