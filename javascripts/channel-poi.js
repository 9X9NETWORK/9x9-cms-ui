$(function () {
    setFormHeight();

    // create poi
    $('#poi-list .add').on('click', '.enable', function () {
        $('#channel-poi .edit-block').addClass('hide');
        $('#poi-create').removeClass('hide');
        $('#content-main').removeAttr('class');
        $('#content-main').addClass('poi-create');
        setFormHeight();
        return false;
    });

    //edit poi
    $('#poi-list .poi-info .edit').click(function () {
        $('#channel-poi .edit-block').addClass('hide');
        $('#poi-edit').removeClass('hide');
        $('#content-main').removeAttr('class');
        $('#content-main').addClass('poi-edit');
        setFormHeight();
        return false;
    });

    // del poi
    $('#poi-list .poi-info .btn-del').click(function () {
        $.blockUI({
            message: $('#del-poi-notice')
        });
    });
    $('#del-poi-notice .btn-del').click(function () {
        $.unblockUI();
        $('#poi-list .poi-info').addClass('hide');
        $('#poi-list .has-poi').addClass('hide');
        $('#poi-list .btn-create-poi').removeClass('disable').addClass('enable');
        return false;
    });
    
    $('#channel-poi .btn-cancel').click(function () {
        $('#unsave-poi-prompt .overlay-btn-back').addClass('hide');
        $('#unsave-poi-prompt .overlay-btn-no').removeClass('hide');
        $.blockUI({
            message: $('#unsave-poi-prompt')
        });
    });

    // unsave poi overlay
    $('#unsave-poi-prompt .overlay-btn-yes').click(function () {
        if (0 < $('.blockMsg #poi-event-overlay').length) {
            $.unblockUI();
            $('#unsave-poi-prompt').hide();
        } else {
            $.unblockUI();
            $('#channel-poi .edit-block').addClass('hide');
            $('#poi-list').removeClass('hide');
            $('#content-main').removeAttr('class');
            $('#content-main').addClass('poi-list');
            setFormHeight();
        }
        return false;
    });
    $('#unsave-poi-prompt .overlay-btn-close').click(function () {
        if (0 < $('.blockMsg #poi-event-overlay').length) {
            $('#poi-event-overlay').show();
            $('#unsave-poi-prompt').hide();
        } else {
            $.unblockUI();
        }
        return false;
    });
    $('#unsave-poi-prompt .overlay-btn-no').click(function () {
        $.unblockUI();
        return false;
    });
    $('#unsave-poi-prompt .overlay-btn-back').click(function () {
        $('#poi-event-overlay').show();
        $('#unsave-poi-prompt').hide();
        return false;
    });

    $('#channel-poi #poi-create .btn-next').click(function () {
        if (chkData(document.poiCreateForm)) {
            $.blockUI({
                message: $('#poi-event-overlay'),
                onBlock: function() {
                    $('#poi-event-overlay .event').addClass('hide');
                    $('#event-select').removeClass('hide');
                }
            });
        }
        return false;
    });
    $('#channel-poi #poi-edit .btn-next').click(function () {
        if (chkData(document.poiCreateForm)) {
            $.blockUI({
                message: $('#poi-event-overlay'),
                onBlock: function() {
                    $('#poi-event-overlay .event').addClass('hide');
                    $('#event-scheduled').removeClass('hide');
                    $('#event-scheduled .schedule').addClass('hide');
                    $('#event-scheduled #schedule-notify').removeClass('hide');
                    $('#poi-event-overlay').addClass('edit');
                }
            });
        }
        return false;
    });

    // poi overlay button
    $('#poi-event-overlay .btn-cancel, #poi-event-overlay .overlay-btn-close').click(function () {
        $('#unsave-poi-prompt .overlay-btn-no').addClass('hide');
        $('#unsave-poi-prompt .overlay-btn-back').removeClass('hide');
        $('#poi-event-overlay').hide();
        $('#unsave-poi-prompt').show().css('z-index', '1100');
    });
    $('#schedule-notify .btn-next, #schedule-notify .crumb.edit .crumb-next').click(function() {
        if (chkPoiEventData(document.eventScheduledForm)) {
            var dates = $('#datepicker_selected').val().split(',');
            $('#poi-event-overlay .datepicker').datepick('setDate', dates); 
            $('#event-scheduled .schedule').addClass('hide');
            $('#schedule-mobile').removeClass('hide');
            // prevent layout broken
            $('#schedule-mobile .mobile-edit .mobile ul li:first-child').attr('class', 'ios on');
            $('#schedule-mobile .mobile-edit .mobile ul li:last-child').attr('class', 'android');
            $('#schedule-ios').attr('class', 'mobile-block mobile-active');
            $('#schedule-android').attr('class', 'mobile-block hide');            
        }
    });
    $('#event-scheduled .btn-save').click(function () {
        $.unblockUI();
        $('#poi-event-overlay').hide();
        $('#channel-poi .edit-block').addClass('hide');
        $('#channel-poi #poi-list').removeClass('hide');
        $('#content-main').removeAttr('class');
        $('#content-main').addClass('poi-list');
        setFormHeight();
        $('#poi-list .has-poi').removeClass('hide');
        $('#poi-list .btn-create-poi').removeClass('enable').addClass('disable');
        $('#poi-list .poi-info').removeClass('hide');
    });

    $('#instant-notify .btn-next, #instant-notify .crumb.edit .crumb-next').click(function() {
        if (chkPoiEventData(document.eventInstantForm)) {
            var dates = $('#datepicker_selected').val().split(',');
            $('#poi-event-overlay .datepicker').datepick('setDate', dates); 
            $('#event-instant .instant').addClass('hide');
            $('#instant-mobile').removeClass('hide');
            // prevent layout broken
            $('#instant-mobile .mobile-edit .mobile ul li:first-child').attr('class', 'ios on');
            $('#instant-mobile .mobile-edit .mobile ul li:last-child').attr('class', 'android');
            $('#instant-ios').attr('class', 'mobile-block mobile-active');
            $('#instant-android').attr('class', 'mobile-block hide');            
        }
    });
    $('#event-instant .btn-save').click(function () {
        $.unblockUI();
        $('#poi-event-overlay').hide();
        $('#channel-poi .edit-block').addClass('hide');
        $('#channel-poi #poi-list').removeClass('hide');
        $('#content-main').removeAttr('class');
        $('#content-main').addClass('poi-list');
        setFormHeight();
        $('#poi-list .has-poi').removeClass('hide');
        $('#poi-list .btn-create-poi').removeClass('enable').addClass('disable');
        $('#poi-list .poi-info').removeClass('hide');
    });

    $('#poi-event-overlay #event-select ul.list li').not('.event-coming-soon').click(function() {
        var block = $(this).attr('class');
        $('#poi-event-overlay .event').not('a.event').addClass('hide');
        $('#'+ block +'').removeClass('hide');
        $('#event-scheduled .schedule').addClass('hide');
        $('#event-scheduled #schedule-notify').removeClass('hide');
        $('body').addClass('from-poi-overlay-edit-mode');
        loadYouTubeFlash();
    });

    //overlay crumb
    $('#poi-event-overlay .unblock').click(function () {
        $.unblockUI();
    });
    $('#poi-event-overlay .event .crumb a.crumb-event').click(function() {
        var blockClass = $(this).attr('class'),
            block = blockClass.split(' ');
        $('#poi-event-overlay .event, #schedule-mobile, #instant-mobile').addClass('hide');
        $('#'+ block[1] +', #schedule-notify, #instant-notify').removeClass('hide');
    });
    $('#schedule-mobile .crumb .crumb-mobile').click(function() {
        $('#event-scheduled .schedule').addClass('hide');
        $('#schedule-notify').removeClass('hide');
    });
    $('#instant-mobile .crumb .crumb-mobile').click(function() {
        $('#event-instant .instant').addClass('hide');
        $('#instant-notify').removeClass('hide');
    });

    $("#poi-event-overlay #event-scheduled .video-wrap .poi-display").poi({
        "type" : POI.TV_SHOW_NOTICE,
        "displayText" : "Input display text",
        "buttons" : ["Input button text"],
        "duration" : -1
    });
    $("#schedule_display_text").change(function(){
        $("#poi-event-overlay .event .video-wrap .poi-display").poi("displayText", $("#schedule_display_text").val());
    });
    $("#schedule_button_text").change(function(){
        $("#poi-event-overlay .event .video-wrap .poi-display").poi("buttonText", $("#schedule_button_text").val(), 0);
    });

    $('#schedule-mobile .mobile ul li a').click(function() {
        var block = $(this).attr('class');
        $('#schedule-mobile ul li').removeClass('on');
        $(this).parents('li').addClass('on');
        $('#schedule-mobile .mobile .mobile-block').addClass('hide').removeClass('mobile-active');
        $('#schedule-' + block +'').removeClass('hide').addClass('mobile-active');
        $('#schedule_msg').val($("#schedule-mobile .mobile-active p.msg").text());
    });
    $('#instant-mobile .mobile ul li a').click(function() {
        var block = $(this).attr('class');
        $('#instant-mobile ul li').removeClass('on');
        $(this).parents('li').addClass('on');
        $('#instant-mobile .mobile .mobile-block').addClass('hide').removeClass('mobile-active');
        $('#instant-' + block +'').removeClass('hide').addClass('mobile-active');
        $('#instant_msg').val($("#instant-mobile .mobile-active p.msg").text());
    });

    $('#schedule_msg, #instant_msg').toggleVal();
    $("#schedule_msg").change(function(){
        var val = $('#schedule_msg').val();
        $("#schedule-mobile .mobile-block p.msg").text(val);
        $('#schedule-ios p.msg').ellipsis();
    });
    $("#instant_msg").change(function(){
        var val = $('#instant_msg').val();
        $("#instant-mobile .mobile-block p.msg").text(val);
        $('#instant-ios p.msg').ellipsis();
    });

    $('#poi-event-overlay .datepicker').datepick({
        changeMonth: false,
        firstDay: 0,
        monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        //dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        dateFormat: 'mm/dd/yyyy',
        minDate: +0,
        multiSelect: 999
    });
    $('#schedule-mobile .notification .time .hour').perfectScrollbar();
    $('#poi-event-overlay .time .select .select-txt, #poi-event-overlay .time .select .select-btn').click(function() {
        $('#poi-event-overlay .select-list').hide();
        $(this).parent().children('.select-btn').toggleClass('on');
        if ($(this).parent().children('.select-btn').hasClass('on')) {
            $(this).parent().children('.select-list').slideDown();
        } else {
            $(this).parent().children('.select-list').hide();
        }
        return false;
    });
    $('#poi-event-overlay .select-list p').click(function() {
        var selectOption = $(this).text();
        $(this).parent().parent().parent().children('.select-btn').removeClass('on');
        $(this).parent().parent().parent().children('.select-txt').children().text(selectOption);
        $(this).parents('.select-list').hide();
        return false;
    });

    // common unblock
    $('body').keyup(function (e) {
        if (27 === e.which) { // Esc
            $.unblockUI();
            return false;
        }
    });

    $(window).resize(function () {
        setFormHeight();
    });
});

function setFormHeight() {
    var windowHeight = $(window).height(),
        windowWidth  = $(window).width(),
        titleFuncWidth = $('#title-func').width(),
        titleFuncHeight = $('#title-func').height(),
        contentHeight = windowHeight - titleFuncHeight - 94 - 48 - 38 - 10;    // 94:header+studio-nav 48:footer 38:title-func-padding
    if (windowWidth > 1220) {
        $('#channel-poi input.text').width(windowWidth - 734);
        $('#title-func h2').width(windowWidth - 584).data('width', $(this).width());
    } else {
        $('#channel-poi input.text').width(433);
        $('#title-func h2').width(583).data('width', '583');
    }
    $('#title-func').data('width', $('#title-func h2').width());
    $('#title-func h2.poi-list em').width($('#title-func').data('width') - $('#title-func h2.poi-list span').width());
    $('#title-func h2.poi-create em').width($('#title-func').data('width') - $('#title-func h2.poi-create span').width());
    $('#title-func h2.poi-edit em').width($('#title-func').data('width') - $('#title-func h2.poi-edit span').width());
    $('#channel-poi .edit-block').height(contentHeight);
    //alert($('#title-func h2.poi-create em').width());
    //alert($('#title-func').data('width'));
    //alert($('#title-func h2.poi-create span').width());
}

function chkData(fm) {
    fm.name.value = $.trim(fm.name.value);
    if ('' === fm.name.value) {
        $('.form-btn .notice').removeClass('hide');
        return false;
    }
    return true;
}

function chkPoiEventData(fm) {
    fm.displayText.value = $.trim(fm.displayText.value);
    fm.btnText.value = $.trim(fm.btnText.value);
    if ('' === fm.displayText.value || '' === fm.btnText.value) {
        $('#poi-event-overlay .event .func ul li.notice').show();
        return false;
    }
    $('#channel-poi .form-btn p.notice').hide();
    $('#poi-event-overlay .event .func ul li.notice').hide();
    return true;
}

function loadYouTubeFlash() {
    $('#poi-event-overlay .wrap .content .video-wrap .video').empty();
    $('#schedule-video').flash({
        id: 'youTubePlayerChrome',
        swf: 'http://www.youtube.com/apiplayer?version=3&enablejsapi=1&playerapiid=playerChrome',
        style: 'vertical-align: middle;',
        width: 590,
        height: 332,
        hasVersion: 9,
        allowScriptAccess: 'always',
        allowFullScreen: false,
        quality: 'high',
        menu: false,
        bgcolor: '#000000',
        //wmode: 'transparent',
        flashvars: false
    });
}

function loadVideo() {
    youTubePlayerObj.loadVideoById({
        'videoId': $('#channel-poi').data('ytid'),
        'startSeconds': $('#channel-poi').data('starttime')
    });
}

function onYouTubePlayerReady(playerId) {
    // NO DECLARE var youTubePlayerObj ON PURPOSE to let it be global
    youTubePlayerObj = document.getElementById('youTubePlayerChrome');
    youTubePlayerObj.addEventListener('onStateChange', 'onYouTubePlayerStateChange');
    loadVideo();
}

function onYouTubePlayerStateChange(newState) {
    // unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5)
    if (-1 == newState) {
        youTubePlayerObj.playVideo();
    }
    if (1 == newState && $('body').hasClass('from-poi-overlay-edit-mode')) {
        youTubePlayerObj.pauseVideo();
    }
}