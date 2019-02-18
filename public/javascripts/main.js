$(function () {
    $('.closebtn').click(function(){
        closeNav();
        iconChange($('#open'));
    });
    $('#open').click(function(){
        iconChange(this);
        openNav();
    //    $('.hero').css('backgroundColor','rgba(0,0,0,0.4)');
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    });

    function openNav() {
       $("#mySidenav").css('width','250px');
    }

    function closeNav() {
        $("#mySidenav").css('width', '0');
    }
    function iconChange(x) {
        $(x).toggleClass("change");
      }
});