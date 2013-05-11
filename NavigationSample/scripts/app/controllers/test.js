define([], function () {
    return {
        init: function (initEvt) {
            alert("hit test.init");
        },
 
        beforeShow: function (beforeShowEvt) {
            alert("hit test.beforeShow");
        },
 
        show: function (showEvt) {
            alert("hit test.show");
        }
    }
});