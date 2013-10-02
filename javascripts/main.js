/**
 * @author <a href="mailto:yifan.9x9@gmail.com">Yi Fan Liao</a>
 */

/**
 * @fileOverview General event handlers and methods for static ui pages.
 */

// header profile dropdown
$('#btn-profile, #selected-profile').click(function (event) {
    showDropdown('#btn-profile');
    $('#footer p.select-btn').removeClass('on');
    event.stopPropagation();
});
$('#profile-dropdown li').click(function () {
    $('#btn-profile').removeClass('on');
    $('#profile-dropdown').hide();
});

// footer control
$('#footer-control').click(function () {
    $(this).toggleClass('on');
    $('#footer').slideToggle();
    $('#content-main-wrap').toggleClass('footer-on');
    // $('#content-main-wrap').perfectScrollbar('update');
});

// footer dropdown
$('#footer-list li .select-btn, #footer-list li .select-txt').click(function (event) {
    // $common.hideFbPageList();
    $('.select-list, .dropdown').hide();
    $('#nav li, #btn-profile').removeClass('on');
    $(this).parent('li').siblings().children('.on').removeClass('on');
    $(this).parent().children('.select-btn').toggleClass('on');
    if ($(this).parent().children('.select-btn').hasClass('on')) {
        $(this).parent().children('.select-list').show();
    } else {
        $(this).parent().children('.select-list').hide();
    }
    event.stopPropagation();
});
$('#footer-list li .select-list li a').click(function () {
    $('#footer-list li .select-btn').removeClass('on');
    $(this).parents('.select-list').slideToggle();
});

// Copied from webapp repository js file. Better refactor it later.
// common dropdown (share with header, footer, channel-add and channel-setting)
function showDropdown(btn) {
    var str = '',
        id = '';
    // $common.hideFbPageList();
    $('.dropdown, .select-list').hide();
    $('.dropdown')
        .parents('li:not(' + btn + ')').removeClass('on')
        .children('.on:not(' + btn + ')').removeClass('on');
    $(btn).toggleClass('on');
    str = $(btn).attr('id');
    if (str.search('btn') === 0) {
        // slice(4) for btn-xxx
        str = $(btn).attr('id').slice(4);
    }
    id = '#' + str + '-dropdown';
    if ($(btn).hasClass('on')) {
        $(id).show();
    } else {
        $(id).hide();
    }
}
$('body').click(function () {
    $('.dropdown').hide();
    $('.dropdown').parents('li').removeClass('on').children('.on').removeClass('on');
    $('.select-list').hide();
    $('.select-list').parents().removeClass('on').children('.on').removeClass('on');
    // $common.hideFbPageList();
});

var showSavingOverlay = function () {
    $('#overlay-s .overlay-middle').html('<img src="images/icon_load_l.gif" alt="" />' + 'Saving...');
    $('#overlay-s').fadeIn().css('z-index', '1200');
};

var showProcessingOverlay = function () {
    $('#overlay-s .overlay-middle').html('<img src="images/icon_load_l.gif" alt="" />' + 'Saving...');
    $('#overlay-s').fadeIn().css('z-index', '1200');
};