$(document).ready(function() {
    var year = new Date().getFullYear();
    $(".copyright").html(year);

    //Scroll-top when click on main header and back to top button
    $(".navbar-brand, .scroll-top > a").click(function() {
        $(".nav > .page-scroll > a").parent().siblings().removeClass('active');
        var topId = $(this).attr("title");
        $("html, body").animate({
            scrollTop: 0 }
        , 1500);    
    });

    //Scroll to specific div when click on menu link
    $(".navbar-nav > .page-scroll > a").click(function() {
        $(this).parent().siblings().removeClass('active').end().addClass('active');
        var id = $(this).attr("title");
        scrollToSpecificDiv(id);
    });

    // Closes the Responsive Menu on Menu Item Click
    $(".navbar-light .navbar-nav .nav-link").click(function() {
        $(".navbar-collapse").collapse('hide');
    });
});

function scrollToSpecificDiv(id) {
    $("html, body").animate({
        scrollTop: $("#" + id).offset().top - 20 }
        , 1500);
}