$(document).ready(function() {

    /* CLick BTN (Open and Close) */
    $('.button-nav--toggle').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('is-showNavMob');
    });

});