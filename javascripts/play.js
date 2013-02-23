$(function () {
    $('#volume-bar .volume').corner('left');

    // video play
    $('#storyboard').on('click', '.storyboard-list ul li .hover-func a.video-play', function () {
        $('#storyboard li').removeClass('playing').removeClass('next-playing').removeClass('prev-playing');
        $(this).parent().parent().addClass('playing');
        $(this).parent().parent().next().addClass('next-playing');
        $(this).parent().parent().prev().addClass('prev-playing');
        loadYoutubeFlash();
        return false;
    });

    // video control
    $('#btn-play').click(function () {
        playVideo();
        $(this).addClass('hide');
        $('#btn-pause').removeClass('hide');
    });
    $('#btn-pause').click(function () {
        pauseVideo();
        $(this).addClass('hide');
        $('#btn-play').removeClass('hide');
    });
    $('#btn-prev').click(function() {
        if ($('#storyboard-listing .prev-playing').length > 0) {
            var prevPlaying   = $('#storyboard-listing li.prev-playing');
            var videoID       = prevPlaying.children('.video-id').val();

            $('#storyboard-list li').removeClass('playing').removeClass('next-playing');
            $('.prev-playing').attr('class', 'playing');
            $('.playing').prev().addClass('prev-playing');
            $('.playing').next().addClass('next-playing');
            loadVideo();
        }
    });
    $('#btn-next').click(function() {
        if ($('#storyboard-listing .next-playing').length > 0) {
            var nextPlaying   = $('#storyboard-listing li.next-playing');
            var videoID       = nextPlaying.children('.video-id').val();

            $('#storyboard-list li').removeClass('playing').removeClass('prev-playing');
            $('.next-playing').attr('class', 'playing');
            $('.playing').prev().addClass('prev-playing');
            $('.playing').next().addClass('next-playing');
            loadVideo();
        }
    });

    //mute
    $('#btn-volume').click(function() {
        var youTubePlayerObj = document.getElementById("youTubePlayer");
        var nowVolume = $('#volume-dragger').data('volume');
        $(this).toggleClass('mute');
        if (youTubePlayerObj) {
            if (0 == youTubePlayerObj.getVolume()) {
                unMuteVideo();
                $('#volume-dragger').slider({
                    value: nowVolume
                });
                $('#volume-bar .volume').css('width', nowVolume + '%');
            } else {
                muteVideo();
                $('#volume-dragger').slider({
                    value: 0
                });
                $('#volume-bar .volume').css('width', '0');
            }        
        }
    });

    //volume
    $('#volume-dragger').slider({
        range: "max",
        min: 0,
        max: 100,
        value: 100,
        slide: function(event, ui) {
            var youTubePlayerObj = document.getElementById("youTubePlayer");
            $(this).data('volume', ui.value);
            $('#volume-bar .volume').css('width', ui.value + '%');
            if (ui.value > 56) {
                $('#btn-volume').attr('class', 'loudest');
            }
            if (ui.value <= 55 && ui.value >= 21) {
                $('#btn-volume').attr('class', 'louder');
            }
            if (ui.value <= 20 && ui.value >= 1) {
                $('#btn-volume').attr('class', '');
            }
            if (ui.value == 0) {
                $('#btn-volume').attr('class', 'mute');
            }
            if (youTubePlayerObj) {
                youTubePlayerObj.setVolume(ui.value);
            }
        }
    });

    $('#btn-expand').click(function() {
        var youTubePlayerObj = document.getElementById("youTubePlayer");
        if (youTubePlayerObj) {
            var windowWidth = $(window).width(),
                windowHeight = $(window).height();
            $('#video-player').css({
                position: 'fixed',
                'z-index': 100000,
                width: windowWidth,
                height: windowHeight
            });
            $('#video-player .video *').css({
                width: windowWidth,
                height: windowHeight - 44
            });
            $(this).addClass('hide');
            $('#btn-shrink').removeClass('hide');        
        } else {
            alert('video is not ready!');
        }
    });

    $('#btn-shrink').click(function() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height();
        $('#video-player, #video-player .video *').removeAttr('style');
        $(this).addClass('hide');
        $('#btn-expand').removeClass('hide');
    });

    $('#play-dragger').slider({
        range: "max",
        min: 0,
        max: 100,
        value: 0,
        slide: function(event, ui) {
            var youTubePlayerObj = document.getElementById("youTubePlayer"),
                videoID = $('#storyboard-listing li.playing').children('.video-id').val(),
                totalDuration = Math.ceil(youTubePlayerObj.getDuration()),
                currentDuration = totalDuration * ui.value / 100;
            if (youTubePlayerObj) {
                youTubePlayerObj.seekTo(currentDuration, true);
            }
        }
    });
});

function playVideo() {
    if (youTubePlayerObj) {
        youTubePlayerObj.playVideo();
    }
}

function pauseVideo() {
    if (youTubePlayerObj) {
        youTubePlayerObj.pauseVideo();
    }
}

function muteVideo() {
    if(youTubePlayerObj) {
        youTubePlayerObj.mute();
    }
}

function unMuteVideo() {
    if(youTubePlayerObj) {
        youTubePlayerObj.unMute();
    }
}

function loadYoutubeFlash() {
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
        wmode: 'transparent',
        flashvars: false
    });
}

function onYouTubePlayerReady(playerId) {
    // NO DECLARE VAR youTubePlayerObj ON PURPOSE to let it be global
    youTubePlayerObj = document.getElementById("youTubePlayer");
    youTubePlayerObj.addEventListener("onStateChange", "onYouTubePlayerStateChange");
    loadVideo();
    setInterval(updatePlayerInfo, 250);
}

function loadVideo() {
    var playingVideo = $('#storyboard-listing li.playing'),
        videoID = playingVideo.children('.video-id').val(),
        videoVolume = $('#volume-dragger').data('volume');

    youTubePlayerObj.loadVideoById({
        'videoId': videoID/*,
        'startSeconds': videoStartTime,
        'endSeconds': videoEndTime*/
    });
    youTubePlayerObj.setVolume(videoVolume);
    $('#btn-play').addClass('hide');
    $('#btn-pause').removeClass('hide');
}

function updatePlayerInfo() {
    var totalDuration = Math.ceil(youTubePlayerObj.getDuration()),
        currentDuration = Math.ceil(youTubePlayerObj.getCurrentTime()),
        percentDuration = Math.ceil(currentDuration / totalDuration * 100),
        totalBytes = youTubePlayerObj.getVideoBytesTotal(),
        loadBytes = youTubePlayerObj.getVideoBytesLoaded(),
        percentBytes = parseInt(loadBytes / totalBytes * 100, 10);

    $('#total-duration').text(totalDuration);
    $('#current-duration').text(currentDuration);
    $('#total-byte').text(totalBytes);
    $('#load-byte').text(loadBytes);
    // progress bar
    $('#loaded').css('width', percentBytes + '%');
    $('#played').css('width', percentDuration + '%');
    //time display
    $('#play-time .duration').html(transformTime(totalDuration));
    $('#play-time .played').html(transformTime(currentDuration));
    $('#play-dragger .ui-slider-handle').css('left', percentDuration + '%');
}

function transformTime(time) {
    var durationMin = parseInt(time/60, 10).toString(),
        durationSec = parseInt(time%60, 10).toString();
        if (durationMin.length < 2) {
            durationMin = '0' + durationMin;
        }
        if (durationSec.length < 2) {
            durationSec = '0' + durationSec;
        }
    var transformed = durationMin + ':' + durationSec;
    return transformed;
}

function onYouTubePlayerStateChange(newState) {
    // unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5)
    if (-1 == newState) {
        youTubePlayerObj.playVideo();
    }
    if (0 == newState) {
        if ($('#storyboard-list li.next-playing').length > 0) {
            $('#storyboard-list li').removeClass('playing').removeClass('prev-playing');
            $('.next-playing').attr('class', 'playing');
            $('.playing').prev().addClass('prev-playing');
            $('.playing').next().addClass('next-playing');
            loadVideo();
        }
    }
    console.log(newState);
}