define([], function () {
    return {
        init: function (initEvt) {
            alert("hit home.init");
        },
 
        beforeShow: function (beforeShowEvt) {
            alert("hit home.beforeShow");
        },
        show: function (showEvt) {
            alert("hit home.show");
        }
    }
});