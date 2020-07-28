$(document).ready(function(){
    // Dropdown init
    $('.dropdown-trigger').dropdown();

    // Init carousel

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    // modal init
    $(document).ready(function () {
        $('#email-modal').modal({
            startingTop: '10%'
        });
    });

    // move next carousel
    $('.moveNextCarousel').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next');
    });

    // move prev carousel
    $('.movePrevCarousel').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev');
    });
})
