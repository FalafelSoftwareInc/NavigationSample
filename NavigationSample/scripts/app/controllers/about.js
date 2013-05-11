define([], function () {
    return {
        init: function (initEvt) {
            alert("hit about.init");
        },
 
        beforeShow: function (beforeShowEvt) {
            alert("hit about.beforeShow");
        },
        show: function (showEvt) {
            alert("hit about.show");
        }
    }
});