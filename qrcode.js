let qr;
let generateBtn = document.querySelector(".qr-btn")
let qrModel = document.querySelector(".qrcode-model")
let content = document.querySelector(".qrcode-text")
let qrCloseBtn = document.querySelector(".qr-close")

generateBtn.addEventListener("click", function () {
    let text = document.querySelector(".qr-text")
    let qrcontainer = document.querySelector(".qrcode")

    if(text.value === ""){
        alert("enter something")
        return
    }

    qrcontainer.innerHTML = ""

    qrModel.style.display = "flex"
    content.textContent = text.value

    qr = new QRCode(qrcontainer, {
        text: text.value,
        width: 200,
        height: 200
    } )
    text.value = ""
})


qrCloseBtn.addEventListener("click", function () {
    qrModel.style.display = "none"
})



























// let qr;
// let btn = document.querySelector(".qr-btn")
// let container2 = document.querySelector(".qrcode-model")
// let content = document.querySelector(".qrcode-text") 
// let closeBtn = document.querySelector(".qr-close")

// function generateQr() {
//     let text = document.querySelector(".qr-text");
//     let qrContainer = document.querySelector(".qrcode")
//     if(text === ""){
//         alert("Enter something ......")
//         return
//     }
//     container2.style.display = "flex"
//     content.textContent = text.value
    
//     qrContainer.innerHTML = ""

//     qr = new QRCode(qrContainer, {
//         text: text.value,
//         width: 250,
//         height: 250,
//     } )

//     text.value = "";

// }

// closeBtn.addEventListener("click" , function () {
//     container2.style.display = "none"
// })


// btn.addEventListener("click", generateQr)