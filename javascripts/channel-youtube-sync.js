$('#content-main-wrap').perfectScrollbar({
    marginBottom: 63
});

$(window).resize(function() {
    $('#content-main-wrap').perfectScrollbar('update');
    // Handle cancel/create buttons position according to scollbar displayed or not.
    if ($('#content-main-wrap').height() >= $('div.constrain').outerHeight()) {
        $('#content-main-wrap').addClass('fixed');
    } else {
        $('#content-main-wrap').removeClass('fixed');
    }
    // Handle category list items layout.
    var categoryList = $('#browse-category');
    var items = categoryList.find('li');
    var i;
    if ($(window).width() >= 1237) {
        if (items.length % 4 !== 0) {
            for (i = items.length % 4; i < 4; i++) {
                categoryList.append(document.createElement('li'));
            }
        }
    } else {
        if (items.length % 3 !== 0) {
            for (i = items.length % 3; i < 3; i++) {
                categoryList.append(document.createElement('li'));
            }
        }
    }
});

// Copied from webapp js file.
$('#content-main').on('click', '#settingForm .enable .select-btn, #settingForm .enable .select-txt', function(event) {
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
$('#content-main').on('click', '#settingForm .select .select-list li', function() {
    $('body').addClass('has-change');
    var selectOption = $(this).text(),
        metadata = $(this).data('meta'),
        srcname = '',
        sphere = '',
        rowNum = 0,
        modCatLen = 0,
        i = 0;
    // sharing url
    if ($(this).hasClass('surl-li')) {
        $('#surl-ul .surl-li').removeClass('on');
        $(this).addClass('on');
    }
    if (metadata === 'en' || metadata === 'zh' || metadata === 'other') {
        $('#browse-category li[data-meta=0]').addClass('none');
        $('.category').removeClass('disable').addClass('enable');
    }
    // category relate to tags
    if ('browse-category' === $(this).parent().attr('id')) {
        nn.api('GET', cms.reapi('/api/tags'), {
            categoryId: metadata,
            lang: $('#sphere').val()
        }, function(tags) {
            $('#tag-list').html('');
            if (tags && tags.length > 0) {
                $('.tag-list').removeClass('hide');
                var currentTags = $('#tag').val();
                currentTags = currentTags.split(',');
                if (!currentTags) {
                    currentTags = [];
                }
                $('#tag-list-tmpl-item').tmpl({
                    tags: tags
                }).appendTo('#tag-list');
                if (currentTags.length > 0) {
                    $('#tag-list li span a').each(function() {
                        if (-1 !== $.inArray($(this).text(), currentTags)) {
                            $(this).parent().parent().addClass('on');
                        }
                    });
                }
            } else {
                $('.tag-list').addClass('hide');
            }

            $page.scrollToBottom();
        });
    }
    $(this).parent().parent().children('.select-meta').val(metadata);
    $(this).parent().parent().children('.select-btn').removeClass('on');
    $(this).parent().parent().children('.select-txt').children().text(selectOption);
    $(this).parent().hide();
    return false;
});
// ----

$('.connect-switch').click(function() {
    $('.connect-switch').toggleClass('hide');
    $('.connected').toggleClass('hide');
});

$('#fbPage-label').click(function() {
    $(this).toggleClass('checked');
    $(this).find('span').toggleClass('checked');
    $('.page-list').toggleClass('enable');
    $('.page-list').toggleClass('disable');
});

$('.page-list').click(function() {
    if ($(this).hasClass('enable')) {
        $(this).toggleClass('on');
        $('#fb-page-list').slideToggle();
    }
});