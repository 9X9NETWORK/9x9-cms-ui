// Store list scrollbar.
$('#store-list').perfectScrollbar({
    marginTop: 25,
    marginBottom: 63
});

$(window).resize(function() {
    $('#store-list').perfectScrollbar('update');
});

// Switch ON/OFF category list
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

// Collapsable category list.
$(document).on("click", "#store-category .btn-gray", function(event) {
    if ($("#store-layer").hasClass("collapse")) {
        $("#store-category ul").slideDown(400);
        $('#store-constrain').animate({
            top: '+=84'
        }, 400);
    } else {
        $("#store-category ul").slideUp(400);
        $('#store-constrain').animate({
            top: '-=84'
        });
    }
    $("#store-layer").toggleClass("collapse");
});

// Add/remove category.
$(document).on("click", ".btn-minus", function(e) {
    var thisDiv = $(this);
    var upLi = $(this).parents("li");

    if ($(this).hasClass("on")) {
        // add program
        thisDiv.removeClass("on");
        upLi.removeClass("minus");
        thisDiv.find("p.center").text('Remove program');
    } else {
        // remove program
        thisDiv.addClass("on");
        upLi.addClass("minus");
        thisDiv.find("p.center").text('Add program');
    }
});

// 'Add category' modal.  
$('#content-main').on('click', '#store-category ul li .btn-edit, #store-category ul li.empty', function() {
    $.blockUI({
        message: $('#change-category-overlay')
    });
    return false;
});

$('#change-category-overlay').on('click', '.btn-cancel, .btn-close', function() {
    $.unblockUI();
    return false;
});

// Change promotion/system.
$('#func-nav .sub-nav li').click(function() {
    $('#func-nav .sub-nav li').toggleClass('active');
    $('#content-wrap').toggleClass('system');
});