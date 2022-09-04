$(document).ready(function() {
    $('form').submit(function() {

        // BƯỚC 1: Lấy dữ liệu từ form
        var email = $.trim($('#email').val());
        var password = $.trim($('#psw').val());
        var re_password = $.trim($('#psw-repeat').val());

        // BƯỚC 2: Validate dữ liệu

        // Email
        if (email == '') {
            $('#email_error').text('Email không được để trống và phải đúng định dạng');
        } else {
            $('#email_error').text('');
        }

        // Password
        if (password.length <= 0) {
            $('#password_error').text('Bạn phải nhập mật khẩu');
        } else {
            $('#password_error').text('');
        }

        // Re password
        if (re_password != password) {
            $('#re_password_error').text('Mật khẩu nhập lại không đúng');
        } else {
            $('#re_password_error').text('');
        }
    });
});