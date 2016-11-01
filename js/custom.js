$(document).ready(function() {
    var year = new Date().getFullYear();
    $(".copyright").html(year);

    //Scroll-top when click on main header and back to top button
    $(".navbar-brand, .scroll-top > a").click(function() {
        var topId = $(this).attr("href");
        $("html body").animate({
            scrollTop: 0 }
        , 1500);    
    });

    //Scroll to specific div when click on menu link
    $(".nav > .page-scroll > a").click(function() {
        $(this).parent().siblings().removeClass('active').end().addClass('active');
        var href = $(this).attr("href");
        scrollToSpecificDiv(href);
    });

    // Closes the Responsive Menu on Menu Item Click
    $(".navbar-collapse ul li a").click(function() {
        $(".navbar-toggle:visible").click();
    });
});

function scrollToSpecificDiv(id) {
    $("html body").animate({
        scrollTop: $(id).offset().top - 20 }
        , 1500);
}