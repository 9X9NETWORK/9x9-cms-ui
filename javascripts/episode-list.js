$('#content-main-wrap').perfectScrollbar({
    marginTop: 20,
    marginBottom: 60
});

$(window).resize(function() {
    $('#content-main-wrap').perfectScrollbar('update');
});

$('#selected-episode p.episode-pager').html('');
$('#selected-episode .wrapper ul.content').cycle({
    pager: '.episode-pager',
    activePagerClass: 'active',
    updateActivePagerLink: null,
    fx: 'scrollHorz',
    speed: 1000,
    timeout: 6000,
    pagerEvent: 'mouseover',
    pause: 1,
    cleartypeNoBg: true
});

var isSortable = false;
$('#episode-list').sortable({
    cursor: 'move',
    revert: true,
    cancel: '.isFolder'
});
$('#episode-list').sortable('disable');

$('p.order.btns').click(function() {
    if (!isSortable) {
        $('#episode-list').sortable('enable');
        $(this).find('a').html('Save order');
    } else {
        $('#episode-list').sortable('disable');
        $(this).find('a').html('Reorder episodes');
    }
    isSortable = !isSortable;
    $(this).find('a').toggleClass('save');
    $(this).find('a').toggleClass('reorder');
});

$('#episode-list li .url:not(.disable)').click(function() {
    $(this).parents('.wrap').find('.get-url').toggle();
    $(this).toggleClass('selected');
});

$('.select-btn, .select-gray').click(function(event) {
    $(this).parent().find('.select-btn').toggleClass('on');
    $(this).parent().find('.select-dropdown').slideToggle();
    event.stopPropagation();
});

$('li:has( > a.del)').click(function() {
    $.blockUI({
        message: $('#delete-prompt')
    });
});

$('#delete-prompt a').click(function() {
    $.unblockUI();
});