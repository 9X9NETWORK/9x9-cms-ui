$(function () {
    setFormHeight();
    
    $('#cms-setting .form-btn .btn-save').click(function () {
        chkData(document.cmsSettingForm);
        return false;
    });

    // fb connect
    $('#cms-setting .btn-connect-fb').click(function () {
        // studio setup
        // ON PURPOSE to skip unsave check
        $.blockUI({
            message: $('#fb-connect')
        });
        return false;
    });
    $('#fb-connect .switch-off').click(function () {
        $.unblockUI();
        $('#fb-connect .switch-off').addClass('hide');
        $('#fb-connect .switch-on').removeClass('hide');
        return false;
    });
    $('#fb-connect .switch-on').click(function () {
        // disconnect facebook
        $.blockUI({
            message: $('#confirm-disconnect')
        });
        return false;
    });
    $('#cms-setting .btn-reconnect').click(function () {
        $.blockUI({
            message: $('#restart-connect')
        });
        return false;
    });
    $('#restart-connect .btn-reconnect').click(function () {
        // connected but has not critical permission!!
        $.blockUI({
            message: $('#fb-connect-failed')
        });
        return false;
    });
    $('#fb-connect-failed .btn-failed-ok').click(function () {
        // continue to show studio setup
        $.blockUI({
            message: $('#fb-connect')
        });
        return false;
    });
    $('#confirm-disconnect .btn-disconnect').click(function () {
        $.blockUI({
            message: $('#disconnect-notice')
        });
        return false;
    });

    // change password
    $('#cms-setting .btn-change-pwd.enable').click(function () {
        $.blockUI({
            message: $('#change-pwd-overlay')
        });
        return false;    
    });
    $('#change-pwd-overlay .btn-chg-pwd').click(function () {
        chkPwdData(document.changePwdForm);
        return false;
    });
    $('#change-pwd-overlay .btn-cancel').click(function () {
        $.unblockUI();
        return false;
    });

    $(window).resize(function () {
        setFormHeight();
    });
});

function setFormHeight() {
    var windowHeight = $(window).height(),
        titleFuncHeight = $('#title-func').height(),
        headerHeight = $('#header').height(),
        navHeight = $('#studio-nav').height(),
        contentHeight = windowHeight - titleFuncHeight - headerHeight - navHeight - 48 - 38 - 10 + 5;    // 5:header and studio-nav overlap 48:footer 38:title-func-padding
    $('#cms-setting form').height(contentHeight - 56); // 56: form padding-bottom
}

function chkData(fm) {
    var countUsername = /^.{6,16}$/,
        patternUsername = /^[\w]{6,16}$/;
        
    fm.username.value = $.trim(fm.username.value);
    if (!countUsername.test(fm.username.value)) {
        $('#cms-setting .username .notice').addClass('hide');
        $('#cms-setting .username .count-notice').removeClass('hide');
        return false;
    }
    if (!patternUsername.test(fm.username.value)) {
        $('#cms-setting .username .notice').addClass('hide');
        $('#cms-setting .username .letter-notice').removeClass('hide');
        return false;
    }
    $('#cms-setting .username .notice').addClass('hide');
    return true;
}

function chkPwdData(fm) {
    fm.pwd_old.value = $.trim(fm.pwd_old.value);
    fm.pwd_new.value = $.trim(fm.pwd_new.value);
    fm.pwd_confirm.value = $.trim(fm.pwd_confirm.value);
    if ('' === fm.pwd_old.value) {
        $('#change-pwd-overlay .change-pwd .notice').removeClass('hide');
        fm.pwd_old.focus();
        return false;
    }
    if ('' === fm.pwd_new.value) {
        $('#change-pwd-overlay .change-pwd .notice').removeClass('hide').text('Please input your new password.');
        fm.pwd_new.focus();
        return false;
    }
    if ('' === fm.pwd_confirm.value) {
        $('#change-pwd-overlay .change-pwd .notice').removeClass('hide').text('Please repeat your new password.');
        fm.pwd_confirm.focus();
        return false;
    }
    if (fm.pwd_new.value !== fm.pwd_confirm.value) {
        $('#change-pwd-overlay .change-pwd .notice').removeClass('hide').text("Two passwords don't match, please retype.");
        fm.pwd_confirm.focus();
        return false;
    }
    $.unblockUI();
    return true;
}