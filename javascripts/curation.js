$(function () {
    function fake_update() {
        alert('fake update!');
    }
    var fake_programs = [{
        data: {
            id: 1,
            ytId: "qh5982Xa9yA",
            poiList: [],
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
            poiList: [],
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
            poiList: [],
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
            poiList: [],
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
            id: 98231,
            ytId: "4G60hM1W_mk",
            poiList: [{
                "id": 1,
                "targetId": 98231,
                "type": 5,
                "name": "1 TheVoice01-01 hello world test test",
                "startTime": 11,
                "endTime": 20,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 2,
                "targetId": 98231,
                "type": 5,
                "name": "2 TheVoice01-01 hello world test test",
                "startTime": 21,
                "endTime": 30,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 3,
                "targetId": 98231,
                "type": 5,
                "name": "3 TheVoice01-01 hello world test test",
                "startTime": 31,
                "endTime": 40,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 4,
                "targetId": 98231,
                "type": 5,
                "name": "4 TheVoice01-01 hello world test test",
                "startTime": 41,
                "endTime": 50,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 5,
                "targetId": 98231,
                "type": 5,
                "name": "5 TheVoice01-01 hello world test test",
                "startTime": 51,
                "endTime": 60,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 6,
                "targetId": 98231,
                "type": 5,
                "name": "6 TheVoice01-01 hello world test test",
                "startTime": 61,
                "endTime": 70,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 7,
                "targetId": 98231,
                "type": 5,
                "name": "7 TheVoice01-01 hello world test test",
                "startTime": 71,
                "endTime": 80,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 8,
                "targetId": 98231,
                "type": 5,
                "name": "8 TheVoice01-01 hello world test test",
                "startTime": 81,
                "endTime": 90,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 9,
                "targetId": 98231,
                "type": 5,
                "name": "9 TheVoice01-01 hello world test test",
                "startTime": 91,
                "endTime": 100,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 10,
                "targetId": 98231,
                "type": 5,
                "name": "10 TheVoice01-01 hello world test test",
                "startTime": 101,
                "endTime": 110,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 11,
                "targetId": 98231,
                "type": 5,
                "name": "11 TheVoice01-01 hello world test test",
                "startTime": 111,
                "endTime": 120,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 12,
                "targetId": 98231,
                "type": 5,
                "name": "12 TheVoice01-01 hello world test test",
                "startTime": 121,
                "endTime": 130,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 13,
                "targetId": 98231,
                "type": 5,
                "name": "13 TheVoice01-01 hello world test test",
                "startTime": 131,
                "endTime": 140,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 14,
                "targetId": 98231,
                "type": 5,
                "name": "14 TheVoice01-01 hello world test test",
                "startTime": 141,
                "endTime": 150,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 15,
                "targetId": 98231,
                "type": 5,
                "name": "15 TheVoice01-01 hello world test test",
                "startTime": 151,
                "endTime": 160,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 16,
                "targetId": 98231,
                "type": 5,
                "name": "16 TheVoice01-01 hello world test test",
                "startTime": 161,
                "endTime": 170,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 17,
                "targetId": 98231,
                "type": 5,
                "name": "17 TheVoice01-01 hello world test test",
                "startTime": 171,
                "endTime": 180,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 18,
                "targetId": 98231,
                "type": 5,
                "name": "18 TheVoice01-01 hello world test test",
                "startTime": 181,
                "endTime": 190,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 19,
                "targetId": 98231,
                "type": 5,
                "name": "19 TheVoice01-01 hello world test test",
                "startTime": 191,
                "endTime": 200,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            },
            {
                "id": 20,
                "targetId": 98231,
                "type": 5,
                "name": "20 TheVoice01-01 hello world test test",
                "startTime": 201,
                "endTime": 210,
                "tag": "test,hello",
                "message": "Hyper to related channel to watch more and more!!!",
                "button": "Watch now, go",
                "link": "http://www.9x9.tv/"
            }],
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
            duration: "312",
            startTime: "0",
            endTime: "312",
            name: "Hearing TestHearing TestHearing TestHearing TestHearing TestHearing TestHearing Test",
            intro: "Set your volume to regular settings, as if you were watching any YouTube movie. Watch Hearing Test and listen very carefully using headphones. The video displays audio frequencies that are being played. You can determine what you can or what you cannot hear. Typically, depending on age, audible frequencies will be between 20-30 Hertz on the low side of the audio spectrum, and 10-16 kiloHertz on the high side of the audio spectrum. There are individuals, however, who can can hear the whole spectrum between 16 Hz (Hertz) and 20 kHz (kiloHertz). Because of the encoding used during the audio preparation, tests above 18 kHz are not very reliable. Please make sure that you do not increase the volume just to see if you can hear anything! One more thing - Please Subscribe! Thank You.",
            uploadDate: "2007-06-03T06:51:06.000Z",
            uploader: "vatsekaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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
            poiList: [],
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
            poiList: [],
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
            poiList: [],
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
    scrollbar('#storyboard-wrap', '#storyboard-list', '#storyboard-slider');
    $('#epcurate-nav ul li.curation').click(function () {
        return false;
    });

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
            location.href = nextstep;
        }
    }
    $('body').keyup(function (e) {
        if (27 === e.which) { // Esc
            if ('block' === $('#poi-event-overlay').css('display')) {
                if ($('body').hasClass('has-poi-change')) {
                    showUnsavePoiMask(e);
                    return false;
                }
            }
            if ('block' === $('#unsave-poi-mask-prompt').css('display')) {
                $('body').addClass('from-poi-overlay-edit-mode');
                $('#unsave-poi-mask-prompt').hide();
                $('#poi-event-overlay').show();
            } else {
                $.unblockUI();
                $('#poi-event-overlay .wrap').html('');
            }
            $('#poi-list-page ol li').removeClass('deleting').removeData('deleteId');
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
    $('#epcurate-nav-back').click(function (e) {
        if ($('body').hasClass('has-poi-change')) {
            showUnsavePoiOverlay(e);
            return false;
        }
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
    function leaveEditMode() {
        $.unblockUI();
        var origin = $('body').data('origin');
        if (origin) {
            if (origin.target && origin.target.id && 'epcurate-nav-back' === origin.target.id) {
                $('body').removeClass('has-change');
            }
            $('body').removeData('origin');
            $(origin.target).trigger('click');
        }
    }
    $('#unsave-trimtime-prompt .btn-leave').click(function () {
        $('body').removeClass('has-trimtime-change');
        leaveEditMode();
        return false;
    });
    $('#unsave-titlecard-prompt .btn-leave').click(function () {
        $('body').removeClass('has-titlecard-change');
        leaveEditMode();
        return false;
    });
    // POI unsave prompt
    $('#unsave-poi-prompt .overlay-btn-yes').click(function () {
        $('body').removeClass('has-poi-change');
        leaveEditMode();
        return false;
    });
    $('#unsave-poi-prompt .overlay-btn-no, #unsave-poi-prompt .overlay-btn-close').click(function () {
        $.unblockUI();
        return false;
    });
    // POI overlay unsave prompt
    $('#unsave-poi-mask-prompt .overlay-btn-yes').click(function () {
        $('body').removeClass('has-poi-change');
        $.unblockUI();
        $('#unsave-poi-mask-prompt').hide();
        $('#poi-event-overlay .wrap').html('');
        $('#epcurate-curation ul.tabs li a.cur-poi').trigger('click');
        return false;
    });
    $('#unsave-poi-mask-prompt .overlay-btn-no, #unsave-poi-mask-prompt .overlay-btn-close').click(function () {
        $('body').addClass('from-poi-overlay-edit-mode');
        $('#unsave-poi-mask-prompt').hide();
        $('#poi-event-overlay').show();
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

    // main tabs - Common
    $('#epcurate-curation ul.tabs li a:not(.cur-edit-poi)').click(function (e) {
        if ($('body').hasClass('has-trimtime-change')) {
            showUnsaveTrimTimeOverlay(e);
            return false;
        }
        if ($('body').hasClass('has-poi-change')) {
            showUnsavePoiOverlay(e);
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
    // main tabs - Add Video
    $('#epcurate-curation ul.tabs li a.cur-add').click(function (e) {
        if ($('body').hasClass('has-trimtime-change')) {
            showUnsaveTrimTimeOverlay(e);
            return false;
        }
        if ($('body').hasClass('has-poi-change')) {
            showUnsavePoiOverlay(e);
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
        unblockPoiUI();
    });
    // main tabs - Edit Video
    $('#epcurate-curation ul.tabs li a.cur-edit').click(function (e) {
        if ($('body').hasClass('has-poi-change')) {
            showUnsavePoiOverlay(e);
            return false;
        }
        $('#epcurate-curation .tab-content').addClass('hide');
        $('#cur-edit').removeClass('hide');
        $('#epcurate-curation ul.tabs li.poi').addClass('last');
        $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
        $('#epcurate-curation ul.tabs li.edit-video').addClass('on');
        unblockPoiUI();
        if ($('#youTubePlayer').length <= 0 || $('html').hasClass('youtube-chromeless')) {
            loadYouTubeFlash($('#storyboard-listing li.playing').data('ytid'));
        }
    });
    // main tabs - POI list
    $('#epcurate-curation ul.tabs li a.cur-poi').click(function (e) {
        if ($('body').hasClass('has-trimtime-change')) {
            showUnsaveTrimTimeOverlay(e);
            return false;
        }
        if ($('body').hasClass('has-poi-change')) {
            showUnsavePoiOverlay(e);
            return false;
        }
        $('#epcurate-curation .tab-content').addClass('hide');
        $('#cur-poi').removeClass('hide');
        $('#epcurate-curation ul.tabs li.poi').addClass('last on');
        $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
        $('#epcurate-curation ul.tabs li.edit-video').removeClass('on');
        unblockPoiUI();
        if ($('#youTubePlayer').length <= 0 || $('html').hasClass('youtube-chromeless')) {
            loadYouTubeFlash($('#storyboard-listing li.playing').data('ytid'));
        }
        // NOTE: ON PURPOSE to truncate correctly after remove hide class
        $('.ellipsis').ellipsis();
    });
    $('#epcurate-curation ul.tabs li a.cur-edit-poi').click(function (e) {
        return false;
    });

    // Add Video
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
            privateVideoList = [],
            embedLimitedList = [];
        if ('' === videoUrl || nn._([CMS_CONF.PAGE_ID, 'add-video', 'Paste YouTube video URLs to add (separate with different lines)']) === videoUrl) {
            $('#videourl').get(0).focus();
            $('#cur-add .notice').text(nn._([CMS_CONF.PAGE_ID, 'add-video', 'Paste YouTube video URLs to add.'])).removeClass('hide').show();
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
                $('#cur-add .notice').text(nn._([CMS_CONF.PAGE_ID, 'add-video', 'You have reached the maximum amount of 50 videos.'])).removeClass('hide').show();
                return false;
            }
            $('body').addClass('has-change');
            showProcessingOverlay();
            var ytData = null,
                ytItem = {},
                ytList = [],
                committedCnt = 0,
                videoNumberBase = $('#storyboard-list li').length,
                isPrivateVideo = null,
                isZoneLimited = null,
                isMobileLimited = null,
                isEmbedLimited = null;
            $.each(matchList, function (idx, key) {
                nn.api('GET', 'http://gdata.youtube.com/feeds/api/videos/' + key + '?alt=jsonc&v=2&callback=?', null, function (youtubes) {
                    committedCnt += 1;
                    if (youtubes.data) {
                        ytData = youtubes.data;
                        isPrivateVideo = false;
                        isZoneLimited = (ytData.restrictions) ? true : false;
                        isMobileLimited = ((ytData.accessControl && ytData.accessControl.syndicate && 'denied' === ytData.accessControl.syndicate) || (ytData.status && ytData.status.reason && 'limitedSyndication' === ytData.status.reason)) ? true : false;
                        isEmbedLimited = (ytData.accessControl && ytData.accessControl.embed && 'denied' === ytData.accessControl.embed) ? true : false;
                    } else {
                        ytData = null;
                        isPrivateVideo = (youtubes.error && youtubes.error.code && 403 == youtubes.error.code) ? true : false;
                        isZoneLimited = null;
                        isMobileLimited = null;
                        isEmbedLimited = null;
                    }
                    if (true === isEmbedLimited) {
                        embedLimitedList.push(normalList[idx]);
                    }
                    if (ytData && false === isEmbedLimited) {
                        ytItem = {
                            poiList: [],
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
                            isPrivateVideo: isPrivateVideo,
                            isZoneLimited: isZoneLimited,
                            isMobileLimited: isMobileLimited,
                            isEmbedLimited: isEmbedLimited
                        };
                        ytList[idx] = ytItem;
                    } else {
                        if (youtubes.error) {
                            nn.log(youtubes.error, 'warning');
                            if (youtubes.error.code && 403 == youtubes.error.code) {
                                privateVideoList.push(normalList[idx]);
                            }
                        }
                        nn.log(normalList[idx], 'debug');
                        invalidList.push(normalList[idx]);
                        $('#videourl').val(invalidList.join('\n'));
                        if (true === isEmbedLimited && 0 === privateVideoList.length && invalidList.length === embedLimitedList.length) {
                            $('#cur-add .notice').html(nn._([CMS_CONF.PAGE_ID, 'add-video', 'Fail to add this video, please try another one.<br />[This video is not playable outside Youtube]'])).removeClass('hide').show();
                        } else if (true === isPrivateVideo && 0 === embedLimitedList.length && invalidList.length === privateVideoList.length) {
                            $('#cur-add .notice').html(nn._([CMS_CONF.PAGE_ID, 'add-video', 'Fail to add this video, please try another one.<br />[This is a private video]'])).removeClass('hide').show();
                        } else {
                            $('#cur-add .notice').text(nn._([CMS_CONF.PAGE_ID, 'add-video', 'Invalid URL, please try again!'])).removeClass('hide').show();
                        }
                    }
                    if (committedCnt === matchList.length) {
                        committedCnt = -1;   // reset to avoid collision
                        animateStoryboard(ytList.length);
                        $('#storyboard-listing-tmpl-item').tmpl(ytList).hide().appendTo('#storyboard-listing').fadeIn(2000);
                        sumStoryboardInfo();
                        rebuildVideoNumber(videoNumberBase);
                        $('.ellipsis').ellipsis();
                        $('#overlay-s').fadeOut();
                    }
                }, 'jsonp');
            });
        }
        $('#videourl').val('');
        if (invalidList.length > 0) {
            $('#videourl').val(invalidList.join('\n'));
            $('#cur-add .notice').text(nn._([CMS_CONF.PAGE_ID, 'add-video', 'Invalid URL, please try again.'])).removeClass('hide').show();
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
        if ($('#epcurate-curation > ul.tabs > li.poi').hasClass('hide')) {
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
            buildVideoInfoTmpl($('#storyboard-listing li.playing'));
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
        removePoiTab();
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
        removePoiTab();
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
                $('#storyboard-listing li.edit .title').append('<a href="#" class="begin-title edit">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">' + nn._([CMS_CONF.PAGE_ID, 'episode-storyboard', 'Edit Title']) + '</span></span></span></span></a>');
            } else {
                $('#storyboard-listing li.edit .title').append('<a href="#" class="end-title edit">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">' + nn._([CMS_CONF.PAGE_ID, 'episode-storyboard', 'Edit Title']) + '</span></span></span></span></a>');
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
        // implement Done == Save?
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
                $('#storyboard-listing li.edit .hover-func').append('<a href="#" class="begin-title">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">' + nn._([CMS_CONF.PAGE_ID, 'episode-storyboard', 'Add Title']) + '</span></span></span></span></a>');
            } else {
                if (itemData.endTitleCard.id && itemData.endTitleCard.id > 0) {
                    deleteId = itemData.endTitleCard.id;
                }
                itemData.endTitleCard = null;
                tmplItem.update();
                $('#storyboard-listing li.edit .hover-func').append('<a href="#" class="end-title">Edit<span class="tip"><span class="tip-left"><span class="tip-right"><span class="tip-middle">' + nn._([CMS_CONF.PAGE_ID, 'episode-storyboard', 'Add Title']) + '</span></span></span></span></a>');
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
                //nn.api('DELETE', CMS_CONF.API('/api/title_card/{titlecardId}', {titlecardId: deleteId}), null, function (data) {
                    $('#overlay-s').fadeOut(0);
                    alert('Delete title card!');
                //});
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

    // Delete POI
    $('#cur-poi').on('click', '#poi-list-page .btn-del', function () {
        $(this).parent().parent('li').addClass('deleting').data('deleteId', $(this).data('poiPointId'));
        showDeletePoiPromptOverlay('Are you sure you want to delete this POI with interactive event?');
        return false;
    });
    $('#del-poi-notice .btn-del').click(function () {
        $.unblockUI();
        var poiPointId = $('#poi-list-page ol li.deleting').data('deleteId'),
            tmplItem = $('#storyboard-listing li.playing').tmplItem(),
            tmplItemData = tmplItem.data,
            poiList = tmplItemData.poiList,
            poiTemp = [];
        if ($('#poi-list-page ol li.deleting').length > 0 && '' != poiPointId) {
            showSavingOverlay();
            if (poiPointId > 0 && !isNaN(poiPointId)) {
                //nn.api('DELETE', CMS_CONF.API('/api/poi_points/{poiPointId}', {poiPointId: poiPointId}), null, function (data) {
                    $('#overlay-s').fadeOut(0);
                //});
            } else {
                $('#overlay-s').fadeOut(0);
            }
            $.each(poiList, function (i, poiItem) {
                if (poiItem.id == poiPointId) {
                    // NOTE: Returning non-false is the same as a continue statement in a for loop
                    return true;
                }
                poiTemp.push(poiItem);
            });
            tmplItemData.poiList = poiTemp;
            buildPoiInfoTmpl($('#storyboard-listing li.playing'));
            $('#epcurate-curation ul.tabs li a.cur-poi').trigger('click');
        }
        return false;
    });
    $('#del-poi-notice .btn-close, #del-poi-notice .btn-no').click(function () {
        $.unblockUI();
        $('#poi-list-page ol li').removeClass('deleting').removeData('deleteId');
        return false;
    });

    // Enter POI tab from POI list (Add or Edit button)
    $('#cur-poi').on('click', '.btn-add-poi a, .poi-list a.edit', function () {
        $('body').addClass('from-poi-edit-mode enter-poi-edit-mode');
        loadYouTubeFlash($('#storyboard-listing li.playing').data('ytid'));
        $('#epcurate-curation .tab-content').addClass('hide');
        $('#cur-poi-edit').removeClass('hide edit');
        $('#epcurate-curation ul.tabs li.poi').removeClass('last on');
        $('#epcurate-curation ul.tabs li.edit-poi').removeClass('hide');
        $('#epcurate-curation ul.tabs li.edit-poi').addClass('on');
        $('#storyboard, #content-main-wrap .form-btn, #epcurate-nav ul li.publish').block({ message: null });
        $('#epcurate-nav ul li.publish').addClass('mask');
        $('#cur-poi-edit .edit-form').removeClass('hide');
        $('#cur-poi-edit .edit-form .notice').addClass('hide');
        return false;
    });
    // POI Add button
    $('#cur-poi').on('click', '.btn-add-poi a', function () {
        buildPoiPointEditTmpl();
        $('#cur-poi-edit').removeClass('edit');
        return false;
    });
    // POI Edit button
    $('#cur-poi').on('click', '.poi-list a.edit', function () {
        var poiPointId = $(this).data('poiPointId'),
            tmplItem = $('#storyboard-listing li.playing').tmplItem(),
            tmplItemData = tmplItem.data,
            poiList = tmplItemData.poiList;
        if ('' != poiPointId) {
            $.each(poiList, function (i, poiItem) {
                if (poiItem.id == poiPointId) {
                    buildPoiPointEditTmpl(poiItem);
                    // NOTE: return false here is break the $.each() loop
                    return false;
                }
            });
            // enter edit mode
            $('#cur-poi-edit').addClass('edit');
        }
        return false;
    });

    // POI click notice reset
    $('#cur-poi-edit').on('click', '.edit-form input, .btn-reset', function () {
        $('#cur-poi-edit .edit-form .notice').addClass('hide');
    });
    // POI overlay notice reset
    $('#poi-event-overlay').on('click', 'input[type=text], textarea', function () {
        $('#poi-event-overlay .event .event-input .fminput .notice').hide();
        $('#poi-event-overlay .event .func ul li.notice').hide();
    });
    // POI hook has change
    $('#cur-poi-edit').on('change', '.edit-form input', function () {
        $('body').addClass('has-poi-change');
    });
    // POI overlay hook has change
    $('#poi-event-overlay').on('change', 'input[type=text], textarea', function () {
        $('body').addClass('has-poi-change');
        $('body').addClass('has-change');
    });

    // POI duration blur
    $('#cur-poi-edit').on('blur', '#poi-edit input.time', function () {
        if ('' === $.trim($(this).val())) {
            $(this).val('00');
        }
        return false;
    });

    // Reset POI duration
    $('#cur-poi-edit').on('click', '.btn-reset', function () {
        $('body').addClass('has-poi-change');
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
    $('#cur-poi-edit').on('click', '.btn-cancel', function (e) {
        if ($('body').hasClass('has-poi-change')) {
            showUnsavePoiOverlay(e);
            return false;
        }
        $('#epcurate-curation ul.tabs li a.cur-poi').trigger('click');
        return false;
    });
    // POI overlay - cancel and close
    $('#poi-event-overlay').on('click', '.btn-cancel, .overlay-btn-close', function (e) {
        if ($('body').hasClass('has-poi-change')) {
            showUnsavePoiMask(e);
            return false;
        }
        $.unblockUI();
        $('#poi-event-overlay .wrap').html('');
        $('#epcurate-curation ul.tabs li a.cur-poi').trigger('click');
        return false;
    });

    // POI point Next
    $('#cur-poi-edit').on('click', '#poi-edit .btn-next', function () {
        if (chkPoiPointData(document.epcurateForm)) {
            var poiPointId = 0,
                poiEventId = 0,
                hasPointEventCache = false;
                tmplItem = $('#storyboard-listing li.playing').tmplItem(),
                tmplItemData = tmplItem.data,
                poiList = tmplItemData.poiList,
                poiTemp = [],
                poiPointEventData = {},
                poiEventContext = '',
                poiEventData = {},
                poiPointData = {
                    name: $('#poiName').val(),
                    startTime: $('#poiStartTime').val(),
                    endTime: $('#poiEndTime').val(),
                    tag: $('#poiTag').val()
                };
            if ($('#cur-poi-edit').hasClass('edit')) {
                // update mode
                poiPointId = $('#poi-point-edit-wrap').data('poiPointId');
                if ('' != poiPointId) {
                    showProcessingOverlay();
                    if (poiPointId > 0 && !isNaN(poiPointId)) {
                        // real API access phase
                        $.each(poiList, function (i, poiItem) {
                            if (poiItem.id == poiPointId) {
                                if (poiItem.eventId && !isNaN(poiItem.eventId)) {
                                    hasPointEventCache = true;
                                }
                                $.extend(poiItem, poiPointData);
                                poiPointEventData = poiItem;
                            }
                            poiTemp.push(poiItem);
                        });
                        if (hasPointEventCache) {
                            //nn.api('PUT', CMS_CONF.API('/api/poi_points/{poiPointId}', {poiPointId: poiPointId}), poiPointData, function (poi_point) {
                                $('#overlay-s').fadeOut(0, function () {
                                    tmplItemData.poiList = poiTemp;
                                    buildPoiInfoTmpl($('#storyboard-listing li.playing'));
                                    buildPoiEventOverlayTmpl(poiPointEventData);
                                });
                            //});
                        } else {
                            poiTemp = [];
                            poiPointEventData = {};
                            //nn.api('PUT', CMS_CONF.API('/api/poi_points/{poiPointId}', {poiPointId: poiPointId}), poiPointData, function (poi_point) {
                                //nn.api('GET', CMS_CONF.API('/api/poi_campaigns/{poiCampaignId}/pois', {poiCampaignId: CMS_CONF.CAMPAIGN_ID}), {poiPointId: poiPointId}, function (pois) {
                                    //if (pois && pois.length > 0 && pois[0] && pois[0].eventId && !isNaN(pois[0].eventId)) {
                                        //poiEventId = pois[0].eventId;
                                        //nn.api('GET', CMS_CONF.API('/api/poi_events/{poiEventId}', {poiEventId: poiEventId}), null, function (poi_event) {
                                            var poi_event = {
                                                "id": 1,
                                                "name": "1 TheVoice01-01 hello world test test hello world test test hello world test test 1234567890abcdefghijklmnopqrstuvwxyz",
                                                "type": 1,
                                                "context": "{\"message\": \"Hyper to related channel to watch more and more!!!\", \"button\": [{ \"text\": \"Watch now\", \"actionUrl\": \"http://www.9x9.tv/view?ch=8758\" }]}",
                                                "notifyMsg": "",
                                                "notifyScheduler": "",
                                            };
                                            poiEventContext = $.parseJSON(poi_event.context);
                                            poiEventData = {
                                                eventId: poi_event.id,
                                                eventType: poi_event.type,
                                                message: poiEventContext.message,
                                                button: poiEventContext.button[0].text,
                                                link: poiEventContext.button[0].actionUrl,
                                                notifyMsg: poi_event.notifyMsg,
                                                notifyScheduler: poi_event.notifyScheduler
                                            };
                                            $('#overlay-s').fadeOut(0, function () {
                                                $.each(poiList, function (i, poiItem) {
                                                    if (poiItem.id == poiPointId) {
                                                        $.extend(poiItem, poiPointData, poiEventData);
                                                        poiPointEventData = poiItem;
                                                    }
                                                    poiTemp.push(poiItem);
                                                });
                                                tmplItemData.poiList = poiTemp;
                                                buildPoiInfoTmpl($('#storyboard-listing li.playing'));
                                                buildPoiEventOverlayTmpl(poiPointEventData);
                                            });
                                        //});
                                    //} else {
                                    //    $('#overlay-s').fadeOut(0);
                                    //    nn.log('Can not fetch POI Event ID!', 'error');
                                    //}
                                //});
                            //});
                        }
                    } else {
                        // fake DOM access phase
                        $('#overlay-s').fadeOut(0, function () {
                            $.each(poiList, function (i, poiItem) {
                                if (poiItem.id == poiPointId) {
                                    $.extend(poiItem, poiPointData);
                                    poiPointEventData = poiItem;
                                }
                                poiTemp.push(poiItem);
                            });
                            tmplItemData.poiList = poiTemp;
                            buildPoiInfoTmpl($('#storyboard-listing li.playing'));
                            buildPoiEventOverlayTmpl(poiPointEventData);
                        });
                    }
                } else {
                    nn.log('Can not fetch POI Point ID!', 'error');
                }
            } else {
                // insert mode
                buildPoiEventOverlayTmpl(poiPointData);
            }
        }
        return false;
    });

   // POI overlay - crumb switch
    $('#poi-event-overlay').on('click', '.event .crumb a', function () {
        // POI overlay notice reset
        $('#poi-event-overlay .event .event-input .fminput .notice').hide();
        $('#poi-event-overlay .event .func ul li.notice').hide();
    });
    // POI overlay - first crumb (close POI overlay)
    $('#poi-event-overlay').on('click', '.unblock', function (e) {
        if ($('#cur-poi-edit').hasClass('edit')) {
            // edit mode back must check and if pass then unblock poi overlay
            var poiEventTypeKey = $('#poi-event-overlay-wrap').data('poiEventTypeKey'),
                formId = CMS_CONF.POI_TYPE_MAP[poiEventTypeKey].formId;
            chkPoiEventData(document.forms[formId], function (result) {
                if (!result) {
                    e.stopImmediatePropagation();
                    return false;
                } else {
                    $.unblockUI();
                    return false;
                }
            });
            return false;
        } else {
            // insert mode back no check and unblock poi overlay
            $.unblockUI();
            return false;
        }
    });
    // POI overlay - crumb into event type
    $('#poi-event-overlay').on('click', '.event .crumb a.crumb-event', function () {
        // insert mode back no check and go to event-select (event type)
        var blockClass = $(this).attr('class'),
            block = blockClass.split(' ');
        $('#poi-event-overlay .event, #schedule-mobile, #instant-mobile').addClass('hide');
        $('#' + block[1] + ', #schedule-notify, #instant-notify').removeClass('hide');
        return false;
    });
    // POI overlay - crumb into preivew video and POI plugin
    $('#poi-event-overlay').on('click', '#schedule-mobile .crumb .crumb-mobile', function (e) {
        if ($('#cur-poi-edit').hasClass('edit')) {
            // edit mode back must check and if pass then go to preivew video and POI plugin
            chkPoiEventData(document.eventScheduledForm, function (result) {
                if (!result) {
                    e.stopImmediatePropagation();
                    return false;
                } else {
                    $('body').addClass('from-poi-overlay-edit-mode');
                    $('#event-scheduled .schedule').addClass('hide');
                    $('#schedule-notify').removeClass('hide');
                    return false;
                }
            });
            return false;
        } else {
            // insert mode back no check and go to preivew video and POI plugin
            $('body').addClass('from-poi-overlay-edit-mode');
            $('#event-scheduled .schedule').addClass('hide');
            $('#schedule-notify').removeClass('hide');
            return false;
        }
    });
    $('#poi-event-overlay').on('click', '#instant-mobile .crumb .crumb-mobile', function (e) {
        if ($('#cur-poi-edit').hasClass('edit')) {
            // edit mode back must check and if pass then go to preivew video and POI plugin
            chkPoiEventData(document.eventInstantForm, function (result) {
                if (!result) {
                    e.stopImmediatePropagation();
                    return false;
                } else {
                    $('body').addClass('from-poi-overlay-edit-mode');
                    $('#event-instant .instant').addClass('hide');
                    $('#instant-notify').removeClass('hide');
                    return false;
                }
            });
            return false;
        } else {
            // insert mode back no check and go to preivew video and POI plugin
            $('body').addClass('from-poi-overlay-edit-mode');
            $('#event-instant .instant').addClass('hide');
            $('#instant-notify').removeClass('hide');
            return false;
        }
    });

    // POI overlay - Choose a type
    $('#poi-event-overlay').on('click', '#event-select ul.list li', function () {
        $('body').addClass('has-poi-change');
        $('body').addClass('has-change');
        var type = $(this).attr('class');
        $('#poi-event-overlay .event').addClass('hide');
        $('#' + type).removeClass('hide');
        playPoiEventAndVideo(type);
    });

    // POI overlay - POI plugin realtime edit preview
    $('#poi-event-overlay').on('change keyup keydown', 'input[name=displayText]', function () {
        var val = strip_tags($(this).val().replace(/\n/g, ''));
        $('#poi-event-overlay .event .video-wrap .poi-display').poi('displayText', val);
    });
    $('#poi-event-overlay').on('change keyup keydown', 'input[name=btnText]', function () {
        var val = strip_tags($(this).val().replace(/\n/g, ''));
        $('#poi-event-overlay .event .video-wrap .poi-display').poi('buttonText', val);
    });
    $('#poi-event-overlay').on('blur', 'input[name=displayText]', function () {
        var val = strip_tags($(this).val().replace(/\n/g, ''));
        $(this).val(val);
    });
    $('#poi-event-overlay').on('blur', 'input[name=btnText]', function () {
        var val = strip_tags($(this).val().replace(/\n/g, ''));
        $(this).val(val);
    });

    // POI overlay - Scheduled Preview Video and POI Plugin Next
    $('#poi-event-overlay').on('click', '#schedule-notify .btn-next, #schedule-notify .crumb.edit .crumb-next', function () {
        chkPoiEventData(document.eventScheduledForm, function (result) {
            if (result) {
                // parse multi schedule timestamp (ready for next step)
                if ('' !== $.trim($('#timestamp_selected').val())) {
                    var stampList = [],
                        formatTemp = '',
                        dateTimeList = [],
                        dateList = [];
                    stampList = $('#timestamp_selected').val().split(',');
                    $.each(stampList, function (i, stampItem) {
                        formatTemp = formatTimestamp((stampItem - 0), '/', ':');
                        dateTimeList.push(formatTemp);
                        formatTemp = formatTemp.split(' ');
                        dateList.push(formatTemp[0]);
                    });
                    if (formatTemp.length > 0 && formatTemp[1]) {
                        formatTemp = formatTemp[1].split(':');
                        if (formatTemp[0]) {
                            $('#time_hour').text(formatTemp[0]);
                        }
                        if (formatTemp[1]) {
                            $('#time_min').text(formatTemp[1]);
                        }
                    }
                    $('#datepicker_selected').val(dateList.join(','));
                    $('#schedule_selected').val(dateTimeList.join(','));
                    $('#poi-event-overlay .datepicker').datepick('setDate', dateList);
                } else {
                    // default schedule datetime
                    var today = new Date(),
                        tomorrow = new Date((new Date()).getTime() + (24 * 60 * 60 * 1000)),
                        hour = 19,
                        min = '00',
                        selected = (today.getHours() > hour) ? tomorrow : today,
                        selectedDate = selected.getFullYear() + '/' + (selected.getMonth() + 1) + '/' + selected.getDate(),
                        selectedTime = hour + ':' + min + ':00',
                        selectedDateTime = selectedDate + ' ' + selectedTime;
                    $('#time_hour').text(hour);
                    $('#time_min').text(min);
                    $('#datepicker_selected').val(selectedDate);
                    $('#schedule_selected').val(selectedDateTime);
                    $('#timestamp_selected').val(Date.parse(selectedDateTime));
                    $('#poi-event-overlay .datepicker').datepick('setDate', selectedDate);
                }
                $('#event-scheduled .schedule').addClass('hide');
                $('#schedule-mobile').removeClass('hide');
                // prevent layout broken
                $('#schedule-mobile .mobile-edit .mobile ul li:first-child').attr('class', 'ios on');
                $('#schedule-mobile .mobile-edit .mobile ul li:last-child').attr('class', 'android');
                $('#schedule-ios').attr('class', 'mobile-block mobile-active');
                $('#schedule-android').attr('class', 'mobile-block hide');
            }
        });
        return false;
    });
    // POI overlay - Instant Preview Video and POI Plugin Next
    $('#poi-event-overlay').on('click', '#instant-notify .btn-next, #instant-notify .crumb.edit .crumb-next', function () {
        chkPoiEventData(document.eventInstantForm, function (result) {
            if (result) {
                $('#event-instant .instant').addClass('hide');
                $('#instant-mobile').removeClass('hide');
                // prevent layout broken
                $('#instant-mobile .mobile-edit .mobile ul li:first-child').attr('class', 'ios on');
                $('#instant-mobile .mobile-edit .mobile ul li:last-child').attr('class', 'android');
                $('#instant-ios').attr('class', 'mobile-block mobile-active');
                $('#instant-android').attr('class', 'mobile-block hide');
            }
        });
        return false;
    });

    // POI overlay - Mobile iOS and Android preview switch
    $('#poi-event-overlay').on('click', '#schedule-mobile .mobile-edit ul li a', function () {
        var block = $(this).attr('class');
        $('#schedule-mobile ul li').removeClass('on');
        $(this).parents('li').addClass('on');
        $('#schedule-mobile .mobile .mobile-block').addClass('hide').removeClass('mobile-active');
        $('#schedule-' + block).removeClass('hide').addClass('mobile-active');
        return false;
    });
    $('#poi-event-overlay').on('click', '#instant-mobile .mobile-edit ul li a', function () {
        var block = $(this).attr('class');
        $('#instant-mobile ul li').removeClass('on');
        $(this).parents('li').addClass('on');
        $('#instant-mobile .mobile .mobile-block').addClass('hide').removeClass('mobile-active');
        $('#instant-' + block).removeClass('hide').addClass('mobile-active');
        return false;
    });
    $('#poi-event-overlay').on('click', '.mobile-block .button a', function () {
        return false;
    });

    // POI overlay - Mobile notification message realtime edit preview
    $('#poi-event-overlay').on('change keyup keydown', '#schedule_msg', function () {
        var val = strip_tags($(this).val().replace(/\n/g, ''));
        $(this).val(val);
        $('#schedule-mobile .mobile-block p.msg').text(val);
    });
    $('#poi-event-overlay').on('change keyup keydown', '#instant_msg', function () {
        var val = strip_tags($(this).val().replace(/\n/g, ''));
        $(this).val(val);
        $('#instant-mobile .mobile-block p.msg').text(val);
    });

    // POI overlay - Scheduled Hour and Minute
    $('#poi-event-overlay').on('click', '.time .select .select-txt, .time .select .select-btn', function () {
        $('#poi-event-overlay .event .func ul li.notice').hide();
        $('#poi-event-overlay .select-list').hide();
        $(this).parent().children('.select-btn').toggleClass('on');
        if ($(this).parent().children('.select-btn').hasClass('on')) {
            $(this).parent().children('.select-list').slideDown();
        } else {
            $(this).parent().children('.select-list').hide();
        }
        return false;
    });
    $('#poi-event-overlay').on('click', '.select-list p', function () {
        $('body').addClass('has-poi-change');
        $('body').addClass('has-change');
        var selectOption = $(this).text();
        $(this).parent().parent().parent().children('.select-btn').removeClass('on');
        $(this).parent().parent().parent().children('.select-txt').children().text(selectOption);
        $(this).parents('.select-list').hide();
        // rebuild multi schedule timestamp
        if ('' !== $.trim($('#datepicker_selected').val())) {
            var selectedList = [],
                scheduleDate = '',
                scheduleList = [],
                timestampList = [];
            selectedList = $('#datepicker_selected').val().split(',');
            $.each(selectedList, function (i, selectedItem) {
                scheduleDate = selectedItem + ' ' + $('#time_hour').text() + ':' + $('#time_min').text() + ':00'
                scheduleList.push(scheduleDate);
                timestampList.push(Date.parse(scheduleDate));
            });
            $('#schedule_selected').val(scheduleList.join(','));
            $('#timestamp_selected').val(timestampList.join(','));
        }
        return false;
    });

    // Save POI event
    $('#poi-event-overlay').on('click', '#poi-event-overlay-wrap .btn-save', function () {
        var poiEventTypeKey = $('#poi-event-overlay-wrap').data('poiEventTypeKey'),
            formId = CMS_CONF.POI_TYPE_MAP[poiEventTypeKey].formId,
            fm = document.forms[formId];
        chkPoiEventData(fm, function (result) {
            if (result) {
                var displayText = $.trim(fm.displayText.value),
                    btnText = $.trim(fm.btnText.value),
                    channelUrl = $.trim(fm.channelUrl.value),
                    notifyMsg = $.trim(fm.notifyMsg.value),
                    notifyScheduler = $.trim(fm.notifyScheduler.value),
                    programId = $('#poi-event-overlay-wrap').data('programId'),
                    poiPointId = $('#poi-event-overlay-wrap').data('poiPointId'),
                    poiEventId = $('#poi-event-overlay-wrap').data('poiEventId'),
                    poiEventType = $('#poi-event-overlay-wrap').data('poiEventType'),
                    tmplItem = $('#storyboard-listing li.playing').tmplItem(),
                    tmplItemData = tmplItem.data,
                    poiList = tmplItemData.poiList,
                    poiTemp = [],
                    hasPush = false,
                    poiData = {},
                    poiPointData = {
                        eventType: poiEventType,        // ready for fake api to change new point id
                        name: $('#poiName').val(),
                        startTime: $('#poiStartTime').val(),
                        endTime: $('#poiEndTime').val(),
                        tag: $('#poiTag').val()
                    },
                    poiEventContext = {
                        "message": displayText,
                        "button": [{
                            "text": btnText,
                            "actionUrl": channelUrl
                        }]
                    },
                    poiEventData = {
                        pointType: 5,                   // ready for fake api to change new event id
                        name: $('#poiName').val(),
                        type: poiEventType,
                        context: JSON.stringify(poiEventContext),
                        notifyMsg: notifyMsg,
                        notifyScheduler: notifyScheduler
                    },
                    poiEventDataExtend = {
                        eventId: poiEventId,
                        eventType: poiEventType,
                        message: displayText,
                        button: btnText,
                        link: channelUrl,
                        notifyMsg: notifyMsg,
                        notifyScheduler: notifyScheduler
                    };
                if ($('#cur-poi-edit').hasClass('edit') && '' != poiPointId) {
                    // update mode
                    showSavingOverlay();
                    if (poiPointId > 0 && !isNaN(poiPointId)) {
                        //nn.api('PUT', CMS_CONF.API('/api/poi_events/{poiEventId}', {poiEventId: poiEventId}), poiEventData, function (poi_event) {
                            $('#overlay-s').fadeOut(0);
                        //});
                    } else {
                        $('#overlay-s').fadeOut(0);
                    }
                    $.each(poiList, function (i, poiItem) {
                        if (poiItem.id == poiPointId) {
                            $.extend(poiItem, poiPointData, poiEventDataExtend);
                        }
                        poiTemp.push(poiItem);
                    });
                    tmplItemData.poiList = poiTemp;
                    buildPoiInfoTmpl($('#storyboard-listing li.playing'));
                    $('body').removeClass('has-poi-change');
                    $('#poi-event-overlay .wrap').html('');
                    $('#epcurate-curation ul.tabs li a.cur-poi').trigger('click');
                } else {
                    // insert mode
                    showSavingOverlay();
                    if (programId > 0 && !isNaN(programId)) {
                        //nn.api('POST', CMS_CONF.API('/api/programs/{programId}/poi_points', {programId: programId}), poiPointData, function (poi_point) {
                            //nn.api('POST', CMS_CONF.API('/api/users/{userId}/poi_events', {userId: CMS_CONF.USER_DATA.id}), poiEventData, function (poi_event) {
                                //poiData = {
                                //    pointId: poi_point.id,
                                //    eventId: poi_event.id
                                //};
                                //nn.api('POST', CMS_CONF.API('/api/poi_campaigns/{poiCampaignId}/pois', {poiCampaignId: CMS_CONF.CAMPAIGN_ID}), poiData, function (poi) {
                                    //if (-1 !== $.inArray(CMS_CONF.POI_TYPE_MAP[poi_event.type], ['event-scheduled', 'event-instant'])) {
                                    //    poiEventContext.button[0].actionUrl = CMS_CONF.POI_ACTION_URL + poi.id;
                                    //    poiEventData.context = JSON.stringify(poiEventContext);
                                    //    poiEventDataExtend.link = CMS_CONF.POI_ACTION_URL + poi.id;
                                    //}
                                    //nn.api('PUT', CMS_CONF.API('/api/poi_events/{poiEventId}', {poiEventId: poi_event.id}), poiEventData, function (poi_event) {
                                        // update id
                                        poiPointData.id = 999999;
                                        poiPointData.targetId = 98231;
                                        poiPointData.type = 5;
                                        poiEventDataExtend.eventId = 999999;
                                        poiPointData = $.extend(poiPointData, poiEventDataExtend);
                                        $.each(poiList, function (i, poiItem) {
                                            if (!hasPush && parseInt(poiItem.startTime, 10) > parseInt(poiPointData.startTime, 10)) {
                                                poiTemp.push(poiPointData);
                                                hasPush = true;
                                            }
                                            poiTemp.push(poiItem);
                                        });
                                        if (!hasPush) {
                                            poiTemp.push(poiPointData);
                                        }
                                        tmplItemData.poiList = poiTemp;
                                        buildPoiInfoTmpl($('#storyboard-listing li.playing'));
                                        $('body').removeClass('has-poi-change');
                                        $('#poi-event-overlay .wrap').html('');
                                        $('#epcurate-curation ul.tabs li a.cur-poi').trigger('click');
                                        $('#overlay-s').fadeOut(0);
                                    //});
                                //});
                            //});
                        //});
                    } else {
                        // build timestamp id
                        poiPointData.id = 'temp-poi-point-id-' + $.now();
                        poiEventDataExtend.eventId = 'temp-poi-event-id-' + $.now();
                        poiPointData = $.extend(poiPointData, poiEventDataExtend);
                        $.each(poiList, function (i, poiItem) {
                            if (!hasPush && parseInt(poiItem.startTime, 10) > parseInt(poiPointData.startTime, 10)) {
                                poiTemp.push(poiPointData);
                                hasPush = true;
                            }
                            poiTemp.push(poiItem);
                        });
                        if (!hasPush) {
                            poiTemp.push(poiPointData);
                        }
                        tmplItemData.poiList = poiTemp;
                        buildPoiInfoTmpl($('#storyboard-listing li.playing'));
                        $('body').removeClass('has-poi-change');
                        $('#poi-event-overlay .wrap').html('');
                        $('#epcurate-curation ul.tabs li a.cur-poi').trigger('click');
                        $('#overlay-s').fadeOut(0);
                    }
                }
            }
        });
        return false;
    });

    // Save
    $('#epcurateForm').submit(function (e, src) {
        // Episode Curation - Curation
        if ($(e.target).hasClass('curation') && chkCurationData(this, src)) {
            showSavingOverlay();
            $('#overlay-s').fadeOut('fast', function () {
                // redirect
                videoDeleteIdList = []; // clear video delete id list
                removeTotalChangeHook();
                rebuildVideoNumber();
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

    $(window).resize(function () {
        setVideoMeasure();
        setSpace();
        if ($('#poi-list-page').length > 0 && $('#storyboard-list li.playing').length > 0) {
            buildPoiInfoTmpl($('#storyboard-list li.playing'));
        }
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

function chkPoiPointData(fm) {
    fm.poiName.value = $.trim(fm.poiName.value);
    fm.poiTag.value = $.trim(fm.poiTag.value);
    var poiList = $('#storyboard-list li.playing').tmplItem().data.poiList,
        poiPointId = $('#poi-point-edit-wrap').data('poiPointId'),
        duration = $('.set-time').data('originDuration'),
        videoStart = $('#storyboard-listing li.playing').data('starttime'),
        videoEnd = $('#storyboard-listing li.playing').data('endtime'),
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
        fm.poiName.focus();
        return false;
    }
    if ('' === $.trim($('input[name=poiStartH]').val())
            || '' === $.trim($('input[name=poiStartM]').val())
            || '' === $.trim($('input[name=poiStartS]').val())
            || '' === $.trim($('input[name=poiEndH]').val())
            || '' === $.trim($('input[name=poiEndM]').val())
            || '' === $.trim($('input[name=poiEndS]').val())) {
        $('#poi-edit .invalid-notice').removeClass('hide');
        return false;
    }
    if (isNaN($('input[name=poiStartH]').val())
            || isNaN($('input[name=poiStartM]').val())
            || isNaN($('input[name=poiStartS]').val())
            || isNaN($('input[name=poiEndH]').val())
            || isNaN($('input[name=poiEndM]').val())
            || isNaN($('input[name=poiEndS]').val())) {
        $('#poi-edit .invalid-notice').removeClass('hide');
        return false;
    }
    if (startH > 356400 || startH < 0) {
        $('#poi-edit .invalid-notice').removeClass('hide');
        $('input[name=poiStartH]').focus();
        return false;
    }
    if (startM >= 3600 || startM < 0) {
        $('#poi-edit .invalid-notice').removeClass('hide');
        $('input[name=poiStartM]').focus();
        return false;
    }
    if (startS >= 60 || startS < 0) {
        $('#poi-edit .invalid-notice').removeClass('hide');
        $('input[name=poiStartS]').focus();
        return false;
    }
    if (endH > 356400 || endH < 0) {
        $('#poi-edit .invalid-notice').removeClass('hide');
        $('input[name=poiEndH]').focus();
        return false;
    }
    if (endM >= 3600 || endM < 0) {
        $('#poi-edit .invalid-notice').removeClass('hide');
        $('input[name=poiEndM]').focus();
        return false;
    }
    if (endS >= 60 || endS < 0) {
        $('#poi-edit .invalid-notice').removeClass('hide');
        $('input[name=poiEndS]').focus();
        return false;
    }
    if (startTime >= endTime || startTime >= duration || endTime > duration || endTime <= 0) {
        $('#poi-edit .invalid-notice').removeClass('hide');
        return false;
    }
    if (startTime < videoStart || startTime > videoEnd || endTime > videoEnd || endTime < videoStart) {
        $('#poi-edit .playback-notice').removeClass('hide');
        return false;
    }
    $.each(poiList, function (i, poiItem) {
        if ($('#cur-poi-edit').hasClass('edit') && poiItem.id == poiPointId) {
            // NOTE: Returning non-false is the same as a continue statement in a for loop
            return true;
        }
        if (!(startTime > poiItem.endTime || poiItem.startTime > endTime)) {
            $('#poi-edit .overlap-notice #poi-name').text(poiItem.name);
            $('#poi-edit .overlap-notice .time').text('(' + formatDuration(poiItem.startTime, true) + ' to ' + formatDuration(poiItem.endTime, true) + ')');
            $('#poi-edit .overlap-notice').removeClass('hide');
            // NOTE: return false here is break the $.each() loop, not form return
            return false;
        }
    });
    if (!$('#poi-edit .overlap-notice').hasClass('hide')) {
        return false;
    }
    $('#poiStartTime').val(startTime);
    $('#poiEndTime').val(endTime);
    $('#poi-point-edit-wrap').data('starttime', startTime);
    if ('undefined' !== typeof youTubePlayerObj
            && 'object' === $.type(youTubePlayerObj)
            && 'function' === $.type(youTubePlayerObj.loadVideoById)) {
        youTubePlayerObj.seekTo(startTime, true);
        youTubePlayerObj.pauseVideo();
    }
    // notice reset
    $('#cur-poi-edit .edit-form .notice').addClass('hide');
    return true;
}

function chkPoiEventData(fm, callback) {
    var poiEventTypeKey = $('#poi-event-overlay-wrap').data('poiEventTypeKey');
    fm.displayText.value = $.trim(fm.displayText.value);
    fm.btnText.value = $.trim(fm.btnText.value);
    fm.channelUrl.value = $.trim(fm.channelUrl.value);
    fm.notifyMsg.value = $.trim(fm.notifyMsg.value);
    fm.notifyScheduler.value = $.trim(fm.notifyScheduler.value);
    if ('' === fm.displayText.value || '' === fm.btnText.value) {
        $('#poi-event-overlay .event .func ul li.notice').show();
        callback(false);
        return false;
    }
    if (-1 !== $.inArray(poiEventTypeKey, ['event-scheduled', 'event-instant'])) {
        if (!$('#schedule-mobile').hasClass('hide') || !$('#instant-mobile').hasClass('hide')) {
            if ('' === fm.notifyMsg.value) {
                $('#poi-event-overlay .event .func ul li.notice').show();
                callback(false);
                return false;
            }
            if ('event-scheduled' === poiEventTypeKey && '' === fm.notifyScheduler.value) {
                $('#poi-event-overlay .event .func ul li.notice').show();
                callback(false);
                return false;
            }
        }
        // notice and url reset
        $('#poi-event-overlay .event .func ul li.notice').hide();
        callback(true);
        return true;
    } else {
        if ('' === fm.channelUrl.value) {
            $('#poi-event-overlay .event .func ul li.notice').show();
            callback(false);
            return false;
        }
        if (nn._([CMS_CONF.PAGE_ID, 'poi-event', 'Input 9x9 channel or episode URL']) === fm.channelUrl.value) {
            $('#poi-event-overlay .event .event-input .fminput .notice').show();
            callback(false);
            return false;
        }
        var url = $.url(fm.channelUrl.value),
            hash = '',
            param = '',
            cid = '',
            eid = '',
            normalUrl = 'http://www.9x9.tv/view?';
            pathAllow = ['/', '/view', '/playback'],
            hostAllow = [
                'www.9x9.tv',
                'beagle.9x9.tv',
                'v3alpha.9x9.tv',
                'dev.teltel.com',
                'demo.doubleservice.com',
                'localhost'
            ];
        if (CMS_CONF.USER_URL && -1 === $.inArray(CMS_CONF.USER_URL.attr('host'), hostAllow)) {
            hostAllow.push(CMS_CONF.USER_URL.attr('host'));
        }
        if (-1 === $.inArray(url.attr('host'), hostAllow)) {
            $('#poi-event-overlay .event .event-input .fminput .notice').show();
            callback(false);
            return false;
        }
        if (-1 === $.inArray(url.attr('path'), pathAllow)) {
            $('#poi-event-overlay .event .event-input .fminput .notice').show();
            callback(false);
            return false;
        }
        if ('/' == url.attr('path') && '' == url.attr('fragment')) {
            $('#poi-event-overlay .event .event-input .fminput .notice').show();
            callback(false);
            return false;
        }
        if ('/view' == url.attr('path') && '' == url.attr('query')) {
            $('#poi-event-overlay .event .event-input .fminput .notice').show();
            callback(false);
            return false;
        }
        if ('/playback' == url.attr('path') && '' == url.attr('query')) {
            $('#poi-event-overlay .event .event-input .fminput .notice').show();
            callback(false);
            return false;
        }
        if ('' != url.attr('fragment')) {
            hash = url.attr('fragment').substr(1).replace(/\!/g, '&');
            if (isNaN(hash)) {
                url = $.url('http://fake.url.dev.teltel.com/?' + hash);
            } else {
                cid = hash;
            }
        }
        if ('' != url.attr('query')) {
            param = url.param();
            if ((param.ch && '' != param.ch) || (param.channel && '' != param.channel)) {
                cid = (param.ch && '' != param.ch) ? param.ch : param.channel;
            }
            if ((param.ep && '' != param.ep) || (param.episode && '' != param.episode)) {
                eid = (param.ep && '' != param.ep) ? param.ep : param.episode;
                if (11 != eid.length) {
                    eid = eid.substr(1);
                }
            }
        }
        if ('' == cid) {
            $('#poi-event-overlay .event .event-input .fminput .notice').show();
            callback(false);
            return false;
        }
        nn.on([400, 401, 403, 404], function (jqXHR, textStatus) {
            nn.log(textStatus + ': ' + jqXHR.responseText, 'warning');
            $('#poi-event-overlay .event .event-input .fminput .notice').show();
            callback(false);
            return false;
        });
        // fake check just for ui coding sample
        if ('' == eid || 11 == eid.length) {
            if (11 == eid.length) {
                nn.api('GET', 'http://gdata.youtube.com/feeds/api/videos/' + eid + '?alt=jsonc&v=2&callback=?', null, function (youtubes) {
                    if (youtubes.data) {
                        // notice and url reset
                        $('#poi-event-overlay .event .func ul li.notice').hide();
                        normalUrl = normalUrl + 'ch=' + cid + '&ep=' + eid;
                        fm.channelUrl.value = normalUrl;
                        callback(true);
                        return true;
                    } else {
                        $('#poi-event-overlay .event .event-input .fminput .notice').show();
                        callback(false);
                        return false;
                    }
                }, 'jsonp');
            } else {
                // notice and url reset
                $('#poi-event-overlay .event .func ul li.notice').hide();
                normalUrl = normalUrl + 'ch=' + cid;
                fm.channelUrl.value = normalUrl;
                callback(true);
                return true;
            }
        } else {
            $('#poi-event-overlay .event .event-input .fminput .notice').show();
            callback(false);
            return false;
        }
    }
}

function setVideoMeasure() {
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        epcurateNavHeight = 46,
        epcurateTabsHeight = 38,
        videoControlHeight = 44,
        storyboardHeight = 171,                             // exclude auto-height
        btnsHeight = 48,
        extraHeightMin = 18 * 4,
        videoWidthMin = 400,
        videoHeightMin = 269,                               // 225(400/16*9) + 44(videoControlHeight)
        remainHeight = windowHeight - epcurateNavHeight - epcurateTabsHeight - videoControlHeight - storyboardHeight - btnsHeight - extraHeightMin,
        remainBase = parseInt(remainHeight / 9),
        remainBaseWidth = remainBase * 16,
        remainBaseHeight = remainBase * 9,
        videoBase = parseInt((windowWidth - 616) / 16),     // 616: 1016-400 min window width - min video width
        videoBaseWidth = videoBase * 16,
        videoBaseHeight = videoBase * 9;
    if (windowWidth < 1016) {
        $('#epcurate-curation #video-player .video').height(videoHeightMin);
        $('#epcurate-curation #video-player .video').width(videoWidthMin);
        $('#epcurate-curation ul.tabs').css('padding-left', videoWidthMin + 'px');
    }
    if (windowWidth >= 1016) {
        if (remainHeight < videoHeightMin) {
            $('#epcurate-curation #video-player .video').height(videoHeightMin);
            $('#epcurate-curation #video-player .video').width(videoWidthMin);
            $('#epcurate-curation ul.tabs').css('padding-left', videoWidthMin + 'px');
        } else {
            if (remainHeight < videoBaseHeight) {
                $('#epcurate-curation #video-player .video').height(remainBaseHeight + videoControlHeight);
                $('#epcurate-curation #video-player .video').width(remainBaseWidth);
                $('#epcurate-curation ul.tabs').css('padding-left', remainBaseWidth + 'px');
            } else {
                $('#epcurate-curation #video-player .video').height(videoBaseHeight + videoControlHeight);
                $('#epcurate-curation #video-player .video').width(videoBaseWidth);
                $('#epcurate-curation ul.tabs').css('padding-left', videoBaseWidth + 'px');
            }
        }
    }
    $('#video-player').data('width', $('#video-player .video').width());
    $('#video-player').data('height', $('#video-player .video').height());
    $('#epcurate-curation .tab-content').height($('#video-player').data('height'));
}

function setSpace() {
    var windowHeight = $(window).height(),
        epcurateNavHeight = 46,
        epcurateTabsHeight = 38,
        videoHeight = $('#epcurate-curation #video-player .video').height(),
        videoHeightMin = 269,
        videoControlHeight = 44,
        storyboardHeight = 171,
        btnsHeight = 48,
        extraHeight = windowHeight - epcurateNavHeight - epcurateTabsHeight - videoHeight - storyboardHeight - btnsHeight,
        extraHeightSrc = extraHeight,
        extraHeightMin = 18 * 4,
        contentWrapHeight = epcurateTabsHeight + videoHeight + storyboardHeight + btnsHeight,
        contentWrapHeightMin = epcurateTabsHeight + videoHeightMin + storyboardHeight + btnsHeight + extraHeightMin,
        titlecardHeight = videoHeight - videoControlHeight,
        windowWidth = $(window).width(),
        videoWidth = $('#epcurate-curation #video-player .video').width(),
        curAddWidth = $('#epcurate-curation #cur-add').width(),
        curEditWidth = $('#epcurate-curation #cur-edit').width(),
        episodeInfoWidth = $('#storyboard .storyboard-info .episode-storyboard').width(),
        channelTitleWidth = $('#storyboard .storyboard-info .channel-name .title').width(),
        episodeTitleWidth = $('#storyboard .storyboard-info .episode-name .title').width();
    if (extraHeightSrc < extraHeightMin) {
        extraHeight = extraHeightMin;
    }
    contentWrapHeight = contentWrapHeight + extraHeight;
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
    if (contentWrapHeight <= contentWrapHeightMin) {
        $('#content-wrap').height(contentWrapHeightMin);
        $('body').css('overflow', 'auto');
    } else {
        $('#content-wrap').height(contentWrapHeight);
        if (extraHeightSrc < extraHeightMin && extraHeightSrc > 0) {
            $('body').css('overflow', 'auto');
        } else {
            $('body').css('overflow', 'hidden');
        }
    }
    $('#channel-name, #episode-name').width((windowWidth - episodeInfoWidth - 34 - 50 - channelTitleWidth - episodeTitleWidth - 10) / 2);
    $('#channel-name').text($('#channel-name').data('meta')).addClass('ellipsis').ellipsis();
    $('#episode-name').text($('#episode-name').data('meta')).addClass('ellipsis').ellipsis();
    $('#channel-name, #episode-name').width('auto');
}

function loadYouTubeFlash(videoId, isChromeless, videoWrap) {
    $('#poi-event-overlay .wrap .content .video-wrap .video').empty();
    removeTitleCardPlayingHook();
    if (videoId && '' != videoId) {
        var videoHook = '#video-player .video',
            videoDomId = 'youTubePlayer',
            videoWidth = $('#video-player .video').width(),
            videoHeight = $('#video-player .video').height(),
            videoUrl = 'http://www.youtube.com/v/' + videoId + '?version=3&enablejsapi=1&autohide=0&fs=0&playerapiid=player';
        if (isChromeless) {
            videoUrl = 'http://www.youtube.com/apiplayer?version=3&enablejsapi=1&playerapiid=playerChrome';
            $('html').addClass('youtube-chromeless');
        } else {
            $('html').removeClass('youtube-chromeless');
        }
        if (videoWrap) {
            videoHook = videoWrap;
            videoDomId = 'youTubePlayerChrome';
            videoWidth = 590;
            videoHeight = 332;
        }
        $(videoHook).flash({
            id: videoDomId,
            swf: videoUrl,
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

function loadYouTubeChrome(videoId, videoWrap) {
    loadYouTubeFlash(videoId, true, videoWrap);
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
    if (playerId == 'player') {
        youTubePlayerObj = document.getElementById('youTubePlayer');
    } else {
        youTubePlayerObj = document.getElementById('youTubePlayerChrome');
    }
    youTubePlayerObj.addEventListener('onStateChange', 'onYouTubePlayerStateChange');
    loadVideo();
}

function onYouTubePlayerStateChange(newState) {
    var playing = $('#storyboard-list li.playing'),
        nextPlaying = $('#storyboard-list li.next-playing'),
        videoId = nextPlaying.data('ytid'),
        opts = null,
        nextOpts = null,
        starttime = playing.data('starttime');
    // unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5)
    if (-1 == newState) {
        youTubePlayerObj.playVideo();
    }
    if (1 == newState && ($('body').hasClass('from-trim-time-edit')
            || $('body').hasClass('from-trim-time-edit-ending') 
            || $('body').hasClass('from-poi-edit-mode')
            || $('body').hasClass('from-poi-overlay-edit-mode'))) {
        $('body').removeClass('from-trim-time-edit');
        $('body').removeClass('from-trim-time-edit-ending');
        $('body').removeClass('from-poi-edit-mode');
        $('body').removeClass('from-poi-overlay-edit-mode');
        if ($('#cur-poi-edit').length > 0 && !$('#cur-poi-edit').hasClass('hide')) {
            starttime = $('#poi-point-edit-wrap').data('starttime');
        }
        youTubePlayerObj.seekTo(starttime, true);
        youTubePlayerObj.pauseVideo();
    }
    if (0 == newState) {
        if ($('#storyboard-listing li.trim-time').length > 0) {
            $('body').addClass('from-trim-time-edit-ending');
            loadYouTubeFlash($('#storyboard-listing li.trim-time').data('ytid'));
            return false;
        }
        if ($('body').hasClass('enter-poi-edit-mode')) {
            $('body').addClass('from-poi-edit-mode');
            loadYouTubeFlash(playing.data('ytid'));
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
            trimDuration = formatDuration((endTimeInt - startTimeInt), true).split(':'),
            options = {
                startHMS: formatDuration(startTimeInt),
                startH: trimStartTime[0],
                startM: trimStartTime[1],
                startS: trimStartTime[2],
                endHMS: formatDuration(endTimeInt),
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
            };
        $('#video-info').html('');
        $('#video-info-tmpl').tmpl(videoInfoData, options).prependTo('#video-info');
        $('.ellipsis').ellipsis();
        $('.set-time input.time').autotab({
            format: 'numeric'
        });
        buildPoiInfoTmpl(element);
    }
}

function buildPoiInfoTmpl(element) {
    // poi-info-tmpl
    if (element && element.tmplItem() && element.tmplItem().data && element.tmplItem().data.poiList) {
        var videoInfoData = element.tmplItem().data,
            startTimeInt = videoInfoData.startTime,
            endTimeInt = (videoInfoData.endTime > 0) ? videoInfoData.endTime : videoInfoData.duration,
            trimStartTime = formatDuration(startTimeInt, true).split(':'),
            trimEndTime = formatDuration(endTimeInt, true).split(':'),
            trimDuration = formatDuration((endTimeInt - startTimeInt), true).split(':'),
            itemSize = getPoiItemSize(),
            options = {
                itemSize: itemSize,
                startHMS: formatDuration(startTimeInt),
                startH: trimStartTime[0],
                startM: trimStartTime[1],
                startS: trimStartTime[2],
                endHMS: formatDuration(endTimeInt),
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
            },
            poiList = videoInfoData.poiList,
            poiPage = [],
            poiItem = [];
        $('#cur-poi').html('');
        $('#poi-info-tmpl').tmpl(videoInfoData, options).prependTo('#cur-poi');
        $('.ellipsis').ellipsis();
        if (poiList && poiList.length > 0) {
            $.each(poiList, function (i, item) {
                if (poiItem.length > 0 && i % itemSize == 0) {
                    poiPage.push({poiItem: poiItem});
                    poiItem = [];
                }
                poiItem.push(item);
            });
            if (poiItem.length > 0) {
                poiPage.push({poiItem: poiItem});
                poiItem = [];
            }
        }
        $('#poi-list-page').html('');
        $('#poi-list-page-tmpl').tmpl(poiPage).prependTo('#poi-list-page');
        countPoiItem();
        // POI cycle
        $('#cur-poi .poi-list .prev, #cur-poi .poi-list .next').hide();
        $('#cur-poi .poi-list ul').cycle('destroy');
        $('#cur-poi .poi-list ul').cycle({
            activePagerClass: 'active',
            updateActivePagerLink: null,
            next: '#cur-poi .poi-list .next',
            prev: '#cur-poi .poi-list .prev',
            fx: 'scrollHorz',
            before: function () {
                $('#cur-poi .poi-list .prev, #cur-poi .poi-list .next').hide();
            },
            after: function (curr, next, opts) {
                var index = opts.currSlide;
                $('#cur-poi .poi-list .prev')[index == 0 ? 'hide' : 'show']();
                $('#cur-poi .poi-list .next')[index == opts.slideCount - 1 ? 'hide' : 'show']();
            },
            speed: 1000,
            timeout: 0,
            pause: 1,
            cleartypeNoBg: true
        });
    }
}

function buildPoiPointEditTmpl(poi_point) {
    var videoData = $('#storyboard-list li.playing').tmplItem().data,
        optionData = {},
        poiPointEventData = poi_point || {},
        videoStartTime = videoData.startTime,
        videoEndTime = (videoData.endTime > 0) ? videoData.endTime : videoData.duration,
        poiStartTime = videoStartTime,
        poiEndTime = videoEndTime;
    poiPointEventData = $.extend({
        id: 0,
        targetId: (videoData.id) ? videoData.id : 0,
        type: 5,
        name: '',
        startTime: poiStartTime,
        endTime: poiEndTime,
        tag: ''
    }, poiPointEventData);
    videoStartTime = formatDuration(videoStartTime, true).split(':');
    videoEndTime = formatDuration(videoEndTime, true).split(':');
    poiStartTime = formatDuration(poiPointEventData.startTime, true).split(':');
    poiEndTime = formatDuration(poiPointEventData.endTime, true).split(':');
    optionData = {
        poiStartH: poiStartTime[0],
        poiStartM: poiStartTime[1],
        poiStartS: poiStartTime[2],
        poiEndH: poiEndTime[0],
        poiEndM: poiEndTime[1],
        poiEndS: poiEndTime[2],
        videoName: videoData.name,
        startH: videoStartTime[0],
        startM: videoStartTime[1],
        startS: videoStartTime[2],
        endH: videoEndTime[0],
        endM: videoEndTime[1],
        endS: videoEndTime[2]
    };
    $('#cur-poi-edit').html('');
    $('#poi-point-edit-tmpl').tmpl(poiPointEventData, optionData).prependTo('#cur-poi-edit');
    $('#poi-edit').html('');
    $('#poi-point-tmpl').tmpl(poiPointEventData, optionData).prependTo('#poi-edit');
    $('#poi-edit input.time').autotab({
        format: 'numeric'
    });
}

function buildPoiEventOverlayTmpl(poi_event) {
    var videoData = $('#storyboard-list li.playing').tmplItem().data,
        poiPointEventData = poi_event || {},
        poiEventTypeKey = '',
        hasPointEventCache = false;
    poiPointEventData = $.extend({
        id: 0,
        targetId: (videoData.id) ? videoData.id : 0,
        type: 5,
        eventId: 0,
        eventType: 0,
        message: '',
        button: '',
        link: '',
        notifyMsg: '',
        notifyScheduler: ''
    }, poiPointEventData);
    if ($('#poi-event-overlay-wrap').length === 0) {
        hasPointEventCache = false;
        $('#poi-event-overlay .wrap').html('');
        $('#poi-event-overlay-tmpl').tmpl(poiPointEventData).prependTo('#poi-event-overlay .wrap');
    } else {
        hasPointEventCache = true;
        $('#poi-event-overlay-wrap').tmplItem().data = poiPointEventData;
    }
    poiEventTypeKey = $('#poi-event-overlay-wrap').data('poiEventTypeKey');
    $.blockUI({
        message: $('#poi-event-overlay'),
        onBlock: function () {
            $('body').addClass('from-poi-overlay-edit-mode');
            $('#poi-event-overlay .event').addClass('hide');
            if ($('#cur-poi-edit').hasClass('edit')) {
                $('#poi-event-overlay').addClass('edit');
                $('#' + poiEventTypeKey).removeClass('hide');
                if (false === hasPointEventCache) {
                    playPoiEventAndVideo(poiEventTypeKey);
                }
            } else {
                $('#poi-event-overlay').removeClass('edit');
                if (poiEventTypeKey && CMS_CONF.POI_TYPE_MAP[poiEventTypeKey]) {
                    $('#' + poiEventTypeKey).removeClass('hide');
                } else {
                    $('#event-select').removeClass('hide');
                }
            }
            $('#poi-event-overlay input[name=btnText]').charCounter(20, {
                container: '<span class="hide"><\/span>',
                format: '%1 characters to go!',
                delay: 0,
                multibyte: true
            });
            $('#poi-event-overlay .datepicker').datepick({
                changeMonth: false,
                dateFormat: 'yyyy/mm/dd',
                monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                minDate: +0,
                multiSelect: 999,
                onSelect: function (dates) {
                    $('body').addClass('has-poi-change');
                    $('body').addClass('has-change');
                    $('#poi-event-overlay .event .func ul li.notice').hide();
                    var selectedDate = '',
                        selectedList = [],
                        scheduleDate = '',
                        scheduleList = [],
                        timestampList = [];
                    $.each(dates, function (i, dateItem) {
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
}

function playPoiEventAndVideo(type) {
    if ('' != type && isNaN(type) && CMS_CONF.POI_TYPE_MAP[type]) {
        $('#poi-event-overlay-wrap').data('poiEventType', CMS_CONF.POI_TYPE_MAP[type]['code']);
        $('#poi-event-overlay-wrap').data('poiEventTypeKey', type);
        $('body').addClass('from-poi-overlay-edit-mode');
        $('#poi-event-overlay .wrap .content .video-wrap .video').empty();
        loadYouTubeChrome($('#storyboard-listing li.playing').data('ytid'), '#' + type + '-video');
        $('#poi-event-overlay .event .video-wrap .poi-display').empty();
        var displayText = strip_tags($.trim($('#poi-event-overlay #' + type + ' input[name=displayText]').val())),
            buttonsText = strip_tags($.trim($('#poi-event-overlay #' + type + ' input[name=btnText]').val()));
        if ('' == displayText) {
            displayText = nn._([CMS_CONF.PAGE_ID, 'poi-event', 'Input display text']);
        }
        if ('' == buttonsText) {
            buttonsText = nn._([CMS_CONF.PAGE_ID, 'poi-event', 'Input button text']);
        }
        $('#poi-event-overlay #' + type + ' .video-wrap .poi-display').poi({
            type: CMS_CONF.POI_TYPE_MAP[type]['plugin'],
            displayText: displayText,
            buttons: [buttonsText],
            duration: -1
        });
    } else {
        nn.log('POI type error!', 'error');
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
    $('body').removeClass('has-poi-change');
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
        if (parseInt(itemData.ytDuration, 10) > 0) {
            duration += parseInt(itemData.duration, 10);
        }
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

function rebuildVideoNumber(base) {
    base = ('undefined' === typeof base) ? 0 : base;
    $('#storyboard-list li').each(function (i) {
        if ((i + 1) > base) {
            $(this).children('p.order').text(i + 1);
        }
    });
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

function getPoiItemSize() {
    return parseInt(($('#video-player').data('height') - 104) / 33);    // 104: 269(video min height)-(33*5)
}

function countPoiItem() {
    $('#cur-poi .poi-list ul').data('item', getPoiItemSize());
    $('#cur-poi .poi-list ul').height($('#cur-poi .poi-list ul').data('item') * 33);
}

function unblockPoiUI() {
    $.unblockUI();  // ready for unblock POI event overlay
    $('body').removeClass('enter-poi-edit-mode');
    $('body').removeClass('from-poi-edit-mode');
    $('body').removeClass('from-poi-overlay-edit-mode');
    $('#storyboard, #content-main-wrap .form-btn, #epcurate-nav ul li.publish').unblock();
    $('#epcurate-nav ul li.publish').removeClass('mask');
    $('#video-player .video').removeClass('transparent');
}

function removePoiTab() {
    $('#epcurate-curation ul.tabs li.poi').addClass('hide');
    $('#epcurate-curation ul.tabs li.edit-poi').addClass('hide');
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
        swfu.setButtonText('<span class="uploadstyle">' + nn._(['upload', 'Uploading...']) + '</span>');
    };
    var handlerUploadSuccess = function (file, serverData, recievedResponse) {
        $('.background-container p.img .loading').hide();
        swfu.setButtonText('<span class="uploadstyle">' + nn._(['upload', 'Upload']) + '</span>');
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
        swfu.setButtonText('<span class="uploadstyle">' + nn._(['upload', 'Upload']) + '</span>');
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
        button_text:                '<span class="uploadstyle">' + nn._(['upload', 'Upload']) + '</span>',
        button_text_style:          '.uploadstyle { color: #555555; font-family: Arial, Helvetica; font-size: 15px; text-align: center; } .uploadstyle:hover { color: #999999; }',
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