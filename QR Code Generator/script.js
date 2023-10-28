const container = document.querySelector(".container"),
      qrInput = document.querySelector(".form input"),
      generateQR = document.querySelector(".form button"),
      qrImg = document.querySelector(".qrCode img"),
      download  = document.querySelector(".download button");

generateQR.addEventListener("click", () => {
    qrValue = qrInput.value;
    console.log(qrValue);

    if(!qrValue) return;

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        generateQR.innerText = "QR Generated";
    })
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        container.classList.remove("active");
        generateQR.innerText = "Generate QR";
    }
});

download.addEventListener("click", () => {
    console.log("Invoked");
    const imgURL = qrImg.src;
    fetch(imgURL)
        .then(response => response.blob())
        .then(blob => {
            const download_link = document.createElement("a");
            download_link.href = URL.createObjectURL(blob);
            download_link.download = "qrcode.png";
            download_link.click();
            URL.revokeObjectURL(download_link.href);
        });
});






