define([], function () {
    return {
        init: function (initEvt) {
            alert("hit local.init");
        },
 
        beforeShow: function (beforeShowEvt) {
            alert("hit local.beforeShow");
        },
 
        show: function (showEvt) {
            alert("hit local.show");
        }
    }
});