// Youtube Video

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

$('.card-product__play-video').click(function() {
    $('.popup-preview-firework').fadeToggle(200).css('display', 'flex');
    let id = $(this).attr('data-youtube__id');

    function onYouTubePlayerAPIReady() {
        player = new YT.Player('ytplayer', {
            height: '80%',
            width: '80%',
            videoId: id,
            playerVars: {
                'loop': 1,
                'autoplay': 1,
                'mute': 0,
                'playlist': id,
                'rel': 1,
                'iv_load_policy': 0
            }
        });
    }
    onYouTubePlayerAPIReady()
});
$('.popup-preview-firework').click(function() {
    $('.popup-preview-firework').fadeToggle(200);
    $("#ytplayer").remove();
    let ytplayer = $('<div id="ytplayer"></div>');
    $(this).append(ytplayer);
});