var lock = false
var getWinH = function () {
    if (window.innerHeight) return window.innerHeight
    else if (document.documentElement.clientHeight) return document.documentElement.clientHeight
    else if (document.body.clientHeight) return document.body.clientHeight
    else {
        console.error('can\'t get window height');
    }
}
var getWinW = function () {
    if (window.innerWidth) return window.innerWidth
    else if (document.documentElement.clientWidth) return document.documentElement.clientWidth
    else if (document.body.clientWidth) return document.body.clientWidth
    else {
        console.error('can\'t get window Width');
    }
}
var getPageOffset = function (e) {
    ele = document.getElementById(e)
    if (getWinH() >= ele.scrollTop >= 0) return ele.scrollTop
    else {
        console.error('can\'t get scroll offset');
    }
}
var isView = function (ele, view = 'container') {
    return (ele.offsetTop -= getPageOffset(view)) < getWinH() - getWinH() / 4
}
var change = function () {
    for (var i = 0; i < document.getElementsByClassName('lazy-item').length; i++) {
        if (isView(document.getElementsByClassName('lazy-item')[i])) {
            var source = document.getElementsByClassName('lazy-item')[i].getAttribute('data-src')
            var src = document.getElementsByClassName('lazy-item')[i].setAttribute('src', source)
        }
    }
}
window.addEventListener('mousewheel', () => {
    change()
})
document.addEventListener('touchmove', () => {
    change()
});
change()