$(document).ready(function() {
    $(".menu-item.icon").click(function(){
        if ($(this).find(".dropdown-menu").is(":visible")) {
            $(this).find(".dropdown-menu").slideUp(500);
        } else {
            $(".menu-item.icon").find(".dropdown-menu").slideUp(500);
            $(this).find(".dropdown-menu").slideDown(500);
        }
        //$(".menu-item.icon").addClass('ruota');
    });
});
