// Channel list scrollbar.
$('#portal-list').perfectScrollbar({
    marginTop: 25,
    marginBottom: 63
});

$(window).resize(function() {
    $('#portal-list').perfectScrollbar('update');
});

// Channel list sortable.
$('#channel-list').sortable({
    cursor: 'move',
    revert: true,
    cancel: '.empty',
    change: function(event, ui) {
        $('body').addClass('has-change');
    }
});
$('#channel-list').sortable('disable');

$(document).on('click', ".sort-list li:eq(1)", function() {
    $(".sType").removeClass("on");
    $(this).addClass("on");
    $(".btn-top").removeClass("hide");
    $(".isSortable").css("cursor", "pointer");
    $('#channel-list').sortable('disable');
});

$(document).on('click', ".sort-list li:eq(2)", function() {
    $(".sType").removeClass("on");
    $(this).addClass("on");
    $(".btn-top").addClass("hide");
    $(".isSortable").css("cursor", "move");
    $('#channel-list').sortable('enable');
});