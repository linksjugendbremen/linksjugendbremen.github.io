if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android/i))) {
    document.write('<link href="/blog/mobile.css"  rel="stylesheet">');
} else {
    document.write('<link href="/blog/index.css"  rel="stylesheet">');
}

function datumFontsize(){
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android/i))) {
        var datum = document.getElementsByClassName('datum');
        for(i = 0; i < datum.length; i++) {
            datum[i].style.fontSize="3vh";
        }
    }
}

function isIndex(){
    document.getElementById('index.html').classList.add('active');
}
