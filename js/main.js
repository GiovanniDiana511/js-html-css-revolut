$(document).ready(function() {
    $(".menu-item.icon").click(function(){
        $(this).find(".dropdown-menu").slideToggle(500);
        $(".menu-item.icon").addClass('ruota');
    });
});
