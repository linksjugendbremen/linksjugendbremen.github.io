var swiper = {

    touchStartX: 0,
    touchEndX: 0,
    minSwipePixels: 30,
    detectionZone: undefined,
    swiperCallback: function() {},

    init: function (detectionZone, callback) {
        swiper.swiperCallback = callback
        detectionZone.addEventListener('touchstart', function (event) {
            swiper.touchStartX = event.changedTouches[0].screenX;
        }, false);
        detectionZone.addEventListener('touchend', function (event) {
            swiper.touchEndX = event.changedTouches[0].screenX;
            swiper.handleSwipeGesture();
        }, false);
    },

    handleSwipeGesture: function () {
        var direction,
            moved
        if (swiper.touchEndX <= swiper.touchStartX) {
            moved = swiper.touchStartX - swiper.touchEndX
            direction = "left"
        }
        if (swiper.touchEndX >= swiper.touchStartX) {
            moved = swiper.touchEndX - swiper.touchStartX
            direction = "right"
        }
        if (moved > swiper.minSwipePixels && direction !== "undefined") {
            swiper.swipe(direction, moved)
        }
    },

    swipe: function (direction, movedPixels) {
        var ret = {}
        ret.direction = direction
        ret.movedPixels = movedPixels
        swiper.swiperCallback(direction)
    }
}

var gestureZone = document;
var current = window.location.pathname;

if(current=="/m.twitter.timeline1.html"){
    swiper.init(gestureZone, function(e) {
        if(e=="left"){
            window.location.replace("m.twitter.timeline2.html");
        }
        if(e=="right"){
            window.location.replace("m.twitter.timeline2.html");
        }
    })
}

if(current=="/m.twitter.timeline2.html"){
    swiper.init(gestureZone, function(e) {
        if(e=="left"){
            window.location.replace("m.twitter.timeline1.html");
        }
        if(e=="right"){
            window.location.replace("m.twitter.timeline1.html");
        }
    })
}


function touchVisible() {
    document.getElementById("touch").style.display="inherit";
}

function isActiveMTwitter(){
    document.getElementById('twitter.html').classList.add('active');
}
