require.config({
    paths: {
        jQuery: "libs/kendo/js/jquery.min",
        underscore: 'libs/underscore',
        kendo: "libs/kendo/js/kendo.mobile.min"
    },
    shim: {
        jQuery: { exports: "jQuery" },
        underscore: { exports: "_" },
        kendo: { deps: ["jQuery"], exports: "kendo" }
    }
});

var app;

require(["app/app"], function (application) {
    app = application;
    app.init();
});
