$(function () {
    // video play
    $('#storyboard').on('click', '.storyboard-list ul li .hover-func a.video-play', function () {
        var videoID = $(this).parent().parent().data('videoid'),
            videoStartTime = $(this).parent().parent().data('starttime'),
            videoEndTime = $(this).parent().parent().data('endtime');
        loadCurationVideo(videoID);

        $('#storyboard li').removeClass('playing').removeClass('next-playing').removeClass('prev-playing');
        $(this).parent().parent().addClass('playing');
        $(this).parent().parent().next().addClass('next-playing');
        $(this).parent().parent().prev().addClass('prev-playing');
        return false;
    });
});

function loadCurationVideo(videoID) {
    var videoWidth = $('#video-player .video').width(),
        videoHeight = $('#video-player .video').height();
    $('#video-player .video').flash({
        id: 'youTubePlayer',
        swf: 'http://www.youtube.com/v/' + videoID + '?version=3&enablejsapi=1&autohide=0',
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
}

function loadVideo() {
    var videoID = $('#storyboard-list li.playing').data('videoid'),
        videoStartTime = $('#storyboard-list li.playing').data('starttime'),
        videoEndTime = $('#storyboard-list li.playing').data('endtime');
        youTubePlayerObj.loadVideoById({
            'videoId': videoID,
            'startSeconds': videoStartTime,
            'endSeconds': videoEndTime
        });
}

function onYouTubePlayerStateChange(newState) {
    // unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5)
    if (-1 == newState) {
        youTubePlayerObj.playVideo();
    }
    if (0 == newState) {
        if ($('#storyboard-list li.next-playing').length > 0) {
            var playing       = $('#storyboard-list li.playing');
            var nextPlaying   = $('#storyboard-list li.next-playing');
            var activeID      = playing.children('.video-id').val();
            var videoID       = nextPlaying.data('videoid');
            $('#storyboard-list li').removeClass('playing');
            $('#storyboard-list li').removeClass('prev-playing');
            $('.next-playing').attr('class', 'playing');
            $('.playing').prev().addClass('prev-playing');
            $('.playing').next().addClass('next-playing');
            loadVideo();
        }
    }
    console.log(newState);
}