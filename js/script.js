$(function () {

    // vide start

    $('.watch').vide('../video/1.mp4', {
        volume: 1,
        muted: false,
        autoplay: false,
        bgColor: 'purple',
    });

    var video = $(".watch").data("vide").getVideoObject();

    // video && video.play(); //or .pause()

    $('.watch_wrapper img').click(function () {
        video.play();
        $('.watch_wrapper').hide();
    });

    // vide end

    // slick start

    $('.car').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
    });

    // slick end


});