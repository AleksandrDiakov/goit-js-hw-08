import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(getCurrentVideo, 1000));

function getCurrentVideo(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    .then(function (seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});