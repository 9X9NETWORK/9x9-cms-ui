$(function () {
    $('#epcurate-nav ul li.curation').click(function() {
        return false;
    });
    function fake_update() {
        alert('fake update!');
    }
    var fake_programs = [{
        data: {
            id: 1,
            ytId: "qh5982Xa9yA",
            beginTitleCard: null,
            endTitleCard: null,
            audioFileUrl: null,
            fileUrl: "http://www.youtube.com/watch?v=qh5982Xa9yA",
            imageUrl: "http://i.ytimg.com/vi/qh5982Xa9yA/mqdefault.jpg",
            ytDuration: 20,
            duration: "20",
            startTime: "0",
            endTime: "20",
            name: "60 Hours of Animation in 20 seconds.",
            intro: "WATCH IN FULL HD!",
            uploadDate: "2010-06-28T00:00:00.000Z",
            uploader: "Kurt D.",
            isPublic: true,
            isEmbedLimited: false,
            isMobileLimited: false,
            isZoneLimited: false
        },
        update: fake_update
    },
    {
        data: {
            id: 2,
            ytId: "PH1BAcVJ3IY",
            beginTitleCard: {
                id: 1,
                type: 0,
                message: 'My video1',
                align: 'center',
                effect: 'clip',
                duration: "7",
                size: "20",
                color: '#ff0000',
                style: 'italic',
                weight: 'bold',
                bgColor: 'black',
                bgImage: 'thumbnail/player.jpg'
            },
            endTitleCard: {
                id: 2,
                type: 1,
                message: "My video2",
                align: "left",
                effect: "drop",
                duration: "7",
                size: "20",
                color: "#ffff00",
                style: "normal",
                weight: "normal",
                bgColor: "#000000",
                bgImage: "http://9x9ui.s3.amazonaws.com/war/v0/images/titlecard-default.png"
            },
            audioFileUrl: null,
            fileUrl: "http://www.youtube.com/watch?v=PH1BAcVJ3IY",
            imageUrl: "http://i.ytimg.com/vi/PH1BAcVJ3IY/mqdefault.jpg",
            ytDuration: 31,
            duration: "31",
            startTime: "0",
            endTime: "31",
            name: "十秒讓益世告訴你錢太多要怎麼花 (蔡阿嘎10秒影展11部曲)",
            intro: "蔡阿嘎十秒影展全系列http://goo.gl/zkCPA 蔡阿嘎FaceBook http://www.facebook.com/WithGaLoveTaiwan (為像益世一樣錢太多沒地方花的貪官嘔心製作!! ) 哈哈!! 這次影片首次嘗試走日和風!! 這種tempo好難抓!! XDD 有沒有發現 大頭佛長的真的跟014好像 !! 尤其是那個髮型!! 哈哈哈!! |蘋果日報即時| 蔡阿嘎搞笑力作「益世告訴你錢太多怎麼花」 http://www.appledaily.com.tw/realtimenews/article/new/20120715/132482/ [蔡阿嘎忙碌人系列-10秒影展全系列http://goo.gl/zkCPA] 首部曲-10秒看完鄉土劇不敗萬年梗 http://youtu.be/7NLCxHQ66I4?hd=1 二部曲-10秒學會美食節目萬用台詞 http://youtu.be/4MptMNnBwfA?hd=1 三部曲-10秒看完偶像劇仇人變情人 http://youtu.be/bUqNW9AgGrs?hd=1 四部曲-10秒回顧商人無祖國懶人包 http://youtu.be/tP9_2PaGsUs?hd=1 五部曲-10秒快速看完本月新聞重點 http://youtu.be/UZZET2RiF1k?hd=1 六部曲-10秒學會變身美國瘦牛肉精 http://youtu.be/5SCyi-Vt2as?hd=1 七部曲-10秒搞定男人出門萬用妝感 http://youtu.be/s_ClERCEa4E?hd=1 八部曲-10秒聽完鬼故事永遠都這樣 http://youtu.be/Msb6I-4GurE?hd=1 九部曲-10秒算完你的命不準不用錢 http://youtu.be/r05ZdjutoT4?hd=1 十部曲-10秒學會選秀過關必備三寶 http://youtu.be/v-nuIKYZyMk?hd=1 11部曲-10秒益世教你錢太多怎麼花 http://youtu.be/PH1BAcVJ3IY?hd=1 跟蔡阿嘎一起愛台灣FB粉絲團 http://www.facebook.com/WithGaLoveTaiwan 蔡阿嘎做公益So Easy https://www.facebook.com/PublicWelfareSoEasy 歐屁FB粉絲團 http://www.facebook.com/OFiLoveTaiwan 阿格列博士FB粉絲團 http://www.facebook.com/Mr.Ugly.Love.Taiwan 蔡阿嘎俱樂部FB http://www.facebook.com/agaclub",
            uploadDate: "2012-07-15T06:18:17.000Z",
            uploader: "kyoko38",
            isPublic: true,
            isEmbedLimited: false,
            isMobileLimited: false,
            isZoneLimited: false
        },
        update: fake_update
    },
    {
        data: {
            id: 3,
            ytId: "",
            beginTitleCard: {
                id: 1,
                type: 1,
                message: "Invalid Video",
                align: "center",
                effect: "clip",
                duration: "7",
                size: "20",
                color: "#ff0000",
                style: "normal",
                weight: "bold",
                bgColor: "#333333",
                bgImage: "http://9x9ui.s3.amazonaws.com/war/v0/images/titlecard-default.png"
            },
            endTitleCard: null,
            audioFileUrl: null,
            fileUrl: "",
            imageUrl: "",
            ytDuration: 0,
            duration: "0",
            startTime: "0",
            endTime: "0",
            name: "",
            intro: "",
            uploadDate: "",
            uploader: "",
            isPublic: true,
            isEmbedLimited: false,
            isMobileLimited: false,
            isZoneLimited: false
        },
        update: fake_update
    },
    {
        data: {
            id: 4,
            ytId: "nCgQDjiotG0",
            beginTitleCard: {
                id: 3,
                type: 0,
                message: "My video3",
                align: "right",
                effect: "fade",
                duration: "7",
                size: "20",
                color: "#ff6600",
                style: "normal",
                weight: "normal",
                bgColor: "#eeeeee",
                bgImage: "http://9x9ui.s3.amazonaws.com/war/v0/images/titlecard-default.png"
            },
            endTitleCard: null,
            audioFileUrl: null,
            fileUrl: "http://www.youtube.com/watch?v=nCgQDjiotG0",
            imageUrl: "http://i.ytimg.com/vi/nCgQDjiotG0/mqdefault.jpg",
            ytDuration: 130,
            duration: "10",
            startTime: "20",
            endTime: "30",
            name: "Google Chrome Speed Tests",
            intro: "These speed tests were filmed at actual web page rendering times. If you're interested in the technical details, read on! Equipment used: - Computer: MacBook Pro laptop with Windows installed - Monitor - 24\" Asus: We had to replace the standard fluorescent backlight with very large tungsten fixtures to funnel in more light to capture the screen. In addition, we flipped the monitor 180 degrees to eliminate a shadow from the driver board and set the system preferences on the computer to rotate 180 degrees. No special software was used in this process. - Camera: Phantom v640 High Speed Camera at 1920 x 1080, films up to 2700 fps \"Why does allrecipes.com in the potato gun sequence appear at once, and not the text first and images second? And why does it appear to render from bottom of the screen to the top?\" Chrome sends the rendered page to the video card buffer all at once, which is why allrecipes.com appears at once, and not with the text first and images second. Chrome actually paints the page from top to bottom, but to eliminate a shadow from the driver board, we had to flip the monitor upside down and set the system preferences in Windows to rotate everything 180 degrees, resulting in the page appearing to render from bottom to top. \"Why does the top one third of the page appear first on the weather.com page load?\" Sometimes only half the buffer gets filled before the video card sends its buffer over to the LCD panel. This is because Chrome on Windows uses GDI to draw, which does not do v-sync. \"The screen wipes are so smooth - how was that achieved?\" The screen wipes up in a gradated wipe because LCD pixels take around 10ms to flip and gradually change color. More filming details below: Chrome Browser vs. Potato: We used a version of the web page allrecipes.com that is accessible when logged in. About four hours into the Potato Gun shoot we decided to use a locally loaded version of the web page to enable more precise synchronization with the potato gun. We finally got the shot we were hoping for after 51 takes. Chrome Browser vs. Sound: We loaded an artist page from Pandora.com, a streaming internet radio service directly off the web on a 15Mbps internet connection. Chrome Browser vs. Lightning: We used a locally loaded version of weather.com that was legally approved for use in this video (and all the standard website permissions procedures that goes into making videos!) While we had a super fast 15Mbps internet connection in the studio, any live internet connection introduces quite a bit of variability. To run speed tests on page rendering times, saving locally and loading from the local disk can help reduce this variability. For behind-the-scenes footage of how this video was made: http://www.youtube.com/watch?v=_oarMXGq3gI",
            uploadDate: "2010-05-04T00:25:55.000Z",
            uploader: "googlechrome",
            isPublic: true,
            isEmbedLimited: false,
            isMobileLimited: true,
            isZoneLimited: true
        },
        update: fake_update
    },
    {
        data: {
            id: 5,
            ytId: "4G60hM1W_mk",
            beginTitleCard: null,
            endTitleCard: {
                id: 4,
                type: 1,
                message: "My video4",
                align: "center",
                effect: "drop",
                duration: "7",
                size: "30",
                color: "#0033ff",
                style: "normal",
                weight: "bold",    
                bgColor: "#333333",
                bgImage: "http://9x9ui.s3.amazonaws.com/war/v0/images/titlecard-default.png"
            },
            audioFileUrl: null,
            fileUrl: "http://www.youtube.com/watch?v=4G60hM1W_mk",
            imageUrl: "http://i.ytimg.com/vi/4G60hM1W_mk/mqdefault.jpg",
            ytDuration: 312,
            duration: "10",
            startTime: "0",
            endTime: "10",
            name: "Hearing Test",
            intro: "Set your volume to regular settings, as if you were watching any YouTube movie. Watch Hearing Test and listen very carefully using headphones. The video displays audio frequencies that are being played. You can determine what you can or what you cannot hear. Typically, depending on age, audible frequencies will be between 20-30 Hertz on the low side of the audio spectrum, and 10-16 kiloHertz on the high side of the audio spectrum. There are individuals, however, who can can hear the whole spectrum between 16 Hz (Hertz) and 20 kHz (kiloHertz). Because of the encoding used during the audio preparation, tests above 18 kHz are not very reliable. Please make sure that you do not increase the volume just to see if you can hear anything! One more thing - Please Subscribe! Thank You.",
            uploadDate: "2007-06-03T06:51:06.000Z",
            uploader: "vatsek",
            isPublic: true,
            isEmbedLimited: false,
            isMobileLimited: false,
            isZoneLimited: false
        },
        update: fake_update
    },
    {
        data: {
            id: 6,
            ytId: "vJG698U2Mvo",
            beginTitleCard: null,
            endTitleCard: null,
            audioFileUrl: null,
            fileUrl: "http://www.youtube.com/watch?v=vJG698U2Mvo",
            imageUrl: "http://i.ytimg.com/vi/vJG698U2Mvo/mqdefault.jpg",
            ytDuration: 82,
            duration: "12",
            startTime: "70",
            endTime: "82",
            name: "selective attention test",
            intro: "The original, world-famous awareness test from Daniel Simons and Christopher Chabris. Check out our book and website for more information (www.theinvisiblegorilla.com)",
            uploadDate: "2010-03-10T13:25:58.000Z",
            uploader: "profsimons",
            isPublic: true,
            isEmbedLimited: true,
            isMobileLimited: false,
            isZoneLimited: false
        },
        update: fake_update
    },
    {
        data: {
            id: 7,
            ytId: "CWyrp3hu4KE",
            beginTitleCard: null,
            endTitleCard: null,
            audioFileUrl: null,
            fileUrl: "http://www.youtube.com/watch?v=CWyrp3hu4KE",
            imageUrl: "http://i.ytimg.com/vi/CWyrp3hu4KE/mqdefault.jpg",
            ytDuration: 98,
            duration: "10",
            startTime: "30",
            endTime: "40",
            name: "Color Blindness test - Real !",
            intro: "Hi, I'm colorblind, and this is a video that I made to help you to find out weather you are or you are not color blind. Being color blind is somehow cool, but I would wish that i'm normal visioned.",
            uploadDate: "2008-02-18T19:57:33.000Z",
            uploader: "vladimirwlado",
            isPublic: true,
            isEmbedLimited: false,
            isMobileLimited: false,
            isZoneLimited: false
        },
        update: fake_update
    },
    {
        data: {
            id: 8,
            ytId: "0vu23EbuBVI",
            beginTitleCard: null,
            endTitleCard: null,
            audioFileUrl: null,
            fileUrl: "http://www.youtube.com/watch?v=0vu23EbuBVI",
            imageUrl: "http://i.ytimg.com/vi/0vu23EbuBVI/mqdefault.jpg",
            ytDuration: 2650,
            duration: "10",
            startTime: "100",
            endTime: "110",
            name: "Physics / 100 Greatest Discoveries - Documentary [Full Length]",
            intro: "Discovery Channel | Scientists have transformed the way we think and live throughout the centuries. What are the most important scientific discoveries of all time? In no particular order, we present the top 100 in eight different categories.",
            uploadDate: "2011-10-06T20:08:28.000Z",
            uploader: "thetrailerspy",
            isPublic: true,
            isEmbedLimited: false,
            isMobileLimited: false,
            isZoneLimited: false
        },
        update: fake_update
    }];
    $('#storyboard-listing li').each(function (i) {
        $(this).data('tmplItem', fake_programs[i]);
    });
    sumStoryboardInfo();
    $('.ellipsis').ellipsis();
    $('#epcurate-nav-publish, #form-btn-save, #form-btn-next').click(function (e) {
        $(document.epcurateForm).trigger('submit', e);
        return false;
    });
    setVideoMeasure();
    setSpace();
    countPoiItem();
    scrollbar('#storyboard-wrap', '#storyboard-list', '#storyboard-slider');

    // common unblock
    function hasErrorRedirect() {
        var gobackUrl = $('#form-btn-leave').data('gobackUrl');
        if (gobackUrl) {
            $('#form-btn-leave').removeData('gobackUrl');
            location.replace(gobackUrl);
        } else {
            location.replace($('#form-btn-leave').data('leaveUrl'));
        }
    }
    function firstSaveRedirect() {
        $('body').removeClass('first-save');
        var src = $('body').data('origin');
        if (!src                                                                                        // from nature action
                || (src && 'form-btn-save' === $(src.target).attr('id'))) {                             // from btn-save
            $('#epcurate-curation ul.tabs li a.cur-add').trigger('click');
            return false;
        } else {
            var nextstep = 'epcurate-curation.html';
            if (src && ($(src.target).attr('href') || $(src.target).parents('a').attr('href'))) {
                if ($(src.target).attr('href')) {
                    nextstep = $(src.target).attr('href');
                }
                if ($(src.target).parents('a').attr('href')) {
                    nextstep = $(src.target).parents('a').attr('href');
                }
            }
            // ON PURPOSE to wait api (async)
            setTimeout(function () {
                location.href = nextstep;
            }, 3000);
        }
    }
    $('body').keyup(function (e) {
        if (27 === e.which) { // Esc
            $.unblockUI();
            if ($(this).hasClass('has-error')) {
                hasErrorRedirect();
            }
            if ($('body').hasClass('first-save')) {
                firstSaveRedirect();
            }
            return false;
        }
    });
    $('#system-error .btn-ok, #system-error .btn-close').click(function () {
        $.unblockUI();
        if ($('body').hasClass('has-error')) {
            hasErrorRedirect();
        }
        return false;
    });
    $('#draft-notice .btn-ok, #draft-notice .btn-close').click(function () {
        $.unblockUI();
        if ($('body').hasClass('first-save')) {
            firstSaveRedirect();
        }
        return false;
    });

    // leave and unsave
    function goLeave(url) {
        if ($('body').hasClass('has-change')) {
            showUnsaveOverlay();
        } else {
            location.href = url;
        }
    }
    function confirmExit() {
        if ($('body').hasClass('has-change')) {
            // Unsaved changes will be lost, are you sure you want to leave?
            return $('#unsave-prompt p.content').text();
        }
    }
    window.onbeforeunload = confirmExit;
    removeTotalChangeHook();
    $('#epcurateForm').change(function () {
        $('body').addClass('has-change');
    });
    $('#epcurate-nav-back').click(function () {
        goLeave($(this).attr('href'));
        return false;
    });
    $('#content-wrap').on('click', '#form-btn-leave', function () {
        goLeave('episode-list.html');
        return false;
    });
    $(document).on('click', '#header #logo, #header a, #studio-nav a, #content-nav a, #footer a', function (e) {
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
        location.href = 'episode-list.html';
        return false;
    });
    $('#unsave-trimtime-prompt .btn-leave').click(function () {
        $('body').removeClass('has-trimtime-change');
        $.unblockUI();
        var origin = $('body').data('origin');
        if (origin) {
            $('body').removeData('origin');
            $(origin.target).trigger('click');
        }
        return false;
    });
    $('#unsave-titlecard-prompt .btn-leave').click(function () {
        $('body').removeClass('has-titlecard-change');
        $.unblockUI();
        var origin = $('body').data('origin');
        if (origin) {
            $('body').removeData('origin');
            $(origin.target).trigger('click');
        }
        return false;
    });

    // storyboard sortable
    $('#storyboard-listing').sortable({
        cursor: 'move',
        revert: true,
        tolerance: 'pointer',
        change: function (event, ui) {
            $('body').addClass('has-change');
        },
        update: function (event, ui) {
            $('#storyboard-listing li').removeClass('last last2');
            $('#storyboard-listing li').eq(48).addClass('last2');
            $('#storyboard-listing li').eq(49).addClass('last');
        }
    });

    // POI cycle
    $('#cur-poi .poi-list ul').cycle({ 
        activePagerClass: 'active',
        updateActivePagerLink: null,
        next:   '#cur-poi .poi-list .next',
        prev:   '#cur-poi .poi-list .prev',
        fx:      'scrollHorz',
        after:   onAfter,
        speed:   1000,
        timeout: 0,
        pause:   1,
        cleartypeNoBg: true
    });
    function onAfter(curr, next, opts) {
        var index = opts.currSlide;
        $('#cur-poi .poi-list .prev')[index == 0 ? 'hide' : 'show']();
        $('#cur-poi .poi-list .next')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    }

    // common tabs
    $('#epcurate-curation ul.tabs li a:not(.cur-edit-poi)').click(function (e) {
        if ($('body').hasClass('has-trimtime-change')) {
            showUnsaveTrimTimeOverlay(e);
            return false;
        }
        if ($('body').hasClass('has-titlecard-change')) {
            showUnsaveTitleCardOverlay(e);
            return false;
        }
        var showBlock = $(this).attr('href').split('#');
        $('#epcurate-curation ul.tabs li').removeClass('on');
        $(this).parent().parent().addClass('on');
        $('#epcurate-curation .tab-content').addClass('hide');
        $('#' + showBlock[1]).removeClass('hide');
        return false;
    });
    // common tabs - Add Video
    $('#epcurate-curation ul.tabs li a.cur-add').click(function (e) {
        if ($('body').hasClass('has-trimtime-change')) {
            showUnsaveTrimTimeOverlay(e);
            return false;
        }
        if ($('body').hasClass('has-titlecard-change')) {
            showUnsaveTitleCardOverlay(e);
            return false;
        }
        cancelTitleCard();
        removeVideoPlayingHook();
        removeTrimTimeEditHook();
        removeTitleCardPlayingHook();
        removeTitleCardEditHook();
        $('#epcurate-curation .tabs li').addClass('hide');
        $(this).parent().parent().removeClass('hide').addClass('last');
        $('#video-player .video').html('');
        $('#video-control').hide();
        $('#storyboard, #content-main-wrap .form-btn, #epcurate-nav ul li.publish').unblock();
        $('#epcurate-nav ul li.publish').removeClass('mask');
        $('#video-player .video').removeClass('transparent');
    });
    // common tabs - Edit Video
    $('#epcurate-curation ul.tabs li a.cur-edit').click(function (e) {
        $('#epcurate-curation .tab-content').addClass('hide');
        $('#cur-edit').removeClass('hide');
        $('#epcurate-curation ul.tabs li.poi').addClass('last');
        $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
        $('#epcurate-curation ul.tabs li.edit-video').addClass('on');
        $('#storyboard, #content-main-wrap .form-btn, #epcurate-nav ul li.publish').unblock();
        $('#epcurate-nav ul li.publish').removeClass('mask');
        $('#video-player .video').removeClass('transparent');
        loadYouTubeFlash($('#storyboard-listing li.playing').data('ytid'));
    });
    // common tabs - POI list
    $('#epcurate-curation ul.tabs li a.cur-poi').click(function (e) {
        $('#epcurate-curation .tab-content').addClass('hide');
        $('#cur-poi').removeClass('hide');
        $('#epcurate-curation ul.tabs li.poi').addClass('last on');
        $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
        $('#epcurate-curation ul.tabs li.edit-video').removeClass('on');
        $('#storyboard, #content-main-wrap .form-btn, #epcurate-nav ul li.publish').unblock(); 
        $('#epcurate-nav ul li.publish').removeClass('mask');
        $('#video-player .video').removeClass('transparent');
    });
    $('#epcurate-curation ul.tabs li a.cur-edit-poi').click(function (e) {
        return false;
    });

    // YouTube tab
    $('.yt-category li a').not('.yt-category li.last a').click(function () {
        var showBlock = $(this).attr('href').split('#');
        $('.yt-category li').removeClass('on');
        $(this).parent().addClass('on');
        $('#cur-youtube .result-list').addClass('hide');
        $('#' + showBlock[1]).removeClass('hide');
        return false;
    });

    // Add Video
    $('#cur-add textarea').toggleVal();
    $('#cur-add textarea').click(function () {
        $('#cur-add .notice').addClass('hide').hide();
    });
    $('#btn-add-videourl').click(function () {
        $('#cur-add .notice').addClass('hide').hide();
        var videoUrl = $.trim($('#videourl').val()),
            urlList = videoUrl.split('\n'),
            patternLong = /^http(?:s)?:\/\/www.youtube.com\/watch\?/,
            patternShort = /^http(?:s)?:\/\/youtu.be\//,
            matchKey = '',
            matchList = [],
            normalList = [],
            existList = [],
            invalidList = [],
            mobileLimitedList = [],
            embedLimitedList = [];
        if ('Paste YouTube video URLs to add (separate with different lines)' === videoUrl) {
            $('#videourl').get(0).focus();
            $('#cur-add .notice').text('Paste YouTube video URLs to add.').removeClass('hide').show();
            return false;
        }
        $('#storyboard-list li').each(function () {
            existList.push($(this).data('ytid'));
        });
        $.each(urlList, function (i, url) {
            url = $.trim(url);
            if ('' != url) {
                if (patternLong.test(url)) {
                    matchKey = $.url(url).param('v');
                } else if (patternShort.test(url)) {
                    matchKey = $.url(url).segment(1);
                } else {
                    matchKey = '';
                }
                if ('' == matchKey || matchKey.length !== 11) {
                    matchKey = '';
                    invalidList.push(url);
                }
                if ('' !== matchKey) {
                    matchList.push(matchKey);
                }
            }
        });
        if (matchList.length > 0) {
            normalList = $.map(matchList, function (k, i) {
                return 'http://www.youtube.com/watch?v=' + k;
            });
            if ((existList.length + matchList.length) > CMS_CONF.PROGRAM_MAX) {
                $('#videourl').val(normalList.join('\n'));
                $('#cur-add .notice').text('You have reached the maximum amount of 50 videos.').removeClass('hide').show();
                return false;
            }
            $('body').addClass('has-change');
            showProcessingOverlay();
            var ytData = null,
                ytItem = {},
                ytList = [],
                committedCnt = 0,
                isZoneLimited = null,
                isMobileLimited = null,
                isEmbedLimited = null;
            $.each(matchList, function (idx, key) {
                nn.on([400, 401, 403, 404], function (jqXHR, textStatus) {
                    committedCnt += 1;
                    invalidList.push(normalList[idx]);
                    nn.log(textStatus + ': ' + jqXHR.responseText, 'warning');
                    nn.log(normalList[idx], 'debug');
                    $('#videourl').val(invalidList.join('\n'));
                    $('#cur-add .notice').text('Invalid URL, please try again!').removeClass('hide').show();
                    if (committedCnt === matchList.length) {
                        committedCnt = -1;   // reset to avoid collision
                        // ON PURPOSE to wait api (async)
                        animateStoryboard(ytList.length);
                        setTimeout(function () {
                            $('#storyboard-listing-tmpl-item').tmpl(ytList).hide().appendTo('#storyboard-listing').fadeIn(2000);
                            sumStoryboardInfo();
                            $('.ellipsis').ellipsis();
                            $('#overlay-s').fadeOut();
                        }, 1000);
                    }
                });
                nn.api('GET', 'http://gdata.youtube.com/feeds/api/videos/' + key + '?alt=jsonc&v=2&callback=?', null, function (youtubes) {
                    committedCnt += 1;
                    if (youtubes.data) {
                        ytData = youtubes.data;
                        isZoneLimited = (ytData.restrictions) ? true : false;
                        isMobileLimited = ((ytData.accessControl && ytData.accessControl.syndicate && 'denied' === ytData.accessControl.syndicate) || (ytData.status && ytData.status.reason && 'limitedSyndication' === ytData.status.reason)) ? true : false;
                        isEmbedLimited = (ytData.accessControl && ytData.accessControl.embed && 'denied' === ytData.accessControl.embed) ? true : false;
                    } else {
                        ytData = null;
                        isZoneLimited = null;
                        isMobileLimited = null;
                        isEmbedLimited = null;
                    }
                    if (true === isMobileLimited) {
                        mobileLimitedList.push(normalList[idx]);
                    }
                    if (true === isEmbedLimited) {
                        embedLimitedList.push(normalList[idx]);
                    }
                    if (ytData && false === isMobileLimited && false === isEmbedLimited) {
                        ytItem = {
                            beginTitleCard: null,
                            endTitleCard: null,
                            id: 0,                          // fake program.id for rebuild identifiable url #!pid={program.id}&ytid={youtubeId}&tid={titlecardId}
                            ytId: ytData.id,
                            fileUrl: normalList[idx],
                            imageUrl: 'http://i.ytimg.com/vi/' + ytData.id + '/mqdefault.jpg',
                            duration: ytData.duration,      // keep trimmed duration from 9x9 API
                            ytDuration: ytData.duration,    // keep original duration from YouTube
                            startTime: 0,
                            endTime: ytData.duration,
                            name: ytData.title,
                            intro: ytData.description,
                            uploader: ytData.uploader,
                            uploadDate: ytData.uploaded,
                            isZoneLimited: isZoneLimited,
                            isMobileLimited: isMobileLimited,
                            isEmbedLimited: isEmbedLimited
                        };
                        ytList[idx] = ytItem;
                    } else {
                        if (youtubes.error) {
                            nn.log(youtubes.error, 'warning');
                        }
                        nn.log(normalList[idx], 'debug');
                        invalidList.push(normalList[idx]);
                        $('#videourl').val(invalidList.join('\n'));
                        if (true === isEmbedLimited && 0 === mobileLimitedList.length && invalidList.length === embedLimitedList.length) {
                            $('#cur-add .notice').html('Fail to add this video, please try another one.<br />[This video is not playable outside Youtube]').removeClass('hide').show();
                        } else if (true === isMobileLimited && 0 === embedLimitedList.length && invalidList.length === mobileLimitedList.length) {
                            $('#cur-add .notice').html('Fail to add this video, please try another one.<br />[This video is not playable on mobile device]').removeClass('hide').show();
                        } else {
                            $('#cur-add .notice').text('Invalid URL, please try again!').removeClass('hide').show();
                        }
                    }
                    if (committedCnt === matchList.length) {
                        committedCnt = -1;   // reset to avoid collision
                        // ON PURPOSE to wait api (async)
                        animateStoryboard(ytList.length);
                        setTimeout(function () {
                            $('#storyboard-listing-tmpl-item').tmpl(ytList).hide().appendTo('#storyboard-listing').fadeIn(2000);
                            sumStoryboardInfo();
                            $('.ellipsis').ellipsis();
                            $('#overlay-s').fadeOut();
                        }, 1000);
                    }
                }, 'jsonp');
            });
        }
        $('#videourl').val('');
        if (invalidList.length > 0) {
            $('#videourl').val(invalidList.join('\n'));
            $('#cur-add .notice').text('Invalid URL, please try again.').removeClass('hide').show();
        }
        return false;
    });
    $('#cur-add .checkbox a').click(function () {
        $(this).toggleClass('on');
    });

    // video play
    $('#storyboard').on('click', '.storyboard-list ul li .hover-func a.video-play', function (e) {
        if ($('body').hasClass('has-trimtime-change')) {
            showUnsaveTrimTimeOverlay(e);
            return false;
        }
        if ($('body').hasClass('has-titlecard-change')) {
            showUnsaveTitleCardOverlay(e);
            return false;
        }
        cancelTitleCard();
        removeVideoPlayingHook();
        removeTrimTimeEditHook();
        disableTrimTimeEdit();
        removeTitleCardPlayingHook();
        removeTitleCardEditHook();

        // switch tab and content
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

        // video-info-tmpl (play action)
        var elemtli = $(this).parent().parent();
        playTitleCardAndVideo(elemtli);

        return false;
    });

    // video del
    // if video have programId to keep DELETE programIds list
    var videoDeleteIdList = [];
    $('#storyboard-list').on('click', 'li .hover-func a.video-del', function (e) {
        if ($('body').hasClass('has-trimtime-change')) {
            showUnsaveTrimTimeOverlay(e);
            return false;
        }
        if ($('body').hasClass('has-titlecard-change')) {
            showUnsaveTitleCardOverlay(e);
            return false;
        }
        $('body').addClass('has-change');
        cancelTitleCard();
        //removeVideoPlayingHook();     // ON PURPOSE to keep video playing hook in order to switch video-info automatically
        removeTrimTimeEditHook();
        removeTitleCardPlayingHook();
        removeTitleCardEditHook();
        var length = $('#storyboard-list li').length,
            eq = $('#storyboard-list li.playing').index(),
            deleting = $(this).parent().parent(),
            tmplItemData = deleting.tmplItem().data,
            elemtli = null;
        if (deleting.hasClass('playing') && (length - eq - 1) > 0) {
            // video-info-tmpl (auto turn by del)
            elemtli = deleting.next('li');
            playTitleCardAndVideo(elemtli);
            if (tmplItemData.id && tmplItemData.id > 0) {
                videoDeleteIdList.push(tmplItemData.id);
            }
            deleting.remove();
        } else {
            if (length > 1) {
                if (deleting.hasClass('playing') && (length - eq - 1) == 0) {
                    // video-info-tmpl (auto turn by del)
                    // return to first video
                    elemtli = $('#storyboard-list li:first');
                    playTitleCardAndVideo(elemtli);
                }
                if (tmplItemData.id && tmplItemData.id > 0) {
                    videoDeleteIdList.push(tmplItemData.id);
                }
                deleting.remove();
            } else {
                showSystemErrorOverlay('There must be at least one video in this episode.');
            }
        }
        nn.log({
            length: length,
            eq: eq,
            videoDeleteIdList: videoDeleteIdList
        }, 'debug');
        sumStoryboardInfo();
        return false;
    });

    // Trim time - common
    $('#cur-edit').on('click change', '.set-time input.time', function () {
        $('body').addClass('has-trimtime-change');
        $('body').addClass('has-change');
        $('#cur-edit .edit-time .btn-wrap .notice').hide();
        return false;
    });

    // Trim time - Edit button
    $('#cur-edit').on('click', '.edit-time .btn-wrap .btn-edit', function () {
        if ($('#storyboard-list li.playing .title a.playing').length > 0) {
            $('body').addClass('from-trim-time-edit');
            cancelTitleCard();
            removeTitleCardPlayingHook();
            loadYouTubeFlash($('#storyboard-listing li.playing').data('ytid'));
        } else if ('undefined' !== typeof youTubePlayerObj
                && 'object' === $.type(youTubePlayerObj)
                && 'function' === $.type(youTubePlayerObj.loadVideoById)) {
            //youTubePlayerObj.seekTo(0, true);
            youTubePlayerObj.pauseVideo();
        }
        addTrimTimeEditHook();
        enableTrimTimeEdit();
        return false;
    });

    // Trim time - Done button
    $('#cur-edit').on('click', '.edit-time .btn-wrap .btn-done', function () {
        var trimTime = chkDuration();
        if ($.isArray(trimTime) && 2 === trimTime.length) {
            $('body').addClass('has-change');
            $('body').removeClass('has-trimtime-change');
            disableTrimTimeEdit();
            $('.start-time input.time, .end-time input.time').each(function () {
                $(this).parent().data('time', $(this).val());
            });
            // update trimmed duration
            var trimDuration = formatDuration((trimTime[1] - trimTime[0]), true).split(':');
            $('#totalH').val(trimDuration[0]);
            $('#totalM').val(trimDuration[1]);
            $('#totalS').val(trimDuration[2]);
            if ('undefined' !== typeof youTubePlayerObj
                    && 'object' === $.type(youTubePlayerObj)
                    && 'function' === $.type(youTubePlayerObj.loadVideoById)) {
                youTubePlayerObj.loadVideoById({
                    'videoId': $('#storyboard-listing li.trim-time').data('ytid'),
                    'startSeconds': trimTime[0],
                    'endSeconds': (trimTime[1] == $('#storyboard-listing li.playing').data('ytduration')) ? 0 : trimTime[1]
                });
            }
            // update DOM
            $('#storyboard-listing li.trim-time').data('starttime', trimTime[0]);
            $('#storyboard-listing li.trim-time').data('endtime', trimTime[1]);
            var itemData = $('#storyboard-listing li.trim-time').tmplItem().data;
            itemData.startTime = trimTime[0];
            itemData.endTime = trimTime[1];
            itemData.duration = trimTime[1] - trimTime[0];
            $('#storyboard-listing li.trim-time .img .time .time-middle').text(formatDuration(trimTime[1] - trimTime[0]));
            sumStoryboardInfo();
            removeTrimTimeEditHook();
        }
        return false;
    });
    function chkDuration() {
        var duration = $('.set-time').data('originDuration'),
            startH = parseInt($('input[name=startH]').val(), 10) * 60 * 60,
            startM = parseInt($('input[name=startM]').val(), 10) * 60,
            startS = parseInt($('input[name=startS]').val(), 10),
            endH = parseInt($('input[name=endH]').val(), 10) * 60 * 60,
            endM = parseInt($('input[name=endM]').val(), 10) * 60,
            endS = parseInt($('input[name=endS]').val(), 10),
            startTime = parseInt(startH + startM + startS, 10),
            endTime = parseInt(endH + endM + endS, 10);
        if (0 == duration) {
            $('#cur-edit .edit-time .btn-wrap .notice').show();
            return false;
        }
        if ('' === $.trim($('input[name=startH]').val())
                || '' === $.trim($('input[name=startM]').val())
                || '' === $.trim($('input[name=startS]').val())
                || '' === $.trim($('input[name=endH]').val())
                || '' === $.trim($('input[name=endM]').val())
                || '' === $.trim($('input[name=endS]').val())) {
            $('#cur-edit .edit-time .btn-wrap .notice').show();
            return false;
        }
        if (startM >= 3600) {
            $('#cur-edit .edit-time .btn-wrap .notice').show();
            $('input[name=startM]').focus();
            return false;
        }
        if (startS >= 60) {
            $('#cur-edit .edit-time .btn-wrap .notice').show();
            $('input[name=startS]').focus();
            return false;
        }
        if (endM >= 3600) {
            $('#cur-edit .edit-time .btn-wrap .notice').show();
            $('input[name=endM]').focus();
            return false;
        }
        if (endS >= 60) {
            $('#cur-edit .edit-time .btn-wrap .notice').show();
            $('input[name=endS]').focus();
            return false;
        }
        if (startTime >= duration || endTime > duration) {
            $('#cur-edit .edit-time .btn-wrap .notice').show();
            return false;
        }
        if (startTime >= endTime) {
            $('#cur-edit .edit-time .btn-wrap .notice').show();
            return false;
        }
        return [startTime, endTime];
    }

    // Trim time - Cancel button
    $('#cur-edit').on('click', '.edit-time .btn-wrap .btn-cancel', function () {
        $('body').removeClass('has-trimtime-change');
        removeTrimTimeEditHook();
        disableTrimTimeEdit();
        $('.start-time input.time, .end-time input.time').each(function () {
            $(this).val($(this).parent().data('time'));
        });
        return false;
    });

    // Title Card - Edit/Preview Title (exist) => #storyboard-list li.edit p.title a.edit
    $('#storyboard-listing').on('click', 'li p.title .begin-title, li p.title .end-title', function (e) {
        if ($('body').hasClass('has-trimtime-change')) {
            showUnsaveTrimTimeOverlay(e);
            return false;
        }
        if ($('body').hasClass('has-titlecard-change')) {
            showUnsaveTitleCardOverlay(e);
            return false;
        }
        cancelTitleCard();
        removeVideoPlayingHook();
        removeTrimTimeEditHook();
        removeTitleCardPlayingHook();
        removeTitleCardEditHook();
        addTitleCardEditHook($(this));

        // switch tab and content
        $('#epcurate-curation ul.tabs li').removeClass('on');
        $('#epcurate-curation ul.tabs li a.cur-add').parent().parent().removeClass('last');
        $('#epcurate-curation ul.tabs li a.cur-edit').parent().parent().removeClass('hide').addClass('on last');
        $('#epcurate-curation .tab-content').addClass('hide');
        $('#cur-edit').removeClass('hide');
        $('#cur-edit .edit-time').addClass('hide');
        $('#cur-edit .edit-title').removeClass('hide');
        $('#cur-edit .edit-title').removeClass('disable');
        $('#video-control').show();
        $('#btn-play').addClass('hide');
        $('#btn-pause').removeClass('hide');

        var index = $(this).parent().parent().index(),
            hook = ($(this).hasClass('begin-title')) ? 'beginTitleCard' : 'endTitleCard',
            opts = $('#storyboard-list li:eq(' + index + ')').tmplItem().data[hook];
        if (opts && opts.message) {
            var isUpdateMode = true,
                isDisableEdit = false;
            buildTitleCardEditTmpl(opts, isUpdateMode, isDisableEdit);
            enableTitleCardEdit();

            buildTitleCardTmpl(opts);
            $('#cur-edit .edit-title .btn-cancel').data('opts', opts);
            $('#btn-play').trigger('click');
        }
        return false;
    });

    // Title Card - Add Title (none) => #storyboard-list li.edit p.hover-func a.edit
    $('#storyboard-listing').on('click', 'li p.hover-func a.begin-title, li p.hover-func a.end-title', function (e) {
        if ($('body').hasClass('has-trimtime-change')) {
            showUnsaveTrimTimeOverlay(e);
            return false;
        }
        if ($('body').hasClass('has-titlecard-change')) {
            showUnsaveTitleCardOverlay(e);
            return false;
        }
        cancelTitleCard();
        removeVideoPlayingHook();
        removeTrimTimeEditHook();
        removeTitleCardPlayingHook();
        removeTitleCardEditHook();
        addTitleCardEditHook($(this));

        // switch tab and content
        $('#epcurate-curation ul.tabs li').removeClass('on');
        $('#epcurate-curation ul.tabs li a.cur-add').parent().parent().removeClass('last');
        $('#epcurate-curation ul.tabs li a.cur-edit').parent().parent().removeClass('hide').addClass('on last');
        $('#epcurate-curation .tab-content').addClass('hide');
        $('#cur-edit').removeClass('hide');
        $('#cur-edit .edit-time').addClass('hide');
        $('#cur-edit .edit-title').removeClass('hide');
        $('#cur-edit .edit-title').removeClass('disable');
        $('#video-control').show();
        $('#btn-play').removeClass('hide');
        $('#btn-pause').addClass('hide');

        var isUpdateMode = false,
            isDisableEdit = false;
        buildTitleCardEditTmpl(CMS_CONF.TITLECARD_DEFAULT_OPTION, isUpdateMode, isDisableEdit);
        enableTitleCardEdit();

        buildTitleCardTmpl(CMS_CONF.TITLECARD_DEFAULT_OPTION);
        $('#cur-edit .edit-title .btn-cancel').data('opts', CMS_CONF.TITLECARD_DEFAULT_OPTION);
        return false;
    });

    // Title Card - Play Title Card
    $('#btn-play').click(function () {
        cancelTitleCard();
        var opts = null,
            isVideoPlayingMode = ($('#storyboard-list li.playing').length > 0) ? true : false,
            isTitleCardEnableEditMode = (!$('.edit-title').hasClass('disable')) ? true : false;
        if (isVideoPlayingMode) {
            if ($('#storyboard-list li.playing .title a.playing').hasClass('begin-title')) {
                $('#storyboard-list li.playing .hover-func .video-play').trigger('click');
            } else {
                opts = $('#storyboard-list li.playing').tmplItem().data.endTitleCard;
                wrapTitleCardCanvas();
                $('#video-player .video .canvas').titlecard(adaptTitleCardOption(opts), function () {
                    if ($('#storyboard-list li.next-playing').length <= 0) {
                        $('#epcurate-curation ul.tabs li a.cur-add').trigger('click');
                    } else {
                        $('#storyboard-list li.next-playing .hover-func .video-play').trigger('click');
                    }
                });
                animateTitleCardProgress(opts);
            }
        } else {
            if (isTitleCardEnableEditMode) {
                opts = computeTitleCardEditOption();
            } else {
                opts = $('#titlecard-outer').tmplItem().data;
            }
            wrapTitleCardCanvas();
            $('#video-player .video .canvas').titlecard(adaptTitleCardOption(opts), function () {
                buildTitleCardTmpl(opts);
                $('#btn-play').removeClass('hide');
                $('#btn-pause').addClass('hide');
            });
            animateTitleCardProgress(opts);
        }
    });

    // Title Card - Stop Title Card
    $('#btn-pause').click(function () {
        cancelTitleCard();
        var opts = null,
            isVideoPlayingMode = ($('#storyboard-list li.playing').length > 0) ? true : false;
        if (isVideoPlayingMode) {
            if ($('#storyboard-list li.playing .title a.playing').hasClass('begin-title')) {
                opts = $('#storyboard-list li.playing').tmplItem().data.beginTitleCard;
            } else {
                opts = $('#storyboard-list li.playing').tmplItem().data.endTitleCard;
            }
        } else {
            opts = computeTitleCardEditOption();
        }
        if (opts && opts.message) {
            buildTitleCardTmpl(opts);
        }
    });

    // Title Card - Edit Title button - enter titlecard edit mode
    $('#cur-edit').on('click', '.edit-title .btn-edit', function () {
        var opts = $('#cur-edit .edit-title .btn-cancel').data('opts'),
            isUpdateMode = ($('#storyboard-list li.edit p.title a.edit').length > 0) ? true : false,
            isDisableEdit = false;
        buildTitleCardEditTmpl(opts, isUpdateMode, isDisableEdit);
        enableTitleCardEdit();

        cancelTitleCard();
        buildTitleCardTmpl(opts);
        $('#cur-edit .edit-title .btn-cancel').data('opts', opts);
        return false;
    });

    // Title Card - Cancel button - leave titlecard edit mode
    $('#cur-edit').on('click', '.edit-title .btn-cancel', function () {
        // restore titlecard
        var opts = $('#cur-edit .edit-title .btn-cancel').data('opts'),
            isUpdateMode = ($('#storyboard-list li.edit p.title a.edit').length > 0) ? true : false,
            isDisableEdit = true;
        buildTitleCardEditTmpl(opts, isUpdateMode, isDisableEdit);
        disableTitleCardEdit();

        cancelTitleCard();
        buildTitleCardTmpl(opts);
        $('#cur-edit .edit-title .btn-cancel').data('opts', opts);
        $('body').removeClass('has-titlecard-change');
        return false;
    });

    // Title Card - Done button - finish titlecard edit
    $('#cur-edit').on('click', '.edit-title .btn-done', function (e) {
        var message = strip_tags($.trim($('#text').val()));
        if ('' == message) {
            showSystemErrorOverlay("Title text can't be empty!");
            return false;
        }
        var isInsertMode = ($('#storyboard-list li.edit p.hover-func a.edit').length > 0) ? true : false,
            hook = '';
        if (isInsertMode) {
            hook = ($('#storyboard-list li.edit p.hover-func a.edit').hasClass('begin-title')) ? 'beginTitleCard' : 'endTitleCard';
            if ($('#storyboard-listing li.edit .hover-func a.edit').hasClass('begin-title')) {
                $('#storyboard-listing li.edit .title').append('<a href="#" class="begin-title edit">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">Edit Title</span></span></span></span></a>');
            } else {
                $('#storyboard-listing li.edit .title').append('<a href="#" class="end-title edit">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">Edit Title</span></span></span></span></a>');
            }
            $('#storyboard-listing li.edit .hover-func a.edit').remove();
        } else {
            hook = ($('#storyboard-list li.edit p.title a.edit').hasClass('begin-title')) ? 'beginTitleCard' : 'endTitleCard';
        }

        // save to li DOM and update cancel data
        var tmplItem = $('#storyboard-listing li.edit').tmplItem(),
            itemData = tmplItem.data;
        if (null === itemData[hook]) { itemData[hook] = {}; }
        itemData[hook].message = message;
        itemData[hook].align = $('#cur-edit .edit-title input[name=align]:checked').val();
        itemData[hook].effect = $('#effect').val();
        itemData[hook].duration = $('#duration').val();
        itemData[hook].size = $('#fontSize').val();
        itemData[hook].color = $('#fontColor').val();
        itemData[hook].style = ($('#cur-edit .edit-title input[name=fontStyle]:checked').length > 0) ? 'italic' : 'normal';
        itemData[hook].weight = ($('#cur-edit .edit-title input[name=fontWeight]:checked').length > 0) ? 'bold' : 'normal';
        itemData[hook].bgColor = $('#backgroundColor').val();
        itemData[hook].bgImage = ('image' == $('#cur-edit .edit-title input[name=bg]:checked').val() && '' != $('#backgroundImage').val()) ? $('#backgroundImage').val() : '';
        // ON PURPOSE to mark update() to avoid lose edit hook
        //tmplItem.update();

        // and save to video DOM for titlecard play button
        cancelTitleCard();
        var opts = itemData[hook];
        buildTitleCardTmpl(opts);
        var isUpdateMode = true,
            isDisableEdit = true;
        buildTitleCardEditTmpl(opts, isUpdateMode, isDisableEdit);
        disableTitleCardEdit();
        $('#cur-edit .edit-title .btn-cancel').data('opts', opts);

        $('body').addClass('has-change');
        $('body').removeClass('has-titlecard-change');
        sumStoryboardInfo();
        // TODO implement Done == Save?
        //$('#form-btn-save').trigger('click');
        return false;
    });

    // Title Card - Delete icon - titlecard
    $('#cur-edit').on('click', '.edit-title .btn-del', function () {
        $('#btn-pause').trigger('click');
        showDeletePromptOverlay('Are you sure you want to delete this title?');
        return false;
    });
    $('#delete-prompt .btn-del').click(function () {
        $.unblockUI();
        if ($('#storyboard-list li.edit p.title a.edit').length > 0) {
            showSavingOverlay();
            var deleteId = 0,
                tmplItem = $('#storyboard-listing li.edit').tmplItem(),
                itemData = tmplItem.data;
            if ($('#storyboard-listing li.edit .title a.edit').hasClass('begin-title')) {
                if (itemData.beginTitleCard.id && itemData.beginTitleCard.id > 0) {
                    deleteId = itemData.beginTitleCard.id;
                }
                itemData.beginTitleCard = null;
                tmplItem.update();
                $('#storyboard-listing li.edit .hover-func').append('<a href="#" class="begin-title">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">Add Title</span></span></span></span></a>');
            } else {
                if (itemData.endTitleCard.id && itemData.endTitleCard.id > 0) {
                    deleteId = itemData.endTitleCard.id;
                }
                itemData.endTitleCard = null;
                tmplItem.update();
                $('#storyboard-listing li.edit .hover-func').append('<a href="#" class="end-title">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">Add Title</span></span></span></span></a>');
            }
            $('#storyboard-listing li .title a.edit').remove();

            // switch tab and content
            removeTitleCardEditHook();
            $('#epcurate-curation .tabs li').addClass('hide');
            $('#epcurate-curation .tabs li.first').removeClass('hide').addClass('last').addClass('on');
            $('#cur-edit').addClass('hide');
            $('#cur-add').removeClass('hide');
            $('#video-player .video').html('');
            $('#video-control').hide();

            if (deleteId > 0) {
                $('#overlay-s').fadeOut(0);
                alert('Delete title card!');
            } else {
                $('#overlay-s').fadeOut(0);
            }
            $('body').removeClass('has-titlecard-change');
            sumStoryboardInfo();
        }
        return false;
    });

    // Title Card - Setting UI - common
    $('#cur-edit').on('change', '.text-container, .font-container, .effect-container, .background-container, .duration-container', function () {
        $('#btn-pause').trigger('click');
    });

    // Title Card - Setting UI - Text
    $('#cur-edit').on('click change', '.text-container textarea', function () {
        $('body').addClass('has-titlecard-change');
        var text = strip_tags($.trim($(this).val()));
        $(this).val(text);
        $('#titlecard-inner').html(nl2br(text));
        verticalAlignTitleCard();
    });

    // Title Card - Setting UI - Font (bold, italic, radix/size, align)
    $('#cur-edit').on('click', '#fontWeight', function () {
        $('body').addClass('has-titlecard-change');
        var weight = $(this).attr('checked') ? 'bold' : 'normal';
        $('#titlecard-inner').css('font-weight', weight);
    });
    $('#cur-edit').on('click', '#fontStyle', function () {
        $('body').addClass('has-titlecard-change');
        var style = $(this).attr('checked') ? 'italic' : 'normal';
        $('#titlecard-inner').css('font-style', style);
    });
    switchFontRadix($('#fontSize').val());
    $('#cur-edit').on('click', '.font-container .font-l.enable', function () {
        $('#btn-pause').trigger('click');
        $('body').addClass('has-titlecard-change');
        $('body').addClass('has-change');
        setupFontRadix('up');
        return false;
    });
    $('#cur-edit').on('click', '.font-container .font-s.enable', function () {
        $('#btn-pause').trigger('click');
        $('body').addClass('has-titlecard-change');
        $('body').addClass('has-change');
        setupFontRadix('down');
        return false;
    });
    switchFontAlign($('#cur-edit .edit-title input[name=align]:checked').val());
    $('#cur-edit').on('click', '.edit-title input[name=align]', function () {
        $('body').addClass('has-titlecard-change');
        switchFontAlign($(this).val());
    });

    // Title Card - Setting UI - edit select dropdown (Effect, Duration)
    $('#cur-edit').on('click', '.enable .select-btn, .enable .select-txt', function () {
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
    $('#cur-edit').on('click', '.select .select-list li', function () {
        var selectOption = $(this).text(),
            parent = $(this).parent();
        parent.parent().children('.select-btn').removeClass('on');
        parent.parent().children('.select-txt').children().text(selectOption);
        parent.hide();
        parent.next('input').val($(this).data('meta'));
        return false;
    });
    $('#cur-edit').on('click', '.edit-title .effect-container .select-list li', function () {
        $('#btn-pause').trigger('click');
        $('body').addClass('has-titlecard-change');
        $('body').addClass('has-change');
        var element = $('#epcurate-curation #cur-edit .effect-container p.effect-demo'),
            effect = $(this).data('meta');
        previewEffect(element, effect);
        $('#effect').val(effect);
        return false;
    });
    $('#cur-edit').on('click', '.effect-container p.effect-demo', function () {
        var element = $(this),
            effect = $('#effect').val();
        previewEffect(element, effect);
        return false;
    });
    $('#cur-edit').on('click', '.edit-title .duration-container .select-list li', function () {
        $('#btn-pause').trigger('click');
        $('body').addClass('has-titlecard-change');
        $('body').addClass('has-change');
        var selectedDuration = $(this).data('meta');
        $('#duration').val(selectedDuration);
        return false;
    });

    // Title Card - Setting UI - background switch (color or image)
    switchBackground($('#cur-edit .edit-title input[name=bg]:checked').val(), $('#cur-edit .edit-title input[name=bg]:checked').attr('name'));
    $('#cur-edit').on('click', '.edit-title input[name=bg]', function () {
        $('body').addClass('has-titlecard-change');
        switchBackground($(this).val(), $(this).attr('name'));
    });

    // Title Card - Setting UI - color picker (font color, background color)
    $('#cur-edit').on('click', '.edit-title .color-list li', function () {
        var colorCode = $(this).attr('class'),
            parent = $(this).parent();
        parent.prev('span').attr('class', 'color ' + colorCode);
        parent.parent().next('input').val($(this).data('meta'));
        return false;
    });
    $('#cur-edit').on('click', '.edit-title .background-container .color-list li', function () {
        $('#btn-pause').trigger('click');
        $('body').addClass('has-titlecard-change');
        $('body').addClass('has-change');
        var colorCode = $(this).attr('class'),
            selectedBg = $(this).data('meta');
        $('#titlecard-outer').attr('class', colorCode);
        $('#backgroundColor').val(selectedBg);
        return false;
    });
    $('#cur-edit').on('click', '.edit-title .font-container .color-list li', function () {
        $('#btn-pause').trigger('click');
        $('body').addClass('has-titlecard-change');
        $('body').addClass('has-change');
        var colorCode = $(this).attr('class'),
            selectedColor = $(this).data('meta');
        $('#titlecard-inner').attr('class', colorCode);
        $('#fontColor').val(selectedColor);
        return false;
    });

    // Save
    $('#epcurateForm').submit(function (e, src) {
        // Episode Curation - Curation
        if ($(e.target).hasClass('curation') && chkCurationData(this, src)) {
            showSavingOverlay();
            $('#overlay-s').fadeOut(1000, function () {
                // redirect
                videoDeleteIdList = []; // clear video delete id list
                removeTotalChangeHook();
                if (!src                                                                                        // from nature action
                        || (src && 'form-btn-save' === $(src.target).attr('id'))) {                             // from btn-save
                    $('#epcurate-curation ul.tabs li a.cur-add').trigger('click');
                    return false;
                } else {
                    if (src && ($(src.target).attr('href') || $(src.target).parents('a').attr('href'))) {
                        if ($(src.target).attr('href')) {
                            nextstep = $(src.target).attr('href');
                        }
                        if ($(src.target).parents('a').attr('href')) {
                            nextstep = $(src.target).parents('a').attr('href');
                        }
                    }
                    // ON PURPOSE to wait api (async)
                    setTimeout(function () {
                        location.href = nextstep;
                    }, 1000);
                }
            });
        }
        return false;
    });

    // Add POI
    $('#cur-poi .btn-add-poi a, #cur-poi .poi-list a.edit').click(function () {
        if ($('#storyboard-list li.playing').length > 0) {
            $('body').addClass('from-trim-time-edit');
            cancelTitleCard();
            removeTitleCardPlayingHook();
        } else if ('undefined' !== typeof youTubePlayerObj
                && 'object' === $.type(youTubePlayerObj)
                && 'function' === $.type(youTubePlayerObj.loadVideoById)) {
            youTubePlayerObj.pauseVideo();
        }
        $('#epcurate-curation .tab-content').addClass('hide');
        $('#cur-poi-edit').removeClass('hide edit');
        $('#epcurate-curation ul.tabs li.poi').removeClass('last on');
        $('#epcurate-curation ul.tabs li.edit-poi').removeClass('hide');
        $('#epcurate-curation ul.tabs li.edit-poi').addClass('on');
        $('#storyboard, #content-main-wrap .form-btn, #epcurate-nav ul li.publish').block({ message: null });
        $('#epcurate-nav ul li.publish').addClass('mask');
        $('#cur-poi-edit .content ul li').removeClass('active');
        $('#cur-poi-edit .content ul li:first-child').addClass('active');
        $('#cur-poi-edit .edit-form').removeClass('hide');
        $('#cur-poi-edit #event-edit, #cur-poi-edit .edit-form .notice').addClass('hide');
        return false;
    });
    $('#cur-poi .poi-list a.edit').click(function () {
        $('#cur-poi-edit').addClass('edit');
    });
    $('#event-edit input[name="channelUrl"]').toggleVal();
    $('#poi-edit input.time').autotab({
        format: 'numeric'
    });

    // POI event tab
    $('#cur-poi-edit ul li a').click(function () {
        $('#cur-poi-edit ul li').removeClass('active');
        $(this).parent().addClass('active');
        $('#cur-poi-edit .edit-form').addClass('hide');
        $('#cur-poi-edit .edit-form .notice').addClass('hide');
        $('body').addClass('from-trim-time-edit');
        var showBlock = $(this).attr('href').split('#');
        if ('event-edit' == showBlock[1]) {
            loadYouTubeChrome($('#storyboard-listing li.playing').data('ytid'));
            $('#video-player .video').addClass('transparent');
            $('#video-player .video').append('<p class="btns btn-zoom"><span><a href="#"><img src="images/icon_zoom.png" alt="" />Zoom In</a></span></p>');
        } else {
            loadYouTubeFlash($('#storyboard-listing li.playing').data('ytid'));
            $('#video-player .video').removeClass('transparent');
            $('.btn-zoom').remove();
        }
        $('#' + showBlock[1]).removeClass('hide');
        return false;
    });

    // POI zoom
    $('#video-player .video').on('click', '.btn-zoom', function (){
        $.blockUI({ 
            message: $('#poi-zoom')
        });
        return false;
    });

    // Add POI
    $('#poi-edit .btn-next, #poi-edit .btn-save').click(function () {
        chkPoiData(document.epcurateForm);
        return false;
    });

    // Add POI event
    $('#event-edit .btn-add, #event-edit .btn-save').click(function () {
        chkPoiEventData(document.epcurateForm);
        return false;
    });
    
    // Reset POI duration
    $('#cur-poi-edit .btn-reset').click(function () {
        var startTime = formatDuration($('#storyboard-listing li.playing').data('starttime'), true).split(':'),
            endTime = formatDuration($('#storyboard-listing li.playing').data('endtime'), true).split(':'),
            startH = startTime[0],
            startM = startTime[1],
            startS = startTime[2],
            endH = endTime[0],
            endM = endTime[1],
            endS = endTime[2];
        $('#poi-edit .start-time .time-h').val(startH);
        $('#poi-edit .start-time .time-m').val(startM);
        $('#poi-edit .start-time .time-s').val(startS);
        $('#poi-edit .end-time .time-h').val(endH);
        $('#poi-edit .end-time .time-m').val(endM);
        $('#poi-edit .end-time .time-s').val(endS);
        return false;
    });

    // Cancel POI editing
    $('#cur-poi-edit .btn-cancel').click(function () {
        $.blockUI({
            message: $('#unsave-poi-prompt')
        });
        return false;
    });

    // Del POI
    $('#cur-poi-edit .btn-del').click(function () {
        $.blockUI({
            message: $('#del-poi-notice')
        });
        return false;
    });

    $(window).resize(function () {
        setVideoMeasure();
        setSpace();
        countPoiItem();
        resizeTitleCard();
        resizeFromFontRadix();
        verticalAlignTitleCard();
        scrollbar('#storyboard-wrap', '#storyboard-list', '#storyboard-slider');
    });
});

function chkCurationData(fm, src) {
    var cntProgram = $('#storyboard-list li').length,
        duration = 0,
        itemData = null;
    $('#storyboard-list li').each(function (i) {
        itemData = $(this).tmplItem().data;
        duration += parseInt(itemData.ytDuration, 10);
    });
    if ($('body').hasClass('has-trimtime-change')) {
        showUnsaveTrimTimeOverlay(src);
        return false;
    }
    if ($('body').hasClass('has-titlecard-change')) {
        showUnsaveTitleCardOverlay(src);
        return false;
    }
    if (cntProgram <= 0 || duration <= 0) {
        showSystemErrorOverlay('Please curate at least one valid video.');
        return false;
    }
    if (cntProgram > CMS_CONF.PROGRAM_MAX) {
        showSystemErrorOverlay('You have reached the maximum amount of 50 videos.');
        return false;
    }
    return true;
}

function chkPoiData(fm, src) {
    fm.poiName.value = $.trim(fm.poiName.value);
    var duration = $('.set-time').data('originDuration'),
        videoStart = $('#storyboard-listing li.playing').data('startTime'),
        videoEnd = $('#storyboard-listing li.playing').data('endTime'),
        startH = parseInt($('input[name=poiStartH]').val(), 10) * 60 * 60,
        startM = parseInt($('input[name=poiStartM]').val(), 10) * 60,
        startS = parseInt($('input[name=poiStartS]').val(), 10),
        endH = parseInt($('input[name=poiEndH]').val(), 10) * 60 * 60,
        endM = parseInt($('input[name=poiEndM]').val(), 10) * 60,
        endS = parseInt($('input[name=poiEndS]').val(), 10),
        startTime = parseInt(startH + startM + startS, 10),
        endTime = parseInt(endH + endM + endS, 10);

    if ('' === fm.poiName.value) {
        $('#cur-poi-edit .btn-container').children('.notice').removeClass('hide');
        return false;
    }
    if ('' === $.trim($('input[name=poiStartH]').val())
            || '' === $.trim($('input[name=poiStartM]').val())
            || '' === $.trim($('input[name=poiStartS]').val())
            || '' === $.trim($('input[name=poiEndH]').val())
            || '' === $.trim($('input[name=poiEndM]').val())
            || '' === $.trim($('input[name=poiEndS]').val())) {
        $('#poi-edit .notice').addClass('hide');
        $('#poi-edit .invalid-notice').removeClass('hide');
        return false;
    }
    if (startTime < videoStart || endTime > videoEnd) {
        $('#poi-edit .notice').addClass('hide');
        $('#poi-edit .playback-notice').removeClass('hide');
        return false;
    }    
    if (startM >= 3600) {
        $('#poi-edit .notice').addClass('hide');
        $('#poi-edit .invalid-notice').removeClass('hide');
        $('input[name=poiStartM]').focus();
        return false;
    }
    if (startS >= 60) {
        $('#poi-edit .notice').addClass('hide');
        $('#poi-edit .invalid-notice').removeClass('hide');
        $('input[name=poiStartS]').focus();
        return false;
    }
    if (endM >= 3600) {
        $('#poi-edit .notice').addClass('hide');
        $('#poi-edit .invalid-notice').removeClass('hide');
        $('input[name=poiEndM]').focus();
        return false;
    }
    if (endS >= 60) {
        $('#poi-edit .notice').addClass('hide');
        $('#poi-edit .invalid-notice').removeClass('hide');
        $('input[name=poiEndS]').focus();
        return false;
    }
    if (startTime >= duration || endTime > duration) {
        $('#poi-edit .notice').addClass('hide');
        $('#poi-edit .playback-notice').removeClass('hide');
        return false;
    }
    if (startTime >= endTime) {
        $('#poi-edit .notice').addClass('hide');
        $('#poi-edit .overlap-notice').removeClass('hide');
        return false;
    }
    $('#cur-poi-edit .edit-form, #cur-poi-edit .edit-form .notice').addClass('hide');
    $('#cur-poi-edit #event-edit').removeClass('hide');
    $('#cur-poi-edit ul li').removeClass('active');
    $('#cur-poi-edit ul li:last-child').addClass('active');
}

function chkPoiEventData(fm, src) {
    fm.displayText.value = $.trim(fm.displayText.value);
    fm.btnText.value = $.trim(fm.btnText.value);
    fm.channelUrl.value = $.trim(fm.channelUrl.value);
    if ('' === fm.displayText.value
        || '' === fm.btnText.value
        || '' === fm.channelUrl.value
        || 'Input 9x9 channel or episode URL' === fm.channelUrl.value) {
        $('#cur-poi-edit .btn-container').children('.notice').removeClass('hide');
        return false;
    }
    showProcessingOverlay();
    setTimeout(function () {
        $('#overlay-s').fadeOut();
        $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
        $('#epcurate-curation ul.tabs li.poi').removeClass('hide').addClass('on last');
        $('#cur-poi-edit').addClass('hide');
        $('#cur-poi').removeClass('hide');
    }, 3000);
    $('#storyboard, #content-main-wrap .form-btn, #epcurate-nav ul li.publish').unblock();
    $('#epcurate-nav ul li.publish').removeClass('mask');
}

function countPoiItem() {
    var poiHeight = $('#video-player').data('height') - 104,
        poiItem   = parseInt(poiHeight / 33);
    $('#cur-poi .poi-list ul').data('item', poiItem);
    $('#cur-poi .poi-list ul').height($('#cur-poi .poi-list ul').data('item') * 33);
}

function setVideoMeasure() {
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        epcurateNavHeight = $('#epcurate-nav').height(),
        storyboardHeight = 171,
        btnsHeight = $('#content-main .form-btn').height(),
        heightBase = windowHeight - epcurateNavHeight - storyboardHeight - btnsHeight - 82;     // 44: play video btn height, 38: tabs height
        videoBase = parseInt((windowWidth - 624) / 16);                                         // 624: 1024-400 min window width - min video width
        widthTemp = videoBase * 16,
        heightTemp = videoBase * 9;
    if (windowWidth < 1024) {
        $('#epcurate-curation #video-player .video').height(269);
        $('#epcurate-curation #video-player .video').width(400);
        $('#epcurate-curation ul.tabs').css('padding-left', '400px');
    }
    if (windowWidth >= 1024 && windowWidth <= 1232) {
        if (heightTemp > heightBase) {
            if (heightBase < 269) {
                $('#epcurate-curation #video-player .video').height(269);
                $('#epcurate-curation #video-player .video').width(400);
                $('#epcurate-curation ul.tabs').css('padding-left', '400px');
            } else {
                $('#epcurate-curation #video-player .video').height(parseInt(heightBase / 9) * 9 + 44);
                $('#epcurate-curation #video-player .video').width(parseInt(heightBase / 9) * 16);
                $('#epcurate-curation ul.tabs').css('padding-left', $('#epcurate-curation #video-player .video').width() + 'px');
            }
        } else {
            if (heightBase < 269) {
                $('#epcurate-curation #video-player .video').height(269);
                $('#epcurate-curation #video-player .video').width(400);
                $('#epcurate-curation ul.tabs').css('padding-left', '400px');
            } else {
                $('#epcurate-curation #video-player .video').height(heightTemp + 44);
                $('#epcurate-curation #video-player .video').width(widthTemp);
                $('#epcurate-curation ul.tabs').css('padding-left', widthTemp + 'px');            
            }
        }
    }
    if (windowWidth > 1232) {
        if (heightBase < 269) {
            $('#epcurate-curation #video-player .video').height(269);
            $('#epcurate-curation #video-player .video').width(400);
            $('#epcurate-curation ul.tabs').css('padding-left', '400px');
        }
        if (heightBase <= 386 && heightBase >= 269) {
            if (heightTemp > heightBase) {
                $('#epcurate-curation #video-player .video').height(269);
                $('#epcurate-curation #video-player .video').width(400);
                $('#epcurate-curation ul.tabs').css('padding-left', '400px');
            } else {
                $('#epcurate-curation #video-player .video').height(parseInt(heightBase / 9) * 9 + 44);
                $('#epcurate-curation #video-player .video').width(parseInt(heightBase / 9) * 16);
                $('#epcurate-curation ul.tabs').css('padding-left', $('#epcurate-curation #video-player .video').width() + 'px');
            }
        }
        if (heightBase > 386) {
            $('#epcurate-curation #video-player .video').height(386);
            $('#epcurate-curation #video-player .video').width(608);
            $('#epcurate-curation ul.tabs').css('padding-left', '608px');
        }
    }
    $('#video-player').data('width', $('#video-player .video').width());
    $('#video-player').data('height', $('#video-player .video').height());
    $('#epcurate-curation .tab-content').height($('#video-player').data('height'));
}

function setSpace() {
    var windowHeight = $(window).height(),
        epcurateNavHeight = $('#epcurate-nav').height(),
        videoHeight = $('#video-player').height(),
        storyboardHeight = 171,
        btnsHeight = $('#content-main .form-btn').height(),
        extraHeight = windowHeight - epcurateNavHeight - videoHeight - storyboardHeight - btnsHeight -38,  //38: epcurate-curation tab height
        windowWidth = $(window).width(),
        videoWidth = $('#epcurate-curation #video-player .video').width(),
        titlecardHeight = $('#epcurate-curation #video-player .video').height() - 44,
        curAddWidth = $('#epcurate-curation #cur-add').width(),
        curEditWidth = $('#epcurate-curation #cur-edit').width(),
        episodeInfoWidth = $('#storyboard .storyboard-info .episode-storyboard').width(),
        channelTitleWidth = $('#storyboard .storyboard-info .channel-name .title').width(),
        episodeTitleWidth = $('#storyboard .storyboard-info .episode-name .title').width();
    if (extraHeight < 0) { extraHeight = 0; }
    $('p.auto-height').height(extraHeight / 4);
    $('#storyboard-slider').css('bottom', extraHeight / 4 + 'px');
    $('#storyboard-slider').width(windowWidth - 30);
    $('#storyboard-slider').attr('data-orig-slider-width', windowWidth - 30);
    $('.video .canvas').width('100%');
    $('.video .canvas').height(titlecardHeight);

    if (windowWidth > 1016) {
        $('#epcurate-curation #cur-add, #cur-poi, #cur-poi-edit').css('padding-left', (windowWidth - videoWidth - curAddWidth) / 2 + 'px');
        $('#epcurate-curation #cur-edit').css('padding-left', (windowWidth - videoWidth - curEditWidth) / 2 + 'px');
    } else {
        $('#epcurate-curation #cur-add, #cur-poi, #cur-poi-edit').css('padding-left', '32px');
        $('#epcurate-curation #cur-edit').css('padding-left', '32px');
    }
    // curation nav width
    if (windowWidth < 1024) {
        $('#epcurate-nav ul').css('width', '256px');
        $('#epcurate-nav ul li').css('width', '128px');
    }
    if (windowWidth >= 1024 && windowWidth <= 1252) {
        $('#epcurate-nav ul').css('width', (windowWidth - 768) + 'px');
        $('#epcurate-nav ul li').css('width', (windowWidth - 768) / 2 + 'px');
    }
    if (windowWidth > 1252) {
        $('#epcurate-nav ul').css('width', '484px');
        $('#epcurate-nav ul li').css('width', '242px');
    }
    if (546 >= $('#content-wrap').height()) {
        $('#content-wrap').height(546);
        $('body').css('overflow', 'auto');
    } else {
        $('#content-wrap').height($(window).height() - 46);     // $('#epcurate-nav .epcurate-nav-wrap')
        $('body').css('overflow', 'hidden');
    }
    $('#channel-name, #episode-name').width((windowWidth - episodeInfoWidth - 34 - 50 - channelTitleWidth - episodeTitleWidth - 10) / 2);
    $('#channel-name').text($('#channel-name').data('meta')).addClass('ellipsis').ellipsis();
    $('#episode-name').text($('#episode-name').data('meta')).addClass('ellipsis').ellipsis();
    $('#channel-name, #episode-name').width('auto');
}

function loadYouTubeFlash(videoId) {
    removeTitleCardPlayingHook();
    if (videoId && '' != videoId) {
        var videoWidth = $('#video-player .video').width(),
            videoHeight = $('#video-player .video').height();
        $('#video-player .video').flash({
            id: 'youTubePlayer',
            swf: 'http://www.youtube.com/v/' + videoId + '?version=3&enablejsapi=1&autohide=0&fs=0',
            style: 'vertical-align: middle;',
            width: videoWidth,
            height: videoHeight,
            hasVersion: 9,
            allowScriptAccess: 'always',
            allowFullScreen: false,
            quality: 'high',
            menu: false,
            bgcolor: '#000000',
            //wmode: 'transparent',
            flashvars: false
        });
        $('#video-player #video-control').hide();
        $('#video-player .video').removeClass('transparent');
    }
}

function loadYouTubeChrome(videoId) {
    removeTitleCardPlayingHook();
    if (videoId && '' != videoId) {
        var videoWidth = $('#video-player .video').width(),
            videoHeight = $('#video-player .video').height();
        $('#video-player .video').flash({
            id: 'youTubePlayer',
            swf: 'http://www.youtube.com/apiplayer?version=3&enablejsapi=1&playerapiid=player1',
            style: 'vertical-align: middle;',
            width: videoWidth,
            height: videoHeight,
            hasVersion: 9,
            allowScriptAccess: 'always',
            allowFullScreen: false,
            quality: 'high',
            menu: false,
            bgcolor: '#000000',
            //wmode: 'transparent',
            flashvars: false
        });
        $('#video-player #video-control').hide();
        $('#video-player .video').removeClass('transparent');
    }
}

function loadVideo() {
    if ($('#storyboard-listing li.playing').length > 0
            && 'undefined' !== typeof youTubePlayerObj
            && 'object' === $.type(youTubePlayerObj)
            && 'function' === $.type(youTubePlayerObj.loadVideoById)) {
        youTubePlayerObj.loadVideoById({
            'videoId': $('#storyboard-listing li.playing').data('ytid'),
            'startSeconds': $('#storyboard-listing li.playing').data('starttime'),
            'endSeconds': ($('#storyboard-listing li.playing').data('endtime') == $('#storyboard-listing li.playing').data('ytduration')) ? 0 : $('#storyboard-listing li.playing').data('endtime')
        });
    }
}

function onYouTubePlayerReady(playerId) {
    // NO DECLARE var youTubePlayerObj ON PURPOSE to let it be global
    youTubePlayerObj = document.getElementById('youTubePlayer');
    youTubePlayerObj.addEventListener('onStateChange', 'onYouTubePlayerStateChange');
    loadVideo();
}

function onYouTubePlayerStateChange(newState) {
    var playing = $('#storyboard-list li.playing'),
        nextPlaying = $('#storyboard-list li.next-playing'),
        videoId = nextPlaying.data('ytid'),
        opts = null,
        nextOpts = null;
    // unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5)
    if (-1 == newState) {
        youTubePlayerObj.playVideo();
    }
    if (1 == newState && ($('body').hasClass('from-trim-time-edit') || $('body').hasClass('from-trim-time-edit-ending'))) {
        $('body').removeClass('from-trim-time-edit');
        $('body').removeClass('from-trim-time-edit-ending');
        youTubePlayerObj.seekTo(playing.data('starttime'), true);
        youTubePlayerObj.pauseVideo();
    }
    if (0 == newState) {
        if ($('#storyboard-listing li.trim-time').length > 0) {
            $('body').addClass('from-trim-time-edit-ending');
            loadYouTubeFlash($('#storyboard-listing li.trim-time').data('ytid'));
            return false;
        }
        if ($('#storyboard-list li.playing').length <= 0 && $('#storyboard-list li.next-playing').length <= 0) {
            $('#epcurate-curation ul.tabs li a.cur-add').trigger('click');
        } else {
            if (playing.children('.title').children('a.end-title').length > 0) {
                opts = playing.tmplItem().data.endTitleCard;
                removeTitleCardPlayingHook();
                addTitleCardPlayingHook(playing, 'end');
                cancelTitleCard();
                wrapTitleCardCanvas();
                $('#video-player .video .canvas').titlecard(adaptTitleCardOption(opts), function () {
                    if ($('#storyboard-list li.next-playing').length <= 0) {
                        $('#epcurate-curation ul.tabs li a.cur-add').trigger('click');
                    } else {
                        playTitleCardAndVideo(nextPlaying);
                    }
                });
                animateTitleCardProgress(opts);
            } else {
                if ($('#storyboard-list li.next-playing').length <= 0) {
                    $('#epcurate-curation ul.tabs li a.cur-add').trigger('click');
                } else {
                    playTitleCardAndVideo(nextPlaying);
                }
            }
        }
    }
}

function buildVideoInfoTmpl(element) {
    // video-info-tmpl
    if (element && element.tmplItem() && element.tmplItem().data && element.tmplItem().data.name) {
        var videoInfoData = element.tmplItem().data,
            startTimeInt = videoInfoData.startTime,
            endTimeInt = (videoInfoData.endTime > 0) ? videoInfoData.endTime : videoInfoData.duration,
            trimStartTime = formatDuration(startTimeInt, true).split(':'),
            trimEndTime = formatDuration(endTimeInt, true).split(':'),
            trimDuration = formatDuration((endTimeInt - startTimeInt), true).split(':');
        $('#video-info').html('');
        $('#video-info-tmpl').tmpl(videoInfoData, {
            startH: trimStartTime[0],
            startM: trimStartTime[1],
            startS: trimStartTime[2],
            endH: trimEndTime[0],
            endM: trimEndTime[1],
            endS: trimEndTime[2],
            totalH: trimDuration[0],
            totalM: trimDuration[1],
            totalS: trimDuration[2],
            uploadDateConverter: function (uploadDate) {
                var datetemp = uploadDate.split('T');
                return datetemp[0];
            }
        }).prependTo('#video-info');
        $('.ellipsis').ellipsis();
        $('.set-time input.time').autotab({
            format: 'numeric'
        });
    }
}

function playTitleCardAndVideo(element) {
    if (element && element.children('.title').children('a.begin-title').length > 0) {
        var opts = element.tmplItem().data.beginTitleCard;
        if (opts && opts.message) {
            removeTitleCardPlayingHook();
            addTitleCardPlayingHook(element, 'begin');
            cancelTitleCard();
            buildVideoInfoTmpl(element);
            wrapTitleCardCanvas();
            $('#video-player .video .canvas').titlecard(adaptTitleCardOption(opts), function () {
                loadYouTubeFlash(element.data('ytid'));
            });
            animateTitleCardProgress(opts);
            removeVideoPlayingHook();
            addVideoPlayingHook(element);
        }
    } else if (element) {
        buildVideoInfoTmpl(element);
        loadYouTubeFlash(element.data('ytid'));
        removeVideoPlayingHook();
        addVideoPlayingHook(element);
    }
}

function animateTitleCardProgress(opts) {
    if (!opts || !opts.duration) {
        return;
    }
    var duration = opts.duration,
        width = $('#video-player .video').width();
    $('#video-control').show();
    $('#btn-play').addClass('hide');
    $('#btn-pause').removeClass('hide');
    //$('#btn-pause').data('opts', opts);
    $('#play-time .duration').text(formatDuration(duration));
    $('#play-dragger').animate({
        left: '+=' + parseInt(width - 18, 10)   // 18:drag icon width
    }, parseInt(duration * 1000, 10), function () {
        $('#play-dragger').css('left', '0');
    });
    $('#played').animate({
        width: '+=' + width
    }, parseInt(duration * 1000, 10), function () {
        $('#played').css('width', '0');
        $('#play-time .played').countdown('destroy');
        $('#play-time .played').text('00:00');
    });
    $('#play-time .played').countdown('destroy');
    $('#play-time .played').countdown({
        since: -1,
        compact: true,
        format: 'MS',
        description: ''
    });
}

function cancelTitleCard() {
    $('#video-player .video .canvas').titlecard('cancel');
    $('#play-time .played').countdown('destroy');
    $('#btn-play').removeClass('hide');
    $('#btn-pause').addClass('hide').removeData('opts');    // NOTE: removeData('opts')
    $('#play-dragger').clearQueue().stop().css('left', '0');
    $('#played').clearQueue().stop().css('width', '0');
}

function wrapTitleCardCanvas() {
    $('#video-player .video').html('<div class="canvas"></div>');
    $('#video-player .video .canvas').hide().css('height', $('#video-player').height() - 44).show();    // 44: $('#video-control')
}

function adaptTitleCardOption(opts) {
    if (!opts || !opts.message) {
        opts = CMS_CONF.TITLECARD_DEFAULT_OPTION;
    }
    var option = {
        text: opts.message,
        align: opts.align,
        effect: opts.effect,
        duration: opts.duration,
        fontSize: opts.size,
        fontColor: opts.color,
        fontStyle: opts.style,
        fontWeight: opts.weight,
        backgroundColor: opts.bgColor,
        backgroundImage: opts.bgImage
    };
    return option;
}

function computeTitleCardEditOption() {
    var option = {
        message: strip_tags($.trim($('#text').val())),
        align: $('#cur-edit .edit-title input[name=align]:checked').val(),
        effect: $('#effect').val(),
        duration: $('#duration').val(),
        size: $('#fontSize').val(),
        color: $('#fontColor').val(),
        style: ($('#cur-edit .edit-title input[name=fontStyle]:checked').length > 0) ? 'italic' : 'normal',
        weight: ($('#cur-edit .edit-title input[name=fontWeight]:checked').length > 0) ? 'bold' : 'normal',
        bgColor: $('#backgroundColor').val(),
        bgImage: ('image' == $('#cur-edit .edit-title input[name=bg]:checked').val() && '' != $('#backgroundImage').val()) ? $('#backgroundImage').val() : ''
    };
    return option;
}

function enableTitleCardEdit() {
    $('#cur-edit .edit-title').removeClass('disable');
    $('#cur-edit .select').attr('class', 'select enable');
    $('#cur-edit input, #cur-edit textarea').removeAttr('disabled');
    $.uniform.update('#cur-edit input, #cur-edit textarea');
    $('#cur-edit .font-container .font-l, #cur-edit .font-container .font-s').removeClass('disabled').addClass('enable');
}

function disableTitleCardEdit() {
    $('#cur-edit .edit-title').addClass('disable');
    $('#cur-edit .select').attr('class', 'select disable');
    $('#cur-edit input, #cur-edit textarea').attr('disabled', 'disabled');
    $.uniform.update('#cur-edit input, #cur-edit textarea');
    $('#cur-edit .font-container .font-l, #cur-edit .font-container .font-s').removeClass('enable').addClass('disabled');
}

function buildTitleCardEditTmpl(opts, isUpdateMode, isDisableEdit) {
    $('.edit-title').html($('#titlecard-edit-tmpl').tmpl(opts, {
        isUpdateMode: isUpdateMode
    }));
    uploadImage(isDisableEdit);
    $('#cur-edit input, #cur-edit textarea, #cur-edit select').uniform();
    switchFontRadix($('#fontSize').val());
    switchFontAlign($('#cur-edit .edit-title input[name=align]:checked').val());
    switchBackground($('#cur-edit .edit-title input[name=bg]:checked').val(), $('#cur-edit .edit-title input[name=bg]:checked').attr('name'));
}

function buildTitleCardTmpl(opts) {
    if (opts && opts.message) {
        $('#video-player .video').html($('#titlecard-tmpl').tmpl(opts, {
            message: nl2br(strip_tags($.trim(opts.message))),
            outerHeight: ($('#epcurate-curation #video-player .video').height() - 44),  // 44: $('#video-control')
            fontSize: Math.round($('#epcurate-curation #video-player .video').width() / opts.size)
        }));
        $('#play-time .played').text('00:00');
        $('#play-time .duration').text(formatDuration(opts.duration));
        verticalAlignTitleCard();
    }
}

function addVideoPlayingHook(element) {
    element.addClass('playing');
    element.next().addClass('next-playing');
}

function removeVideoPlayingHook() {
    $('#storyboard li').removeClass('playing').removeClass('next-playing');
}

function addTrimTimeEditHook() {
    $('#storyboard-listing li.playing').addClass('trim-time');
}

function removeTrimTimeEditHook() {
    $('#storyboard li').removeClass('trim-time');
}

function enableTrimTimeEdit() {
    $('#cur-edit p.time').removeClass('disable');
    $('#cur-edit input.time').removeAttr('disabled');
    $('#cur-edit .set-time .total-time').addClass('hide');
    $('#cur-edit .btn-wrap .btns').removeClass('hide');
    $('#cur-edit .btn-wrap .btn-edit').addClass('hide');
}

function disableTrimTimeEdit() {
    $('#cur-edit p.time').addClass('disable');
    $('#cur-edit input.time').attr('disabled', 'disabled');
    $('#cur-edit .set-time .total-time').removeClass('hide');
    $('#cur-edit .btn-wrap .btns').addClass('hide');
    $('#cur-edit .btn-wrap .btn-edit').removeClass('hide');
    $('#cur-edit .edit-time .btn-wrap .notice').hide();
}

function addTitleCardPlayingHook(element, pos) {
    element.children('.title').children('a.' + pos + '-title').addClass('playing');
}

function removeTitleCardPlayingHook() {
    $('#storyboard li .title a').removeClass('playing');
}

function addTitleCardEditHook(element) {
    element.parent().parent().addClass('edit');                     // parent li
    element.addClass('edit');                                       // self a (begin-title or end-title)
}

function removeTitleCardEditHook() {
    $('#storyboard-list li').removeClass('edit');
    $('#storyboard-list li p.title a').removeClass('edit');
    $('#storyboard-list li p.hover-func a').removeClass('edit');
}

function removeTotalChangeHook() {
    $('body').removeClass('has-change');
    $('body').removeClass('has-trimtime-change');
    $('body').removeClass('has-titlecard-change');
}

function animateStoryboard(add) {
    var list = $('#storyboard-listing li').length,
        distance = (list + add) * 2,
        windowWidth = $(window).width(),
        storyboardMove = distance / 100 * (5700 - windowWidth + 17);
    if ((list + add) > 8) {
        $('.ui-slider-handle').animate({'left': '+' + distance + '%'}, 'slow');
        $('#storyboard-list').animate({'left': '-' + storyboardMove + 'px'}, 'slow');    
    }
}

function sumStoryboardInfo() {
    var length = $('#storyboard-list li').length,
        leftLength = CMS_CONF.PROGRAM_MAX - length,
        duration = 0,
        itemData = null;
    if (isNaN(leftLength) || leftLength < 0) {
        leftLength = 0;
    }
    $('#storyboard-list li').each(function (i) {
        itemData = $(this).tmplItem().data;
        duration += parseInt(itemData.duration, 10);
        if (null !== itemData.beginTitleCard) {
            duration += parseInt(itemData.beginTitleCard.duration, 10);
        }
        if (null !== itemData.endTitleCard) {
            duration += parseInt(itemData.endTitleCard.duration, 10);
        }
    });
    var durationMin = parseInt(duration / 60, 10),
        durationSec = parseInt(duration % 60, 10),
        durationHou = parseInt(durationMin / 60, 10);
    if (durationHou.toString().length < 2) {
        durationHou = '0' + durationHou;
    }
    if (durationMin >= 60) {
        durationMin = parseInt(durationMin % 60, 10);
    }
    if (durationMin.toString().length < 2) {
        durationMin = '0' + durationMin;
    }
    if (durationSec.toString().length < 2) {
        durationSec = '0' + durationSec;
    }
    $('#storyboard-length').text(leftLength);
    $('#storyboard-duration').text(durationHou + ':' + durationMin + ':' + durationSec);
    $('#storyboard-list .notice').css('left', parseInt((114 * length) + 9, 10) + 'px');
    $('#storyboard-listing li').removeClass('last last2');
    $('#storyboard-listing li').eq(48).addClass('last2');
    $('#storyboard-listing li').eq(49).addClass('last');
}

function resizeTitleCard() {
    var videoHeight = ($('#video-player').width() / 16) * 9,
        videoPlayerHeight = videoHeight + 44;   // 44: $('#video-control')
    $('#video-player').css('height', videoPlayerHeight + 'px');
    $('#video-player .video').css('height', videoPlayerHeight + 'px');
    $('#video-player .video .titlecard-outer').css('height', videoHeight + 'px');
}

function resizeFromFontRadix() {
    if ($('#titlecard-outer').length > 0) {
        var radix = $('#titlecard-outer').tmplItem().data.size;
        $('#titlecard-inner').css('font-size', Math.round($('#epcurate-curation #video-player .video').width() / radix) + 'pt');
    }
}

function verticalAlignTitleCard() {
    // vertical align
    var wrapWidth = $('#titlecard-outer').width(),
        wrapHeight = (wrapWidth / 16) * 9,
        selfWidth = $('#titlecard-outer').children('.titlecard-middle').children('.titlecard-inner').width(),
        selfHeight = $('#titlecard-outer').children('.titlecard-middle').children('.titlecard-inner').height(),
        selfLeft = 0,
        selfTop = 0;
    if (wrapWidth > selfWidth) {
        selfLeft = (wrapWidth - selfWidth) / 2;
    }
    if (wrapHeight > selfHeight) {
        selfTop = (wrapHeight - selfHeight) / 2;
    }
    $('#titlecard-outer').children('.titlecard-middle').children('.titlecard-inner').css({
        top: selfTop + 'px',
        left: selfLeft + 'px'
    });
}

function setupFontRadix(action) {
    var size = parseInt($('#fontSize').val(), 10),
        width = $('#epcurate-curation #video-player .video').width();
    if ('up' === action) {
        $('.font-container .font-s').removeClass('disable');
        if (size <= CMS_CONF.FONT_RADIX_MIN) {
            $('.font-container .font-l.enable').addClass('disable');
        } else {
            size = size - 1;
            $('#fontSize').val(size);
            $('#titlecard-inner').css('font-size', Math.round(width / size) + 'pt');
            verticalAlignTitleCard();
        }
    } else {
        $('.font-container .font-l').removeClass('disable');
        if (size >= CMS_CONF.FONT_RADIX_MAX) {
            $('.font-container .font-s.enable').addClass('disable');
        } else {
            size = size + 1;
            $('#fontSize').val(size);
            $('#titlecard-inner').css('font-size', Math.round(width / size) + 'pt');
            verticalAlignTitleCard();
        }
    }
}

function switchFontRadix(radix) {
    radix = parseInt(radix, 10);
    $('.font-container .font-l, .font-container .font-s').removeClass('disable');
    if (radix <= CMS_CONF.FONT_RADIX_MIN) {
        $('.font-container .font-l').addClass('disable');
    }
    if (radix >= CMS_CONF.FONT_RADIX_MAX) {
        $('.font-container .font-s').addClass('disable');
    }
}

function switchFontAlign(align) {
    $('#titlecard-inner').css('text-align', align);
}

function switchBackground(bg, name) {
    if ('image' == bg) {
        $('#cur-edit .background-container .bg-color').addClass('hide');
        $('#cur-edit .background-container .bg-img').removeClass('hide');
        $('#titlecard-outer img').show();
    } else {
        $('#cur-edit .background-container .bg-color').removeClass('hide');
        $('#cur-edit .background-container .bg-img').addClass('hide');
        $('#titlecard-outer img').hide();
    }
    $('input[name=' + name + ']').parents('label').removeClass('checked');
    $('input[name=' + name + ']:checked').parents('label').addClass('checked');
}

function cancelEffect(element) {
    element
        .clearQueue()
        .stop()
        .children('span')
            .clearQueue()
            .stop()
            .children('em')
                .clearQueue()
                .stop();
}

function previewEffect(element, effect) {
    var duration = 5000,
        startStandbySec = 500,
        endingStandbySec = 500,
        startSec = 1500,
        endingSec = 1500,
        delaySec = 1000;
    if (-1 !== $.inArray(effect, ['blind', 'clip', 'drop'])) {
        startSec = endingSec = 1000;
    }
    if ('none' === effect) {
        startStandbySec = endingStandbySec = startSec = endingSec = 0;
    }
    delaySec = (duration - startStandbySec - startSec - endingSec - endingStandbySec);
    cancelEffect(element);

    switch (effect) {
    case 'blind':
    case 'clip':
    case 'fold':
    case 'drop':
    case 'bounce':
    case 'explode':
    case 'highlight':
    case 'puff':
    case 'pulsate':
    case 'scale':
    case 'shake':
    case 'slide':
        element.show(startStandbySec).children('span').hide().show(effect, {}, startSec).delay(delaySec).hide(effect, {}, endingSec, function () {
            element.delay(endingStandbySec).show().children('span').show();
        });
        break;
    case 'fade':
        element.show(startStandbySec).children('span').hide().fadeIn(startSec).delay(delaySec).fadeOut(endingSec, function () {
            element.delay(endingStandbySec).show().children('span').show();
        });
        break;
    default:
        // none
        element.children('span').show(0).delay(duration).hide(0, function () {
            element.show().children('span').show();
        });
        break;
    }
}

function uploadImage(isDisableEdit) {
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
    var handlerSwfUploadLoaded = function () {
        if (isDisableEdit) {
            this.setButtonDisabled(true);
        } else {
            this.setButtonDisabled(false);
        }
    };
    var handlerFileDialogStart = function () {
        $('#btn-pause').trigger('click');
        $('.background-container .highlight').addClass('hide');
    };
    var handlerUploadProgress = function (file, completed /* completed bytes */, total /* total bytes */) {
        $('.background-container p.img .loading').show();
         swfu.setButtonText('<span class="uploadstyle">Uploading...</span>');
    };
    var handlerUploadSuccess = function (file, serverData, recievedResponse) {
        $('.background-container p.img .loading').hide();
        swfu.setButtonText('<span class="uploadstyle">Upload</span>');
        if (!file.type) {
            file.type = nn.getFileTypeByName(file.name);
        }
        this.setButtonDisabled(false); // enable upload button again
        var url = 'http://' + s3attr['bucket'] + '.s3.amazonaws.com/' + parameter['prefix'] + '-thumbnail-' + timestamp + '-' + file.size + file.type.toLowerCase();
        $('#thumbnail-backgroundImage').attr('src', url + '?n=' + Math.random());
        $('#backgroundImage').val(url);
        $('#titlecard-outer img').remove();
        $('#titlecard-outer').append('<img src="' + $('#thumbnail-backgroundImage').attr('src') + '" style="width: 100%; height: 100%; border: none;" />');
    };
    var handlerUploadError = function (file, code, message) {
        $('.background-container p.img .loading').hide();
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
            $('.background-container .highlight').removeClass('hide');
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
        swfupload_loaded_handler:   handlerSwfUploadLoaded,
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