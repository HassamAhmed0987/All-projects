let stopwatchHrs = document.querySelector(".hour")
let stopwatchMints = document.querySelector(".mint")
let stopwatchSec = document.querySelector(".sec")
let stopwatchMillisec = document.querySelector(".sec")


let sHrs = 0
let sMints = 0
let sSec = 0
let sMs = 0


let startBtn = document.querySelector(".start")
let stopBtn = document.querySelector(".stop")
let resetBtn = document.querySelector(".stop")

let interval = null;

startBtn.addEventListener("click", function () {
    if (interval !== null) {
        clearInterval(interval)
    }


    interval = setInterval(function () {
        sMs++
        if (sMs == 100) {
            sMs = 0
            sSec++
        }
        if (sSec == 60) {
            sSec = 0
            sMints++
        }
        if (sMints == 60) {
            sMints = 0
            sHrs++
        }
        if (sHrs == 24) {
            sHrs = 0
        }

        stopwatchMillisec.textContent = (sMs < 10) ? `0${sMs}` : `${sMs}`
        stopwatchSec.textContent = (sSec < 10) ? `0${sSec}` : `${sSec}`
        stopwatchMints.textContent = (sMints < 10) ? `0${sMints}` : `${sMints}`
        stopwatchHrs.textContent = (sHrs < 10) ? `0${sHrs}` : `${sHrs}`
    }, 10)


})


stopBtn.addEventListener("click", function () {
    clearInterval(interval)
})


resetBtn.addEventListener("click", function () {
    sHrs = 0
    sMints = 0
    sSec = 0
    sMs = 0


    stopwatchMillisec.textContent = "00"
    stopwatchSec.textContent = "00"
    stopwatchMints.textContent = "00"
    stopwatchHrs.textContent = "00"

})