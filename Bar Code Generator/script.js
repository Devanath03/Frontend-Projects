let userInput = document.querySelector('.container .userInput');
let generateBtn = document.querySelector('.container .generate-btn');
let barcode = document.querySelector('.container .barcode-box #barcode');
let container = document.querySelector('.container');

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
})