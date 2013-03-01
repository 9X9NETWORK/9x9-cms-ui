$(function () {
    $('#channel-name').data('width', $('#channel-name').width());
    setEpisodeWidth();
    autoHeight();
    scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');

    // common unblock
    $('body').keyup(function (e) {
        if (27 === e.which) { // Esc
            $.unblockUI();
            if ($(this).hasClass('has-error')) {
                location.replace('index.html');
            }
            return false;
        }
    });
    $(document).on('click', '.unblock, .btn-close, .fb-ok, .btn-no', function () {
        $.unblockUI();
        $('#ep-list ul li').removeClass('deleting');
        return false;
    });
    $('#system-error .btn-ok, #system-error .btn-close').click(function () {
        $.unblockUI();
        if ($('body').hasClass('has-error')) {
            location.replace('index.html');
        }
        return false;
    });

    // leave and unsave
    function confirmExit() {
        if ($('body').hasClass('has-change')) {
            // Unsaved changes will be lost, are you sure you want to leave?
            return $('#unsave-prompt p.content').text();
        }
    }
    window.onbeforeunload = confirmExit;
    $('body').removeClass('has-change');
    $(document).on('click', '#header #logo, #header a, #studio-nav a, #content-nav a, #footer a, #title-func .curate, #episode-list a.edit', function (e) {
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
        if ('' != $('body').data('leaveId') && -1 !== $.inArray($('body').data('leaveId'), ['logo', 'profile-logout', 'language-en', 'language-zh'])) {
            $('#' + $('body').data('leaveId')).trigger('click');
        } else {
            location.href = $('body').data('leaveUrl');
        }
        return false;
    });

    // episode list sorting
    $('#episode-list').sortable({
        cursor: 'move',
        revert: true,
        change: function (event, ui) {
            $('body').addClass('has-change');
        }
    });
    $('#episode-list').sortable('disable');
    $('#title-func').on('click', 'p.order a.reorder', function () {
        $(this).text('Save order').removeClass('reorder').addClass('save');
        $('#episode-list').sortable('enable');
        $('body').removeClass('has-change');
		$('#ep-list ul li .episode .btns .btn-wrap ul li a').addClass('disable');
        return false;
    });
    $('#title-func').on('click', 'p.order a.save', function () {
        var parameter = null,
            episodes = [],
            $this = $(this);
        $('#episode-list > li').each(function () {
            if ($(this).data('meta') > 0) {
                episodes.push($(this).data('meta'));
            }
        });
        if (episodes.length > 0) {
            parameter = {
                episodes: episodes.join(',')
            };
        }
        if ($('body').hasClass('has-change') && null !== parameter) {
            showSavingOverlay();
            $('#overlay-s').fadeOut(1000, function () {
                $this.text('Reorder episodes').removeClass('save').addClass('reorder');
                $('#episode-list').sortable('disable');
                $('body').removeClass('has-change');
            });
        } else {
            $this.text('Reorder episodes').removeClass('save').addClass('reorder');
            $('#episode-list').sortable('disable');
            $('body').removeClass('has-change');
			$('#ep-list ul li .episode .btns .btn-wrap ul li a').removeClass('disable');
        }
        return false;
    });

    // episode list delete
    $(document).on('click', '#ep-list .enable a.del', function () {
        $(this).parents('li').addClass('deleting').data('deleteId', $(this).attr('rel'));
        showDeletePromptOverlay('Are you sure you want to delete this episode?');
        return false;
    });
    $('#delete-prompt .btn-del').click(function () {
        $.unblockUI();
        if ($('#ep-list li.deleting').length > 0 && '' != $('#ep-list li.deleting').data('deleteId')) {
            showSavingOverlay();
            $('#overlay-s').fadeOut(1000, function () {
                var cntEpisode = $('#episode-counter').text();
                if (cntEpisode > 0) {
                    $('#episode-counter').text(cntEpisode - 1);
                }
                $('#ep-list ul li.deleting').remove();
                $('#content-main-wrap').height($('#content-main-wrap').height() - 82);  // 82: li height
                scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');
            });
        }
        return false;
    });

    // episode first cycle
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

    $(window).resize(function () {
        setEpisodeWidth();
        autoHeight();
        scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');
        if ('none' == $('#main-wrap-slider').css('display')) {
            $('#main-wrap-slider .slider-vertical').slider('destroy');
            $('#content-main-wrap').css('top', '0');
        }
    });
});

function setEpisodeWidth() {
    var wrapWidth = $('#content-main-wrap').width(),
        contentmainWidth = $('#content-main').width(),
        titleWidth = $('#title-func').width(),
        channelNameWidth = $('#channel-name').width(),
        crumbWidth = $('#title-func .title-crumb').width(),
        titleBtnsWidth = $('#title-func ul').width(),
        scheduledWidth = $('#ep-list ul li .scheduled-time').width(),
        publishWidth = $('#ep-list ul li .publish-time').width(),
        viewsWidth = $('#ep-list ul li .views').width();
    $('#ep-list ul li .wrap, #title-func .caption').width(wrapWidth - 31 - 1);  // 1:border
    $('#ep-list ul li .episode, #title-func .caption  p.episode').width(wrapWidth - 80 - scheduledWidth - publishWidth - viewsWidth - 1);   // 1:border
    $('#ep-list ul li .episode h3').each(function (index) {
        $('a', this).text($(this).data('meta'));
    });
    $('#ep-list ul li .episode h3').addClass('ellipsis').ellipsis();
    if ($('#ep-list ul li .episode').length > 0 && $('#channel-name').data('width') + crumbWidth + 10 > contentmainWidth - titleBtnsWidth) {  // 10: title-func padding
        $('#title-func h2').width(contentmainWidth - titleBtnsWidth - 10 - 15);  // 10: title-func padding, 15: channel name and btns space
        $('#channel-name').width($('#title-func h2').width() - crumbWidth - 6);  // 6: channel name margin
        $('#channel-name').text($('#channel-name').data('meta')).addClass('ellipsis').ellipsis();
    } else {
        $('#title-func h2').width('auto');
        $('#channel-name').width('auto');
        $('#channel-name').text($('#channel-name').data('meta')).addClass('ellipsis').ellipsis();
    }
}
