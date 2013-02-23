$(function () {
    var fb_pages_map = {
        "1": "台灣環球西洋流行音樂台灣環球西洋流行音樂台灣環球西洋流行音樂台灣環球西洋流行音樂台灣環球西洋流行音樂",
        "2": "MusicDay:::音樂品牌日品牌日品牌日品牌日:::",
        "3": "Samsung Camera Taiwan",
        "4": "Soccer-One 足球王者",
        "5": "跟馬叔叔一起搖滾學吉他他他他他他他他他",
        "6": "香港新浪體育頻道",
        "7": "地球圖輯隊 情報總部"
    };
    $('#channel-name').data('width', $('#channel-name').width());
    if ($('#settingForm').length > 0) {
        autoHeight();
        setFormHeight();
        setTaglistWidth();
    } else {
        setFormHeight();
        autoHeight();
    }
    scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');

    if ($('#lightbox-create-channel').length > 0) {
        $('.blockOverlay').height($(window).height() - 45);
        $.blockUI.defaults.overlayCSS.opacity = '0.9';
        $.blockUI({
            message: $('#lightbox-create-channel')
        });
    }

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
        $('#channel-list li').removeClass('deleting');
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
    $('#content-main').on('change', '#settingForm', function () {
        $('body').addClass('has-change');
    });
    $(document).on('click', '#header #logo, #header a, #studio-nav a, #content-nav a, #footer a, #channel-list a', function (e) {
        if (document.settingForm) {
            var fm = document.settingForm;
            if (fm.imageUrl && fm.imageUrlOld && fm.imageUrl.value != fm.imageUrlOld.value) {
                $('body').addClass('has-change');
            }
        }
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
    $('#content-main').on('click', '#settingForm .btn-cancel.enable', function () {
        if (document.settingForm) {
            var fm = document.settingForm;
            if (fm.imageUrl && fm.imageUrlOld && fm.imageUrl.value != fm.imageUrlOld.value) {
                $('body').addClass('has-change');
            }
        }
        if ($('body').hasClass('has-change')) {
            $('body').data('leaveUrl', 'index.html');
            showUnsaveOverlay();
        } else {
            location.href = 'index.html';
        }
        return false;
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

    // channel list sorting
    $('#channel-list').sortable({
        cursor: 'move',
        revert: true,
        change: function (event, ui) {
            $('body').addClass('has-change');
        }
    });
    $('#channel-list').sortable('disable');
    $('#title-func').on('click', 'p.order a.reorder', function () {
        $(this).text('Save order').removeClass('reorder').addClass('save');
        $('#channel-list').sortable('enable');
        $('body').removeClass('has-change');
        return false;
    });
    $('#title-func').on('click', 'p.order a.save', function () {
        var parameter = null,
            channels = [],
            $this = $(this);
        $('#channel-list > li').each(function () {
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
            $('#overlay-s').fadeOut(1000, function () {
                $this.text('Reorder channels').removeClass('save').addClass('reorder');
                $('#channel-list').sortable('disable');
                $('body').removeClass('has-change');
            });
        } else {
            $this.text('Reorder channels').removeClass('save').addClass('reorder');
            $('#channel-list').sortable('disable');
            $('body').removeClass('has-change');
        }
        return false;
    });

    // channel list delete
    $('#channel-list').on('click', '.enable a.del', function () {
        $(this).parents('li').addClass('deleting').data('deleteId', $(this).attr('rel'));
        showDeletePromptOverlay('Are you sure you want to delete this channel? All data will be removed permanently.');
        return false;
    });
    $('#delete-prompt .btn-del').click(function () {
        $.unblockUI();
        if ($('#channel-list li.deleting').length > 0 && '' != $('#channel-list li.deleting').data('deleteId')) {
            showSavingOverlay();
            $('#overlay-s').fadeOut(1000, function () {
                var cntChannel = $('#channel-counter').text();
                if (cntChannel > 0) {
                    $('#channel-counter').text(cntChannel - 1);
                }
                $('#channel-list li.deleting').remove();
                $('#content-main-wrap').height($('#content-main-wrap').height() - 105); // 105: li height
                scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');
            });
        }
        return false;
    });

    // channel form charCounter
    $('#name').charCounter(20, {
        container: '#name-charcounter',
        format: '%1',
        delay: 0,
        clear: false
    });
    $('#intro').charCounter(70, {
        container: '#intro-charcounter',
        format: '%1',
        delay: 0,
        clear: false
    });
    if ($('#uploadThumbnail').length > 0) {
        uploadImage();
    }
    if ($('.connected input').length > 0) {
        $('.connected input').uniform();
    }

    // channel form selector
    $('#content-main').on('click', '#settingForm .enable .select-btn, #settingForm .enable .select-txt', function (event) {
        hideFbPageList();
        $('.form-btn .notice').addClass('hide');
        $('.select-list').hide();
        $(this).parent('li').siblings().children('.on').removeClass('on');
        $(this).parent().children('.select-btn').toggleClass('on');
        if ($(this).parent().children('.select-btn').hasClass('on')) {
            $(this).parent().children('.select-list').slideDown();
        } else {
            $(this).parent().children('.select-list').hide();
        }
        event.stopPropagation();
        return false;
    });
    $('#content-main').on('click', '#settingForm .select .select-list li', function () {
        $('body').addClass('has-change');
        var selectOption = $(this).text(),
            metadata = $(this).data('meta');
        $(this).parent().parent().children('.select-meta').val(metadata);
        $(this).parent().parent().children('.select-btn').removeClass('on');
        $(this).parent().parent().children('.select-txt').children().text(selectOption);
        $(this).parent().hide();
        return false;
    });

    // channel form tag
    $('#content-main').on('click', '#tag-list li span a', function () {
        $('body').addClass('has-change');
        var temp = [],
            currentTags = $('#tag').val(),
            clickedTag = $.trim($(this).text());
        currentTags = currentTags.split(',');
        if (!currentTags) { currentTags = []; }
        if (-1 === $.inArray(clickedTag, currentTags)) {
            $(this).parent().parent().addClass('on');
            currentTags.push(clickedTag);
        } else {
            $(this).parent().parent().removeClass('on');
            $.each(currentTags, function (i, n) {
                if (n != clickedTag) {
                    temp.push(n);
                }
            });
            currentTags = temp;
        }
        temp = [];
        $.each(currentTags, function (i, n) {
            if (n != '') {
                temp.push(n);
            }
        });
        $('#tag').val(temp.join(','));
        return false;
    });

    // channel form facebook auto share
    $('#content-main').on('click', '.connect-switch .switch-off, .reconnected .btn-reconnected', function () {
        $.blockUI({
            message: $('#fb-connect-failed2')
        });
        return false;
    });
    // facebook page main checkbox
    $('#content-main').on('click', '.connected input[name=fbPage]', function () {
        if ($(this).attr('checked')) {
            $('.page-list').removeClass('disable').addClass('enable');
        } else {
            $('#fb-page-list').slideUp();
            $('#page-selected').text('Select facebook pages');
            $('#fb-page-list li').removeClass('checked');
            $('.page-list').addClass('disable').removeClass('enable on');
            $('#pageId').val('');
        }
    });
    // facebook page dropdown multi checkbox ui
    $('#content-main').on('click', '.connected .share-item .page-list.enable .page-list-middle a.select-page', function () {
        $('.form-btn .notice').addClass('hide');
        $('.dropdown').hide();
        $('.dropdown').parents('li').removeClass('on').children('.on').removeClass('on');
        $('.select-list').hide();
        $('.select-list').parents().removeClass('on').children('.on').removeClass('on');
        var formHeight = $('#content-main-wrap form').height(),
            list = $('#fb-page-list').data('list');
        $(this).next('ul').slideToggle();
        $(this).parents('.page-list').toggleClass('on');
        if ($('.connected .share-item .page-list').hasClass('on') && $('#main-wrap-slider .ui-slider-handle').length > 0) {
            $('#content-main-wrap form').height(formHeight + parseInt(Math.round(list / 2) * 30, 10));
            $('#content-main-wrap').height($('#content-main-wrap .constrain').height() - 45 + parseInt(Math.round(list / 2) * 30, 10));
            scrollToBottom();
        } else {
            if ('none' != $('#main-wrap-slider').css('display')) {
                $('#content-main-wrap form').height('auto');
            }
            $('#content-main-wrap').height($('#content-main-wrap .constrain').height() + 75);
            scrollToBottom();
        }
        ellipsisPage();
        return false;
    });
    // facebook page select preview
    $('#content-main').on('click', '.connected #fb-page-list li a', function () {
        $('body').addClass('has-change');
        var temp = [],
            currentPages = [],
            defaultText = 'Select facebook pages';
        $(this).parent().toggleClass('checked');
        $('#fb-page-list li.checked').each(function (i) {
            temp.push($.trim($(this).children('a').text()));
            currentPages.push($.trim($(this).children('a').data('id')));
        });
        if (0 == temp.length) {
            $('#page-selected').text(defaultText);
        } else {
            $('#page-selected').text(temp.join(', '));
        }
        $('#pageId').val(currentPages.join(','));
        return false;
    });

    // channel form button
    $('#content-main').on('click', '#settingForm .btn-save.enable', function () {
        // update mode
        if (chkData(document.settingForm)) {
            showSavingOverlay();
            $('#overlay-s').fadeOut(1000, function () {
                $('body').removeClass('has-change');
                $('#imageUrlOld').val(channel.imageUrl);
            });
        }
        return false;
    });
    $('#content-main').on('click', '#settingForm .btn-create.enable', function () {
        // insert mode
        if (chkData(document.settingForm)) {
            showSavingOverlay();
            $('#overlay-s').fadeOut(1000, function () {
                $('body').removeClass('has-change');
                $('#imageUrlOld').val(channel.imageUrl);
                location.href = 'index.html';
            });
        }
        return false;
    });
    $('#content-main').on('click', '.fminput', function () {
        $('.form-btn .notice').addClass('hide');
    });

    $(window).resize(function () {
        ellipsisPage();
        if ($('#settingForm').length > 0) {
            autoHeight();
            setFormHeight();
            setTaglistWidth();
        } else {
            setFormHeight();
            autoHeight();
        }
        scrollbar('#content-main', '#content-main-wrap', '#main-wrap-slider');
        if ('none' == $('#main-wrap-slider').css('display')) {
            $('#main-wrap-slider .slider-vertical').slider('destroy');
            $('#content-main-wrap').css('top', '0');
        }
    });
});

function chkData(fm) {
    fm.name.value = $.trim(fm.name.value);
    fm.imageUrl.value = $.trim(fm.imageUrl.value);
    fm.intro.value = $.trim(fm.intro.value);
    fm.lang.value = $.trim(fm.lang.value);
    fm.sphere.value = $.trim(fm.sphere.value);
    fm.categoryId.value = $.trim(fm.categoryId.value);
    if (0 == fm.categoryId.value) { fm.categoryId.value = ''; }
    fm.tag.value = $.trim(fm.tag.value);
    if ($('#fbPage').is(':checked') && '' === $.trim($('#pageId').val())) {
        $('#fbPage').removeAttr('checked');
        $('#fbPage-label').removeClass('checked');
        $.uniform.update('#fbPage');
    }
    if ('' === fm.name.value || '' === fm.lang.value || '' === fm.sphere.value || '' === fm.categoryId.value) {
        $('.form-btn .notice').removeClass('hide');
        return false;
    }
    if ('' !== fm.lang.value && !CMS_CONF.LANG_MAP[fm.lang.value]) {
        $('.form-btn .notice').removeClass('hide');
        return false;
    }
    if ('' !== fm.sphere.value && !CMS_CONF.SPHERE_MAP[fm.sphere.value]) {
        $('.form-btn .notice').removeClass('hide');
        return false;
    }
    if ('' !== fm.categoryId.value && !CMS_CONF.CATEGORY_MAP[fm.categoryId.value]) {
        $('.form-btn .notice').removeClass('hide');
        return false;
    }
    return true;
}

function truncateFormTitle() {
    var crumbWidth = $('#title-func .title-crumb').width();
    if ($('#channel-name').data('width') + crumbWidth > $('input.text').width() + 140) {
        $('#title-func h2').width($('input.text').width() + 140 - crumbWidth);
        $('#title-func h2').css('padding-right', parseInt(crumbWidth + 5, 10) + 'px');
        $('#channel-name').text($('#channel-name').data('meta')).addClass('ellipsis').ellipsis();
    } else {
        $('#title-func h2').width('auto');
        $('#title-func h2').css('padding-right', parseInt(crumbWidth + 5, 10) + 'px');
        $('#channel-name').text($('#channel-name').data('meta')).removeClass('ellipsis');
    }
}

function setFormHeight() {
    $('#content-main-wrap, #content-main-wrap form').height('auto');
    var rowNum = ($(window).width() > 1356) ? 4 : 3,
        realCateCnt = $('#browse-category').data('realCateCnt'),
        modCatLen = realCateCnt % rowNum,
        windowHeight = $(window).height(),
        windowWidth  = $(window).width(),
        channelListWidth = $('#channel-list').width(),
        channelNameWidth = $('#channel-name').width(),
        imgsWidth = $('#channel-list li .wrap .photo-list').width(),
        funcWidth = $('#channel-list li .wrap .func-wrap').width(),
        titleFuncHeight = $('#title-func').height(),
        formHeight = $('#content-main-wrap form').height(),
        contentHeight = windowHeight - titleFuncHeight - 94 - 48 - 38 - 10;    // 94:header+studio-nav 48:footer 38:title-func-padding
    if (windowWidth > 1220) {
        $('input.text').width(windowWidth - 734);
        $('textarea.textarea').width(windowWidth - 735);
        $('.connected .share-item .page-list').width(windowWidth - 837);
        $('.reconnected .reconnect-notice').width(windowWidth - 734);
    } else {
        $('input.text').width(433);
        $('textarea.textarea').width(432);
        $('.connected .share-item .page-list').width(330);
        $('.reconnected .reconnect-notice').width(445);
    }
    $('#browse-category li[data-meta=0]').remove();
    if (modCatLen > 0) {
        modCatLen = rowNum - modCatLen;
        for (var i = 0; i < modCatLen; i++) {
            $('<li data-meta="0" class="none"></li>').appendTo('#browse-category');
        }
    }
    if (1220 > windowWidth) {
        $('#content-main-wrap form .fminput .fmfield .category, #browse-category').width(441);
        $('#browse-category li').width(139);
        $('#browse-category li').eq(3).removeClass('first-row');
    }
    if (1220 <= windowWidth && windowWidth <= 1356) {
        $('#content-main-wrap form .fminput .fmfield .category, #browse-category').width(windowWidth - 726);
        $('#browse-category li').width(((windowWidth - 726) / 3) - 8);
        $('#browse-category li').eq(3).removeClass('first-row');
    }
    if (windowWidth > 1356) {
        $('#content-main-wrap form .fminput .fmfield .category, #browse-category').width(632);
        $('#browse-category li').width(150);
        $('#browse-category li').eq(3).addClass('first-row');
    }
    truncateFormTitle();
    if (contentHeight <= formHeight) {
        $('#content-main-wrap form').height('auto');
    } else {
        $('#content-main-wrap form').height(contentHeight - 56);
    }
    $('#content-main-wrap').height($('#content-main-wrap').children('.constrain').height() + titleFuncHeight + 48);
    $('#channel-list li .wrap').width(channelListWidth - 36);
    $('#channel-list li .wrap .info').width(channelListWidth - imgsWidth - funcWidth - 58);
    $('#channel-list li .wrap .info h3').each(function (index) {
        $('a', this).text($(this).data('meta'));
    });
    $('#channel-list li .wrap .info h3').addClass('ellipsis').ellipsis();
    $('#content-main-wrap form').data('height', $('#content-main-wrap form').height());
}

function setTaglistWidth() {
    var tagTitleWidth = $('.tag-list h4').width(),
        inputWidth = $('input.text').width();
    $('#tag-list').width(inputWidth - tagTitleWidth);
}

function ellipsisPage() {
    var windowWidth  = $(window).width();
    if (windowWidth > 1220) {
        $('ul#fb-page-list').width(windowWidth - 838);
        $('ul#fb-page-list li').width((windowWidth - 838) / 2);
        $('#fb-page-list li a').each(function (index) {
            $(this).text($(this).data('meta'));
        }).addClass('ellipsis').ellipsis();
    } else {
        $('ul#fb-page-list').width(329);
        $('ul#fb-page-list li').width(164.5);
        $('#fb-page-list li a').each(function (index) {
            $(this).text($(this).data('meta'));
        }).addClass('ellipsis').ellipsis();
    }
}

function uploadImage() {
    var parameter = {
        'prefix': 'cms',
        'type':   'image',
        'size':   20485760,
        'acl':    'public-read'
    };
    var s3attr = {
        'bucket': '9x9tmp-ds',
        'policy': 'eyJleHBpcmF0aW9uIjoiMjAxMi0wOS0xOFQxNDo1NTozN1oiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiI5eDl0bXAtZHMifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsImNtcyJdLHsiYWNsIjoicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsImF1ZGlvIl0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifSxbInN0YXJ0cy13aXRoIiwiJEZpbGVuYW1lIiwiIl0sWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwiMzEyNTc0ODAwIl1dfQ==',
        'signature': 'SAMLxKDwG/5iPtEf0YT4KAzWL3w=',
        'id': 'AKIAIUZXV6X5RKSG3QRQ'
    };
    var timestamp = (new Date()).getTime();
    var handlerFileDialogStart = function () {
        $('.upload-img .upload-notice').addClass('hide');
    };
    var handlerUploadProgress = function (file, completed /* completed bytes */, total /* total bytes */) {
        $('.upload-img .loading').show();
         swfu.setButtonText('<span class="uploadstyle">Uploading...</span>');
    };
    var handlerUploadSuccess = function (file, serverData, recievedResponse) {
        $('.upload-img .loading').hide();
        swfu.setButtonText('<span class="uploadstyle">Upload</span>');
        if (!file.type) {
            file.type = nn.getFileTypeByName(file.name);
        }
        this.setButtonDisabled(false); // enable upload button again
        var url = 'http://' + s3attr['bucket'] + '.s3.amazonaws.com/' + parameter['prefix'] + '-thumbnail-' + timestamp + '-' + file.size + file.type.toLowerCase();
        $('.upload-img p.img').children('.thumbnail').attr('src', 'thumbnail/04.jpg');
        //$('#thumbnail-imageUrl').attr('src', url + '?n=' + Math.random());
        //$('#imageUrl').val(url);
    };
    var handlerUploadError = function (file, code, message) {
        $('.upload-img .loading').hide();
        swfu.setButtonText('<span class="uploadstyle">Upload</span>');
        this.setButtonDisabled(false);
        if (code == -280) { // user cancel upload
            alert(message); // show some error prompt
        } else {
            alert(message); // show some error prompt
        }
    };
    var handlerFileQueue = function (file) {
        if (!file.type)

        var postParams = {
            "AWSAccessKeyId": s3attr['id'],
            "key":            parameter['prefix'] + '-thumbnail-' + timestamp + '-' + file.size + file.type.toLowerCase(),
            "acl":            parameter['acl'],
            "policy":         s3attr['policy'],
            "signature":      s3attr['signature'],
            "content-type":   parameter['type'],
            "success_action_status": "201"
        };
        this.setPostParams(postParams);
        this.startUpload(file.id);
        this.setButtonDisabled(true);
    };
    var handlerFileQueueError = function (file, code, message) {
        if (code == -130) { // error file type
            $('.upload-img .upload-notice').removeClass('hide');
        }
    };
    var settings = {
        flash_url:                  'javascripts/swfupload/swfupload.swf',
        upload_url:                 'http://' + s3attr['bucket'] + '.s3.amazonaws.com/', // http://9x9tmp-ds.s3.amazonaws.com/
        file_size_limit:            parameter['size'],
        file_types:                 '*.jpg; *.png; *.gif',
        file_types_description:     'Thumbnail',
        file_post_name:             'file',
        button_placeholder:         $('#uploadThumbnail').get(0),
        button_image_url:           'images/btn-load.png',
        button_width:               '129',
        button_height:              '29',
        button_text:                '<span class="uploadstyle">Upload</span>',
        button_text_style:          '.uploadstyle { color: #777777; font-family: Arial, Helvetica; font-size: 15px; text-align: center; } .uploadstyle:hover { color: #999999; }',
        button_text_top_padding:    1,
        button_action:              SWFUpload.BUTTON_ACTION.SELECT_FILE,
        button_cursor:              SWFUpload.CURSOR.HAND,
        button_window_mode :        SWFUpload.WINDOW_MODE.TRANSPARENT,
        http_success :              [ 201 ],
        file_dialog_start_handler:  handlerFileDialogStart,
        upload_progress_handler:    handlerUploadProgress,
        upload_success_handler:     handlerUploadSuccess,
        upload_error_handler:       handlerUploadError,
        file_queued_handler:        handlerFileQueue,
        file_queue_error_handler:   handlerFileQueueError,
        debug:                      false
    };
    var swfu = new SWFUpload(settings);
}