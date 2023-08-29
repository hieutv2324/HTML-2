
$(document).ready(function () {
     // alert('Ok');
    $('#eye').click(function () {
        // alert('Clicked');
        $(this).toggleClass('open')
        $(this).children('i').toggleClass(' fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            // alert('Type text');
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }

    });
    $('#eye2').click(function () {
        // alert('Clicked');
        $(this).toggleClass('open')
        $(this).children('i').toggleClass(' fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            // alert('Type text');
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }

    });
});