document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            // Remove line-active class from all links
            links.forEach(link => {
                link.classList.remove("line-active");
            });

            // Add line-active class to the clicked link
            this.classList.add("line-active");
        });
    });
});



/* Carousal Video Script */

// Load the YouTube IFrame Player API asynchronously
// Load the YouTube IFrame Player API asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '711',
        width: '1264',
        top: '-103',
        videoId: 'Wg8-jmsgfiI', // Replace with your video ID
        frameborder: '0',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'showinfo': 0,
            'mute': 1 ,
            'fs':1,
            'modestbranding': 1, // Remove YouTube logo
            'iv_load_policy': 3, // Hide video annotations
            'disablekb': 1 // Disable keyboard controls
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo(); // Autoplay the video once it's ready
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.seekTo(0); // Rewind the video to the beginning when it ends
        player.playVideo(); // Play the video again
    }
}
