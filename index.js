let n = 0
let interval
var video = document.querySelector('video');

let g = 10
let alpha = 0

document.querySelector('.volume').addEventListener("mouseover", (e) => {
    document.querySelector('.icon').classList.add('hover')
});
document.querySelector('.volume').addEventListener("mouseout", (e) => {
    document.querySelector('.icon').classList.remove('hover')
});

document.querySelector('.volume').addEventListener("mousedown", (e) => {
    n = 0
    alpha = 0

    clearInterval(interval)
    document.querySelector('.icon').style.transition = 'all 1s linear'
    document.querySelector('.icon').classList.add('active')
    interval = setInterval(() => {
        if (n < 100) {
            n++
            alpha += 0.45
        }
    }, 10)
});

document.querySelector('.volume').addEventListener("mouseup", (e) => {
    document.querySelector('.icon').style.transition = 'all 0.15s linear'
    document.querySelector('.icon').classList.remove('active')
    clearInterval(interval)

    let L = n
    let v0 = (L * 5) / Math.sin(alpha * Math.PI / 180)
    let v0y = v0 * Math.sin(alpha * Math.PI / 180)

    let t = 0
    let x = 0
    let top = n
    let bool = true

    interval = setInterval(() => {
        if (x < n) {
            x++
        }
        t = x * 1.09
        let y = n / 2 + (v0y * t - (1 / 2) * g * t * t) / 100
        if (y < 0) {
            y = 0
        }
        document.querySelector('.dot').style.setProperty('--left', x + '%')
        document.querySelector('.dot').style.setProperty('--top', y + 'px')
        if (x >= n) {
            document.querySelector('.dot').style.setProperty('--top', 0 + 'px')
            video.volume = x / 100
            clearInterval(interval)
        }
    }, 5)

});
