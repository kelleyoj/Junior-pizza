$(function () {
    var isVisible = false;
    if ($('div').hasClass("hero")) {
        $("#open").hide();
    } else {
        $("#open").show();
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
    $('#place').click(function () {
        scroll('#order');
    });
    $('#contact').click(function () {
        scroll('#footer')
    });
    $('#right').click(function(){
        scroll('#order');
    });
    $(window).scroll(function () {
        var shouldBeVisible = $(window).scrollTop() > 670;
        if ($("div").hasClass("hero")) {
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
    function isFixed() {
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