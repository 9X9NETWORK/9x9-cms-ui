$('#storyboard-wrap').perfectScrollbar();
// storyboard sortable
$('#storyboard-listing').sortable({
    cursor: 'move',
    revert: true,
    tolerance: 'pointer'
    // change: function (event, ui) {
    //     $('body').addClass('has-change');
    // },
    // update: function (event, ui) {
    //     $('#storyboard-listing li').removeClass('last last2');
    //     $('#storyboard-listing li').eq(48).addClass('last2');
    //     $('#storyboard-listing li').eq(49).addClass('last');
    // }
});

// video play
$('#storyboard').on('click', '.storyboard-list ul li .hover-func a.video-play', function(e) {
    // switch tab and content
    if ($('#epcurate-curation > .curation-content > ul.tabs > li.poi').hasClass('hide')) {
        $('#epcurate-curation ul.tabs li').removeClass('on');
        $('#epcurate-curation ul.tabs li a.cur-add').parent().parent().removeClass('last');
        $('#epcurate-curation ul.tabs li a.cur-edit').parent().parent().removeClass('hide last').addClass('on');
        $('#epcurate-curation ul.tabs li a.cur-poi').parent().parent().removeClass('hide');
        $('#epcurate-curation .tab-content').addClass('hide');
        $('#cur-edit').removeClass('hide');
        $('#cur-edit .edit-time').removeClass('hide');
        $('#cur-edit .edit-title').addClass('hide');
        $('#video-control').show();
        $('#btn-play').addClass('hide');
        $('#btn-pause').addClass('hide');
    }

    return false;
});

// main tabs - Common
$('#epcurate-curation ul.tabs li a:not(.cur-edit-poi)').click(function(e) {
    // if ($('body').hasClass('has-trimtime-change')) {
    //     $common.showUnsaveTrimTimeOverlay(e);
    //     return false;
    // }
    // if ($('body').hasClass('has-poi-change')) {
    //     $common.showUnsavePoiOverlay(e);
    //     return false;
    // }
    // if ($('body').hasClass('has-titlecard-change')) {
    //     $common.showUnsaveTitleCardOverlay(e);
    //     return false;
    // }
    var showBlock = $(this).attr('href').split('#');
    $('#epcurate-curation ul.tabs li').removeClass('on');
    $(this).parent().parent().addClass('on');
    $('#epcurate-curation .tab-content').addClass('hide');
    $('#' + showBlock[1]).removeClass('hide');
    return false;
});
// main tabs - Add Video
$('#epcurate-curation ul.tabs li a.cur-add').click(function(e) {
    // if ($('body').hasClass('has-trimtime-change')) {
    //     $common.showUnsaveTrimTimeOverlay(e);
    //     return false;
    // }
    // if ($('body').hasClass('has-poi-change')) {
    //     $common.showUnsavePoiOverlay(e);
    //     return false;
    // }
    // if ($('body').hasClass('has-titlecard-change')) {
    //     $common.showUnsaveTitleCardOverlay(e);
    //     return false;
    // }
    // $page.cancelTitleCard();
    // $page.removeVideoPlayingHook();
    // $page.removeTrimTimeEditHook();
    // $page.removeTitleCardPlayingHook();
    // $page.removeTitleCardEditHook();
    $('#epcurate-curation .tabs li').addClass('hide');
    $(this).parent().parent().removeClass('hide').addClass('last');
    $('#video-player .video').html('');
    $('#video-control').hide();
    // $page.unblockPoiUI();
});
// main tabs - Edit Video
$('#epcurate-curation ul.tabs li a.cur-edit').click(function(e) {
    // if ($('body').hasClass('has-poi-change')) {
    //     $common.showUnsavePoiOverlay(e);
    //     return false;
    // }
    $('#epcurate-curation .tab-content').addClass('hide');
    $('#cur-edit').removeClass('hide');
    $('#epcurate-curation ul.tabs li.poi').addClass('last');
    $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
    $('#epcurate-curation ul.tabs li.edit-video').addClass('on');
    // $page.unblockPoiUI();
    // if ($('#youTubePlayer').length <= 0 || $('html').hasClass('youtube-chromeless')) {
    //     $page.loadYouTubeFlash($('#storyboard-listing li.playing').data('ytid'));
    // }
});
// main tabs - POI list
$('#epcurate-curation ul.tabs li a.cur-poi').click(function(e) {
    // if ($('body').hasClass('has-trimtime-change')) {
    //     $common.showUnsaveTrimTimeOverlay(e);
    //     return false;
    // }
    // if ($('body').hasClass('has-poi-change')) {
    //     $common.showUnsavePoiOverlay(e);
    //     return false;
    // }
    $('#epcurate-curation .tab-content').addClass('hide');
    $('#cur-poi').removeClass('hide');
    $('#epcurate-curation ul.tabs li.poi').addClass('last on');
    $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
    $('#epcurate-curation ul.tabs li.edit-video').removeClass('on');
    // $page.unblockPoiUI();
    // if ($('#youTubePlayer').length <= 0 || $('html').hasClass('youtube-chromeless')) {
    //     $page.loadYouTubeFlash($('#storyboard-listing li.playing').data('ytid'));
    // }
    // NOTE: ON PURPOSE to truncate correctly after remove hide class
    $('.ellipsis').ellipsis();
});
$('#epcurate-curation ul.tabs li a.cur-edit-poi').click(function(e) {
    return false;
});

// Trim time - buttons
$('#cur-edit').on('click', '.edit-time .btn-wrap .btns', function() {
    $('#cur-edit .edit-time .btn-wrap .btns').toggleClass('hide');
    $('#cur-edit .edit-time .time-wrap .total-time').toggleClass('hide');
    $('#cur-edit .edit-time .time-wrap .time').toggleClass('disable');
    $("#cur-edit .edit-time .time-wrap .time input").prop("disabled", function(i, val) {
        return !val;
    });
});

// POI Add button
$('#cur-poi').on('click', '.btn-add-poi a', function() {
    // Tab
    $('#epcurate-curation ul.tabs li.poi').removeClass('last on');
    $('#epcurate-curation ul.tabs li.edit-poi').removeClass('hide');
    $('#epcurate-curation ul.tabs li.edit-poi').addClass('last on');
    // Content
    $('#cur-poi').addClass('hide');
    $('#cur-poi-edit').removeClass('edit').removeClass('hide');
    return false;
});
// POI Edit button
$('#cur-poi').on('click', '.poi-list a.edit, #poi-list-page > li > ol > li > div', function() {
    // Tab
    $('#epcurate-curation ul.tabs li.poi').removeClass('last on');
    $('#epcurate-curation ul.tabs li.edit-poi').removeClass('hide');
    $('#epcurate-curation ul.tabs li.edit-poi').addClass('last on');
    // Content
    $('#cur-poi').addClass('hide');
    $('#cur-poi-edit').removeClass('edit').removeClass('hide');
    return false;
});
// POI cycle
$('#cur-poi .poi-list ul').cycle({
    activePagerClass: 'active',
    updateActivePagerLink: null,
    next: '#cur-poi .poi-list .next',
    prev: '#cur-poi .poi-list .prev',
    fx: 'scrollHorz',
    before: function() {
        $('#cur-poi .poi-list .prev, #cur-poi .poi-list .next').hide();
    },
    after: function(curr, next, opts) {
        var index = opts.currSlide;
        $('#cur-poi .poi-list .prev')[index === 0 ? 'hide' : 'show']();
        $('#cur-poi .poi-list .next')[index === opts.slideCount - 1 ? 'hide' : 'show']();
    },
    speed: 1000,
    timeout: 0,
    pause: 1,
    cleartypeNoBg: true
});

$('#poi-point-wrap .btn-next').click(function() {
    $('#poi-event-overlay .event').addClass('hide');
    $('#event-select').removeClass('hide');
    $.blockUI({
        message: $('#poi-event-overlay'),
        onBlock: function() {
            var currentFrameMonth = '';
            $('#poi-event-overlay .datepicker').datepick({
                changeMonth: false,
                dateFormat: 'yyyy/mm/dd',
                monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                multiSelect: 999,
                onChangeMonthYear: function(year, month) {
                    currentFrameMonth = month;
                },
                onDate: function(date) {
                    var selectedList = $('#datepicker_selected').val().split(','),
                        currentDate = $.datepick.formatDate('yyyy/mm/dd', date),
                        currentMonth = date.getMonth() + 1;
                    return (date >= $.datepick.today()) ? {} : {
                        dateClass: ((-1 !== $.inArray(currentDate, selectedList) && currentMonth === currentFrameMonth) ? 'datepick-selected' : ''),
                        selectable: false
                    };
                },
                onSelect: function(dates) {
                    $('body').addClass('has-poi-change');
                    $('body').addClass('has-change');
                    $('#poi-event-overlay .event .func ul li.notice').hide();
                    var selectedDate = '',
                        selectedList = [],
                        scheduleDate = '',
                        scheduleList = [],
                        timestampList = [];
                    $.each(dates, function(i, dateItem) {
                        selectedDate = $.datepick.formatDate('yyyy/mm/dd', dateItem);
                        selectedList.push(selectedDate);
                        scheduleDate = selectedDate + ' ' + $('#time_hour').text() + ':' + $('#time_min').text() + ':00';
                        scheduleList.push(scheduleDate);
                        timestampList.push(Date.parse(scheduleDate));
                    });
                    $('#datepicker_selected').val(selectedList.join(','));
                    $('#schedule_selected').val(scheduleList.join(','));
                    $('#timestamp_selected').val(timestampList.join(','));
                }
            });
            $('#schedule-mobile .notification .time .hour').perfectScrollbar();
        }
    });
});

$('#event-select li').click(function () {
    var eventType = $(this).prop('className');
    var POI_TYPE_MAP = {
            0: '',
            1: 'event-hyper',
            2: 'event-instant',
            3: 'event-scheduled',
            4: 'event-poll',
            'event-hyper': {
                code: 1,
                plugin: 'hyperChannel',
                formId: 'eventHyperForm'
            },
            'event-instant': {
                code: 2,
                plugin: 'shoppingInfo',
                formId: 'eventInstantForm'
            },
            'event-scheduled': {
                code: 3,
                plugin: 'tvShowNotice',
                formId: 'eventScheduledForm'
            },
            'event-poll': {
                code: 4,
                plugin: 'poll',
                formId: 'eventPollForm'
            }
        };
    var buttons = eventType !== 'event-poll' ? ['Button text'] : ['Button text', 'Button text'];
    $('#event-select').addClass('hide');
    $('#' + eventType).removeClass('hide');
    $('#poi-event-overlay #' + eventType + ' .video-wrap .poi-display').html('');
    $('#poi-event-overlay #' + eventType + ' .video-wrap .poi-display').poi({
        type: POI_TYPE_MAP[eventType].plugin,
        displayText: 'Input display text',
        buttons: buttons,
        duration: -1
    });
});

// $('#poi-event-overlay-wrap .btn-cancel').click(function () {
//     $('#poi-event-overlay .event').addClass('hide');
//     $('#event-select').removeClass('hide');
// });

$('#eventPollForm .fminput .btn-gray').click(function () {    
    var pollItemList = $('#eventPollForm p.text.poll').not('.hide');

    if (pollItemList.length < 4) {
        if (pollItemList.length === 3) {
            $(this).addClass('disabled');
        }
        // Add a poll item.
        $('#eventPollForm p.text.poll:eq(' + pollItemList.length + ')').removeClass('hide');
        $('#poi-event-overlay #event-poll .video-wrap .poi-display').poi('addButton', 'Button text');
    }

    $('.poll-button-del').addClass('deletable');
});

$('#eventScheduledForm .btn-next, #eventInstantForm .btn-next').click(function () {
    $(this).parents('form').find('> div').toggleClass('hide');
});

$('#eventScheduledForm .mobile ul li, #eventInstantForm .mobile ul li').click(function () {
    $(this).parent('ul').find('li').toggleClass('on');
    $(this).parents('div.mobile').find('> div').toggleClass('hide');
});

$('#poi-event-overlay-wrap .btn-save, #poi-event-overlay-wrap .overlay-btn-close, #poi-event-overlay-wrap .btn-cancel').click(function(){
    $.unblockUI();
    $('#epcurate-curation .tab-content').addClass('hide');
    $('#cur-poi').removeClass('hide');
    $('#epcurate-curation ul.tabs li.poi').addClass('last on');
    $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
    $('#epcurate-curation ul.tabs li.edit-video').removeClass('on');
});

$('.time-wrap div.select').click(function(){
    $(this).find('.select-list').slideToggle();
});