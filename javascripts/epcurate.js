$(function () {
    setFormWidth();
    scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');
    $('#header, #footer, #footer-control').fadeOut(3000);
    $('#epcurate-nav ul li.publish').click(function() {
        return false;
    });

    // common unblock
    function hasErrorRedirect() {
        var gobackUrl = $('#form-btn-leave').data('gobackUrl');
        if (gobackUrl) {
            $('#form-btn-leave').removeData('gobackUrl');
            location.replace(gobackUrl);
        } else {
            location.replace($('#form-btn-leave').data('leaveUrl'));
        }
    }
    $('body').keyup(function (e) {
        if (27 === e.which) { // Esc
            $.unblockUI();
            if ($(this).hasClass('has-error')) {
                location.replace('index.html');
            }
            if ($('body').hasClass('publish-notice') || $('body').hasClass('unpublish-notice')) {
                location.href = $('#epcurate-nav-back').attr('href');
            }
            return false;
        }
    });
    $('#system-error .btn-ok, #system-error .btn-close').click(function () {
        $.unblockUI();
        if ($('body').hasClass('has-error')) {
            location.replace('index.html');
        }
        return false;
    });
    $('#publish-notice .btn-ok, #unpublish-notice .btn-ok').click(function () {
        $.unblockUI();
        location.href = $('#epcurate-nav-back').attr('href');
        return false;
    });

    // leave and unsave
    function goLeave(url) {
        if (document.epcurateForm) {
            var fm = document.epcurateForm;
            if (fm.imageUrl && fm.imageUrlOld && fm.imageUrl.value != fm.imageUrlOld.value) {
                $('body').addClass('has-change');
            }
        }
        if ($('body').hasClass('has-change')) {
            showUnsaveOverlay();
        } else {
            location.href = url;
        }
    }
    function confirmExit() {
        if ($('body').hasClass('has-change')) {
            // Unsaved changes will be lost, are you sure you want to leave?
            return $('#unsave-prompt p.content').text();
        }
    }
    window.onbeforeunload = confirmExit;
    $('body').removeClass('has-change');
    $('#epcurateForm').change(function () {
        $('body').addClass('has-change');
    });
    $('#epcurate-nav-back').click(function () {
        goLeave($(this).attr('href'));
        return false;
    });
    $('#content-wrap').on('click', '#form-btn-leave', function () {
        goLeave('episode-list.html');
        return false;
    });
    $(document).on('click', '#header #logo, #header a, #studio-nav a, #content-nav a, #footer a', function (e) {
        if ($('body').hasClass('has-change')) {
            if (e && $(e.currentTarget).attr('href')) {
                $('body').data('leaveUrl', $(e.currentTarget).attr('href'));
            }
            if (e && $(e.currentTarget).attr('id')) {
                $('body').data('leaveId', $(e.currentTarget).attr('id'));
            }
            showUnsaveOverlay();
            return false;
        }
    });
    $('#unsave-prompt .btn-leave').click(function () {
        $('body').removeClass('has-change');
        $.unblockUI();
        location.href = 'episode-list.html';
        return false;
    });

    // save
    $('.epcurate-publish #epcurateForm .btn-save').click(function () {
        if (chkPublishData(document.epcurateForm)) {
            showSavingOverlay();
            $('body').removeClass('has-change');
            location.href = 'episode-list.html';
        }
        return false;
    });

    // episode publish thumbnail cycle
    $('#thumbnail-list ul').cycle({
        fx: 'scrollHorz',
        prev: '#thumbnail-list .img-prev',
        next: '#thumbnail-list .img-next',
        speed: 1000,
        timeout: 0,
        cleartypeNoBg: true,
        before: function () {
            $('body').addClass('has-change');                   // NOTE: must to remove change hook after first load
            $('#imageUrl').val($('img', this).attr('src'));
        }
    });
    $('body').removeClass('has-change');                        // NOTE: remove change hook after first load

    $(window).resize(function () {
        setFormWidth();
        scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');
        if ('none' == $('#main-wrap-slider').css('display')) {
            $('#main-wrap-slider .slider-vertical').slider('destroy');
            $('#content-main-wrap').css('top', '0');
        }
    });

    // Amazon S3 upload
    if ($('#uploadThumbnail').length > 0) {
        uploadImage();
    }

    // uniform
    $('p.radio-list input').uniform();
    $('#content-wrap').on('click', 'input[name=status]', function () {
        switchPublishStatus($(this).val(), $(this).attr('name'));
    });
    switchPublishStatus($('input[name=status]:checked').val(), $('input[name=status]:checked').attr('name'));
    $('#content-wrap').on('click', 'input[name=rerun]', function () {
        switchRerunCheckbox();
    });
    switchRerunCheckbox();
    $('#content-wrap').on('click', '#date-time .time ul li.enable a', function () {
        $('body').addClass('has-change');
        $('#date-time .time ul li').removeClass('active');
        $(this).parent().addClass('active');
        $('#publishHour').val($(this).text());
        return false;
    });
    $('#content-wrap').on('click', '#epcurate-info #name', function () {
        $('.form-btn .notice').addClass('hide');
    });
});

function chkPublishData(fm, src) {
    fm.name.value = $.trim(fm.name.value);
    fm.intro.value = $.trim(fm.intro.value);
    fm.imageUrl.value = $.trim(fm.imageUrl.value);
    if (fm.imageUrl && fm.imageUrlOld && fm.imageUrl.value != fm.imageUrlOld.value) {
        $('body').addClass('has-change');
    }
    if ('' === fm.name.value
            || $('input[name=status]:checked').length <= 0
            || ('24:00' === $('#publishHour').val() && ($('#status_scheduled').is(':checked') || $('#rerun_y').is(':checked')))) {
        $('.form-btn .notice').removeClass('hide');
        return false;
    }
    $('.form-btn .notice').addClass('hide');
    $('.img-upload-func .upload-notice').addClass('hide');
    return true;
}

function setFormWidth() {
    var windowWidth  = $(window).width();
    if (windowWidth > 1024) {
        $('input.text').width(windowWidth - 600);
        $('textarea.textarea').width(windowWidth - 605);
    }
    if (windowWidth <= 1024) {
        $('input.text').width(480);
        $('textarea.textarea').width(475);
    }
    // curation nav width
    if (windowWidth < 1024) {
        $('#epcurate-nav ul').css('width', '256px');
        $('#epcurate-nav ul li').css('width', '128px');
    }
    if (windowWidth >= 1024 && windowWidth <= 1252) {
        $('#epcurate-nav ul').css('width', (windowWidth - 768) + 'px');
        $('#epcurate-nav ul li').css('width', (windowWidth - 768) / 2 + 'px');
    }
    if (windowWidth > 1252) {
        $('#epcurate-nav ul').css('width', '484px');
        $('#epcurate-nav ul li').css('width', '242px');
    }
}

function uploadImage() {
    var parameter = {
        'prefix': 'cms',
        'type':   'image',
        'size':   20485760,
        'acl':    'public-read'
    };
    var s3attr = {
        'bucket': '9x9tmp-ds',
        'policy': 'eyJleHBpcmF0aW9uIjoiMjAxMi0wOS0xOFQxNDo1NTozN1oiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiI5eDl0bXAtZHMifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsImNtcyJdLHsiYWNsIjoicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsImF1ZGlvIl0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifSxbInN0YXJ0cy13aXRoIiwiJEZpbGVuYW1lIiwiIl0sWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwiMzEyNTc0ODAwIl1dfQ==',
        'signature': 'SAMLxKDwG/5iPtEf0YT4KAzWL3w=',
        'id': 'AKIAIUZXV6X5RKSG3QRQ'
    };
    var timestamp = (new Date()).getTime();
    var handlerFileDialogStart = function () {
        $('.img-upload-func .highlight').addClass('hide');
    };
    var handlerUploadProgress = function (file, completed /* completed bytes */, total /* total bytes */) {
        $('#thumbnail-list .loading').show();
         swfu.setButtonText('<span class="uploadstyle">Uploading...</span>');
    };
    var handlerUploadSuccess = function (file, serverData, recievedResponse) {
        $('#thumbnail-list .loading').hide();
        swfu.setButtonText('<span class="uploadstyle">Upload</span>');
        if (!file.type) {
            file.type = nn.getFileTypeByName(file.name);
        }
        this.setButtonDisabled(false); // enable upload button again
        var url = 'http://' + s3attr['bucket'] + '.s3.amazonaws.com/' + parameter['prefix'] + '-thumbnail-' + timestamp + '-' + file.size + file.type.toLowerCase();
        $('#thumbnail-list ul li.new').remove();
        $('#thumbnail-list ul').prepend('<li class="new"><img src="thumbnail/04.jpg" alt="" /></li>');
        $('#thumbnail-list ul').cycle('destroy');
        $('#thumbnail-list ul').cycle({
            fx: 'scrollHorz',
            prev: '#thumbnail-list .img-prev',
            next: '#thumbnail-list .img-next',
            speed: 1000,
            timeout: 0,
            cleartypeNoBg: true,
            before: function () {
                $('body').addClass('has-change');
                $('#imageUrl').val($('img', this).attr('src'));
            }
        });
    };
    var handlerUploadError = function (file, code, message) {
        $('#thumbnail-list .loading').hide();
        swfu.setButtonText('<span class="uploadstyle">Upload</span>');
        this.setButtonDisabled(false);
        if (code == -280) { // user cancel upload
            alert(message); // show some error prompt
        } else {
            alert(message); // show some error prompt
        }
    };
    var handlerFileQueue = function (file) {
        if (!file.type)

        var postParams = {
            "AWSAccessKeyId": s3attr['id'],
            "key":            parameter['prefix'] + '-thumbnail-' + timestamp + '-' + file.size + file.type.toLowerCase(),
            "acl":            parameter['acl'],
            "policy":         s3attr['policy'],
            "signature":      s3attr['signature'],
            "content-type":   parameter['type'],
            "success_action_status": "201"
        };
        this.setPostParams(postParams);
        this.startUpload(file.id);
        this.setButtonDisabled(true);
    };
    var handlerFileQueueError = function (file, code, message) {
        if (code == -130) { // error file type
            $('.img-upload-func .upload-notice').removeClass('hide');
        }
    };
    var settings = {
        flash_url:                  'javascripts/swfupload/swfupload.swf',
        upload_url:                 'http://' + s3attr['bucket'] + '.s3.amazonaws.com/', // http://9x9tmp-ds.s3.amazonaws.com/
        file_size_limit:            parameter['size'],
        file_types:                 '*.jpg; *.png; *.gif',
        file_types_description:     'Thumbnail',
        file_post_name:             'file',
        button_placeholder:         $('#uploadThumbnail').get(0),
        button_image_url:           'images/btn-load.png',
        button_width:               '129',
        button_height:              '29',
        button_text:                '<span class="uploadstyle">Upload</span>',
        button_text_style:          '.uploadstyle { color: #777777; font-family: Arial, Helvetica; font-size: 15px; text-align: center; } .uploadstyle:hover { color: #999999; }',
        button_text_top_padding:    1,
        button_action:              SWFUpload.BUTTON_ACTION.SELECT_FILE,
        button_cursor:              SWFUpload.CURSOR.HAND,
        button_window_mode :        SWFUpload.WINDOW_MODE.TRANSPARENT,
        http_success :              [ 201 ],
        file_dialog_start_handler:  handlerFileDialogStart,
        upload_progress_handler:    handlerUploadProgress,
        upload_success_handler:     handlerUploadSuccess,
        upload_error_handler:       handlerUploadError,
        file_queued_handler:        handlerFileQueue,
        file_queue_error_handler:   handlerFileQueueError,
        debug:                      false
    };
    var swfu = new SWFUpload(settings);
}

function switchPublishStatus(flag, name) {
    if ('scheduled' == flag) {
        $('#date-time').removeClass('hide');
        updateHour();
    } else {
        if ($('#rerun_y').length > 0 && !$('#rerun_y').is(':checked')) {
            $('#date-time').addClass('hide');
        }
    }
    if ('draft' == flag) {
        $('#date-time').addClass('hide');
        $('input[name=rerun]').removeAttr('checked');
        $('input[name=rerun]').parents('label').removeClass('checked');
        $.uniform.update('input[name=rerun]');
    }
    $('input[name=' + name + ']').parents('label').removeClass('checked');
    $('input[name=' + name + ']:checked').parents('label').addClass('checked');
}

function switchRerunCheckbox() {
    if (!$('#schedule-rerun-label').hasClass('hide')) {
        if ($('input[name=rerun]').is(':checked')) {
            $('input[name=status]').removeAttr('checked');
            $('input[name=status]').parents('label').removeClass('checked');
            $.uniform.update('input[name=status]');
            $('#status_published').attr('checked', 'checked');
            $('#status_published').parents('label').addClass('checked');
            $.uniform.update('#status_published');
            $('#date-time').removeClass('hide');
            updateHour();
        } else {
            $('#date-time').addClass('hide');
        }
    }
}

function updateHour() {
    var today = new Date(),
        todayDay = parseInt(today.getDate(), 10).toString(),
        todayMonth = parseInt(today.getMonth() + 1, 10).toString(), // January is 0!
        todayYear = today.getFullYear(),
        nowHour = today.getHours() + 1;

    if (todayDay.length < 2) {
        todayDay = '0' + todayDay;
    }
    if (todayMonth.length < 2) {
        todayMonth = '0' + todayMonth;
    }
    var todayDate = todayYear + '/' + todayMonth + '/' + todayDay;

    $('#date-time .datepicker').datepicker({
        firstDay: 0,
        minDate: 0,
        dateFormat: "yy/mm/dd",
        autoSize: true,
        onSelect: function (dateText, inst) {
            $('body').addClass('has-change');
            var selectDay   = parseInt(inst.currentDay, 10).toString(),
                selectMonth = parseInt(inst.currentMonth + 1, 10).toString(),
                activeHour  = $('#date-time .time ul li.active').index();
            if (selectDay.length < 2) {
                selectDay = '0' + selectDay;
            }
            if (selectMonth.length < 2) {
                selectMonth = '0' + selectMonth;
            }            
            var date = inst.currentYear + '/' + selectMonth + '/' + selectDay;

            if (date == todayDate) {
                if (activeHour <= nowHour) {
                    $('#date-time .time ul li').removeAttr('class');
                    $('#date-time .time ul li:eq(' + nowHour + ')').addClass('active').addClass('enable');
                    $('#date-time .time ul li:eq(' + nowHour + ')').prevAll().addClass('disable');
                    $('#date-time .time ul li:eq(' + nowHour + ')').nextAll().addClass('enable');
                } else {
                    $('#date-time .time ul li').removeClass('enable').removeClass('disable');
                    $('#date-time .time ul li:eq(' + nowHour + ')').addClass('enable');
                    $('#date-time .time ul li:eq(' + nowHour + ')').prevAll().addClass('disable');
                    $('#date-time .time ul li:eq(' + nowHour + ')').nextAll().addClass('enable');
                }
            } else {
                $('#date-time .time ul li').removeClass('enable').removeClass('disable');
                $('#date-time .time ul li').addClass('enable');
            }
            $('#publishDate').val(date);
            $('#publishHour').val($('#date-time .time ul li.active').text());
        }
    });
    $.datepicker.setDefaults($.datepicker.regional['en']); // chinese: 'zh'

    $('#date-time .time ul li').removeAttr('class');
    $('#date-time .time ul li:eq(' + nowHour + ')').addClass('active').addClass('enable');
    $('#date-time .time ul li:eq(' + nowHour + ')').prevAll().addClass('disable');
    $('#date-time .time ul li:eq(' + nowHour + ')').nextAll().addClass('enable');

    if ('' == $('#publishDate').val() || '' == $('#publishHour').val()) {
        $('#publishDate').val(todayDate);
        $('#publishHour').val($('#date-time .time ul li.active').text());
    } else {
        var time = $('#publishHour').val().split(':'),
            hour = time[0];
        if ($('#publishDate').val() == todayDate) {
            $('#date-time .time ul li').removeAttr('class');
            $('#date-time .time ul li:eq(' + hour + ')').addClass('active').addClass('enable');
            $('#date-time .time ul li:eq(' + nowHour + ')').prevAll().addClass('disable');
            $('#date-time .time ul li:eq(' + nowHour + ')').nextAll().addClass('enable');
            $('#date-time .time ul li:eq(' + nowHour + ')').addClass('enable');
        } else {
            $('#date-time .datepicker').datepicker('setDate', $('#publishDate').val());
            $('#date-time .time ul li').removeClass('active').removeClass('disable').removeClass('enable').addClass('enable');
            $('#date-time .time ul li:eq(' + hour + ')').addClass('active').addClass('enable');
        }
    }
}