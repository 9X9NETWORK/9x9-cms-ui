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
    var showBlock = $(this).attr('href').split('#');
    $('#epcurate-curation ul.tabs li').removeClass('on');
    $(this).parent().parent().addClass('on');
    $('#epcurate-curation .tab-content').addClass('hide');
    $('#' + showBlock[1]).removeClass('hide');
    return false;
});
// main tabs - Add Video
$('#epcurate-curation ul.tabs li a.cur-add').click(function(e) {
    $('#epcurate-curation .tabs li').addClass('hide');
    $(this).parent().parent().removeClass('hide').addClass('last');
    $('#video-player .video').html('');
    $('#video-control').hide();
    // $page.unblockPoiUI();
});
// main tabs - Edit Video
$('#epcurate-curation ul.tabs li a.cur-edit').click(function(e) {
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

$('#event-select li').click(function() {
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

$('#eventPollForm .fminput .btn-gray').click(function() {
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

$('#eventScheduledForm .btn-next, #eventInstantForm .btn-next').click(function() {
    $(this).parents('form').find('> div').toggleClass('hide');
});

$('#eventScheduledForm .mobile ul li, #eventInstantForm .mobile ul li').click(function() {
    $(this).parent('ul').find('li').toggleClass('on');
    $(this).parents('div.mobile').find('> div').toggleClass('hide');
});

$('#poi-event-overlay-wrap .btn-save, #poi-event-overlay-wrap .overlay-btn-close, #poi-event-overlay-wrap .btn-cancel').click(function() {
    $.unblockUI();
    $('#epcurate-curation .tab-content').addClass('hide');
    $('#cur-poi').removeClass('hide');
    $('#epcurate-curation ul.tabs li.poi').addClass('last on');
    $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
    $('#epcurate-curation ul.tabs li.edit-video').removeClass('on');
});

$('.time-wrap div.select').click(function() {
    $(this).find('.select-list').slideToggle();
});

// Title card
$('#storyboard-listing p.title a').click(function() {
    $('#epcurate-curation .tab-content').addClass('hide');
    $('#cur-edit').removeClass('hide');

    $('#cur-edit > div').toggleClass('hide disable');

    $('#epcurate-curation ul.tabs li').removeClass('last');
    $('#epcurate-curation ul.tabs li.edit-video').addClass('last');

    $('#epcurate-curation ul.tabs li').removeClass('hide').removeClass('on');
    $('#epcurate-curation ul.tabs li.poi').addClass('hide');
    $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
    $('#epcurate-curation ul.tabs li.edit-video').addClass('on');
});

// Title Card - Edit/Preview Title (exist) => #storyboard-list li.edit p.title a.edit
// $('#storyboard-listing').on('click', 'li p.title .begin-title, li p.title .end-title', function(e) {
//     if ($('body').hasClass('has-trimtime-change')) {
//         $common.showUnsaveTrimTimeOverlay(e);
//         return false;
//     }
//     if ($('body').hasClass('has-titlecard-change')) {
//         $common.showUnsaveTitleCardOverlay(e);
//         return false;
//     }
//     $page.cancelTitleCard();
//     $page.removeVideoPlayingHook();
//     $page.removeTrimTimeEditHook();
//     $page.removeTitleCardPlayingHook();
//     $page.removeTitleCardEditHook();
//     $page.addTitleCardEditHook($(this));

//     // switch tab and content
//     $page.removePoiTab();
//     $('#epcurate-curation ul.tabs li').removeClass('on');
//     $('#epcurate-curation ul.tabs li a.cur-add').parent().parent().removeClass('last');
//     $('#epcurate-curation ul.tabs li a.cur-edit').parent().parent().removeClass('hide').addClass('on last');
//     $('#epcurate-curation .tab-content').addClass('hide');
//     $('#cur-edit').removeClass('hide');
//     $('#cur-edit .edit-time').addClass('hide');
//     $('#cur-edit .edit-title').removeClass('hide');
//     $('#cur-edit .edit-title').removeClass('disable');
//     $('#video-control').show();
//     $('#btn-play').addClass('hide');
//     $('#btn-pause').removeClass('hide');

//     var index = $(this).parent().parent().index(),
//         hook = ($(this).hasClass('begin-title')) ? 'beginTitleCard' : 'endTitleCard',
//         opts = $('#storyboard-list li:eq(' + index + ')').tmplItem().data[hook],
//         isUpdateMode = true,
//         isDisableEdit = false;
//     if (opts) {
//         $page.buildTitleCardEditTmpl(opts, isUpdateMode, isDisableEdit);
//         $page.enableTitleCardEdit();

//         $page.buildTitleCardTmpl(opts);
//         $('#cur-edit .edit-title .btn-cancel').data('opts', opts);
//         $('#btn-play').trigger('click');
//     }
//     return false;
// });

// Title Card - Add Title (none) => #storyboard-list li.edit p.hover-func a.edit
// $('#storyboard-listing').on('click', 'li p.hover-func a.begin-title, li p.hover-func a.end-title', function(e) {
//     if ($('body').hasClass('has-trimtime-change')) {
//         $common.showUnsaveTrimTimeOverlay(e);
//         return false;
//     }
//     if ($('body').hasClass('has-titlecard-change')) {
//         $common.showUnsaveTitleCardOverlay(e);
//         return false;
//     }
//     $page.cancelTitleCard();
//     $page.removeVideoPlayingHook();
//     $page.removeTrimTimeEditHook();
//     $page.removeTitleCardPlayingHook();
//     $page.removeTitleCardEditHook();
//     $page.addTitleCardEditHook($(this));

//     // switch tab and content
//     $page.removePoiTab();
//     $('#epcurate-curation ul.tabs li').removeClass('on');
//     $('#epcurate-curation ul.tabs li a.cur-add').parent().parent().removeClass('last');
//     $('#epcurate-curation ul.tabs li a.cur-edit').parent().parent().removeClass('hide').addClass('on last');
//     $('#epcurate-curation .tab-content').addClass('hide');
//     $('#cur-edit').removeClass('hide');
//     $('#cur-edit .edit-time').addClass('hide');
//     $('#cur-edit .edit-title').removeClass('hide');
//     $('#cur-edit .edit-title').removeClass('disable');
//     $('#video-control').show();
//     $('#btn-play').removeClass('hide');
//     $('#btn-pause').addClass('hide');

//     var isUpdateMode = false,
//         isDisableEdit = false;
//     $page.buildTitleCardEditTmpl(cms.config.TITLECARD_DEFAULT_OPTION, isUpdateMode, isDisableEdit);
//     $page.enableTitleCardEdit();

//     $page.buildTitleCardTmpl(cms.config.TITLECARD_DEFAULT_OPTION);
//     $('#cur-edit .edit-title .btn-cancel').data('opts', cms.config.TITLECARD_DEFAULT_OPTION);
//     return false;
// });

// Title Card - Play Title Card
// $('#btn-play').click(function() {
//     $page.cancelTitleCard();
//     var opts = null,
//         isVideoPlayingMode = ($('#storyboard-list li.playing').length > 0) ? true : false,
//         isTitleCardEnableEditMode = (!$('.edit-title').hasClass('disable')) ? true : false;
//     if (isVideoPlayingMode) {
//         if ($('#storyboard-list li.playing .title a.playing').hasClass('begin-title')) {
//             $('#storyboard-list li.playing .hover-func .video-play').trigger('click');
//         } else {
//             opts = $('#storyboard-list li.playing').tmplItem().data.endTitleCard;
//             $page.wrapTitleCardCanvas();
//             $('#video-player .video .canvas').titlecard($page.adaptTitleCardOption(opts), function() {
//                 if ($('#storyboard-list li.next-playing').length <= 0) {
//                     $('#epcurate-curation ul.tabs li a.cur-add').trigger('click');
//                 } else {
//                     $('#storyboard-list li.next-playing .hover-func .video-play').trigger('click');
//                 }
//             });
//             $page.animateTitleCardProgress(opts);
//         }
//     } else {
//         if (isTitleCardEnableEditMode) {
//             opts = $page.computeTitleCardEditOption();
//         } else {
//             opts = $('#titlecard-outer').tmplItem().data;
//         }
//         $page.wrapTitleCardCanvas();
//         $('#video-player .video .canvas').titlecard($page.adaptTitleCardOption(opts), function() {
//             $page.buildTitleCardTmpl(opts);
//             $('#btn-play').removeClass('hide');
//             $('#btn-pause').addClass('hide');
//         });
//         $page.animateTitleCardProgress(opts);
//     }
// });

// Title Card - Stop Title Card
// $('#btn-pause').click(function() {
//     $page.cancelTitleCard();
//     var opts = null,
//         isVideoPlayingMode = ($('#storyboard-list li.playing').length > 0) ? true : false;
//     if (isVideoPlayingMode) {
//         if ($('#storyboard-list li.playing .title a.playing').hasClass('begin-title')) {
//             opts = $('#storyboard-list li.playing').tmplItem().data.beginTitleCard;
//         } else {
//             opts = $('#storyboard-list li.playing').tmplItem().data.endTitleCard;
//         }
//     } else {
//         opts = $page.computeTitleCardEditOption();
//     }
//     if (opts) {
//         $page.buildTitleCardTmpl(opts);
//     }
// });

// Title Card - Edit Title button - enter titlecard edit mode
// $('#cur-edit').on('click', '.edit-title .btn-edit', function() {
//     var opts = $('#cur-edit .edit-title .btn-cancel').data('opts'),
//         isUpdateMode = ($('#storyboard-list li.edit p.title a.edit').length > 0) ? true : false,
//         isDisableEdit = false;
//     $page.buildTitleCardEditTmpl(opts, isUpdateMode, isDisableEdit);
//     $page.enableTitleCardEdit();

//     $page.cancelTitleCard();
//     $page.buildTitleCardTmpl(opts);
//     $('#cur-edit .edit-title .btn-cancel').data('opts', opts);
//     return false;
// });

// Title Card - Cancel button - leave titlecard edit mode
$('#cur-edit').on('click', '.edit-title .btn-cancel', function() {
    // // restore titlecard
    // var opts = $('#cur-edit .edit-title .btn-cancel').data('opts'),
    //     isUpdateMode = ($('#storyboard-list li.edit p.title a.edit').length > 0) ? true : false,
    //     isDisableEdit = true;
    // $page.buildTitleCardEditTmpl(opts, isUpdateMode, isDisableEdit);
    // $page.disableTitleCardEdit();

    // $page.cancelTitleCard();
    // $page.buildTitleCardTmpl(opts);
    // $('#cur-edit .edit-title .btn-cancel').data('opts', opts);
    // $('body').removeClass('has-titlecard-change');
    // return false;
    $('#cur-edit .edit-title').addClass('disable');
    $('#cur-edit .select').attr('class', 'select disable');
    $('#cur-edit input, #cur-edit textarea').prop('disabled', true);
    $.uniform.update('#cur-edit input, #cur-edit textarea');
    $('#cur-edit .font-container .font-l, #cur-edit .font-container .font-s').removeClass('enable').addClass('disabled');
});

// Title Card - Done button - finish titlecard edit
$('#cur-edit').on('click', '.edit-title .btn-done', function(e) {
    var message = $common.strip_tags($.trim($('#text').val())),
        isInsertMode = null,
        hook = '',
        tmplItem = null,
        itemData = null,
        opts = null,
        isUpdateMode = true,
        isDisableEdit = true;
    if ('' === message) {
        message = " ";
    }
    isInsertMode = ($('#storyboard-list li.edit p.hover-func a.edit').length > 0) ? true : false;
    if (isInsertMode) {
        hook = ($('#storyboard-list li.edit p.hover-func a.edit').hasClass('begin-title')) ? 'beginTitleCard' : 'endTitleCard';
        if ($('#storyboard-listing li.edit .hover-func a.edit').hasClass('begin-title')) {
            $('#storyboard-listing li.edit .title').append('<a href="#" class="begin-title edit">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">' + nn._([cms.global.PAGE_ID, 'episode-storyboard', 'Edit Title']) + '</span></span></span></span></a>');
        } else {
            $('#storyboard-listing li.edit .title').append('<a href="#" class="end-title edit">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">' + nn._([cms.global.PAGE_ID, 'episode-storyboard', 'Edit Title']) + '</span></span></span></span></a>');
        }
        $('#storyboard-listing li.edit .hover-func a.edit').remove();
    } else {
        hook = ($('#storyboard-list li.edit p.title a.edit').hasClass('begin-title')) ? 'beginTitleCard' : 'endTitleCard';
    }

    // save to li DOM and update cancel data
    tmplItem = $('#storyboard-listing li.edit').tmplItem();
    itemData = tmplItem.data;
    if (null === itemData[hook]) {
        itemData[hook] = {};
    }
    itemData[hook].message = message;
    itemData[hook].align = $('#cur-edit .edit-title input[name=align]:checked').val();
    itemData[hook].effect = $('#effect').val();
    itemData[hook].duration = $('#duration').val();
    itemData[hook].size = $('#fontSize').val();
    itemData[hook].color = $('#fontColor').val();
    itemData[hook].style = ($('#cur-edit .edit-title input[name=fontStyle]:checked').length > 0) ? 'italic' : 'normal';
    itemData[hook].weight = ($('#cur-edit .edit-title input[name=fontWeight]:checked').length > 0) ? 'bold' : 'normal';
    itemData[hook].bgColor = $('#backgroundColor').val();
    itemData[hook].bgImage = ('image' === $('#cur-edit .edit-title input[name=bg]:checked').val() && '' !== $('#backgroundImage').val()) ? $('#backgroundImage').val() : '';
    // ON PURPOSE to mark update() to avoid lose edit hook
    //tmplItem.update();

    // and save to video DOM for titlecard play button
    $page.cancelTitleCard();
    opts = itemData[hook];
    $page.buildTitleCardTmpl(opts);
    $page.buildTitleCardEditTmpl(opts, isUpdateMode, isDisableEdit);
    $page.disableTitleCardEdit();
    $('#cur-edit .edit-title .btn-cancel').data('opts', opts);

    $('body').addClass('has-change');
    $('body').removeClass('has-titlecard-change');
    $page.sumStoryboardInfo();
    // implement Done == Save?
    //$('#form-btn-save').trigger('click');
    return false;
});

// Title Card - Delete icon - titlecard
$('#cur-edit').on('click', '.edit-title .btn-del', function() {
    $('#btn-pause').trigger('click');
    $common.showDeletePromptOverlay('Are you sure you want to delete this title?');
    return false;
});
$('#delete-prompt .btn-del').click(function() {
    $.unblockUI();
    if ($('#storyboard-list li.edit p.title a.edit').length > 0) {
        $common.showSavingOverlay();
        var deleteId = 0,
            tmplItem = $('#storyboard-listing li.edit').tmplItem(),
            itemData = tmplItem.data;
        if ($('#storyboard-listing li.edit .title a.edit').hasClass('begin-title')) {
            if (itemData.beginTitleCard.id && itemData.beginTitleCard.id > 0) {
                deleteId = itemData.beginTitleCard.id;
            }
            itemData.beginTitleCard = null;
            tmplItem.update();
            $('#storyboard-listing li.edit .hover-func').append('<a href="#" class="begin-title">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">' + nn._([cms.global.PAGE_ID, 'episode-storyboard', 'Add Title']) + '</span></span></span></span></a>');
        } else {
            if (itemData.endTitleCard.id && itemData.endTitleCard.id > 0) {
                deleteId = itemData.endTitleCard.id;
            }
            itemData.endTitleCard = null;
            tmplItem.update();
            $('#storyboard-listing li.edit .hover-func').append('<a href="#" class="end-title">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">' + nn._([cms.global.PAGE_ID, 'episode-storyboard', 'Add Title']) + '</span></span></span></span></a>');
        }
        $('#storyboard-listing li .title a.edit').remove();

        // switch tab and content
        $page.removeTitleCardEditHook();
        $('#epcurate-curation .tabs li').addClass('hide');
        $('#epcurate-curation .tabs li.first').removeClass('hide').addClass('last').addClass('on');
        $('#cur-edit').addClass('hide');
        $('#cur-add').removeClass('hide');
        $('#video-player .video').html('');
        $('#video-control').hide();

        if (deleteId > 0) {
            nn.api('DELETE', cms.reapi('/api/title_card/{titlecardId}', {
                titlecardId: deleteId
            }), null, function(data) {
                $('#overlay-s').fadeOut(0);
            });
        } else {
            $('#overlay-s').fadeOut(0);
        }
        $('body').removeClass('has-titlecard-change');
        $page.sumStoryboardInfo();
        $page.rebuildVideoNumber();
    }
    return false;
});

// Title Card - Setting UI - common
$('#cur-edit').on('change', '.text-container, .font-container, .effect-container, .background-container, .duration-container', function() {
    $('#btn-pause').trigger('click');
});

// Title Card - Setting UI - Text
$('#cur-edit').on('click change', '.text-container textarea', function() {
    $('body').addClass('has-titlecard-change');
    var text = $common.strip_tags($.trim($(this).val()));
    if (text === '') {
        text = ' ';
    }
    $(this).val(text);
    $('#titlecard-inner').html($common.nl2br(text));
    $page.verticalAlignTitleCard();
});

// Title Card - Setting UI - Font (bold, italic, radix/size, align)
$('#cur-edit').on('click', '#fontWeight', function() {
    $('body').addClass('has-titlecard-change');
    var weight = $(this).prop('checked') ? 'bold' : 'normal';
    $('#titlecard-inner').css('font-weight', weight);
});
$('#cur-edit').on('click', '#fontStyle', function() {
    $('body').addClass('has-titlecard-change');
    var style = $(this).prop('checked') ? 'italic' : 'normal';
    $('#titlecard-inner').css('font-style', style);
});
// $page.switchFontRadix($('#fontSize').val());
$('#cur-edit').on('click', '.font-container .font-l.enable', function() {
    $('#btn-pause').trigger('click');
    $('body').addClass('has-titlecard-change');
    $('body').addClass('has-change');
    $page.setupFontRadix('up');
    return false;
});
$('#cur-edit').on('click', '.font-container .font-s.enable', function() {
    $('#btn-pause').trigger('click');
    $('body').addClass('has-titlecard-change');
    $('body').addClass('has-change');
    $page.setupFontRadix('down');
    return false;
});
// $page.switchFontAlign($('#cur-edit .edit-title input[name=align]:checked').val());
$('#cur-edit').on('click', '.edit-title input[name=align]', function() {
    $('body').addClass('has-titlecard-change');
    $page.switchFontAlign($(this).val());
});

// Title Card - Setting UI - edit select dropdown (Effect, Duration)
$('#cur-edit').on('click', '.enable .select-btn, .enable .select-txt', function() {
    $('.select-list').hide();
    var parent = $(this).parent();
    parent.siblings().children('.on').removeClass('on');
    parent.children('.select-btn').toggleClass('on');
    if (parent.children('.select-btn').hasClass('on')) {
        parent.children('.select-list').slideDown();
    } else {
        parent.children('.select-list').hide();
    }
    return false;
});
$('#cur-edit').on('click', '.select .select-list li', function() {
    var selectOption = $(this).text(),
        parent = $(this).parent();
    parent.parent().children('.select-btn').removeClass('on');
    parent.parent().children('.select-txt').children().text(selectOption);
    parent.hide();
    parent.next('input').val($(this).data('meta'));
    return false;
});
$('#cur-edit').on('click', '.edit-title .effect-container .select-list li', function() {
    $('#btn-pause').trigger('click');
    $('body').addClass('has-titlecard-change');
    $('body').addClass('has-change');
    var element = $('#epcurate-curation #cur-edit .effect-container p.effect-demo'),
        effect = $(this).data('meta');
    $page.previewEffect(element, effect);
    $('#effect').val(effect);
    return false;
});
$('#cur-edit').on('click', '.effect-container p.effect-demo', function() {
    var element = $(this),
        effect = $('#effect').val();
    $page.previewEffect(element, effect);
    return false;
});
$('#cur-edit').on('click', '.edit-title .duration-container .select-list li', function() {
    $('#btn-pause').trigger('click');
    $('body').addClass('has-titlecard-change');
    $('body').addClass('has-change');
    var selectedDuration = $(this).data('meta');
    $('#duration').val(selectedDuration);
    return false;
});

// Title Card - Setting UI - background switch (color or image)
// $page.switchBackground($('#cur-edit .edit-title input[name=bg]:checked').val(), $('#cur-edit .edit-title input[name=bg]:checked').attr('name'));
$('#cur-edit').on('click', '.edit-title input[name=bg]', function() {
    $('body').addClass('has-titlecard-change');
    $page.switchBackground($(this).val(), $(this).attr('name'));
});

// Title Card - Setting UI - color picker (font color, background color)
$('#cur-edit').on('click', '.edit-title .color-list li', function() {
    var colorCode = $(this).attr('class'),
        parent = $(this).parent();
    parent.prev('span').attr('class', 'color ' + colorCode);
    parent.parent().next('input').val($(this).data('meta'));
    return false;
});
$('#cur-edit').on('click', '.edit-title .background-container .color-list li', function() {
    $('#btn-pause').trigger('click');
    $('body').addClass('has-titlecard-change');
    $('body').addClass('has-change');
    var colorCode = $(this).attr('class'),
        selectedBg = $(this).data('meta');
    $('#titlecard-outer').attr('class', colorCode);
    $('#backgroundColor').val(selectedBg);
    return false;
});
$('#cur-edit').on('click', '.edit-title .font-container .color-list li', function() {
    $('#btn-pause').trigger('click');
    $('body').addClass('has-titlecard-change');
    $('body').addClass('has-change');
    var colorCode = $(this).attr('class'),
        selectedColor = $(this).data('meta');
    $('#titlecard-inner').attr('class', colorCode);
    $('#fontColor').val(selectedColor);
    return false;
});