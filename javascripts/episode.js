$(function () {
    CMS_CONF.EPISODES_PAGING = [[{
        "name": "esttest",
        "id": 16436,
        "public": false,
        "duration": 1991,
        "imageUrl": "http://i.ytimg.com/vi/3z6_XyYQYCc/mqdefault.jpg",
        "publishDate": null,
        "cntView": 0,
        "channelId": 8758,
        "intro": "",
        "seq": 3,
        "updateDate": 1350635860000,
        "isPublic": false,
        "adId": 0,
        "playbackUrl": "http://dev.teltel.com:8080/view?ch=8758&ep=e16436",
        "scheduleDate": null
    },
    {
        "name": "test",
        "id": 16435,
        "public": true,
        "duration": 1991,
        "imageUrl": "http://i.ytimg.com/vi/8Zhps3icaPc/mqdefault.jpg",
        "publishDate": 1349275328000,
        "cntView": 0,
        "channelId": 8758,
        "intro": "",
        "seq": 4,
        "updateDate": 1350635860000,
        "isPublic": true,
        "adId": 0,
        "playbackUrl": "http://dev.teltel.com:8080/view?ch=8758&ep=e16435",
        "scheduleDate": null
    }], [{
        "name": "esttest fake 60",
        "id": 16436,
        "public": false,
        "duration": 1991,
        "imageUrl": "http://i.ytimg.com/vi/3z6_XyYQYCc/mqdefault.jpg",
        "publishDate": null,
        "cntView": 0,
        "channelId": 8758,
        "intro": "",
        "seq": 3,
        "updateDate": 1350635860000,
        "isPublic": false,
        "adId": 0,
        "playbackUrl": "http://dev.teltel.com:8080/view?ch=8758&ep=e16436",
        "scheduleDate": null
    },
    {
        "name": "test fake 31",
        "id": 16435,
        "public": true,
        "duration": 1991,
        "imageUrl": "http://i.ytimg.com/vi/8Zhps3icaPc/mqdefault.jpg",
        "publishDate": 1349275328000,
        "cntView": 0,
        "channelId": 8758,
        "intro": "",
        "seq": 4,
        "updateDate": 1350635860000,
        "isPublic": true,
        "adId": 0,
        "playbackUrl": "http://dev.teltel.com:8080/view?ch=8758&ep=e16435",
        "scheduleDate": null
    }], [{
        "name": "<Kuso>EP name test en fake 30",
        "id": 16389,
        "public": false,
        "duration": 2077,
        "imageUrl": "http://i.ytimg.com/vi/nIbJmznTvNQ/mqdefault.jpg",
        "publishDate": null,
        "cntView": 0,
        "channelId": 8758,
        "intro": "EP intro test en  aa aaa aa    aa",
        "seq": 5,
        "updateDate": 1350880273000,
        "isPublic": false,
        "adId": 0,
        "playbackUrl": "http://dev.teltel.com:8080/view?ch=8758&ep=e16389",
        "scheduleDate": null
    },
    {
        "name": "EP name test en 03 fake 1",
        "id": 16391,
        "public": true,
        "duration": 341,
        "imageUrl": "http://i.ytimg.com/vi/Kruw1IqIQxs/mqdefault.jpg",
        "publishDate": 1348107423000,
        "cntView": 0,
        "channelId": 8758,
        "intro": "EP intro test en 03",
        "seq": 7,
        "updateDate": 1350635861000,
        "isPublic": true,
        "adId": 0,
        "playbackUrl": "http://dev.teltel.com:8080/view?ch=8758&ep=e16391",
        "scheduleDate": null
    }]];
    CMS_CONF.EPISODES_PAGING_INFO = [{
        pageID: 0,
        pageStart: 76,
        pageEnd: 61
    },
    {
        pageID: 1,
        pageStart: 60,
        pageEnd: 31
    },
    {
        pageID: 2,
        pageStart: 30,
        pageEnd: 1
    }];
    $('#channel-name').data('width', $('#channel-name').width());
    setEpisodeWidth();
    autoHeight();
    scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');

    // common unblock
    $('body').keyup(function (e) {
        if (27 === e.which) { // Esc
            $.unblockUI();
            $('#ep-list ul li').removeClass('deleting').removeData('deleteId');
            if ($(this).hasClass('has-error')) {
                location.replace('index.html');
            }
            return false;
        }
    });
    $(document).on('click', '.unblock, .btn-close, .fb-ok, .btn-no', function () {
        $.unblockUI();
        $('#ep-list ul li').removeClass('deleting').removeData('deleteId');
        return false;
    });
    $('#system-error .btn-ok, #system-error .btn-close').click(function () {
        $.unblockUI();
        if ($('body').hasClass('has-error')) {
            location.replace('index.html');
        }
        return false;
    });

    $(document).on('click', '.isFolderUpDown', function () {
        if ($('body').hasClass('in-reorder')) {
            // in reorder desable function
            return false;
        }
        var folderID = 0;
        var tmpCnt = 0;
        folderID = parseInt($(this).data("meta").toString().replace("up_paging_", "").replace("down_paging_", ""));
        if (folderID > 0) {
            $('body').append("<div style='display:none' id='tmpEPL'></div>");
            $('#episode-list-tmpl-folder').tmpl(CMS_CONF.EPISODES_PAGING_INFO[folderID]).appendTo('#tmpEPL');
            var tmpOut = $('#tmpEPL').html();
            $('#tmpEPL').remove();
            $(".folder_up_" + folderID).remove(); // remove open folder button
            $('#folder_up_' + folderID).replaceWith(tmpOut); // replae open folder up to close floder
            var iPageSize = 30;
            $('.itemFolder_' + folderID).slideUp("slow", function () {
                var tmpStr = "";
                if ($(this).data("meta").toString().indexOf("down_paging_") == 0) {
                    tmpStr = "down";
                } else {
                    tmpStr = "up";
                }
                $(".itemFolder_" + folderID).remove(); // episode in folder remove
                setTimeout(function () { // give some break for script
                    tmpCnt++;
                    if (tmpCnt === iPageSize) { // slidr up / down will call this func by page size times , so only last call this function
                        setPageScroll(tmpStr);
                    }
                }, 200);
            });
        }
    });

    $(document).on('click', '.isFolderOri', function () {
        if ($('body').hasClass('in-reorder')) {
            // in reorder desable function
            return false;
        }
        var folderID = 0;
        if ($(this).data("meta").toString().indexOf("paging_") == 0) {
            folderID = parseInt($(this).data("meta").toString().replace("paging_", ""));
        }
        if (folderID > 0) {
            // has paging number
            // is folder add folder to this 
            $('body').append("<div style='display:none' id='tmpEPL'></div>") ;
            $('#episode-list-tmpl-folder-up').tmpl(CMS_CONF.EPISODES_PAGING_INFO[folderID]).appendTo('#tmpEPL');
            $('#episode-list-tmpl-item').tmpl(CMS_CONF.EPISODES_PAGING[folderID]).appendTo('#tmpEPL');
            $('#episode-list-tmpl-folder-down').tmpl(CMS_CONF.EPISODES_PAGING_INFO[folderID]).appendTo('#tmpEPL');
            $('#tmpEPL .isItem').addClass("itemFolder_" + folderID);
            var tmpOut = $('#tmpEPL').html();
            $('#tmpEPL').remove();
            $('#folder_' + folderID).replaceWith(tmpOut);
            // paging scroll
            setPageScroll("");
            setEpisodeWidth();
            $('.itemFolder_' + folderID).hide();
            $('.itemFolder_' + folderID).slideDown("slow");
        }
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
    $(document).on('click', '#episode-list a.edit', function (e) {
        if ($('body').hasClass('in-reorder')) {
            // in reorder desable function
            return false;
        }
    });
    $(document).on('click', '#header #logo, #header a, #studio-nav a, #content-nav a, #footer a, #title-func .curate', function (e) {
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
        cancel: '.isFolder',
        change: function (event, ui) {
            $('body').addClass('has-change');
        }
    });
    $('#episode-list').sortable('disable');
    $('#title-func').on('click', 'p.order a.reorder', function () {
        $(this).text('Save order').removeClass('reorder').addClass('save');
        $('#episode-list').sortable('enable');
        $('body').removeClass('has-change');
        $('body').addClass('in-reorder');
        $('#ep-list ul li .episode .btns .btn-wrap ul li a.edit').addClass('disable');
        $('#ep-list ul li .episode .btns .btn-wrap ul li a.del').addClass('disable');
        return false;
    });
    $('#title-func').on('click', 'p.order a.save', function () {
        $('#ep-list ul li .episode .btns .btn-wrap ul li a.edit').removeClass('disable');
        $('#ep-list ul li .episode .btns .btn-wrap ul li a.del').removeClass('disable');
        $('body').removeClass('in-reorder');
        var parameter = null,
            episodes = [],
            $this = $(this);
        $('#episode-list > li').each(function () {
            var tmpMeta = $(this).data("meta").toString();
            if (tmpMeta.indexOf("paging_") == 0) {
                // folder or open folder get members id
                var folderID = 0;
                tmpMeta = tmpMeta.replace("up_paging_", "");
                folderID = parseInt(tmpMeta.replace("paging_", ""));
                if (!('undefined' === typeof CMS_CONF.EPISODES_PAGING[folderID].length)) {
                    var sizePage = CMS_CONF.EPISODES_PAGING[folderID].length;
                    for (var i = 0; i < sizePage; i++) {
                        episodes.push(CMS_CONF.EPISODES_PAGING[folderID][i].id);
                    }
                }
            }
            else if (tmpMeta.indexOf("down_paging_") == 0 || tmpMeta.indexOf("up_paging_") == 0) {
                // open folder needen't process
            }
            else if ($(this).data('meta') > 0) {
                // old part
                episodes.push($(this).data("meta"));
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
                listEpisode(CMS_CONF.PAGE_ID, CMS_CONF.USER_URL.param('id'));
            });
        } else {
            $this.text('Reorder episodes').removeClass('save').addClass('reorder');
            $('#episode-list').sortable('disable');
            $('body').removeClass('has-change');
        }
        return false;
    });

    // episode list delete
    $(document).on('click', '#ep-list .enable a.del', function () {
        if ($('body').hasClass('in-reorder')) {
            // in reorder desable function
            return false;
        }
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
                afterDelete($('#ep-list li.deleting').data('deleteId'));
                $('#ep-list ul li.deleting').remove();
                $('#content-main-wrap').height($('#content-main-wrap').height() - 82);  // 82: li height
                scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');
                afterDelete($('#ep-list li.deleting').data('deleteId'));
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

    autoHeight();
    scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');
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
        viewsWidth = $('#ep-list ul li .views').width(),
        numberWidth = $('#ep-list ul li .number').width() + 20; // 20 ix padding
    // set min size
    if (numberWidth < 50) {
        numberWidth = 50;
    }
    $('#ep-list ul li .wrap, #title-func .caption').width(wrapWidth - 31 - 1);  // 1:border
    $('#ep-list ul li .episode, #title-func .caption  p.episode').width(wrapWidth - 31 - numberWidth - scheduledWidth - publishWidth - viewsWidth - 1);   // 1:border
    $('#ep-list ul li .number').width(numberWidth - 20);    // 20 is padding
    $('#ep-list ul li .episode h3').each(function (index) {
        $('a', this).text($(this).data('meta'));
    });
    // ON PURPOSE to mark ellipsis feature temporarily for performance issue
    //$('#ep-list ul li .episode h3').addClass('ellipsis').ellipsis();
    if ($('#ep-list ul li .episode').length > 0 && $('#channel-name').data('width') + crumbWidth + 10 > contentmainWidth - titleBtnsWidth) {  // 10: title-func padding
        $('#title-func h2').width(contentmainWidth - titleBtnsWidth - 10 - 15);  // 10: title-func padding, 15: channel name and btns space
        $('#channel-name').width($('#title-func h2').width() - crumbWidth - 6);  // 6: channel name margin
        //$('#channel-name').text($('#channel-name').data('meta')).addClass('ellipsis').ellipsis();
    } else {
        $('#title-func h2').width('auto');
        $('#channel-name').width('auto');
        //$('#channel-name').text($('#channel-name').data('meta')).addClass('ellipsis').ellipsis();
    }
}

function setPageScroll(isDown) {
    var eplHeightBefore = $('#content-main-wrap').height();
    var sliderValue = $('#main-wrap-slider' + ' .slider-vertical').slider('value');
    // if haven't scroll bar need it to init sliderValue
    if (typeof (sliderValue) == "object") {
        sliderValue = 100;
    }
    var iPos = eplHeightBefore * (sliderValue / CMS_CONF.SLIDER_MAX);
    autoHeight();   // after this run the height will be update
    var eplHeightAfter = $('#content-main-wrap').height();
    scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');
    if ('none' == $('#main-wrap-slider').css('display')) {
        $('#main-wrap-slider .slider-vertical').slider('destroy');
        $('#content-main-wrap').css('top', '0');
    }
    var newPos = CMS_CONF.SLIDER_MAX;
    // translate new postion
    if (eplHeightAfter > eplHeightBefore) {
        var tmpPos = eplHeightAfter - eplHeightBefore;
        newPos = parseInt(((iPos + tmpPos) / eplHeightAfter) * CMS_CONF.SLIDER_MAX);
    } else {
        // remove episode list
        var tmpPos = eplHeightAfter - eplHeightBefore;
        if (isDown != "down") {
            iPos = iPos + tmpPos;
        }
        newPos = parseInt((iPos / eplHeightAfter) * CMS_CONF.SLIDER_MAX);
    }
    $('#main-wrap-slider .slider-vertical').slider('value', newPos);
}

function afterDelete(inID) {
    $.each(CMS_CONF.EPISODES_PAGING, function (eKey, eValue) {
        $.each(eValue, function (eeKey, eeValue) {
            if (parseInt(inID) == eeValue.id) {
                CMS_CONF.EPISODES_PAGING[eKey].splice(eeKey, 1);
                return false;
            }
        });
    });
}