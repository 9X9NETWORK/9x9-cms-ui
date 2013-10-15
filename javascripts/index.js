$('#content-main-wrap').perfectScrollbar({
    marginTop: 10,
    marginBottom: 63
});

$(window).resize(function() {
    $('#content-main-wrap').perfectScrollbar('update');
});

$('p.radio-list input').uniform();

$('p.radio-list label').click(function(){
    $('p.radio-list label').removeClass('checked');
    $(this).addClass('checked');
});

// channel list sorting
$('#channel-list').sortable({
    cursor: 'move',
    revert: true,
    change: function(event, ui) {
        $('body').addClass('has-change');
    }
});
$('#channel-list').sortable('disable');

$('#title-func').on('click', 'p.order a.reorder', function() {
    $(this).text('Save order').removeClass('reorder').addClass('save');
    $('#channel-list').sortable('enable');
    $('body').removeClass('has-change');
    return false;
});
$('#title-func').on('click', 'p.order a.save', function() {
    var parameter = null,
        channels = [],
        $this = $(this);
    $('#channel-list > li').each(function() {
        if ($(this).data('meta') > 0) {
            channels.push($(this).data('meta'));
        }
    });
    if (channels.length > 0) {
        parameter = {
            channels: channels.join(',')
        };
    }
    if ($('body').hasClass('has-change') && null !== parameter) {
        showSavingOverlay();
        $('#overlay-s').fadeOut(1000, function() {
            $this.text('Reorder programs').removeClass('save').addClass('reorder');
            $('#channel-list').sortable('disable');
            $('body').removeClass('has-change');
        });
    } else {
        $this.text('Reorder programs').removeClass('save').addClass('reorder');
        $('#channel-list').sortable('disable');
        $('body').removeClass('has-change');
    }
    return false;
});

// Cycle
$('#com-9x9-cycle p.cycle-pager').html('');
$('#com-9x9-cycle .wrapper ul.content').cycle({
    pager: '.cycle-pager',
    activePagerClass: 'active',
    updateActivePagerLink: null,
    fx: 'scrollHorz',
    speed: 1000,
    timeout: 6000,
    pagerEvent: 'mouseover',
    pause: 1,
    cleartypeNoBg: true
});

// Tutorial

function showCreateChannelTutorial() {
    // $('#lightbox-create-channel').remove();
    // $('#lightbox-create-channel-tmpl').tmpl().prependTo('body');
    $('.blockOverlay').height($(window).height() - 45);
    $.blockUI.defaults.overlayCSS.opacity = '0.9';
    $.blockUI({
        message: $('#lightbox-create-channel')
    });
}
showCreateChannelTutorial();
$('p.btns.unblock').click(function() {
    $.unblockUI();
});