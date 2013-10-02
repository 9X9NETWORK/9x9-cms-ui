$('.btn-change-pwd').click(function() {
    $.blockUI({
        message: $('#change-pwd-overlay')
    });
});

$('.btn-connect-fb').click(function() {
    $.blockUI({
        message: $('#fb-connect')
    });
});

$('.fb-connect a[class|="switch"]').click(function() {
    $('.fb-connect a[class|="switch"]').toggleClass('hide');
    if ($('.fb-connect a.switch-on').hasClass('hide')) {
        $.blockUI({
            message: $('#confirm-disconnect')
        });
    }
});

$('.btn-disconnect').click(function() {
    $.blockUI({
        message: $('#disconnect-notice')
    });
});

$('.btn-close, .btn-cancel, .btn-no, .btn-ok').click(function() {
    $.unblockUI();
});