/*jslint browser: true, devel: true, eqeq: true, nomen: true, unparam: true, sub: true, vars: true */
/*global $, nn, cms */

(function ($page) {
    'use strict';

    var $common = cms.common;

    $page.channelPageSize = 28;

    $page._drawChannels = function (inPageSize, isEnd, callback) {
        // /api/channels
        var cntStart = 0,
            cntEnd = 0,
            cntTotal = 0,
            pageCurrent = 0,
            tmpArr = [],
            tmpArr2 = [],
            strChannels = "";
        var i = 0;
        cntTotal = cms.global.USER_DATA["msoSource"].length;
        pageCurrent = cms.global.USER_DATA["pageInfo"].pageCurrent;

        cntStart = pageCurrent * inPageSize - inPageSize;
        cntEnd = pageCurrent * inPageSize;

        if (cntEnd > cntTotal) {
            cntEnd = cntTotal;
        }
        tmpArr = cms.global.USER_DATA["msoSource"];

        for (i = cntStart; i < cntEnd; i += 1) {
            tmpArr2.push(tmpArr[i]);
        }

        strChannels = tmpArr2.join(',');
        // if (cms.global.USER_DATA["pageInfo"].pageCurrent == cms.global.USER_DATA["pageInfo"].pageTotal) {
        //     $(".load").hide();
        // } else {
        //     $(".load").show();
        // }

        nn.api('GET', cms.reapi('/api/channels'), {
            channels: strChannels
        }, function (itemChannel) {
            var cntitemChannel = itemChannel.length;
            var outChannels = [],
                tmpArr = [],
                strMinus = "";
            var i = 0;
            for (i = 0; i < cntitemChannel; i += 1) {
                tmpArr = [];
                strMinus = "";
                tmpArr = itemChannel[i];
                if (-1 === $.inArray(tmpArr.id, cms.global.USER_DATA["msoCurrent"])) {
                    strMinus = "on";
                }

                if ('' === tmpArr.imageUrl) {
                    tmpArr.imageUrl = "images/ch_default.png";
                }
                tmpArr.imageUrl = tmpArr.imageUrl.split('|')[0];

                tmpArr.msoMinus = strMinus;
                outChannels.push(tmpArr);
            }
			
            $('#store-empty-chanels-tmpl').tmpl([{
            	cntChanels: 1
            }]).appendTo('#store-layer .channel-list');

            $('#store-chanels-li-tmpl').tmpl(outChannels).appendTo('#store-layer .channel-list');
			
			$('#change-category-overlay .overlay-container').html('');
        	$('#change-category-overlay-tmpl').tmpl().appendTo('#change-category-overlay .overlay-container');
			
            // $common.autoHeight();
            // $common.scrollbar("#store-constrain", "#store-list", "#store-slider");
            $('#store-list').perfectScrollbar('update');
            // if (isEnd) {
            //     $('#store-slider .slider-vertical').slider('value', 0);
            // }
            $('#overlay-s').fadeOut("slow");
            //console.log("scrollbar**" + $('#store-slider .slider-vertical').slider('value'));

            // if (cms.global.USER_DATA["pageInfo"].pageCurrent == cms.global.USER_DATA["pageInfo"].pageTotal) {
                $(".load").hide();
            // } else {
            //     $(".load").show();
            // }

            if (typeof callback === 'function') {
                callback();
            }
            // If the page isn't filled with channels (no scrollbar && pageCurrent < pageTotal)
            if ($('#store-list').outerHeight() >= $('#store-list')[0].scrollHeight - $('#store-list .load').height() && cms.global.USER_DATA["pageInfo"].pageCurrent < cms.global.USER_DATA["pageInfo"].pageTotal) {
                $('#store-list .load').fadeIn('slow');
                $page.getMoreChannels();
            }
        });
    };
	
    $page.getMoreChannels = function () {
        var pageTotal = 0,
            pageNext = 0;
        pageTotal = cms.global.USER_DATA["pageInfo"].pageTotal;
        pageNext = cms.global.USER_DATA["pageInfo"].pageNext;

        // $common.showProcessingOverlay();
        cms.global.USER_DATA["pageInfo"].pageCurrent = cms.global.USER_DATA["pageInfo"].pageNext;
        cms.global.USER_DATA["pageInfo"].pageNext += 1;
        $page._drawChannels($page.channelPageSize, true);
    };

    $page.listCategory = function (inCategory, inCatId) {
        $("#store-category-ul").html('');
		
		$('#store-empty-category-li-tmpl').tmpl().appendTo('#store-category-ul');		
		
		$('#store-category-li-tmpl').tmpl(inCategory, {
            actCat: inCatId
        }).appendTo('#store-category-ul');
		
		if($('#content-wrap').hasClass('system')){
 			$(".btn-gray.expand .center .icon").text($("#store-category-ul li.on").text());
			}
		else {
			$(".btn-gray.expand .center .icon").text($('#store-category ul li.empty').text());
			}
    };

    $page.listCatChannel = function (inMsoId, inCatId, inPageSize) {
        // base
        nn.api('GET', cms.reapi('/api/store'), {
            categoryId: inCatId,
            sphere: cms.global.MSOINFO.supportedRegion
        }, function (channels) {
            var pageInfo = [];
            var cntChannelSource = channels.length;
            $('#portal-manage').html('');
            if (cntChannelSource > 0) {
                $("#store-category .form-title").text(nn._([cms.global.PAGE_ID, 'store-layer', "xxx channels in category:"], [cntChannelSource]));

                pageInfo["pageTotal"] = Math.ceil(cntChannelSource / inPageSize);
                pageInfo["pageCurrent"] = 1;
                if (pageInfo["pageTotal"] == 1) {
                    pageInfo["pageNext"] = 1;
                } else {
                    pageInfo["pageNext"] = 2;
                }

                cms.global.USER_DATA["pageInfo"] = pageInfo;
                cms.global.USER_DATA["msoSource"] = channels;
                cms.global.USER_DATA["msoAdd"] = [];
                cms.global.USER_DATA["msoRemove"] = [];
                nn.api('GET', cms.reapi('/api/mso/{msoId}/store', {
                    msoId: inMsoId
                }), {
                    categoryId: inCatId
                }, function (channelsMso) {
                    var cntChannelsMso = channelsMso.length;
                    if (cntChannelsMso > 0) {
                        cms.global.USER_DATA["msoCurrent"] = channelsMso;
                    } else {
                        cms.global.USER_DATA["msoCurrent"] = [];
                    }
                    $('.channel-list').html("");
                    $page._drawChannels(inPageSize, false);
                    //alert(cntChanels);
                });
            } else {
                $('#overlay-s').fadeOut("slow");
            }
        });
    };

    $page.catLiClick = function (inObj) {
        var msoId = 0;
        msoId = cms.global.MSO;
        $common.showProcessingOverlay();
        $(".catLi").removeClass("on");
        $("#catLi_" + inObj).addClass("on");
        $(".btn-gray.expand .center .icon ").text($("#catLi_" + inObj).text());
        $('.channel-list li').remove();
		$('#store-layer').addClass('collapse');
		$('#store-category-ul').hide();
		$('#store-constrain').animate({top:'-=84'}, 400);

        // if ('none' !== $('#store-slider').css('display')) {
        //     $('#store-slider .slider-vertical').slider('value', 100);
        //     $('#store-slider .slider-vertical').slider('destroy');
        //     $common.autoHeight();
        //     $common.scrollbar("#store-constrain", "#store-list", "#store-slider");
        // }
        $page.listCatChannel(msoId, inObj, $page.channelPageSize);
        $('#store-list').scrollTop(0);
        $('#store-list').perfectScrollbar('update');
 		$(".btn-gray.expand .center .icon").text($("#store-category-ul li.on").text());
    };

    // NOTE: page entry point (keep at the bottom of this file)
    $page.init = function (options) {

        $common.showProcessingOverlay();
        
        nn.log({
            // NOTE: remember to change page-key to match file-name
            subject: 'CMS.PAGE.INITIALIZED: store-manage',
            options: options
        }, 'debug');
        var pageInfo = [],
            msoSource = [],
            msoCurrent = [],
            msoId = 0,
            catId = 0;
        pageInfo["pageTotal"] = pageInfo["pageCurrent"] = pageInfo["pageNext"] = 0;

        cms.global.USER_DATA["pageInfo"] = pageInfo;
        cms.global.USER_DATA["msoSource"] = msoSource;
        cms.global.USER_DATA["msoCurrent"] = msoCurrent;

        var lang = cms.global.USER_DATA.lang;
        // /api/mso/{msoId}/store
        msoId = cms.global.MSO;

        if (msoId < 1) {
            location.href = "./";
        } else {
            //alert(lang);
            nn.api('GET', cms.reapi('/api/categories'), {
                lang: lang
            }, function (categories) {
                var cntCategories = categories.length;
                catId = categories[0].id;
                //$('#portal-manage').html('');
                if (cntCategories > 0 && catId != undefined && catId > 0) {
                    $page.listCategory(categories, catId);
                    $page.listCatChannel(msoId, catId, $page.channelPageSize);
                } else {
                    location.href = "./";
                }
            });

            $('#func-nav .langkey').each(function () {
                $(this).text(nn._([cms.global.PAGE_ID, 'func-nav', $(this).data('langkey')]));
            });
            $('#title-func .langkey').each(function () {
                $(this).text(nn._([cms.global.PAGE_ID, 'title-func', $(this).data('langkey')]));
            });
            $('#store-layer .langkey').each(function () {
                $(this).text(nn._([cms.global.PAGE_ID, 'store-layer', $(this).data('langkey')]));
            });
            // $common.autoHeight();
            // $common.scrollbar("#store-constrain", "#store-list", "#store-slider");
            $('#store-list').perfectScrollbar({ marginTop: 25, marginBottom: 63 });
        }
    };
	
	// Exchanege Promotion and System Category
	$('#func-nav ul li a').click(function() {
		
		$('.categry-type').text($(this).text());
		$('.sub-nav li').toggleClass('active');
		$('#content-wrap').toggleClass('system');
		$('#store-list').perfectScrollbar('update');

		if($('#content-wrap').hasClass('system')){
			$('.intro span').text('There are over 1000 FREE channels for your selection, you can activate system categories to enrich your channel store.');
			$('.form-content').text('All channels are automatically updated by system.');
			$(".btn-gray.expand .center .icon").text($("#store-category-ul li.on").text());	
			}
		else {
			$('.intro span').text('Promotion category provides the best channel impression in channel store.');
			$('.form-content').text('Sorted by: Updated time');
			$(".btn-gray.expand .center .icon").text($('#store-category ul li.empty').text());
			}
	});

	// Switch ON/OFF in System Category
	$('.intro a.switch-on').click(function() {
		$(this).addClass('hide');
		$('.intro a.switch-off.hide').removeClass('hide');
 		$('#store-layer').hide();
		$('.intro .msg-error').show();
 	});
	
	$('.intro a.switch-off').click(function() {
		$(this).addClass('hide');
		$('.intro a.switch-on.hide').removeClass('hide');
		$('#store-layer').show();
		$('.intro .msg-error').hide();
		$('#store-list').perfectScrollbar('update');
 	});

	// Change Category	
	$('#content-main').on('click', '#store-category ul li .btn-edit, #store-category ul li.empty', function () {
        $.blockUI({
            message: $('#change-category-overlay')
        });
        return false;
    });
	
	$('#change-category-overlay').on('click', '.btn-cancel, .btn-close', function () {
        $.unblockUI();
        return false;
    });

    // NOTE: remember to change page-key to match file-name
}(cms.namespace('store-manage')));