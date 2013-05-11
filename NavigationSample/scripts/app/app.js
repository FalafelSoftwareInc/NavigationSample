define(["jQuery", "kendo", "app/controllers/home"], function ($, kendo, homeController) {
    var _kendoApplication;
 
    return {
        init: function () {
            _kendoApplication = new kendo.mobile.Application(document.body, { transition: "slide" });
        },
        controllers: {
            home: homeController
        }
    }
});