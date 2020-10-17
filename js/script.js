$(function () {
    
    //drawer
    $('.drawer').drawer()

    //smoothscroll
  
    jQuery('a[href^="#"]').click(function () {
        let header = jQuery(".header").innerHeight();
        let speed = 600;
        let id = jQuery(this).attr("href");
        let target = jQuery("#" == id ? "html" : id);
        let position = jQuery(target).offset().top - header;
        if ("fixed" !== jQuery(".header").css("position")) {
            position = jQuery(target).offset().top;
        }
        if (0 > position) {
            position = 0;
        }
        jQuery("html, body").animate({
            scrollTop: position
        },
            speed
        );
        return false;
    });

    // スクロール判定
    jQuery(window).on("scroll", function () {


    });
});