let n = 0
let interval

const g = 9.8
const t = 0.3

document.querySelector('.volume').addEventListener("mousedown", (e) => {
    goc = 0
    n = 0

    clearInterval(interval)
    document.querySelector('.icon').style.transition = 'all 1s linear'
    document.querySelector('.icon').classList.add('active')
    interval = setInterval(() => {
        if (n < 100) {
            n++
        }
    }, 10)
});

document.querySelector('.volume').addEventListener("mouseup", (e) => {
    document.querySelector('.icon').style.transition = 'all 0.15s linear'
    document.querySelector('.icon').classList.remove('active')
    clearInterval(interval)

    let left = 0
    let top = n
    let bool = true

    interval = setInterval(() => {
        if (left < n) {
            left++
        }
        top = top + (n / 4 - left * 0.7) / 10


        if (left == n) {
            if (top < 0 || top > 0) {
                top = 0
            }
        }

        document.querySelector('.dot').style.setProperty('--left', left + '%')
        document.querySelector('.dot').style.setProperty('--top', '-' + top + 'px')
        if (left == n) {
            clearInterval(interval)
            video.volume = n/100
        }
    }, 5)

});
var video = document.querySelector('video');
