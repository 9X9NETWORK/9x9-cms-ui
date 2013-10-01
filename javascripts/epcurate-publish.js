$('#thumbnail-list ul').cycle('destroy');
$('#thumbnail-list ul').cycle({
    fx: 'scrollHorz',
    prev: '#thumbnail-list .img-prev',
    next: '#thumbnail-list .img-next',
    speed: 1000,
    timeout: 0,
    cleartypeNoBg: true,
    before: function() {
        $('body').addClass('has-change');
        $('#imageUrl').val($('img', this).attr('src'));
    }
});


$('p.radio-list input').uniform();

$('#date-time .datepicker').datepicker({
    firstDay: 0,
    minDate: 0,
    dateFormat: 'yy/mm/dd',
    autoSize: true,
    onSelect: function(dateText, inst) {
        $('body').addClass('has-change');
        var selectDay = parseInt(inst.currentDay, 10).toString(),
            selectMonth = parseInt(inst.currentMonth + 1, 10).toString(),
            activeHour = $('#date-time .time ul li.active').index(),
            date = '';
        if (selectDay.length < 2) {
            selectDay = '0' + selectDay;
        }
        if (selectMonth.length < 2) {
            selectMonth = '0' + selectMonth;
        }
        date = inst.currentYear + '/' + selectMonth + '/' + selectDay;

        if (date === todayDate) {
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
$.datepicker.setDefaults($.datepicker.regional['en']);

var swfu = new SWFUpload({
    flash_url: 'javascripts/libs/swfupload/swfupload.swf',
    upload_url: 'http://9x9tmp-ds.s3.amazonaws.com/', // http://9x9tmp-ds.s3.amazonaws.com/
    // file_size_limit: parameter.size,
    file_types: '*.jpg; *.png; *.gif',
    file_types_description: 'Thumbnail',
    file_post_name: 'file',
    button_placeholder: $('#uploadThumbnail').get(0),
    button_image_url: 'images/btn-load.png',
    button_width: '129',
    button_height: '29',
    button_text: '<span class="uploadstyle">Upload</span>',
    button_text_style: '.uploadstyle { color: #555555; font-family: Arial, Helvetica; font-size: 15px; text-align: center; } .uploadstyle:hover { color: #999999; }',
    button_text_top_padding: 1,
    button_action: SWFUpload.BUTTON_ACTION.SELECT_FILE,
    button_cursor: SWFUpload.CURSOR.HAND,
    button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
    http_success: [201],
    // file_dialog_start_handler: handlerFileDialogStart,
    // upload_progress_handler: handlerUploadProgress,
    // upload_success_handler: handlerUploadSuccess,
    // upload_error_handler: handlerUploadError,
    // file_queued_handler: handlerFileQueue,
    // file_queue_error_handler: handlerFileQueueError,
    debug: false
});

// uniform
$('#content-wrap').on('click', 'input[name=status]', function() {
    var flag = $(this).val();
    var name = $(this).attr('name');
    if ('scheduled' === flag) {
        $('#date-time').removeClass('hide');
        // $page.updateHour();
    } else {
        if ($('#rerun_y').length > 0 && !$('#rerun_y').is(':checked')) {
            $('#date-time').addClass('hide');
        }
    }
    if ('draft' === flag) {
        $('#date-time').addClass('hide');
        $('input[name=rerun]').prop('checked', false);
        $('input[name=rerun]').parents('label').removeClass('checked');
        $.uniform.update('input[name=rerun]');
    }
    $('input[name=' + name + ']').parents('label').removeClass('checked');
    $('input[name=' + name + ']:checked').parents('label').addClass('checked');
});
$('#content-wrap').on('click', 'input[name=rerun]', function() {
    if (!$('#schedule-rerun-label').hasClass('hide')) {
        if ($('input[name=rerun]').is(':checked')) {
            $('input[name=status]').prop('checked', false);
            $('input[name=status]').parents('label').removeClass('checked');
            $.uniform.update('input[name=status]');
            $('#status_published').prop('checked', true);
            $('#status_published').parents('label').addClass('checked');
            $.uniform.update('#status_published');
            $('#date-time').removeClass('hide');
            // $page.updateHour();
        } else {
            $('#date-time').addClass('hide');
        }
    }
});
$('#content-wrap').on('click', '#date-time .time ul li.enable a', function() {
    // $('body').addClass('has-change');
    $('#date-time .time ul li').removeClass('active');
    $(this).parent().addClass('active');
    $('#publishHour').val($(this).text());
    return false;
});
$('#content-wrap').on('click', '#epcurate-info #name', function() {
    $('.form-btn .notice').addClass('hide');
});

$('.btn-save').click(function() {
    $('.radio-list').toggleClass('draft');

    if ($('.radio-list').hasClass('draft')) {
        $('#publish-label').text('Publish Now');
        $('[id^=schedule-publish]').removeClass('hide');
        $('[id^=schedule-rerun]').addClass('hide');
    } else {
        $('#publish-label').text('Published');
        $('[id^=schedule-rerun]').removeClass('hide');
        $('[id^=schedule-publish]').addClass('hide');
    }
});