$(function(){
    rwd = function(){
        $('#burger').removeClass('actif').find('svg').removeClass('fa-times').addClass('fa-bars');
    };

    rwd();

    $(window).on('resize orientationchange', rwd);
});