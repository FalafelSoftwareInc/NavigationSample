define([], function () {
    return {
        init: function (initEvt) {
            alert("hit remote.init");
        },
 
        beforeShow: function (beforeShowEvt) {
            alert("hit remote.beforeShow");
        },
        show: function (showEvt) {
            alert("hit remote.show");
        }
    }
});