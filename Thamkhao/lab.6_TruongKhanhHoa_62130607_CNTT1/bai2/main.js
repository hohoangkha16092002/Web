$(function() {
    $('#plus').click(function() {
        $('#display').val($('#display').val() + "+");
    });
    $('#minus').click(function() {
        $('#display').val($('#display').val() + "-");

    });
    $('#times').click(function() {
        $('#display').val($('#display').val() + "*");

    });
    $('#div').click(function() {
        $('#display').val($('#display').val() + "/");

    });
    $('#dot').click(function() {
        $('#display').val($('#display').val() + ".");

    });

    $('#seven').click(function() {
        $('#display').val($('#display').val() + "7");

    });
    $('#eight').click(function() {
        $('#display').val($('#display').val() + "8");

    });
    $('#nine').click(function() {
        $('#display').val($('#display').val() + "9");

    });
    $('#four').click(function() {
        $('#display').val($('#display').val() + "4");

    });
    $('#five').click(function() {
        $('#display').val($('#display').val() + "5");

    });
    $('#six').click(function() {
        $('#display').val($('#display').val() + "6");

    });
    $('#one').click(function() {
        $('#display').val($('#display').val() + "1");

    });
    $('#two').click(function() {
        $('#display').val($('#display').val() + "2");

    });
    $('#three').click(function() {
        $('#display').val($('#display').val() + "3");

    });
    $('#zero').click(function() {
        $('#display').val($('#display').val() + "0");

    });

    // In ra kết quả
    $('#doit').click(function() {
        $('#display').val(eval($('#display').val()));

    });

    // Xóa từng phần tử
    $('#clear').click(function() {
        $('#display').val($('#display').val().slice(0, -1));
    });

});