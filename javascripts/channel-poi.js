$('#schedule-mobile .notification .time .hour').perfectScrollbar();

$('.btn-create-poi').click(function() {
    if ($(this).hasClass('enable')) {
        $(this).addClass('disable');
        $(this).removeClass('enable');
        $('.no-episode').addClass('hide');
        $('.has-poi').addClass('hide');
        $('#poi-list').addClass('hide');
        $('#poi-point-edit').removeClass('hide');
    }
});

$('#poi-point-edit-wrap .btn-next').click(function() {
    $.blockUI({
        message: $('#poi-event-overlay')
    });

    $('#event-select').removeClass('hide');
});

$('li.event-scheduled').click(function() {
    $('#event-select').addClass('hide');
    $('#schedule-notify').removeClass('hide');
    $('#event-scheduled').removeClass('hide');
});

$('li.event-instant').click(function() {
    $('#event-select').addClass('hide');
    $('#instant-notify').removeClass('hide');
    $('#event-instant').removeClass('hide');
});

$('#event-scheduled .btn-next').click(function() {
    $('#schedule-notify').addClass('hide');
    $('#schedule-mobile').removeClass('hide');
});

$('#event-instant .btn-next').click(function() {
    $('#instant-notify').addClass('hide');
    $('#instant-mobile').removeClass('hide');
});

$('.mobile li').click(function() {
    $('.mobile li').toggleClass('on');
    $('.mobile-block').toggleClass('mobile-active hide');
});

$(document).on('click', '.time-wrap .select .select-btn, .time-wrap .select .select-txt', function(event) {
    if ($(this).parent().hasClass('enable')) {
        $(this).parent().removeClass('enable');
        $(this).parent().find('.select-btn').addClass('on');
        $(this).parent().find('.select-list').slideDown();
        event.stopPropagation();
    }
});

$(document).click(function() {
    $('.time-wrap .select').addClass('enable');
});

$('.btn-save').click(function() {
    $.unblockUI();
    $('#instant-mobile, #schedule-mobile').addClass('hide');
    $('.has-poi').removeClass('hide');
    $('.poi-info').removeClass('hide');
    $('#poi-list').removeClass('hide');
    $('#poi-point-edit').addClass('hide');
});

$('#poi-list-page .btn-del').click(function() {
    $.blockUI({
        message: $('#del-poi-notice')
    });
});

$('#del-poi-notice .btn-del').click(function() {
    $.unblockUI();
    $('.btn-create-poi').removeClass('disable');
    $('.btn-create-poi').addClass('enable');
    $('.has-poi').addClass('hide');
    $('.poi-info').addClass('hide');
});

$('#poi-list-page .edit').click(function() {
    $('#poi-list').addClass('hide');
    $('#poi-point-edit').removeClass('hide');
    $('#poi-point-edit-wrap h3').html('Edit POI');
});