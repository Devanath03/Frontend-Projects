let userInput = document.querySelector('.container .userInput');
let generateBtn = document.querySelector('.container .generate-btn');
let barcode = document.querySelector('.container .barcode-box #barcode');
let container = document.querySelector('.container');
let downloadBtn = document.querySelector('.download-btn');

let generateBarcode = () => {
        container.classList.add('active');
        setTimeout(() => {
                JsBarcode("#barcode", userInput.value, {
                        background: "white",
                        lineColor: "black",
                });
        }, 200)
}

generateBtn.addEventListener('click', () => {
        if (userInput.value != '') {
                generateBarcode();
        }
});

downloadBtn.addEventListener('click', () => {
        console.log(userInput.value);
        const imgURL = barcode.src;
        fetch(imgURL)
            .then(response => response.blob())
            .then(blob => {
                const download_link = document.createElement("a");
                download_link.href = URL.createObjectURL(blob);
                download_link.download = "barcode.png";
                download_link.click();
                URL.revokeObjectURL(download_link.href);
            });
});