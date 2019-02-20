$(function () {
    var isVisible = false;
    if($('div').hasClass("hero")){
        $("#open").hide();
        console.log('hero');
    }else{
        $("#open").show();
        console.log('NO-hero');
    }

    $('.closebtn').click(function () {
        closeNav();
        iconChange($('#open'));
        isFixed();
    });
    $('#open').click(function () {
        iconChange(this);
        isFixed();
        openNav();
    });
    $("#scroll").click(function () {
        scroll('#intro');
    });
    $('#contact').click(function () {
        scroll('#footer')
    });
    $(window).scroll(function () {
        var shouldBeVisible = $(window).scrollTop() > 670;
        if($("div").hasClass("hero")){
            console.log('Scroll');
            if (shouldBeVisible && !isVisible) {
                isVisible = true;
                $('#open').show();
            } else if (isVisible && !shouldBeVisible) {
                isVisible = false;
                $('#open').hide();
            }
        }
    });

    // Functions
    function isFixed(){
        $('#open').toggleClass('isFixed');
    }
    function scroll(destination) {
        $('html,body').animate({
            scrollTop: $(destination).offset().top
        },
            'slow');
    }
    function openNav() {
        $("#mySidenav").css('width', '250px');
    }
    function closeNav() {
        $("#mySidenav").css('width', '0');
    }
    function iconChange(x) {
        $(x).toggleClass("change");
    }
});