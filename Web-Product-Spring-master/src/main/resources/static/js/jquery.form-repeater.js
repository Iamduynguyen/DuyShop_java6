$(document).ready(function () {
    "use strict";
    $(".repeater-default").repeater(), $(".repeater-custom-show-hide").repeater({
        show: function () {
            $(this).slideDown()
        }, hide: function (e) {
            confirm("Are you sure you want to remove this item?") && $(this).slideUp(e)
        }
    })
});