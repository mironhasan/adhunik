
//for navbar fixed when scrlling
$(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 130) {
        $(".menu_head").addClass("menu_fixed");
    }else {
        $(".menu_head").removeClass("menu_fixed");
    }
});
