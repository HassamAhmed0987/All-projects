let sec = document.querySelector(".second")
let mint = document.querySelector(".minutes")
let hrs = document.querySelector(".hours")
let date = document.querySelector(".clock-date")


setInterval(function () {
    let nowDate = new Date()

    let h = nowDate.getHours()
    let m = nowDate.getMinutes()
    let s = nowDate.getSeconds()

    sec.textContent = (s < 10) ? `0${s}` : `${s}`
    mint.textContent = (m < 10) ? `0${m}` : `${m}`
    hrs.textContent = (h < 10) ? `0${h}` : `${h}`

    date.textContent = nowDate.toDateString()
    sec.textContent
}, 1000)